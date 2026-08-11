import { useState } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import {
  FaLaptopCode,
  FaUserAlt,
  FaUniversity,
  FaUserGraduate,
  FaBookOpen,
  FaNetworkWired,
  FaRobot,
  FaLightbulb,
  FaChartLine,
  FaCogs,
  FaShieldAlt,
  FaBrain,
  FaPalette,
  FaGlobeAmericas
} from 'react-icons/fa';
import { SiMaterialdesign } from 'react-icons/si';
import AnimatedSection from '@/components/AnimatedSection';

// Définition des domaines avec icônes améliorées
const educationDomains = [
  { 
    key: 'ai', 
    icon: FaBrain, 
    accentColor: 'orange'
  },
  { 
    key: 'uiux', 
    icon: FaPalette, 
    accentColor: 'purple'
  },
  { 
    key: 'academic', 
    icon: FaUniversity,   
    accentColor: 'teal'
  },
  { 
    key: 'networks', 
    icon: FaGlobeAmericas, 
    accentColor: 'blue'
  }
];

// Composant pour les boutons de navigation (Onglets) amélioré
const TabButton = ({ isActive, icon: Icon, onClick, children, accentColor }) => (
  <button
    onClick={onClick}
    className={`
      group relative flex items-center p-1 rounded-t-xl
      overflow-hidden flex-1 min-w-0 sm:min-w-[80px] justify-center
      ${isActive 
        ? `bg-teal-950/70 text-white ${accentColor === 'purple' ? 'shadow-purple-500/30' : accentColor === 'teal' ? 'shadow-teal-500/30' : accentColor === 'blue' ? 'shadow-blue-500/30' : 'shadow-orange-500/30'}`
        : 'bg-gray-900/50 text-gray-400 hover:bg-gray-900'
      }
    `}
  >
    
    <div className="relative flex flex-col sm:flex-row items-center gap-3 z-10">
      <div className={`sm:hidden block p-1.5 rounded-lg `}>
        <Icon 
          className={`transition-all duration-500 ${isActive ? 'text-white scale-110' : 'text-gray-400 group-hover:text-white'}`} 
          size={18} 
        />
      </div>
      <span className={`sm:block hidden p-2 text-md font-semibold truncate transition-all duration-500
        ${isActive ? 'text-white' : 'group-hover:text-gray-200'}`}>
        {children}
      </span>
    </div>
    
  </button>
);

// Composant Carte amélioré
const DomainCard = ({ title, description, icons, accentColor }) => {
  
  return (
    <div className="w-full h-full bg-gradient-to-b from-teal-950/70 to-gray-950 pb-8 px-8 sm:rounded-br-2xl rounded-b-2xl">
      <div 
        className="relative rounded-2xl overflow-hidden transition-all duration-700 h-full group"
      >
        <div className="relative z-10">
          {/* En-tête avec icône */}
          <div className="flex items-center sm:gap-4 gap-2 sm:my-6 my-4">
            <div className={`sm:p-3 p-2 rounded-xl bg-theme2 shadow-lg`}>
              {icons[0] && icons[0]({ className: "text-white text-xl" })}
            </div>
            <div>
              <h3 className="sm:text-lg text-md font-bold text-gray-300 sm:mb-1 mb-0.5">{title}</h3>
              <div className="flex items-center gap-2">
                <div className={`w-8 h-0.5 bg-theme2 rounded-full`} />
                <span className="sm:text-xs text-[9px] text-gray-400 font-medium">SPECIALIZATION</span>
              </div>
            </div>
          </div>
          
          {/* Description */}
          <p className="text-sm sm:text-base text-gray-300 sm:leading-7 mb-6 sm:h-40">
            {description}
          </p>
          
          {/* Icônes de la spécialité */}
          <div className="flex items-center gap-3 pt-4 border-t border-gray-800/50">
            <span className="text-xs text-gray-500 font-medium">Key</span>
            <div className="flex gap-2">
              {icons.map((Icon, index) => (
                <div 
                  key={index}
                  className={`p-2 rounded-lg bg-gray-800/50 border border-gray-700/50 
                    transition-all duration-500 hover:scale-110 hover:border-${accentColor}-500/30
                    hover:bg-gray-800/80`}
                >
                  {Icon && <Icon className="text-gray-300 text-sm" />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function About() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState(educationDomains[0].key);

  const handleTabChange = (key) => {
    setActiveTab(key);
  };

  const renderDescription = () => {
    const getDomainIcons = (key) => {
      switch (key) {
        case 'uiux': return [FaLaptopCode, FaUserAlt, FaPalette, SiMaterialdesign];
        case 'academic': return [FaUniversity, FaUserGraduate, FaBookOpen, FaChartLine];
        case 'networks': return [FaNetworkWired, FaGlobeAmericas, FaCogs, FaShieldAlt];
        case 'ai': return [FaRobot, FaBrain, FaLightbulb, FaChartLine];
        default: return [];
      }
    };

    const currentDomain = educationDomains.find(d => d.key === activeTab);
    if (!currentDomain) return null;

    return (
      <DomainCard
        title={t(`descriptions.${activeTab}Title`)}
        description={t(`descriptions.${activeTab}`)}
        icons={getDomainIcons(activeTab)}
        color={currentDomain.color}
        accentColor={currentDomain.accentColor}
      />
    );
  };

  return (
    <div className="flex h-full w-full justify-center text-white pt-16 sm:pt-20 md:pt-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      
      <div className="sm:w-[85%] max-w-6xl mx-auto">
        {/* En-tête amélioré */}
         <AnimatedSection direction='scale' duration={0.4} threshold={0.1}>
            <div className='mb-0 sm:mb-14'>
              <h2 className='text-xl sm:text-4xl font-extrabold text-center'>
                <span className="text-theme2">&lt;</span>
                <span className='text-transparent bg-clip-text bg-gradient-to-b from-gray-100 to-gray-500' >{t("about.title")}</span>
                <span className="text-theme2">/&gt;</span>
              </h2>            
              <div className="sm:w-16 w-10 h-0.5 sm:h-1 bg-teal-500 rounded mx-auto sm:mt-2"></div>
           </div>
         </AnimatedSection>
        
        {/* Grille principale */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10">
          {/* Colonne Gauche - Introduction */}
          <AnimatedSection 
            className="sm:h-[360px]"
            direction='scale'
            threshold={0.2}
            duration={0.4}
          >
            <div className="relative p-4 sm:pb-6 sm:px-6 rounded-2xl h-full">
              {/* Carte avec effet verre */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-950 to-gray-950 
                backdrop-blur-xl rounded-l-2xl shadow-2xl"/>
              
              <div className="relative z-10">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 sm:px-4 sm:py-2 px-2 py-1 rounded-full border border-gray-200/30 
                  backdrop-blur-sm sm:mb-6 mb-3">
                  <FaUserAlt className="text-teal-400 text-xs sm:text-sm" />
                  <span className="sm:text-sm text-xs font-medium text-teal-500">{t("about.badge")} ?</span>
                </div>
                
                {/* Titre */}
                <h3 className="sm:text-xl text-md font-bold mb-2 sm:mb-4 text-gray-300">
                  <span className="">
                    {t("about.role")} & {t("about.solver")}
                  </span>
                </h3>
                
                {/* Description */}
                <div className="space-y-4">
                  <p className="text-gray-200 text-sm sm:text-base sm:!leading-7 text-justify">
                    {t("about.description")}
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
          
          {/* Colonne Droite - Spécialisations */}
          <div className="sm:h-[360px]">
            {/* Navigation par onglets améliorée */}
            <div 
              className="relative"
            >
              <div className="">
                <div className="grid grid-cols-4 sm:grid-cols-4 gap-3">
                  {educationDomains.map((domain) => (
                    <TabButton
                      key={domain.key}
                      isActive={activeTab === domain.key}
                      icon={domain.icon}
                      onClick={() => handleTabChange(domain.key)}
                      accentColor={domain.accentColor}
                    >
                      {t(`sections.${domain.key}`)}
                    </TabButton>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Carte de spécialisation active */}
            <div className="transition-opacity duration-200 h-full">
              {renderDescription()}
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}