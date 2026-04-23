import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Masthead } from "./components/Masthead";
import { Nav } from "./components/Nav";
import { Projects } from "./components/Projects";
import { Work } from "./components/Work";
import { Writing } from "./components/Writing";
import { useTheme } from "./hooks/useTheme";

function App() {
  const { theme, toggle } = useTheme();

  return (
    <>
      <Nav theme={theme} onToggle={toggle} />
      <main>
        <Masthead />
        <Work />
        <Writing />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
