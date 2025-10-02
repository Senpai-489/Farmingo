import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { Leaf, Menu, X, Droplets, BrainCircuit, BarChart3, ShieldCheck, FlaskConical, Bot, TrendingUp, AlertTriangle } from 'lucide-react';

// Main App Component - The entire landing page is encapsulated here
export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [visibleSections, setVisibleSections] = useState({});

  // Effect for scroll-based animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => ({ ...prev, [entry.target.id]: true }));
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 } // Trigger a bit earlier
    );

    document.querySelectorAll('.animate-section').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  // Helper function for smooth scrolling
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuОpen(false);
  };
  
  const navigate = useNavigate();

  const navLinks = [
    { id: 'home', title: 'Home' },
    { id: 'about', title: 'About' },
    { id: 'features', title: 'Features' },
    { id: 'why-us', title: 'Why Us?' },
    { id: 'contact', title: 'Contact' },
  ];

  // Reusable Neo-Brutalist Button Component
  const NeoButton = ({ children, onClick, className = '' }) => (
    <button
      onClick={onClick}
      className={`font-heading text-lg bg-yellow-300 text-black font-bold py-3 px-10 border-2 border-black rounded-md shadow-[4px_4px_0px_#000] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all duration-200 ${className}`}
    >
      {children}
    </button>
  );

  return (
    <div className="bg-[#F4F1EA] font-body text-black overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-[#F4F1EA] z-50 border-b-4 border-black">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-4xl font-bold font-heading text-green-700">
            Farmingo
          </h1>
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="font-heading text-lg hover:text-green-700 transition-colors duration-200"
              >
                {link.title}
              </button>
            ))}
          </nav>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden z-50 text-black"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </header>
      
      {/* Mobile Menu */}
      <div className={`fixed top-0 left-0 w-full h-full bg-yellow-300/95 backdrop-blur-sm z-40 transition-transform duration-300 ease-in-out transform ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'} md:hidden`}>
          <nav className="flex flex-col items-center justify-center h-full space-y-8">
             {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="font-heading text-4xl font-bold text-black hover:text-white transition-colors duration-300"
              >
                {link.title}
              </button>
            ))}
          </nav>
      </div>

      <main>
        {/* Hero Section */}
        <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-12 bg-green-200 border-b-4 border-black">
           <div className="container mx-auto px-6 text-center">
              <div className="bg-[#F4F1EA] border-4 border-black rounded-xl p-8 md:p-12 shadow-[10px_10px_0px_#000]">
                <h2 className="text-5xl md:text-7xl font-bold font-heading leading-tight mb-4">
                  Intelligent Farming for a Modern World
                </h2>
                <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-body">
                  Empowering farmers with actionable data-driven insights for water management, crop health, and yield optimization.
                </p>
                <NeoButton onClick={() => {
            navigate("/auth");
        }}>
                  Discover Our Platform
                </NeoButton>
              </div>
           </div>
        </section>

        {/* About Us Section */}
        <section id="about" className="py-24 bg-white animate-section border-b-4 border-black">
          <div className={`container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center transition-all duration-700 ${visibleSections.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="transform transition-transform duration-500 ease-out">
              <img src="../src/assets/agron_img.png" alt="Agronomist with a laptop inspecting crops in a field" className="rounded-xl shadow-[8px_8px_0px_#000] w-[40vw] h-auto object-cover border-4 border-black" />
            </div>
            <div>
              <span className="font-heading text-green-700 font-semibold bg-green-200 py-1 px-3 rounded-md border-2 border-black">Our Mission</span>
              <h3 className="font-heading text-5xl font-bold my-4">Bridging Data and the Field</h3>
              <p className="text-lg text-gray-800 mb-6 leading-relaxed font-body">
                Farmingo was founded to revolutionize agriculture through technology. We integrate satellite imagery, advanced machine learning models, and intuitive visualization tools to translate complex data into simple, actionable insights.
              </p>
              <NeoButton onClick={() => scrollToSection('contact')}>
                Request a Demo
              </NeoButton>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-24 bg-cream-50 animate-section border-b-4 border-black">
          <div className={`container mx-auto px-6 transition-all duration-700 ${visibleSections.features ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center mb-12">
              <h3 className="font-heading text-5xl font-bold mb-4 mt-2">Core Features</h3>
              <p className="text-lg text-gray-800 max-w-2xl mx-auto font-body">
                A suite of powerful tools designed to give you complete control over your farm.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {platformFeatures.map((feature, index) => (
                <div 
                  key={feature.name} 
                  className="bg-white border-2 border-black rounded-xl p-6 shadow-[6px_6px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_rgba(45,212,191,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all flex flex-col"
                  style={{ transitionDelay: `${index * 100}ms`}}
                >
                  <div className="flex-grow">
                     <div className="inline-block p-3 bg-green-200 rounded-lg mb-4 border-2 border-black">
                       <feature.icon className="text-black" size={32} />
                     </div>
                     <h4 className="font-heading text-2xl font-bold mb-2">{feature.name}</h4>
                    <p className="font-body text-gray-800 mb-4">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Us Section */}
        <section id="why-us" className="py-24 bg-white animate-section border-b-4 border-black">
          <div className={`container mx-auto px-6 transition-all duration-700 ${visibleSections['why-us'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center mb-12">
               <h3 className="font-heading text-5xl font-bold mb-4 mt-2">The Farmingo Difference</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-10 text-center">
              {advantages.map((advantage, index) => (
                 <div 
                  key={advantage.title} 
                  className="p-8 transform transition-all duration-500"
                  style={{ transitionDelay: `${index * 150}ms`}}
                 >
                  <div className="inline-block p-5 bg-yellow-300 rounded-full mb-5 border-2 border-black">
                    <advantage.icon className="text-black" size={40} />
                  </div>
                  <h4 className="font-heading text-2xl font-bold mb-2">{advantage.title}</h4>
                  <p className="font-body text-gray-800">{advantage.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-cream-50 animate-section">
          <div className={`container mx-auto px-6 max-w-3xl transition-all duration-700 ${visibleSections.contact ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
             <div className="text-center mb-12">
              <h3 className="font-heading text-5xl font-bold mb-4 mt-2">Unlock Your Farm's Potential</h3>
              <p className="text-lg text-gray-800 max-w-2xl mx-auto font-body">
                Contact us today for a personalized demo and learn how Farmingo can transform your agricultural operations.
              </p>
            </div>
            <form className="space-y-6 bg-white border-2 border-black rounded-xl p-8 shadow-[8px_8px_0px_#000]">
              <div className="grid sm:grid-cols-2 gap-6">
                <input type="text" placeholder="Your Name" className="font-body w-full p-3 bg-transparent border-2 border-black rounded-md focus:outline-none focus:ring-4 focus:ring-yellow-300 transition-all" />
                <input type="email" placeholder="Your Email" className="font-body w-full p-3 bg-transparent border-2 border-black rounded-md focus:outline-none focus:ring-4 focus:ring-yellow-300 transition-all" />
              </div>
              <textarea placeholder="Your Message (e.g., farm size, primary crops)" rows="5" className="font-body w-full p-3 bg-transparent border-2 border-black rounded-md focus:outline-none focus:ring-4 focus:ring-yellow-300 transition-all"></textarea>
              <div className="text-center">
                <NeoButton type="submit">
                    Request a Demo
                </NeoButton>
              </div>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-green-700 text-white py-16 border-t-4 border-black">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 text-center md:text-left">
            {/* Column 1: Brand */}
            <div>
              <h4 className="font-heading text-4xl font-bold mb-2">Farmingo</h4>
              <p className="font-body mb-6">Data-Driven Agriculture.</p>
              <div className="flex justify-center md:justify-start space-x-4 font-heading">
                <a href="#" className="hover:text-yellow-300 transition-colors">LinkedIn</a>
                <a href="#" className="hover:text-yellow-300 transition-colors">Facebook</a>
                <a href="#" className="hover:text-yellow-300 transition-colors">Twitter</a>
              </div>
            </div>
            {/* Column 2: Quick Links */}
            <div>
              <h5 className="font-heading text-2xl font-bold mb-4">Quick Links</h5>
              <ul className="space-y-2 font-body">
                <li><a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }} className="hover:text-yellow-300 transition-colors">Home</a></li>
                <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }} className="hover:text-yellow-300 transition-colors">About</a></li>
                <li><a href="#features" onClick={(e) => { e.preventDefault(); scrollToSection('features'); }} className="hover:text-yellow-300 transition-colors">Features</a></li>
                <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} className="hover:text-yellow-300 transition-colors">Contact</a></li>
              </ul>
            </div>
            {/* Column 3: Newsletter */}
            <div>
              <h5 className="font-heading text-2xl font-bold mb-4">Stay Updated</h5>
              <p className="font-body mb-4">Get the latest insights on Ag-Tech.</p>
              <form className="flex flex-col sm:flex-row gap-2">
                <input 
                  type="email" 
                  placeholder="your.email@example.com" 
                  className="font-body w-full flex-grow p-3 text-black border-2 border-black rounded-md focus:outline-none focus:ring-4 focus:ring-yellow-300 transition-all"
                />
                <button 
                  type="submit"
                  className="font-heading text-md bg-yellow-300 text-black font-bold py-3 px-6 border-2 border-black rounded-md shadow-[4px_4px_0px_#000] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all duration-200"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t-2 border-green-600 text-center">
            <p className="text-green-200 text-sm font-body">&copy; {new Date().getFullYear()} Farmingo. All Rights Reserved.</p>
          </div>
        </div>
      </footer>

      {/* Custom Styles and Fonts */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;700&family=Work+Sans:wght@400;600&display=swap');
        
        .font-heading { 
          font-family: 'Space Grotesk', sans-serif;
        }
        .font-body { 
          font-family: 'Work Sans', sans-serif; 
        }
        .bg-cream-50 {
          background-color: #F4F1EA;
        }
      `}</style>
    </div>
  );
}

// Data for Platform Features
const platformFeatures = [
  { name: 'Intelligent Irrigation', icon: Droplets, description: 'Optimize water usage with real-time data on weather, soil moisture, and evapotranspiration for intelligent scheduling.' },
  { name: 'Crop Disease Prediction', icon: ShieldCheck, description: 'Utilize Convolutional Neural Networks (CNN) to analyze crop imagery and predict diseases before they spread.' },
  { name: 'Yield Analysis', icon: BarChart3, description: 'Track and analyze historical data to identify trends, forecast harvests, and make decisions that maximize your yield.' },
  { name: 'Risk Monitoring', icon: AlertTriangle, description: 'Monitor GRACE data to predict groundwater levels and receive early warnings for potential flood or drought risks.' },
  { name: 'Pesticide Suggestions', icon: FlaskConical, description: 'Receive smart recommendations for effective and sustainable pesticide use based on crop, soil, and pest conditions.' },
  { name: 'AI Chatbot Assistant', icon: Bot, description: 'Get instant answers to your farming questions with our user-friendly AI chatbot, available 24/7 to assist you.' },
];

// Data for Advantages (Why Us Section)
const advantages = [
  { icon: BrainCircuit, title: 'Data-Driven Decisions', description: 'Transform guesswork into strategy. Leverage big data and AI to make informed decisions for your entire operation.' },
  { icon: TrendingUp, title: 'Maximize Profitability', description: 'Increase yields, reduce resource waste, and lower risks to significantly improve your bottom line.' },
  { icon: Leaf, title: 'Promote Sustainability', description: 'Farm smarter, not harder. Our tools help you conserve water and use resources efficiently for a healthier planet.' },
];


