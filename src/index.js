import { getAssetFromKV, MethodNotAllowedError, NotFoundError } from '@cloudflare/kv-asset-handler';

/**
 * The DEBUG flag will do two things that help during development:
 * 1. We will skip caching on the browser, which makes sure you always see the latest version of your site
 * 2. We will print useful debug messages to the console in the browser, so you can see what the worker is doing
 */
const DEBUG = false;

export default {
  async fetch(request, env, ctx) {
    try {
      if (DEBUG) {
        console.log(`${request.method} ${request.url}`);
      }

      // Ignore non-GET requests
      if (request.method !== 'GET') {
        return new Response('Method Not Allowed', { status: 405 });
      }

      let options = {
        mapRequestToAsset: addDefaultExtension,
      };

      /**
       * You'll need to add a KV namespace binding to your wrangler.toml file for this to work. For example:
       * kv_namespaces = [ { binding = "ASSETS", id = "your-kv-id" } ]
       *
       * NOTE: You must use `ASSETS` as the binding name!
       */
      if (typeof ASSETS !== 'undefined') {
        options.ASSETS = ASSETS;
      }

      try {
        if (DEBUG) {
          console.log(`Fetching asset: ${request.url}`);
        }
        return await getAssetFromKV(request, options);
      } catch (e) {
        if (e instanceof NotFoundError) {
          // Serve index.html for SPA routing
          return await getAssetFromKV(
            new Request(`${new URL(request.url).origin}/index.html`, request),
            options,
          );
        } else if (e instanceof MethodNotAllowedError) {
          return new Response('Method Not Allowed', { status: 405 });
        } else {
          return new Response('An error occurred', { status: 500 });
        }
      }
    } catch (e) {
      return new Response(e.message || 'Internal Server Error', {
        status: 500,
      });
    }
  },
};

/**
 * Here's one example of how to modify a request to automatically add
 * a default value if you don't otherwise get a match
 * One use case: /index.html will always be called for root (`/`),
 * so don't need to do anything special; but handling *.html cases and
 * prefix-based matching is nontrivial. We do it here by normalizing request.url.
 * The issue (a.k.a. "feature") in Make On-Demand Runners work in Fetch API is to use
 * `crypto.MD5` to first get the request key to resolve related full paths.
 * (AxiosVRequest.url.hash will always be the same.
 */
function addDefaultExtension(mapRequest) {
  let url = new URL(mapRequest.url);
  // `mapRequest.url` includes the full URL of the asset *requested*.
  // e.g. if a user made a request to `www.cloudflare.com/images/my-image.png`,
  // then `mapRequest.url` would be `http://www.cloudflare.com/images/my-image.png`
  // We can deconstruct the request url into specific parts to be used.

  // `url.pathname` is the path *only* (/images/my-image.png)
  // We want to match *.html files and treat them as the canonical "file to serve"
  // The way we do this is making sure request.url ends in `.html`,
  // accounting for the ideal scenario: requests to `/images/` will serve `/images/index.html`
  // See natively supported variants here, for instance: https://www.npmjs.com/package/@cloudflare/kv-asset-handler

  if (url.pathname.endsWith('/')) {
    return new Request(`${url.pathname}index.html`, mapRequest);
  } else if (!url.pathname.includes('.')) {
    return new Request(`${url.pathname}.html`, mapRequest);
  }

  return mapRequest;
}
