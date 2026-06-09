import { ThemeProvider } from "./hooks/useTheme";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Founders } from "./components/Founders";
import { Services } from "./components/Services";
import { Branches } from "./components/Branches";
import { Gallery } from "./components/Gallery";
import { Partners } from "./components/Partners";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <ThemeProvider>
      <div style={{ overflowX: "hidden" }}>
        <Navbar />
        <Hero />
        <About />
        <Founders />
        <Services />
        <Branches />
        <Gallery />
        <Partners />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}
