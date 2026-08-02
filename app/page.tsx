"use client";

// @ts-nocheck
/* eslint-disable */

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const bgImages = [
  "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1920&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=1920&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1611016186353-9af58c69a533?q=80&w=1920&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1541457524036-79178396c21e?q=80&w=1920&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=1920&auto=format&fit=crop"
];

export default function Home() {
  const [currentBg, setCurrentBg] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Mobile Menu State

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % bgImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const [faqChat, setFaqChat] = useState([
    { type: 'bot', text: "Hello! Welcome to Dr. Light Recovery FAQ. Please click any question below to get an instant answer:" }
  ]);

  const faqList = [
    { q: "How fast can you reach my location?", a: "We operate 24/7 across Dubai and aim to reach any location within 30 to 45 minutes depending on traffic." },
    { q: "Is my sports car safe during towing?", a: "Absolutely. We use highly specialized zero-angle flatbed trucks designed specifically for low-clearance luxury and sports cars to ensure zero damage." },
    { q: "Do you provide off-road assistance?", a: "Yes! We have specialized 4x4 off-road vehicles ready to provide winching and rescue assistance if your SUV gets stuck in the sand dunes." }
  ];

  const handleFaqClick = (faq: { q: string; a: string }) => {
    setFaqChat(prev => [
      ...prev, 
      { type: 'user', text: faq.q },
      { type: 'bot', text: faq.a }
    ]);
  };

  const chatEndRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (faqChat.length > 1) { 
      chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [faqChat]);

  const heavyFadeInUp: any = {
    hidden: { opacity: 0, y: 100, scale: 0.8 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", bounce: 0.5, duration: 1.2 } }
  };

  const staggerContainer: any = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.4, delayChildren: 0.3 } }
  };

  const cardHoverEffect: any = {
    rest: { scale: 1, rotate: 0, boxShadow: "0px 0px 0px rgba(0,0,0,0)" },
    hover: { scale: 1.05, rotate: 2, boxShadow: "0px 20px 40px rgba(234,179,8,0.3)", transition: { type: "spring", bounce: 0.6 } }
  };

  return (
    <main className="min-h-screen bg-black text-white font-sans overflow-x-hidden relative scroll-smooth">
      
      {/* HEADER */}
      <motion.header 
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", bounce: 0.4, duration: 1 }}
        className="fixed top-0 left-0 w-full z-50 px-6 py-6 md:px-12 flex justify-between items-center bg-gradient-to-b from-black/95 via-black/80 to-transparent backdrop-blur-md"
      >
        <motion.div 
          whileHover={{ scale: 1.1, rotate: -2 }}
          className="text-2xl md:text-3xl font-extrabold tracking-widest text-white shadow-black drop-shadow-2xl flex items-center gap-2 cursor-pointer transition-transform duration-300"
        >
          DR. LIGHT <span className="text-yellow-500">RECOVERY</span>
        </motion.div>
        
        {/* DESKTOP NAVIGATION */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-bold tracking-wide">
          <a href="#home" className="hover:text-yellow-500 hover:scale-110 transition-all duration-300">HOME / DASHBOARD</a>
          <a href="#services" className="hover:text-yellow-500 hover:scale-110 transition-all duration-300">OUR SERVICES</a>
          <a href="#faq" className="hover:text-yellow-500 hover:scale-110 transition-all duration-300">FAQ / CHAT</a>
          <a href="#contact" className="hover:text-yellow-500 hover:scale-110 transition-all duration-300">CONTACT US</a>
        </nav>

        {/* DESKTOP CALL BUTTON */}
        <div className="hidden lg:flex items-center gap-4">
          <motion.a 
            whileHover={{ scale: 1.15, boxShadow: "0px 0px 25px rgba(234,179,8,0.8)" }}
            whileTap={{ scale: 0.9 }}
            href="tel:+971528787066" 
            className="flex items-center gap-2 px-6 py-2 bg-yellow-500 text-black font-extrabold rounded-full transition shadow-[0_0_15px_rgba(234,179,8,0.5)]"
          >
            📞 052 878 7066
          </motion.a>
        </div>

        {/* MOBILE MENU HAMBURGER BUTTON */}
        <button 
          className="lg:hidden text-white hover:text-yellow-500 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-8 h-8">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
            )}
          </svg>
        </button>
      </motion.header>

      {/* MOBILE MENU DROPDOWN */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="fixed top-[88px] left-0 w-full bg-black/95 border-b-2 border-yellow-500 z-40 flex flex-col items-center py-8 gap-6 backdrop-blur-lg lg:hidden"
          >
            <a href="#home" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold hover:text-yellow-500 transition-colors">HOME / DASHBOARD</a>
            <a href="#services" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold hover:text-yellow-500 transition-colors">OUR SERVICES</a>
            <a href="#faq" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold hover:text-yellow-500 transition-colors">FAQ / CHAT</a>
            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold hover:text-yellow-500 transition-colors">CONTACT US</a>
            <a href="tel:+971528787066" className="mt-4 px-8 py-3 bg-yellow-500 text-black font-extrabold rounded-full shadow-[0_0_15px_rgba(234,179,8,0.5)]">📞 052 878 7066</a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO SECTION */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentBg}
            initial={{ opacity: 0, scale: 1.3, rotate: -3 }}
            animate={{ opacity: 0.5, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 1.2, rotate: 3 }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${bgImages[currentBg]}')` }}
          />
        </AnimatePresence>
        
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/60 to-black opacity-100"></div>

        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-20"
        >
          <motion.h1 variants={heavyFadeInUp} className="text-5xl sm:text-6xl md:text-8xl font-extrabold text-white mb-6 leading-tight tracking-wide drop-shadow-2xl uppercase">
            Fast &amp; Reliable <br />
            <span className="text-yellow-500 drop-shadow-[0_0_20px_rgba(234,179,8,0.5)]">Towing Dubai</span>
          </motion.h1>
          <motion.p variants={heavyFadeInUp} className="text-lg md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto font-medium drop-shadow-md">
            Your 24/7 lifeline on the road. From general towing to VIP sports car recovery, we ensure safe arrival anywhere in UAE.
          </motion.p>
          <motion.div variants={heavyFadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <motion.a 
              whileHover={{ scale: 1.15, boxShadow: "0px 0px 30px rgba(234,179,8,0.8)" }}
              whileTap={{ scale: 0.9 }}
              href="tel:+971528787066" 
              className="w-full sm:w-auto px-10 py-5 bg-yellow-500 text-black font-extrabold text-xl rounded-xl shadow-[0_0_20px_rgba(234,179,8,0.5)]"
            >
              📞 Call Now: 052 878 7066
            </motion.a>
          </motion.div>
        </motion.div>
      </section>

      {/* PROMO VIDEO */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={heavyFadeInUp}
        className="py-20 px-6 bg-neutral-900 border-t border-neutral-800 text-center"
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">See Our <span className="text-yellow-500">Fleet in Action</span></h2>
          <motion.div 
            whileHover={{ scale: 1.02, boxShadow: "0px 0px 40px rgba(234,179,8,0.4)" }}
            className="relative w-full aspect-video bg-black rounded-3xl overflow-hidden border-2 border-yellow-500 shadow-2xl flex items-center justify-center mt-12 transition-all duration-500"
          >
            <video className="w-full h-full object-cover" controls autoPlay loop muted playsInline>
              <source src="/my-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </motion.div>
        </div>
      </motion.section>

      {/* OUR SERVICES */}
      <section id="services" className="bg-black pt-10 overflow-hidden">
        
        {/* Service 1 */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={heavyFadeInUp} className="py-20 px-6 border-b border-neutral-900">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={cardHoverEffect} initial="rest" whileHover="hover" className="relative h-[300px] md:h-[450px] w-full rounded-3xl overflow-hidden border-2 border-neutral-800 bg-neutral-900 cursor-pointer">
              <img src="/branded-truck.png" alt="General Car Towing" className="absolute inset-0 w-full h-full object-cover" />
            </motion.div>
            <div>
              <h2 className="text-4xl md:text-6xl font-bold mb-6">General <span className="text-yellow-500">Car Towing</span></h2>
              <p className="text-gray-400 text-lg md:text-xl mb-8 leading-relaxed">
                No matter where you are in Dubai, our professional branded white flatbed tow trucks are ready. We ensure safe, scratch-free transportation of your everyday vehicles.
              </p>
              <motion.a 
                whileHover={{ scale: 1.1, x: 10 }} 
                href="tel:+971528787066" 
                className="inline-block px-8 py-4 bg-white text-black font-extrabold rounded-lg hover:bg-gray-200 transition shadow-xl"
              >
                📞 Request Tow Truck
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Service 2 */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={heavyFadeInUp} className="py-20 px-6 bg-neutral-950 border-b border-neutral-900">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl md:text-6xl font-bold mb-6">VIP &amp; <span className="text-yellow-500">Luxury Car Towing</span></h2>
              <p className="text-gray-400 text-lg md:text-xl mb-8 leading-relaxed">
                Low-clearance supercars and luxury vehicles require specialized zero-angle hydraulic flatbeds. We guarantee premium, highly secure handling.
              </p>
              <motion.a 
                whileHover={{ scale: 1.1, x: 10 }}
                href="tel:+971528787066" 
                className="inline-block px-8 py-4 bg-yellow-500 text-black font-extrabold rounded-lg hover:bg-yellow-400 transition shadow-[0_0_20px_rgba(234,179,8,0.5)]"
              >
                📞 Call VIP Team
              </motion.a>
            </div>
            <motion.div variants={cardHoverEffect} initial="rest" whileHover="hover" className="order-1 lg:order-2 relative h-[300px] md:h-[450px] w-full rounded-3xl overflow-hidden border-2 border-neutral-800 bg-neutral-900 cursor-pointer">
              <img src="/sports-car.png" alt="VIP Sports Car Towing" className="absolute inset-0 w-full h-full object-cover" />
            </motion.div>
          </div>
        </motion.div>

        {/* Service 3 (Updated to Off-Road Assistance) */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={heavyFadeInUp} className="py-20 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={cardHoverEffect} initial="rest" whileHover="hover" className="relative h-[300px] md:h-[450px] w-full rounded-3xl overflow-hidden border-2 border-neutral-800 bg-neutral-900 cursor-pointer">
              <img src="/desert-recovery.png" alt="Off-Road Assistance" className="absolute inset-0 w-full h-full object-cover" />
            </motion.div>
            <div>
              <h2 className="text-4xl md:text-6xl font-bold mb-6">Off-Road <span className="text-yellow-500">Assistance</span></h2>
              <p className="text-gray-400 text-lg md:text-xl mb-8 leading-relaxed">
                Stuck in the deep sand dunes or facing off-road troubles? Our specialized 4x4 assistance vehicles and expert winching team are ready to rescue your SUV and get you back on track safely.
              </p>
              <motion.a 
                whileHover={{ scale: 1.1, x: 10 }}
                href="https://wa.me/971528787066" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 bg-green-500 text-white font-extrabold rounded-lg hover:bg-green-400 transition shadow-[0_0_20px_rgba(34,197,94,0.5)]"
              >
                💬 Send GPS Pin
              </motion.a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* INTERACTIVE FAQ CHATBOT SECTION */}
      <motion.section id="faq" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={heavyFadeInUp} className="py-24 px-6 bg-neutral-900 border-t border-neutral-800">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-center drop-shadow-xl">Have Questions? <span className="text-yellow-500">Ask Us</span></h2>
          <p className="text-gray-400 text-lg text-center mb-12">Click on any question below to get instant answers from our FAQ bot.</p>
          
          <motion.div 
            whileHover={{ boxShadow: "0px 0px 50px rgba(0,0,0,0.9)" }}
            className="bg-black border-2 border-neutral-800 rounded-3xl overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.8)] flex flex-col h-[550px] transition-shadow duration-500"
          >
            <div className="flex-1 p-6 overflow-y-auto space-y-6">
              <AnimatePresence>
                {faqChat.map((msg, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: msg.type === 'user' ? 50 : -50, scale: 0.5 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ type: "spring", bounce: 0.6, duration: 0.8 }}
                    className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`max-w-[85%] p-4 md:p-5 rounded-3xl text-sm md:text-lg shadow-2xl ${msg.type === 'user' ? 'bg-yellow-500 text-black rounded-br-none font-bold' : 'bg-neutral-800 text-white rounded-bl-none font-medium'}`}>
                      {msg.text}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
              <div ref={chatEndRef} />
            </div>

            <div className="p-4 md:p-5 bg-neutral-950 border-t-2 border-neutral-800 flex flex-wrap gap-3 justify-center">
              {faqList.map((faq, idx) => (
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  key={idx}
                  onClick={() => handleFaqClick(faq)}
                  className="bg-neutral-800 hover:bg-yellow-500 hover:text-black text-gray-300 text-xs md:text-sm px-4 py-2 md:px-5 md:py-3 rounded-full transition-colors border border-neutral-700 font-bold shadow-lg"
                >
                  {faq.q}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* FOOTER */}
      <footer id="contact" className="bg-black pt-20 pb-28 border-t border-neutral-900">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Contact <span className="text-yellow-500">Dr. Light Recovery</span></h2>
          <p className="text-gray-400 text-lg mb-10">We are available 24/7 for all your emergency vehicle recovery needs in Dubai.</p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-16">
            <motion.a 
              whileHover={{ scale: 1.1, boxShadow: "0px 0px 20px rgba(234,179,8,0.5)" }}
              href="tel:+971528787066" 
              className="w-full sm:w-auto text-xl md:text-2xl font-extrabold bg-neutral-900 px-8 md:px-10 py-5 md:py-6 rounded-2xl border-2 border-neutral-800 hover:border-yellow-500 hover:text-yellow-500 transition shadow-2xl flex items-center justify-center gap-3"
            >
               📞 Call: 052 878 7066
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.1, boxShadow: "0px 0px 20px rgba(34,197,94,0.5)" }}
              href="https://wa.me/971528787066" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto text-xl md:text-2xl font-extrabold bg-neutral-900 px-8 md:px-10 py-5 md:py-6 rounded-2xl border-2 border-neutral-800 hover:border-green-500 hover:text-green-500 transition shadow-2xl flex items-center justify-center gap-3"
            >
               💬 WhatsApp Us
            </motion.a>
          </div>
          <p className="text-neutral-600 font-medium">© {new Date().getFullYear()} Dr. Light Recovery Services UAE. All rights reserved.</p>
        </div>
      </footer>

      {/* GLOBAL FLOATING ACTION BUTTONS */}
      <div className="fixed bottom-6 md:bottom-8 right-6 md:right-8 z-50 flex flex-col items-end gap-4 md:gap-6">
        
        <motion.a 
          initial={{ scale: 0, y: 100 }}
          animate={{ scale: 1, y: 0 }}
          transition={{ type: "spring", bounce: 0.6, duration: 1.5, delay: 1 }}
          href="https://wa.me/971528787066" 
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 md:w-16 md:h-16 bg-green-500 rounded-full flex items-center justify-center shadow-[0_0_25px_rgba(34,197,94,0.6)] hover:scale-125 transition-transform group relative"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" className="md:w-8 md:h-8" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
          <span className="hidden md:block absolute right-20 bg-black text-white text-base px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border-2 border-neutral-800 font-extrabold shadow-2xl">
            WhatsApp Us
          </span>
        </motion.a>

        <motion.a 
          initial={{ scale: 0, y: 100 }}
          animate={{ scale: 1, y: 0 }}
          transition={{ type: "spring", bounce: 0.6, duration: 1.5, delay: 1.2 }}
          href="tel:+971528787066" 
          className="w-16 h-16 md:w-20 md:h-20 bg-yellow-500 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(234,179,8,0.6)] hover:scale-125 transition-transform group relative"
        >
           <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" className="md:w-9 md:h-9" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
           <span className="hidden md:block absolute right-24 bg-black text-white text-base px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border-2 border-neutral-800 font-extrabold shadow-2xl">
            Call Us Now
          </span>
        </motion.a>
      </div>

    </main>
  );
}