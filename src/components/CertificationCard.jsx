import { useState } from 'react';
import { FaGraduationCap, FaExternalLinkAlt, FaInfoCircle } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const CertificationCard = ({ title, institution, description, icon: Icon, imageUrl, certUrl }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <motion.div 
      className="group relative h-[180px] w-full rounded-2xl overflow-hidden cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.02 }}
    >
      {/* Image du certificat en arrière-plan avec overlay */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          {imageUrl ? (
            <>
              {/* Image de fond */}
              <motion.img 
                src={imageUrl}
                alt={title}
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ scale: 1 }}
                animate={{ 
                  scale: isHovered ? 1.1 : 1,
                  filter: isHovered ? 'brightness(0.4)' : 'brightness(0.3)'
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                onLoad={() => setImageLoaded(true)}
              />

            </>
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-gray-950 to-transparent" />
          )}
    
        </div>
      </div>

      {/* Contenu principal */}
      <div className="relative z-10 h-full flex flex-col justify-between ">
        <div className='flex p-4' >

          {/* Titre et institution */}
          <motion.div
            animate={{ y: isHovered ? -10 : 0 }}
            transition={{ duration: 0.3 }}
            className=''
          >
            <h3 className="text-sm sm:text-md font-bold text-white mb-1 leading-tight drop-shadow-lg">
              {title}
            </h3>
            <p className="text-sm text-gray-300 font-medium mb-1">
              {institution}
            </p>
          </motion.div>
        </div>

        {/* Description qui apparaît au hover */}
        <AnimatePresence >
          {isHovered && (
            <motion.div

              transition={{ duration: 0.3, delay: 0.1 }}
               className="h-2/3"
            >
              <p className="h-full px-3 pt-3 pb-4 text-sm text-gray-200 leading-relaxed group-hover:bg-gray-950/70 transition-colors duration-500">
                {description}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer avec lien et indicateur */}
        <motion.div 
          className="group-hover:hidden flex items-center justify-between"
          animate={{ y: isHovered ? 10 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="hidden w-full md:block md:flex items-center gap-2 px-4 mb-6">
            <div className={'w-2 h-2 rounded-full bg-teal-500'} />
            <span className="text-sm font-medium text-gray-300">
              {'Certification'}
            </span>
          </div>

        </motion.div>
      </div>

      {/* Élément décoratif au hover */}
      <motion.div
        className="absolute top-4 right-4"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: isHovered ? 1 : 0,
          scale: isHovered ? 1 : 0,
          rotate: isHovered ? 360 : 0
        }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="p-2 bg-gradient-to-br from-teal-500/20 to-teal-600/20 backdrop-blur-sm rounded-full">
          <FaInfoCircle className="text-lg text-teal-400" />
        </div>
      </motion.div>

      {/* Effet de bordure lumineuse au hover */}
      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: isHovered ? 1 : 0,
          boxShadow: isHovered ? '0 0 40px rgba(11, 245, 136, 0.3)' : 'none'
        }}
        transition={{ duration: 0.4 }}
        style={{
          border: '1px solid rgba(11, 245, 155, 0.3)'
        }}
      />

    </motion.div>
  );
};

export { CertificationCard};