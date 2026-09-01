import { useTranslation } from '@/hooks/useTranslation';
import { 
  SiNextdotjs, 
  SiReact, 
  SiTailwindcss, 
  SiJavascript,
  SiTypescript, 
  SiAngular,
  SiHtml5,
  SiCss3,
  SiSpringboot, 
  SiLaravel, 
  SiExpress, 
  SiPython, 
  SiPostgresql, 
  SiMysql, 
  SiSqlite, 
  SiGit,
  SiHuawei,
  SiVercel,
  SiDocker,
  SiNestjs,
} from 'react-icons/si';
import { 
  FaCode, 
  FaServer, 
  FaDatabase,
  FaTools,
  FaGraduationCap,
  FaExternalLinkAlt,
  FaBrain,
  FaJava,
  FaPhp,
} from 'react-icons/fa';
import { 
  TbBrandKotlin,
} from 'react-icons/tb';
import AnimatedSection from '@/components/AnimatedSection';
import { CertificationCard } from '@/components/CertificationCard';

const techIconColors = {
  // Langages
  typescript: '#3178C6', // TypeScript bleu
  java: '#ED8B00', // Java orange
  php: '#8892BF', // PHP violet clair
  javascript: '#F7DF1E', // JavaScript jaune
  python: '#3776AB', // Python bleu
  
  // Frontend
  nextjs: '#ffffffff', 
  react: '#61DAFB', 
  tailwindcss: '#06B6D4', 
  angular: '#DD0031', 
  html5: '#E34F26', 
  css3: '#1572B6',
  
  // Backend
  springboot: '#6DB33F', 
  express: '#ffffffff', 
  nestjs: '#b10900', 
  
  // Databases
  postgresql: '#4169E1', 
  mysql: '#4479A1', 
  sqlite: '#003B57', 
  
  // Tools
  git: '#F05032', 
  github: '#181717', 
  vercel: '#ffffffff', 
  docker: '#2496ED', 
  huawei: '#FF0000', 
};

// Composant SkillTag avec couleurs d'icônes personnalisées
const SkillTag = ({ Icon, name, techKey }) => {
  const iconColor = techIconColors[techKey] || '#9CA3AF'; // Gris par défaut

  return (
    <div className='group flex items-center px-2.5 py-1.5 sm:px-4 sm:py-3 sm:rounded-full rounded-xl bg-gray-800/80 hover:bg-gray-700/80 transition-all duration-300 text-white hover:border-gray-600 cursor-default'>
      <Icon 
        className='text-2xl sm:mr-2 group-hover:scale-110 transition-transform'
        style={{ color: iconColor }}
      />
      <span className='text-sm font-medium whitespace-nowrap sm:block hidden'>{name}</span>
    </div>
  );
};

// Composant SoftSkillItem amélioré
const SoftSkillItem = ({ text }) => (
  <AnimatedSection direction='scale' threshold={0.5} duration={0.5}
 className="flex items-start sm:text-base text-xs sm:mb-4 mb-3 group sm:px-6 sm:py-4 px-3 py-2 bg-gray-900 rounded-xl">
  
    <span className='text-gray-300 group-hover:text-white transition-colors'>{text}</span>
  </AnimatedSection>
);

// Composant SkillGroup amélioré avec catégorie
const SkillGroup = ({ title, icon: Icon, skills }) => (
  <div className='w-full p-5 sm:pt-8 rounded-xl transition-colors duration-300 hover:border-gray-600/50'>
    <div className='w-full flex items-center justify-between sm:pb-4 pb-2'>
      <div className='w-full flex items-center'>
        <div className='w-full text-center ' >
          <h3 className='text-sm sm:text-base font-semibold text-gray-300'>- {title} -</h3>
        </div>
      </div>
    </div>
    <div className='flex flex-wrap justify-center sm:gap-4 gap-2'>
      {skills.map((skill, index) => (
        <SkillTag 
          key={index} 
          Icon={skill.Icon} 
          name={skill.name} 
          techKey={skill.techKey}
        />
      ))}
    </div>
  </div>
);

export default function Skills() {
  const { t } = useTranslation();

  // Réorganisation des compétences par catégories avec clés de couleur
  const skillCategories = {
    // Langages de programmation
    languages: [
      { Icon: SiTypescript, name: 'TypeScript', techKey: 'typescript' },
      { Icon: FaJava, name: 'Java', techKey: 'java' },
      { Icon: FaPhp, name: 'PHP', techKey: 'php' },
      { Icon: SiJavascript, name: 'JavaScript', techKey: 'javascript' },
    ],
    
    // Frontend / Mobile
    frontend: [
      { Icon: SiNextdotjs, name: 'Next.js', techKey: 'nextjs' },
      { Icon: SiReact, name: 'React', techKey: 'react' },
      { Icon: SiHtml5, name: 'Html5', techKey: 'html5' },
      { Icon: SiTailwindcss, name: 'Tailwind CSS', techKey: 'tailwindcss' },
    ],
    
    // Backend / Runtimes
    backend: [
      { Icon: SiNextdotjs, name: 'Next.js', techKey: 'nextjs' },
      { Icon: SiSpringboot, name: 'Spring Boot', techKey: 'springboot' },
      { Icon: SiExpress, name: 'Express.js', techKey: 'express' },
      { Icon: SiNestjs, name: 'Nest.js', techKey: 'nestjs' },
    ],
    
    // Bases de données
    databases: [
      { Icon: SiPostgresql, name: 'PostgreSQL', techKey: 'postgresql' },
      { Icon: SiMysql, name: 'MySQL', techKey: 'mysql' },
      { Icon: SiSqlite, name: 'SQLite', techKey: 'sqlite' },
    ],
    
    // Outils de développement
    tools: [
      { Icon: SiGit, name: 'Git/GitHub', techKey: 'git' },
      { Icon: SiVercel, name: 'Vercel', techKey: 'vercel' },
      { Icon: SiDocker, name: 'Docker', techKey: 'docker' },
    ],
  };

  const softSkills = [
    t("skills.softSkills.teamwork"),
    t("skills.softSkills.communication"),
    t("skills.softSkills.systemDesign"),
    t("skills.softSkills.algorithms"),
    t("skills.softSkills.adaptability"),
    t("skills.softSkills.problemSolving"),
    t("skills.softSkills.timeManagement"),
  ];

  const certifications = [
      {
      title: t("skills.certifications.javascript.title"),
      institution: t("skills.certifications.javascript.institution"),
      description: t("skills.certifications.javascript.description"),
      icon: SiJavascript,
      imageUrl: '/images/certification-js.webp',
      certUrl: 'https://www.javascript.com',
    },
    // {
    //   title: t("skills.certifications.pix.title"),
    //   institution: t("skills.certifications.pix.institution"),
    //   description: t("skills.certifications.pix.description"),
    //   icon: FaGraduationCap,
    //   imageUrl: '/images/certification-pix-2025.jpg',
    //   certUrl: 'https://pix.fr',
    // },
    {
      title: t("skills.certifications.huawei.title"),
      institution: t("skills.certifications.huawei.institution"),
      description: t("skills.certifications.huawei.description"),
      icon: SiHuawei,
      imageUrl: '/images/certification-Overview-IA-2025.png',
      certUrl: 'https://e.huawei.com',
    },

  ];

  return (
    <div className='min-h-screen w-full px-4 sm:px-16 lg:px-48 pt-12 sm:pt-40 sm:pb-6 bg-gradient-to-r from-gray-950 via-gray-950 to-teal-950 text-white'>
      <section id='skills' className='absolute -top-20' />
      
        {/* Header Compact */}
        <AnimatedSection direction='scale' duration={0.5} threshold={0.1}  >
          <div className='mb-0 sm:mb-14'>
            <h2 className='text-xl sm:text-4xl font-extrabold text-center'>
              <span className="text-theme2">&lt;</span>
              <span className='text-transparent bg-clip-text bg-gradient-to-b from-gray-100 to-gray-500' >{t("skills.title")}</span>
              <span className="text-theme2">/&gt;</span>
            </h2>
            <div className="sm:w-16 w-10 h-0.5 sm:h-1.5 bg-teal-500 rounded mx-auto sm:mt-2"></div>
          </div>
        </AnimatedSection>

      {/* Grille principale des compétences */}
      <div className='max-w-6xl mx-auto'>
        <div className='grid grid-cols-1 gap-6 mb-12 sm:pt-0 pt-4'>

          {/* Compétences techniques */}
          <div className='lg:col-span-2 flex flex-col items-center'>
            <div className="flex flex-col items-center justify-center sm:mb-6 mb-2">
              <div>
                <p className="text-md text-center sm:text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-b from-gray-100 to-gray-500"><span className='text-orange-500 text-3xl' >-</span> {t("skills.hardSkills.subtitle")} <span className='text-orange-500 text-3xl' >-</span></p>
                <div className="sm:w-10 w-6 h-0.5 sm:h-1 bg-teal-500 rounded mx-auto sm:mt-1"></div>

              </div>
            </div>
            
            {/* Langages */}
            <AnimatedSection direction='scale' duration={0.5}>
              <SkillGroup 
                title={t("skills.categories.languages")}
                icon={FaCode}
                category={t("skills.categories.languagesDesc")}
                skills={skillCategories.languages}
              />
            </AnimatedSection>
            
            {/* Frontend */}
            <AnimatedSection direction='scale' duration={0.5}>
              <SkillGroup 
                title={t("skills.categories.frontend")}
                icon={FaCode}
                category={t("skills.categories.frontendDesc")}
                skills={skillCategories.frontend}
              />
            </AnimatedSection>
            
            {/* Backend */}
            <AnimatedSection direction='scale' duration={0.5}>
              <SkillGroup 
                title={t("skills.categories.backend")}
                icon={FaServer}
                category={t("skills.categories.backendDesc")}
                skills={skillCategories.backend}
              />
            </AnimatedSection>

            {/* Bases de données */}
            <AnimatedSection direction='scale'  duration={0.5}>
              <SkillGroup 
                title={t("skills.categories.databases")}
                icon={FaDatabase}
                category={t("skills.categories.databasesDesc")}
                skills={skillCategories.databases}
              />
            </AnimatedSection>
            
            {/* Outils */}
            <AnimatedSection direction='scale' duration={0.5}>
              <SkillGroup 
                title={t("skills.categories.tools")}
                icon={FaTools}
                category={t("skills.categories.toolsDesc")}
                skills={skillCategories.tools}
              />
            </AnimatedSection>

          </div>

          {/* Soft Skills */}
          <div>
            <div className="px-4 sm:pl-10 h-full pt-8 transition-colors duration-300">
              <div className="flex items-center justify-center sm:mb-16 mb-10">
                <div>
                  <p className="text-md text-center sm:text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-b from-gray-100 to-gray-500"><span className='text-orange-500 text-3xl' >-</span> {t("skills.softSkills.subtitle")} <span className='text-orange-500 text-3xl' >-</span></p>
                  <div className="sm:w-10 w-6 h-0.5 sm:h-1 bg-teal-500 rounded mx-auto sm:mt-1"></div>
                </div>
              </div>
              
              <div className="sm:columns-2 gap-4 sm:w-[800px] mx-auto">
                {softSkills.map((skill, index) => (
                  <SoftSkillItem key={index} text={skill} />
                ))}
              </div>

              {/* Section Certifications */}
              <div>
                <div className=" mt-12">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-lg">
                      <FaGraduationCap className="text-xl text-theme2" />
                    </div>
                    <div>
                      <h2 className="text-lg sm:text-xl font-semibold text-gray-300">{t("skills.certifications.title")}</h2>
                      <p className="text-sm text-gray-400">{t("skills.certifications.subtitle")}</p>
                    </div>
                  </div>
                </div>
                
                <div className='grid grid-cols-1 md:grid-cols-1 gap-6 mt-4'>
                  {certifications.map((cert, index) => (
                    <CertificationCard key={index} {...cert} />
                  ))}
                </div>
              </div>
            </div>
          </div>
          

        </div>


      </div>
    </div>
  );
}