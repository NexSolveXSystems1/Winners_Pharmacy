/**
 * Simple Cloudflare Worker to serve your site files from the dist directory
 */
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    let pathname = url.pathname;

    // Default to index.html for root path
    if (pathname === "/" || pathname === "") {
      pathname = "/index.html";
    }

    try {
      // Try to fetch the requested asset
      const response = await env.ASSETS.fetch(
        new Request(url.origin + pathname, request),
      );

      // If asset not found (404), serve index.html for SPA routing
      if (response.status === 404) {
        return await env.ASSETS.fetch(
          new Request(url.origin + "/index.html", request),
        );
      }

      return response;
    } catch (error) {
      console.error("Error serving asset:", error);
      // Fallback to index.html on error
      try {
        return await env.ASSETS.fetch(
          new Request(url.origin + "/index.html", request),
        );
      } catch {
        return new Response("Error loading site", { status: 500 });
      }
    }
  },
};
