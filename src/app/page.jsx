"use client"
import { useEffect, useState } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { useScroll } from '@/hooks/useScroll';
import { useTranslation } from '@/hooks/useTranslation';
import SideSocialLinks from '@/components/SideSocialLinks';
import { Phone, Download, Code, Server, User, Globe, Home as HomeIcon } from 'lucide-react'; // Ajout de HomeIcon si besoin
import AnimatedSection from '@/components/AnimatedSection';
import AvailabilityIndicator from '@/components/AvailabilityIndicator';

const About = dynamic(() => import('@/components/sections/About'), { ssr: false, loading: () => null });
const Projects = dynamic(() => import('@/components/sections/Projects'), { ssr: false, loading: () => null });
const Skills = dynamic(() => import('@/components/sections/Skills'), { ssr: false, loading: () => null });
const Contact = dynamic(() => import('@/components/sections/Contact'), { ssr: false, loading: () => null });


// Composant principal de la section Hero
const HeroContent = ({ handleNavClick, t, techStack }) => {
    return (
        <div className="w-full h-full font-inter bg-gradient-to-br from-teal-950/90 via-gray-950 to-teal-950/90 text-white">
            
            {/* --- Hero Content Block --- */}
            <div className="min-h-[500px] h-auto xl:min-h-[600px] w-full flex flex-col sm:flex-row items-center pt-6 sm:pt-6 relative overflow-hidden max-w-7xl mx-auto px-4 sm:px-0">
                
                {/* ----------------- 1. Bloc de l'image de profil (5/12) ----------------- */}
                <div 
                    className="relative py-6 sm:py-0 overflow-visible z-10 w-full sm:w-5/12 h-full flex justify-center items-center duration-400 ease-out"
                >
                    <div className="relative p-2 rounded-tr-full rounded-tl-full rounded-bl-full hover:scale-105 transition-scale duration-500 ease-in">
                      
                      {/* Badge Disponible */}
                      <AnimatedSection delay={2} direction='scale' className="hidden sm:block h-full absolute top-6 -left-4 z-20 px-2">
                          <div className="flex items-center gap-1.5 px-2 py-1 border border-green-500 bg-black/50 rounded-full shadow-lg shadow-green-500/30 animate-pulse-subtle">
                              <span className="sm:text-[10px] text-[9px] font-bold text-white tracking-wide">
                                  {t('hero.available')}
                              </span>
                              <div className="w-1 h-1 bg-green-500 rounded-full animate-ping-slow"></div>

                          </div>
                      </AnimatedSection>
                      <div className="rounded-full rounded-br-xl p-1 sm:p-2 w-40 h-40 sm:w-80 sm:h-96">
                          <Image
                            className='w-full h-full object-cover rounded-br-xl rounded-full'
                            src="/images/steve_shanny.jpeg"
                            alt="Steve Shanny"
                            fill
                            priority
                            fetchPriority="high"
                            loading="eager"
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                        </div>
                    </div>
                </div>

                {/* ----------------- 2. Bloc du titre et des boutons (7/12) ----------------- */}
                <div className="w-full sm:w-7/12 h-full flex justify-center sm:justify-start items-center px-0 sm:px-0 z-10 mt-6 sm:mt-0">
                  <div className="text-center sm:text-left">
                    <div>
                      {/* --- Ligne d'accroche et Nom (Style Terminal/Code) --- */}
                      <AnimatedSection direction='left' duration={0.3} className='text-xs sm:text-lg font-mono mb-3 sm:mb-4'>
                        <span className="text-gray-400">{t("hero.greeting")}</span>
                        
                        {/* Nom stylisé comme une balise ou un élément de code */}
                        <span className="text-lg sm:text-2xl font-bold ml-1 sm:ml-2">
                          &lt;<span className="text-teal-400">Steve Sha</span><span className="text-theme2">nny</span>/&gt;
                        </span>
                      </AnimatedSection>
                      {/* --- Headline Principal (Proposition de Valeur) --- */}
                      <AnimatedSection direction='left' delay={0.1} duration={0.3} className="text-xl sm:text-4xl font-extrabold leading-tight mb-3 sm:mb-4">
                        <h1 className="text-transparent bg-clip-text bg-gradient-to-b from-gray-100 to-gray-500">{t("hero.headline")}</h1>
                      </AnimatedSection>
                    </div>
                        {/* Titre & Slogan */}
                        <AnimatedSection direction='left' delay={0.2} duration={0.3} className="py-2 sm:py-3 text-base sm:text-3xl font-mono italic text-gray-300">
                            <span className="text-gray-300">{t("hero.title")}</span>
                            <span className="clignoter font-bold text-teal-400">_</span>
                        </AnimatedSection>
                        {/* Bloc "Tech Tag Cloud" */}
                        <AnimatedSection direction='left' delay={0.3} duration={0.3} className="my-4 sm:my-8 sm:mr-16 p-3 sm:p-4 bg-teal-700/10 rounded-xl shadow-inner shadow-teal-500/20 max-w-lg">
                            <h3 className='text-sm font-semibold mb-2 text-teal-300 flex items-center justify-center sm:justify-start'>
                              <Code className='mr-2 h-3 w-3 sm:h-4 sm:w-4' />
                              {t('hero.expertise')}
                            </h3>
                            <div className="flex flex-wrap gap-1.5 sm:gap-2 justify-center sm:justify-start">
                                {techStack.map((tech, index) => (
                                    <span key={index} className="px-2 sm:px-3 py-1 text-sm font-medium text-teal-100 bg-gray-900 rounded-full border border-teal-500/50 hover:bg-gray-950 transition duration-300 cursor-default">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </AnimatedSection>
                        {/* Bouton de contact */}
                        <AnimatedSection direction='left' delay={0.4} duration={0.3} className='mt-6 sm:mt-10'>
                          <button className='px-5 sm:px-6 py-2 bg-teal-500/90 text-black text-xs sm:text-sm font-bold rounded-lg transition-all duration-300 hover:bg-theme2 hover:text-white transform hover:scale-105 shadow-lg'
                              onClick={() => handleNavClick('contacts')} >
                              {t("hero.contact")}
                          </button>
                      </AnimatedSection>
                      {/* Steve */}
                      <AnimatedSection direction='left' delay={0.5} duration={0.3} className='sm:hidden w-full flex justify-center items-center' >
                        <div>
                        <a 
                          href='/documents/cv_steve_non_confidentiel.pdf' 
                          download="Steve_Shanny_CV.pdf" 
                          className="flex items-center justify-center w-48 py-2 my-4 px-3 bg-gray-950 text-teal-300 rounded-lg text-xs font-semibold border border-teal-500/50 hover:bg-teal-500/40 transition duration-300"
                        > 
                          <Download className='mr-2 h-4 w-4' /> 
                          <span className="text-xs">{t("hero.download")}</span>
                        </a>
                        </div>

                      </AnimatedSection>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default function Home() {

  const { t, language, changeLanguage } = useTranslation();
  const scrollProgress = useScroll();
  const [shouldLoadSections, setShouldLoadSections] = useState(false);

  useEffect(() => {
    const idleCallback = window.requestIdleCallback
      ? window.requestIdleCallback(() => setShouldLoadSections(true))
      : window.setTimeout(() => setShouldLoadSections(true), 400);

    return () => {
      if (typeof window !== 'undefined') {
        if (window.cancelIdleCallback) {
          window.cancelIdleCallback(idleCallback);
        } else {
          window.clearTimeout(idleCallback);
        }
      }
    };
  }, []);


    // Placeholder pour les fonctions de défilement
  const getTranslateY = (offset) => 0; 
    
    const techStack = [
        "Next.js", "React", "Nest.js", "PostgreSQL", "JavaScript",
         "SpringBoot", "REST API", "Tailwind CSS"
    ];

    const navItems = [
        { id: 'about', label: t('nav.about'), icon: <User className="h-5 w-5 sm:h-4 sm:w-4" /> },
        { id: 'projects', label: t('nav.projects'), icon: <Code className="h-5 w-5 sm:h-4 sm:w-4" /> },
        { id: 'skills', label: t('nav.skills'), icon: <Server className="h-5 w-5 sm:h-4 sm:w-4" /> },
        { id: 'contacts', label: t('nav.contacts'), icon: <Phone className="h-5 w-5 sm:h-4 sm:w-4" /> },
    ];

  const handleNavClick = (sectionId) => {
    if (typeof document !== 'undefined') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  };


  return (
    <div key={language}  className=" bg-gradient-to-l from-teal-950/90 to-gray-950/90 min-h-screen w-full sm:border-t-2 border-teal-500 pb-20 md:pb-0"> 

      <SideSocialLinks></SideSocialLinks>
      
        <HeroContent 
          handleNavClick={handleNavClick}
          t={t}
          navItems={navItems}
          techStack={techStack}
          getTranslateY={getTranslateY}
      />


        {/* 2. Sticky Navbar Desktop */}
        <AnimatedSection direction='scale' delay={0.5} duration={0.3} className="hidden md:block sticky bg-gradient-to-l from-teal-950 to-gray-950 top-0 z-40 w-full">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 sm:py-3 flex flex-wrap justify-between items-center gap-4">
            <button onClick={() => handleNavClick('contacts')} className='absolute left-12 w-14 hidden md:block' >
              <AvailabilityIndicator></AvailabilityIndicator>
            </button>

            <div className="hidden md:block"></div>
            
            <nav className="flex items-center flex-wrap justify-center gap-4 w-auto order-1 mt-0">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="flex items-center text-xs py-2 px-3 rounded-full text-gray-300 hover:bg-teal-500 hover:text-gray-900 transition-colors duration-300 font-medium group"
                >
                  <span className="mr-2 group-hover:text-gray-900 text-orange-500 text-xs">{item.icon}</span>
                  <span className="uppercase tracking-wider text-xs">{item.label}</span>
                </button>
              ))}
              <a 
                href='/documents/cv_steve_non_confidentiel.pdf' 
                download="Steve_Shanny_CV.pdf" 
                className="flex items-center py-1.5 px-3 bg-teal-500 text-gray-900 rounded-full text-xs font-semibold hover:bg-theme2 transition duration-300"
              > 
                <Download className='mr-2 h-4 w-4' /> 
                <span className="text-xs">{t("hero.download")}</span>
              </a>
            </nav>

            <div className="hidden md:flex items-center justify-center p-1 rounded-full shadow-inner bg-gray-950/30 w-28 order-2">
              <Globe className="text-gray-200 mx-1 h-4 w-4" />
              <button onClick={() => changeLanguage('en')} className={`text-xs font-bold py-1 px-3 rounded-full transition-all duration-700 ${
                    language === 'en'  
                          ? 'bg-theme2 text-white shadow-md transform scale-105' 
                          : 'text-gray-400 hover:text-white hover:bg-teal-950'
                  }`}
              >
                  EN
              </button>
              <button onClick={() => changeLanguage('fr')} className={`text-xs font-bold py-1 px-3 rounded-full transition-all duration-700 ${
                    language === 'fr'
                          ? 'bg-theme2 text-white shadow-md transform scale-105' 
                          : 'text-gray-400 hover:text-white hover:bg-teal-950'
                  }`}
              >
                  FR
              </button>
            </div>
          </div>
        </AnimatedSection>

        {/* ---------------------------------------------------------------------------------- */}
        {/* NOUVEAU: Mobile & Tablet Navbar  */}
        {/* ---------------------------------------------------------------------------------- */}
        <div className="md:hidden fixed bottom-4 left-0 right-0 z-50 flex justify-center px-4">
          <div className="bg-gray-900/90 backdrop-blur-xl border border-teal-500/30 rounded-2xl shadow-[0_0_20px_rgba(20,184,166,0.2)] p-2 flex items-center justify-between gap-1 max-w-sm w-full">
            
            {/* Navigation Icons */}
            <div className="flex items-center justify-around flex-1 gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="flex flex-col items-center justify-center p-2 rounded-xl text-gray-400 hover:text-teal-400 hover:bg-teal-500/10 transition-all duration-300 active:scale-95"
                >
                  {item.icon}
                </button>
              ))}
            </div>

            {/* Separator */}
            <div className="h-8 w-[1px] bg-gray-700 mx-1"></div>

            {/* Language Switcher Compact */}
            <div className="flex flex-col gap-1">
               <button onClick={() => changeLanguage('en')} className={`text-[10px] font-bold py-1 px-2 rounded-md transition-all ${
                    language === 'en' ? 'bg-theme2 text-white' : 'text-gray-500 bg-gray-800'
                  }`}>EN</button>
               <button onClick={() => changeLanguage('fr')} className={`text-[10px] font-bold py-1 px-2 rounded-md transition-all ${
                    language === 'fr' ? 'bg-theme2 text-white' : 'text-gray-500 bg-gray-800'
                  }`}>FR</button>
            </div>

          </div>
        </div>

      <main className="relative w-full max-w-full min-h-screen overflow-x-hidden">
        {shouldLoadSections ? (
          <>
            {/* Second block ----------------------------------------------------------------------------------------*/}
            <div 
              className="bg-gray-950 mt-6 sm:mt-10 w-full rounded-t-[50px_15px] sm:rounded-t-[100px_30px] lg:rounded-t-[280px_80px] shadow-glow-teal transition-all duration-400 ease-out"          
            >
              <section id="about"></section>
              <About></About>

              <section id="projects"></section>
              <Projects/> 
            </div>

            {/* Third block -----------------------------------------------------------------------------------------*/}
            <section id="skills"></section>
            <Skills></Skills>

            <section id="contacts"></section>
            <Contact></Contact>
          </>
        ) : (
          <div className="h-80 sm:h-96" />
        )}
      </main>
    </div>
  );
}