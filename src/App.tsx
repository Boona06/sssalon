import { Navbar } from "./components/Navbar";
import { Hero } from "./components/sections/Hero";
import { Services } from "./components/sections/Services";
import { About, Contact } from "./components/sections/Info";

function App() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>
      <footer className="py-6 border-t text-center text-sm text-muted-foreground bg-white">
        © {new Date().getFullYear()} SS SALON. Бүх эрх хуулиар хамгаалагдсан.
      </footer>
    </div>
  );
}

export default App;
