import { useState, useMemo } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { useModernAlert } from '@/components/ModernAlert';
import Image from 'next/image';
import AnimatedSection from '@/components/AnimatedSection';

// Icons
import { FaClock, FaGithub, FaEye, FaCode, FaReact, FaPhp, FaBootstrap, FaCss3Alt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { SiNextdotjs, SiPostgresql, SiTailwindcss, SiDrizzle, SiSpringboot, SiLaravel, SiExpress, SiMysql, SiJquery, SiJavascript, SiTypescript, SiNestjs } from 'react-icons/si';

// --- UTILS ---

const getTechConfig = (name) => {
  const map = {
    'NextJs': { icon: SiNextdotjs, color: '#fff', bg: 'bg-gray-800/30' },
    'PostgreSQL': { icon: SiPostgresql, color: '#336791', bg: 'bg-gray-800/30' },
    'Tailwind': { icon: SiTailwindcss, color: '#38bdf8', bg: 'bg-gray-800/30' },
    'SpringBoot': { icon: SiSpringboot, color: '#6db33f', bg: 'bg-gray-800/30' },
    'Laravel': { icon: SiLaravel, color: '#ff2d20', bg: 'bg-gray-800/30' },
    'ReactJs': { icon: FaReact, color: '#61dafb', bg: 'bg-gray-800/30' },
    'PHP': { icon: FaPhp, color: '#777bb4', bg: 'bg-gray-800/30'},
    'MySQL': { icon: SiMysql, color: '#ce650fff', bg: 'bg-gray-800/30'},
    'ExpressJs': { icon: SiExpress, color: '#ffffffff', bg: 'bg-gray-800/30'},
    'Drizzle-ORM': { icon: SiDrizzle, color: '#00caff', bg: 'bg-gray-800/30'},
    'Java': { icon: FaCode, color: '#f89820', bg: 'bg-gray-800/30'},
    'CSS': { icon: FaCss3Alt, color: '#264de4', bg: 'bg-gray-800/30'},
    'Jquery': { icon: SiJquery, color: '#0769ad', bg: 'bg-gray-800/30'},
    'Bootstrap': { icon: FaBootstrap, color: '#7952b3', bg: 'bg-gray-800/30'},
    'JavaScript': { icon: SiJavascript, color: '#f0db4f', bg: 'bg-gray-800/30'},
    'TypeScript': { icon: SiTypescript, color: '#3178c6', bg: 'bg-gray-800/30'},
    'NestJs': { icon: SiNestjs, color: '#ffffffff', bg: 'bg-red-400' }
  };
  return map[name] || { icon: FaCode, color: '#999', bg: 'bg-gray-800/30'};
};

const TechBadge = ({ name, mini = false }) => {
  const config = getTechConfig(name);
  const Icon = config.icon;
  return (
    <div className={`flex items-center gap-2 ${mini ? 'px-2 py-1' : 'px-2 py-1'} rounded-md border border-white/5 ${config.bg} backdrop-blur-sm`}>
      <Icon style={{ color: config.color }} className={mini ? "text-xs" : "text-sm"} />
      <span className="hidden md:block text-sm font-medium text-gray-300">{name}</span>
    </div>
  );
};

// --- COMPOSANT 1 ---
const FeaturedProject = ({ project, index, t, showAlert }) => {
  const [activeImage, setActiveImage] = useState(0);
  const isRight = index % 2 !== 0;

  const nextImg = (e) => {
    e.stopPropagation();
    setActiveImage((prev) => (prev === project.images.length - 1 ? 0 : prev + 1));
  };

  const prevImg = (e) => {
    e.stopPropagation();
    setActiveImage((prev) => (prev === 0 ? project.images.length - 1 : prev - 1));
  };

  return (
    <div className="w-full max-w-5xl mx-auto pt-10 sm:pt-20 border-b border-white/5 last:border-0">
      <div className={`flex flex-col ${isRight ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-6 md:gap-14`}>
        
        {/* IMAGE SLIDER (Compact) */}
        <div className="relative w-full md:w-1/2 h-[185px] sm:h-[280px] rounded-lg overflow-hidden border border-white/10 bg-[#0a0a0a] group">
          {project.images.map((img, idx) => (
            <div key={idx} className={`absolute inset-0 transition-opacity duration-500 ${idx === activeImage ? 'opacity-100' : 'opacity-0'}`}>
              <Image src={img} alt="Project" fill className="object-cover" />
              <div className="absolute inset-0 bg-black/20" />
            </div>
          ))}
            
          {/* Controls */}
          <div className="absolute inset-0 flex items-center justify-between px-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <button onClick={prevImg} className="p-2 rounded-full bg-black/50 hover:bg-teal-500 text-white transition"><FaChevronLeft size={12}/></button>
            <button onClick={nextImg} className="p-2 rounded-full bg-black/50 hover:bg-teal-500 text-white transition"><FaChevronRight size={12}/></button>
          </div>
          
          {/* Badge Type */}
          <div className="absolute top-2 text-xs left-2 bg-black/70 backdrop-blur px-2 py-0.5 rounded text-sm text-teal-400 font-mono border border-teal-500/30">
            {t(`projects.list.${project.id}.type`)}
          </div>
        </div>

        {/* INFO (Compact) */}
        <div className={`w-full md:w-1/2 flex flex-col items-start ${isRight ? 'sm:items-end':'items-start'} space-y-5`}>
          <div className='' >
            <div className={`flex items-center sm:justify-end gap-2 text-teal-500/60 text-sm uppercase tracking-widest font-mono`}>
              <FaClock size={10} />
              <span>{t(`projects.list.${project.id}.date`)}</span>
            </div>

            <h3 className="sm:mt-1 mt-2 text-xl sm:text-2xl font-bold text-white leading-none">
              <span className='text-transparent bg-clip-text bg-gradient-to-b from-gray-100 to-gray-500' >{t(`projects.list.${project.id}.title`)}</span>
            </h3>

          </div>

          <p className={`text-gray-400 leading-relaxed line-clamp-3 sm:line-clamp-none  ${isRight ? 'sm:text-right':'text-left'}`}>
            {t(`projects.list.${project.id}.description`)}
          </p>

           {/* Report Link */}
           {project.hasReport && (
              <a href="/documents/rapportStage.pdf" target="_blank" className="text-sm text-teal-400 underline hover:text-white">
                {t("projects.list.3.report")}
              </a>
           )}

          <div className={`flex flex-wrap gap-3 pt-1  ${isRight ? 'sm:justify-end':' justify-start'} `}>
            {project.techs.map((tech, i) => (
              <TechBadge key={i} name={tech} />
            ))}
          </div>

          <div className="flex w-full sm:w-auto">
            <button 
              title='GitHub'
              onClick={() => project.githubLink ? window.open(project.githubLink) : showAlert(t('alerts.codeSecured'), "error")}
              className="h-full flex text-sm justify-center"
            >
              <FaGithub className='mr-2' size={20}></FaGithub>
              <span className=' text-blue-700 hover:underline' >github</span>
            </button>
            {/* <button
              className="flex items-center justify-center sm:flex-none px-4 py-2 sm:text-sm text-xs cursor-not-allowed bg-gray-500 text-white rounded-xl transition shadow-lg shadow-teal-900/20"
            >
              <FaEye size={16} className='mr-2'></FaEye>
              Demo
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

// --- COMPOSANT 2 : MINIMALIST GRID CARD ---
const CompactProject = ({ project, t, showAlert }) => {
    // Simple hover to switch image or 
    const [imgIndex, setImgIndex] = useState(0);

    const next = (e) => {
        e.stopPropagation(); 
        setImgIndex(p => (p === project.images.length - 1 ? 0 : p + 1));
    }

    return (
        <div className=" group relative bg-gray-950 border border-white/5 rounded-lg overflow-hidden hover:border-teal-500/30 transition-all duration-300 flex flex-col h-full">
            {/* Image Header */}
            <div className="relative w-full h-32 sm:h-40 bg-gray-900 overflow-hidden cursor-pointer" onClick={next}>
                <Image src={project.images[imgIndex]} alt="Project" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 to-gray-950/10" />
                <div className="absolute bottom-2 left-3">
                    <div className="text-white font-bold truncate">{t(`projects.list.${project.id}.type`)}</div>
                    <div className="text-sm text-teal-400 font-mono">{t(`projects.list.${project.id}.date`)}</div>
                </div>
                {/* Mini Clicker */}
                <button onClick={next} className="absolute top-2 right-2 p-1 bg-black/50 rounded text-white opacity-0 group-hover:opacity-100 transition"><FaChevronRight size={18}/></button>
            </div>

            {/* Content Body */}
            <div className="p-3 flex flex-col flex-grow">
                {/* <p className="text-sm text-gray-400 line-clamp-3 leading-6 mb-3 flex-grow">
                    {t(`projects.list.${project.id}.description`)}
                </p>
                 */}
                {/* Footer */}
                <div className="flex items-center justify-between mt-auto pt-2 border-t border-white/5">
                    <div className="h-8 flex space-x-2">
                         {project.techs.slice(0, 4).map((tech, i) => (
                             <TechBadge key={i} name={tech}  />
                         ))}
                    </div>
                    <button 
                        onClick={() => project.githubLink ? window.open(project.githubLink) : showAlert(t('alerts.projectNotAvailable'), "info")}
                        className=" text-gray-400 hover:text-white transition"
                    >
                        <FaGithub size={18} />
                    </button>
                </div>
            </div>
        </div>
    )
}

// --- MAIN ---
export default function Projects() {
  const { t } = useTranslation();
  const { showAlert } = useModernAlert();

  const projectsData = useMemo(() => [
    { id: 0, featured: true, images: ['/projects/ebh/EBH-8.png','/projects/ebh/EBH-7.png','/projects/ebh/EBH-9.png','/projects/ebh/EBH-10.png'], techs: ['NextJs', ,'PostgreSQL', 'TypeScript', 'Tailwind', 'Drizzle-ORM', 'ReactJs'] },
    { id: 1, featured: true, images: ['/projects/openService/cyber-1.png','/projects/openService/cyber-3.png','/projects/openService/cyber-4.png','/projects/openService/cyber-5.png'], techs: ['SpringBoot', 'NextJs', 'PostgreSQL' ,'REST API', 'Tailwind'], githubLink: 'https://github.com/steveshanny/CyberCafe_application_web' },
    { id: 2, featured: false, images: ['/projects/autoEcole/autoecole-1.png','/projects/autoEcole/autoecole-2.png','/projects/autoEcole/autoecole-4.png'], techs: ['Laravel', 'NextJs', 'PostgreSQL'], githubLink: 'https://github.com/neon-rah/application-web-auto-ecole-projet' },
    { id: 3, featured: true, images: ['/projects/impots/impots-1.png','/projects/impots/impots-4.png','/projects/impots/impots-5.png','/projects/impots/impots-7.png'], techs: ['ReactJs', 'ExpressJs', 'MySQL','Tailwind','CSS'], hasReport: true },
    { id: 4, featured: false, images: ['/projects/radioTsiry/radio-1.png','/projects/radioTsiry/radio-4.png','/projects/radioTsiry/radio-5.png'], techs: ['JavaScript', 'PHP', 'MySQL'] },
    { id: 5, featured: false, images: ['/projects/homevers/homevers-1.png','/projects/homevers/homevers-2.png','/projects/homevers/homevers-3.png'], techs: ['ReactJs', 'PHP', 'MySQL'], githubLink: 'https://github.com/steveshanny/Homeveres-appli.git' }
  ], []);

  const featuredProjects = projectsData.filter(p => p.featured);
  const otherProjects = projectsData.filter(p => !p.featured);

  return (
    <div className="w-full h-full bg-gradient-to-br from-gray-950 via-gray-950 to-teal-950 text-gray-200 pt-16 sm:pt-28 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Compact */}
        <AnimatedSection direction='scale' duration={0.5} threshold={0.1}>
          <div className='mb-2'>
            <h2 className='text-2xl sm:text-4xl font-extrabold text-center text-gray-300'>
              <span className="text-theme2">&lt;</span>
              <span className='text-transparent bg-clip-text bg-gradient-to-b from-gray-100 to-gray-500' >{t("projects.title")}</span>
              <span className="text-theme2">/&gt;</span>
            </h2>
            <div className="w-12 h-1 bg-teal-500 rounded mx-auto mt-2"></div>
            <p className="text-gray-500 mt-3 text-center">{t("projects.subtitle")}</p>

          </div>
        </AnimatedSection>


        {/* SECTION 1: FEATURED (01, 02, 04) */}
        <div className="flex flex-col gap-6 sm:gap-0 sm:mb-14 sm:pb-0 pb-12">
          {featuredProjects.map((project, index) => (
             <AnimatedSection key={project.id} direction="scale" threshold={0.3} delay={0.1} duration={0.4}>
                <FeaturedProject project={project} index={index} t={t} showAlert={showAlert} />
             </AnimatedSection>
          ))}
        </div>

        {/* SECTION 2: THE LAB / ARCHIVE (03, 05, 06) - GRID */}
        {otherProjects.length > 0 && (
            <div className='sm:block hidden' >
                <div className="flex items-center gap-4 mb-6">
                    <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-gray-100 to-gray-500">Other Experiments</h3>
                    <div className="h-px bg-white/10 flex-grow"></div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {otherProjects.map((project) => (
                        <CompactProject key={project.id} project={project} t={t} showAlert={showAlert} />
                    ))}
                </div>
            </div>
        )}

      </div>
    </div>
  );
}