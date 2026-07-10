import { useState } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { 
  FaEnvelope, FaLinkedin, FaGithub, FaGlobe, 
  FaStarHalfAlt, FaUser, FaComment, FaPaperPlane, 
  FaStar, FaPhone, FaMapMarkerAlt, FaCheck, 
  FaExternalLinkAlt, FaCopy
} from 'react-icons/fa';
import { SiUpwork, SiFiverr, SiFacebook } from 'react-icons/si';
import emailjs from '@emailjs/browser';
import AnimatedSection from '@/components/AnimatedSection';
import { useModernAlert } from '@/components/ModernAlert';

export default function Contact() {
  const { t } = useTranslation();
  const { showAlert } = useModernAlert();
  const [isLoading, setIsLoading] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const EMAILJS_CONFIG = {
    SERVICE_ID: 'service_g7rknfn',
    TEMPLATE_TO_YOU: 'template_92k46ri', 
    TEMPLATE_AUTO_REPLY: 'template_vz9h3rv', 
    USER_ID: 'MK-TmMeFEG4l1LxG_'
  };

  const contactInfo = [
    {
      id: 0,
      icon: <FaEnvelope />,
      label: t('contact.emailLabel'),
      value: 'steveshannyrasoafanirindraibe@gmail.com',
      action: 'copy',
      delay: 0.1
    },
    {
      id: 1,
      icon: <FaPhone />,
      label: t('contact.phoneLabel'),
      value: '+261 34 56 114 77',
      action: 'call',
      delay: 0.2
    },
  {
    id: 2,
    icon: <FaMapMarkerAlt />,
    label: t('contact.locationLabel'),
    value: t('contact.location') || 'Remote Worldwide', 
    action: null,
    delay: 0.3
  },
  ];

  const socialLinks = [
    {
      id: 1,
      icon: <FaGithub />,
      label: 'GitHub',
      url: 'https://github.com/steveshanny',

      delay: 0.4
    },
    {
      id: 2,
      icon: <FaLinkedin />,
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/steve-shanny',
      delay: 0.5
    },
    {
      id: 3,
      icon: <SiFacebook />,
      label: 'Facebook',
      url: 'https://www.facebook.com/share/1BZTDSNAqN/',
      delay: 0.6
    },
    {
      id: 4,
      icon: <SiFiverr />,
      label: 'Fiverr',
      url: 'https://fr.fiverr.com/s/ZmDDRrp',
      delay: 0.7
    }
  ];

  const handleCopy = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopySuccess(true);
      showAlert(t('contact.copied'), "success");
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      const textArea = document.createElement('textarea');
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      showAlert(t('contact.copied'), "success");
    }
  };

  const handleCall = (phoneNumber) => {
    // Supprimer les espaces et le + pour le format tel:
    const cleanNumber = phoneNumber.replace(/\s+/g, '').replace('+', '');
    window.open(`tel:${cleanNumber}`, '_blank');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_TO_YOU,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Steve Shanny',
          reply_to: formData.email
        },
        EMAILJS_CONFIG.USER_ID
      );
      
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_AUTO_REPLY,
        {
          to_name: formData.name,
          to_email: formData.email,
          from_name: 'Steve Shanny',
          reply_to: 'steveshannyrasoafanirindraibe@gmail.com'
        },
        EMAILJS_CONFIG.USER_ID
      );

      showAlert(t('contact.success'), "success");

      setFormData({
        name: '',
        email: '',
        message: ''
      });

    } catch (error) {
      showAlert(t('contact.error'), "error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <footer className='footer h-auto w-full relative overflow-hidden'>
      {/* Background Pattern */}
      <div className='absolute inset-0 z-0 opacity-10'>
        <div className='absolute top-1/4 left-1/4 w-64 h-64 bg-teal-500 rounded-full blur-3xl'></div>
        <div className='absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl'></div>
      </div>

      <div className='footer-section relative z-10 w-full h-auto items-center py-8 sm:pt-20 px-4'>
        <AnimatedSection direction='scale' duration={0.5} threshold={0.1}>
          <div className='mb-8 sm:mb-10'>
            <h2 className='text-2xl sm:text-4xl font-extrabold text-center'>
              <span className="text-theme2">&lt;</span>
              <span className='text-transparent bg-clip-text bg-gradient-to-b from-gray-100 to-gray-500' >Contact</span>
              <span className="text-theme2">/&gt;</span>
            </h2>
            <div className="w-12 h-1 bg-teal-500 rounded mx-auto mt-2"></div>
            <p className="text-gray-400 mt-3 text-center">{t("contact.subtitle")}</p>

          </div>
        </AnimatedSection>

        <div className='flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto'>
          {/* Contact Info Cards - Left Side */}
          <div className='lg:w-1/3 lg:pl-12'>
            <AnimatedSection direction='up' threshold={0.1} delay={0.2} duration={0.5}>
              <div className='grid grid-cols-1 gap-4 mb-8'>
                {contactInfo.map((item) => (
                  <div 
                    key={item.id}
                    className='relative group bg-black/40 backdrop-blur-sm rounded-2xl p-3 border border-white/10 hover:border-teal-500/50 transition-all duration-500 hover:-translate-y-1'
                  >
                    <AnimatedSection direction='scale' threshold={0.1} delay={item.delay} duration={0.3} >
                      <div className='flex items-start space-x-3'>
                        <div className='p-2 rounded-xl bg-orange-500/30 backdrop-blur-sm'>
                          <div className='text-xl text-white'>{item.icon}</div>
                        </div>
                        <div className='flex-1 min-w-0'>
                          <p className='text-xs text-gray-300 mb-1 truncate'>{item.label}</p>
                          <p className='text-sm font-medium text-gray-300 truncate'>{item.value}</p>
                        </div>
                        {item.action === 'copy' && (
                          <button
                            onClick={() => handleCopy(item.value)}
                            className='p-2 rounded-lg bg-gray-300 hover:bg-white transition-color '
                            title={t('contact.copy')}
                          >
                            {copySuccess ? (
                              <FaCheck className='text-gray-950' />
                            ) : (
                              <FaCopy className='text-gray-900 hover:text-gray-950' />
                            )}
                          </button>
                        )}
                        {item.action === 'call' && (
                          <button
                            onClick={() => handleCall(item.value)}
                            className='group p-2 rounded-lg bg-green-500 transition-colors'
                            title={t('contact.call')}
                          >
                            <FaPhone className=' text-white group-hover:scale-125 transition-all duration-500' />
                          </button>
                        )}
                      </div>
                    </AnimatedSection>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            {/* Social Links */}
            <AnimatedSection direction='scale' threshold={0.1} duration={0.4}>
              <div className='mb'>
                <h3 className='text-lg font-semibold text-white mb-4 flex items-center'>
                  <FaGlobe className='mr-2 text-teal-400' />
                  <span className='text-gray-300' >{t('contact.connect')}</span>
                </h3>
                <div className='grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-3'>
                  {socialLinks.map((social) => (
                    <a
                      key={social.id}
                      href={social.url}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='flex flex-col items-center justify-center p-3 rounded-xl bg-black/40 backdrop-blur-sm border border-white/10 hover:border-teal-500/50 transition-all duration-500 group hover:bg-black/60'
                    >
                      <div className='text-2xl mb-2 group-hover:scale-110 transition-transform text-gray-300'>
                        {social.icon}
                      </div>
                      <span className='text-sm font-medium text-gray-300'>{social.label}</span>
                      <FaExternalLinkAlt className='absolute top-2 right-2 text-xs opacity-0 group-hover:opacity-100 transition-opacity text-teal-400' />
                    </a>
                  ))}
                </div>
              </div>
            </AnimatedSection>

          </div>

          {/* Contact Form - Right Side */}
          <div className='lg:w-3/5'>
            <AnimatedSection direction='scale' threshold={0.1} duration={0.4}>
              <div className='bg-black/40 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl'>
                <div className='mb-6'>
                  <h3 className='text-md sm:text-xl font-bold text-gray-300 mb-2 text-center'>
                    {t('contact.formTitle')}
                  </h3>
                  <p className='text-gray-400 text-sm text-center'>
                    {t('contact.formSubtitle')}
                  </p>
                </div>

                <form onSubmit={handleSubmit} className='space-y-6 text-sx sm:text-sm'>
                  {/* Name & Email Row */}
                  <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                    <div className='group'>
                      <label className='flex items-center mb-2 text-xs sm:text-sm font-medium text-gray-300'>
                        <FaUser className='mr-2 text-teal-400' />
                        {t('contact.name')}
                      </label>
                      <input
                        name='name'
                        type='text'
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className='w-full text-xs sm:text-sm bg-black/30 backdrop-blur-sm border border-white/20 rounded-xl py-3 px-4 text-white placeholder-gray-500 focus:border-teal-400 focus:ring-2 focus:ring-teal-400/30 transition-all duration-300 outline-none'
                        placeholder={t('contact.namePlaceholder')}
                      />
                    </div>

                    <div className='group'>
                      <label className='flex items-center mb-2 text-sm font-medium text-gray-300'>
                        <FaEnvelope className='mr-2 text-teal-400' />
                        {t('contact.email')}
                      </label>
                      <input
                        name='email'
                        type='email'
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className='w-full text-xs sm:text-sm bg-black/30 backdrop-blur-sm border border-white/20 rounded-xl py-3 px-4 text-white placeholder-gray-500 focus:border-teal-400 focus:ring-2 focus:ring-teal-400/30 transition-all duration-300 outline-none'
                        placeholder={t('contact.emailPlaceholder')}
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className='group'>
                    <label className='flex items-center mb-2 text-sm font-medium text-gray-300'>
                      <FaComment className='mr-2 text-teal-400' />
                      {t('contact.message')}
                    </label>
                    <textarea
                      name='message'
                      rows='5'
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className='w-full text-xs sm:text-sm bg-black/30 backdrop-blur-sm border border-white/20 rounded-xl py-3 px-4 text-white placeholder-gray-500 focus:border-teal-400 focus:ring-2 focus:ring-teal-400/30 transition-all duration-300 outline-none resize-none'
                      placeholder={t('contact.messagePlaceholder')}
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type='submit'
                    disabled={isLoading}
                    className={`w-full text-xs sm:text-sm group relative overflow-hidden rounded-xl py-3 px-6 font-semibold transition-all duration-500 ${
                      isLoading
                        ? 'bg-gray-700 cursor-not-allowed'
                        : 'bg-gradient-to-r from-teal-600 to-teal-600 '
                    }`}
                  >
                    <div className='relative z-10 flex items-center justify-center'>
                      {isLoading ? (
                        <>
                          <div className='animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3'></div>
                          <span className='text-white'>{t('contact.sending')}</span>
                        </>
                      ) : (
                        <>
                          <FaPaperPlane className='mr-3 text-sm group-hover:rotate-45 transition-transform duration-500 text-white' />
                          <span className='text-white'>{t('contact.send')}</span>
                          <FaStar className='ml-3 w-0 group-hover:w-5 transition-all duration-700 ease-out text-yellow-300' />
                        </>
                      )}
                    </div>
                    <div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000'></div>
                  </button>
                </form>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className='relative z-10 w-full py-6 backdrop-blur-sm border-t border-white/10'>
        <div className='max-w-6xl mx-auto px-4'>
          <div className='text-center'>
            <p className='text-gray-400 text-[11px] sm:text-xs'>
              &copy; 2026 <strong className='text-white'>Steve Shanny</strong>. {t('copyright.text')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}