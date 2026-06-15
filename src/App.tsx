import Navbar     from "./components/Navbar";
import Hero       from "./components/Hero";
import About      from "./components/About";
import Services   from "./components/Services";
import Work       from "./components/Work";
import Experience from "./components/Experience";
import Impact     from "./components/Impact";
import Contact    from "./components/Contact";
import Footer     from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Work />
        <Experience />
        <Impact />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
