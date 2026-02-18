"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Briefcase, Gavel, ArrowRight, CheckCircle, AlertTriangle, Menu, X, Phone, Mail, MapPin, CheckCircle2, ChevronDown } from 'lucide-react';

export default function LandingLaboral() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // --- CONFIGURACIÓN DE ANIMACIONES ---
  const slideInLeft: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
        opacity: 1, 
        x: 0, 
        transition: { duration: 0.8, ease: "easeOut" } 
    }
  };

  const slideInRight: Variants = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
        opacity: 1, 
        x: 0, 
        transition: { duration: 0.8, ease: "easeOut" } 
    }
  };

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
        opacity: 1, 
        y: 0, 
        transition: { duration: 0.6 } 
    }
  };

  const navLinks = [
    { name: "Inicio", href: "#inicio" },
    { name: "Servicios", href: "#servicios" },
    { name: "Nosotros", href: "#nosotros" },
    { name: "Contacto", href: "#contacto" },
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-white font-sans overflow-x-hidden selection:bg-yellow-500 selection:text-black scroll-smooth">
      
      {/* --- NAVBAR --- */}
      <nav className="fixed w-full z-50 bg-neutral-950/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#inicio" className="flex items-center gap-2 group cursor-pointer">
            <div className="p-2 bg-yellow-500 rounded-sm text-black group-hover:scale-110 transition-transform">
                <Gavel size={24} />
            </div>
            <span className="text-lg md:text-xl font-bold tracking-tighter uppercase">Defensa<span className="text-yellow-500">Laboral</span></span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-sm font-medium text-gray-300 hover:text-yellow-500 transition-colors uppercase tracking-wide"
              >
                {link.name}
              </a>
            ))}
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-5 py-2 bg-yellow-500 text-black font-bold text-sm rounded-sm hover:bg-yellow-400 transition-colors"
            >
              Llamar Ahora
            </motion.button>
          </div>

          <button 
            className="md:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden bg-neutral-900 border-b border-white/10 overflow-hidden"
            >
              <div className="flex flex-col p-6 space-y-4">
                {navLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-lg font-medium text-gray-300 hover:text-yellow-500"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* --- HERO SECTION --- */}
      <section id="inicio" className="relative min-h-screen flex items-center px-6 pt-28 md:pt-20 pb-12">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-yellow-500/5 to-transparent pointer-events-none"></div>
        
        {/* CORRECCIÓN MOBILE: grid-cols-1 para móviles, md:grid-cols-2 para desktop */}
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
          
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={slideInLeft}
            className="space-y-6 order-2 md:order-1" // Mobile: Texto abajo. Desktop: Texto izquierda.
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-500/10 border border-yellow-500/20 rounded-full text-yellow-500 text-xs md:text-sm font-bold uppercase tracking-widest">
              <AlertTriangle size={14} /> Especialistas en Despidos
            </div>
            <h1 className="text-4xl md:text-7xl font-black leading-tight">
              ¿Te despidieron <br/>
              <span className="text-transparent bg-clip-text bg-linear-to-r from-yellow-400 to-yellow-600">
                Injustamente?
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-md">
              No firmes nada sin hablar con nosotros. Recuperamos tu indemnización y hacemos valer tus años de esfuerzo.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#contacto" className="w-full md:w-auto">
                <motion.button 
                  whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(234, 179, 8, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-yellow-500 text-black font-black text-lg rounded-sm w-full md:w-auto"
                >
                  EVALUAR MI CASO
                </motion.button>
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial="hidden"
            animate="visible"
            variants={slideInRight}
            className="flex justify-center order-2 md:order-1" // Mobile: Imagen arriba. Desktop: Imagen derecha.
          >
            <div className="w-full h-75 md:h-125 bg-neutral-900 border border-neutral-800 rounded-2xl relative overflow-hidden shadow-2xl shadow-black/50 group">
              
              {/* --- IMAGEN HERO --- */}
              {/* Usa una imagen de prueba de Unsplash. Cuando tengas la tuya, pon src="/tu-foto.jpg" */}
              
              <img
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80" 
                alt="Defensa Legal"
                className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
              />
              
              <div className="absolute inset-0 bg-linear-to-t from-neutral-950/80 to-transparent pointer-events-none"></div>

              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-6 left-6 right-6 md:right-auto bg-neutral-950/80 border border-yellow-500/30 p-4 rounded-lg backdrop-blur-md shadow-lg"
              >
                <div className="flex items-center gap-3 mb-1">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                    <p className="text-[10px] text-gray-400 uppercase tracking-widest">Estado actual</p>
                </div>
                <p className="text-white font-bold text-sm md:text-base">Abogados Laborales Disponibles</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- SERVICIOS --- */}
      <section id="servicios" className="py-24 bg-neutral-950 relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Tus Derechos son <span className="text-yellow-500">Intransables</span></h2>
            <p className="text-gray-400">Nos especializamos en situaciones críticas.</p>
          </motion.div>

          {/* CORRECCIÓN MOBILE: grid-cols-1 para móviles */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Despido Injustificado", desc: "Si te echaron por 'Necesidades de la Empresa' pero contrataron a otro, es ilegal.", icon: <Briefcase /> },
              { title: "Autodespido", desc: "Si tu empleador no paga cotizaciones o te acosa, puedes autodespedirte y cobrar todo.", icon: <ArrowRight /> },
              { title: "Acoso Laboral", desc: "Protección inmediata contra el maltrato, menoscabo o persecución en el trabajo.", icon: <AlertTriangle /> },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                whileHover={{ y: -10, borderColor: "#EAB308", backgroundColor: "#171717" }}
                className="p-8 bg-neutral-900 border border-neutral-800 rounded-xl cursor-pointer transition-all duration-300 group shadow-lg"
              >
                <div className="w-14 h-14 bg-neutral-950 rounded-lg flex items-center justify-center text-yellow-500 mb-6 group-hover:bg-yellow-500 group-hover:text-black transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- NOSOTROS --- */}
      <section id="nosotros" className="py-24 bg-black overflow-hidden border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }}
            variants={slideInLeft}
            className="relative"
          >
            <div className="aspect-square bg-neutral-900 rounded-2xl border border-white/10 relative overflow-hidden flex flex-col items-center justify-center text-center p-8">
               <div className="text-yellow-500 text-6xl font-black mb-2">$0</div>
               <h3 className="text-2xl font-bold text-white">Costo Inicial</h3>
               <p className="text-gray-400 mt-4 max-w-xs">No pagues nada hasta que ganemos tu juicio y tengas el cheque en la mano (Cuota Litis).</p>
               <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-yellow-500 blur-[100px] opacity-20"></div>
            </div>
          </motion.div>

          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }}
            variants={slideInRight}
            className="space-y-8"
          >
            <h2 className="text-4xl font-bold leading-tight">Peleamos por cada peso que te deben</h2>
            <div className="space-y-6">
              <p className="text-gray-400 text-lg">
                Somos <b>Defensa Laboral Pro</b>. Un equipo de litigantes expertos con más de 10 años de experiencia en tribunales de todo el país.
              </p>
              
              {/* FOTOS DEL EQUIPO */}
              <div className="flex gap-4 items-center py-4">
                  <div className="flex -space-x-4">
                    {[
                      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100&q=80",
                      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&h=100&q=80",
                      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=100&h=100&q=80"
                    ].map((imgSrc, i) => (
                      <div key={i} className="relative w-12 h-12 rounded-full border border-white overflow-hidden shadow-sm bg-gray-100">
                        {/* CORRECCIÓN: 'border-1' no existe, cambiado a 'border' */}
                        <img 
                          src={imgSrc} 
                          alt={`Equipo ${i}`} 
                          className="object-cover w-full h-full" 
                        />
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col justify-center">
                    <span className="text-sm font-bold text-white">Equipo Experto</span>
                    <span className="text-xs text-yellow-500">Listos para ayudarte</span>
                  </div>
              </div>

              {/* --- IMAGEN DE OFICINA --- */}
              <div className="w-full h-64 bg-neutral-900 rounded-2xl border border-white/10 relative overflow-hidden group shadow-lg">
                {/* Imagen de prueba Unsplash. Cámbiala por src="/oficina.jpg" cuando subas tu archivo. */}
                

[Image of modern law office interior]

                <img 
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80" 
                    alt="Nuestras Oficinas"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
              </div>

            </div>
          </motion.div>

        </div>
      </section>

      {/* --- FORMULARIO DE CONTACTO --- */}
      <section id="contacto" className="py-24 bg-yellow-500 relative">
        <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-neutral-950 rounded-2xl overflow-hidden shadow-2xl">
                
                <div className="p-10 md:p-12 flex flex-col justify-between relative overflow-hidden">
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Comienza tu Defensa Hoy</h2>
                        <p className="text-gray-400 mb-10 text-lg">El tiempo corre en tu contra. Los plazos para demandar son cortos. Escríbenos ahora.</p>
                        
                        <div className="space-y-6 ">
                            <div className="flex items-center gap-4 text-white">
                                <div className="w-10 h-10 rounded-full bg-yellow-500/20 flex items-center justify-center text-yellow-500">
                                    <Phone size={20} />
                                </div>
                                <span className="text-lg font-medium">+56 9 9000 0000</span>
                            </div>
                            <div className="flex items-center gap-4 text-white">
                                <div className="w-10 h-10 rounded-full bg-yellow-500/20 flex items-center justify-center text-yellow-500">
                                    <Mail size={20} />
                                </div>
                                <span className="text-lg font-medium">contacto@defensalaboral.cl</span>
                            </div>
                            <div className="flex items-center gap-4 text-white">
                                <div className="w-10 h-10 rounded-full bg-yellow-500/20 flex items-center justify-center text-yellow-500">
                                    <MapPin size={20} />
                                </div>
                                <span className="text-lg font-medium">Calle Ley 123, Oficina 4</span>
                            </div>
                        </div>
                    </div>
                    <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500 rounded-full blur-[120px] opacity-10 pointer-events-none"></div>
                </div>

                <div className="p-10 md:p-12 bg-neutral-900">
                    <form className="space-y-6">
                        <div>
                            <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Nombre Completo</label>
                            <input type="text" className="w-full bg-neutral-800 border border-neutral-700 rounded-sm p-4 text-white focus:outline-none focus:border-yellow-500 transition-colors" placeholder="Juan Pérez" />
                        </div>
                        <div>
                            <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Teléfono / WhatsApp</label>
                            <input type="tel" className="w-full bg-neutral-800 border border-neutral-700 rounded-sm p-4 text-white focus:outline-none focus:border-yellow-500 transition-colors" placeholder="+56 9 8765 4321" />
                        </div>
                        <div>
                            <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Describe brevemente tu caso</label>
                            <textarea rows={4} className="w-full bg-neutral-800 border border-neutral-700 rounded-sm p-4 text-white focus:outline-none focus:border-yellow-500 transition-colors" placeholder="Me despidieron ayer sin aviso previo..."></textarea>
                        </div>
                        <motion.button 
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full bg-yellow-500 text-black font-bold uppercase tracking-widest py-4 rounded-sm hover:bg-yellow-400 transition-colors shadow-lg"
                        >
                            Enviar Consulta Gratuita
                        </motion.button>
                        <p className="text-center text-xs text-gray-500 mt-4">Tus datos son 100% confidenciales.</p>
                    </form>
                </div>

            </div>
        </div>
      </section>

      {/* --- SECCIÓN DE PAGOS DESTACADA --- */}
      <section className="py-24 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl md:text-5xl font-black mb-12 tracking-tight">Aceptamos Todo Medio de Pago</h3>
          
          <div className="inline-flex flex-wrap justify-center items-center gap-8 bg-white py-8 px-12 rounded-3xl shadow-2xl">
            <img 
              src="https://img.icons8.com/?size=100&id=13608&format=png&color=000000" 
              alt="Visa" 
              className="h-10 w-auto"
              loading="lazy"
            />
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" 
              alt="Mastercard" 
              className="h-10 w-auto"
              loading="lazy"
            />
            <img 
              src="https://img.icons8.com/?size=100&id=nTLVtpxsNPaz&format=png&color=000000"
              alt="Mercado Pago"
              className="h-10 w-auto"
              loading="lazy"
            />
            <div className="flex items-center gap-3 text-gray-800 font-bold border-l-2 border-gray-200 pl-8 ml-4">
              <CheckCircle2 className="text-green-600 h-8 w-8" />
              <span className="text-lg leading-tight text-left">Transferencia<br/>Bancaria</span>
            </div>
          </div>
          <p className="mt-8 text-green-100 font-medium opacity-80">Tu seguridad es nuestra prioridad. Transacciones encriptadas.</p>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-black border-t border-white/10 py-12 text-center text-gray-500 text-sm">
        <p>© 2026 Defensa Laboral Pro. Todos los derechos reservados.</p>
        <p className="mt-2">Diseño web para abogados.</p>
      </footer>

    </div>
  );
}

// COMPONENTE AUXILIAR FAQ
function FAQItem({ question, answer }: { question: string, answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-green-100 rounded-2xl bg-white overflow-hidden transition-all hover:border-green-400 shadow-sm">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between p-6 text-left"
      >
        <span className="text-lg font-bold text-gray-900">{question}</span>
        <motion.div 
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className={`w-5 h-5 ${isOpen ? 'text-green-600' : 'text-gray-400'}`} />
        </motion.div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 text-gray-600 leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}