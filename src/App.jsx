import { Navbar, Hero, Features, About, Footer } from './components';

const App = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans overflow-x-hidden selection:bg-[#00E676] selection:text-black">
      <Navbar />
      <Hero />
      <Features />
      <About />
      <Footer />
    </div>
  );
};

export default App;
