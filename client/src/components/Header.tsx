
import { useLanguage } from '../context/LanguageContext';
import { Mail, Phone, Linkedin, Github, FileText } from 'lucide-react'; // Using lucide-react for icons
import WhatsAppIcon from './WhatsAppIcon';

const Header = () => {
  const { personalInfo } = useLanguage();

  return (
    <section className="text-center mb-10">
      <img
        src="/foto-perfil.png"
        alt="Foto de perfil"
        className="w-32 h-32 rounded-full object-cover border-4 border-blue-600 dark:border-blue-400 mx-auto mb-4"
      />
      <div className="flex justify-center items-center">
        <FileText size={40} className="mr-4 text-blue-600 dark:text-blue-400" />
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white">{personalInfo.name}</h1>
      </div>
      <h2 className="text-2xl mt-2 font-light text-blue-600 dark:text-blue-400">{personalInfo.title}</h2>
      <div className="mt-4 flex justify-center space-x-6 text-gray-600 dark:text-gray-400">
        <a href={`mailto:${personalInfo.contact.email}`} className="flex items-center hover:text-blue-600 dark:hover:text-blue-400">
          <Mail className="mr-2 h-5 w-5" />
          <span>{personalInfo.contact.email}</span>
        </a>
        <div className="flex items-center space-x-4">
          <a href={`tel:${personalInfo.contact.phone}`} className="flex items-center hover:text-blue-600 dark:hover:text-blue-400">
            <Phone className="mr-2 h-5 w-5" />
            <span>Llamar</span>
          </a>
          <a href={`https://wa.me/${personalInfo.contact.phone}`} target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-green-600 dark:hover:text-green-400">
            <WhatsAppIcon className="mr-2 h-5 w-5" />
            <span>Mensaje</span>
          </a>
        </div>
      </div>
      <div className="mt-2 flex justify-center space-x-6 text-gray-600 dark:text-gray-400">
        <a href={`https://www.${personalInfo.contact.linkedin}`} target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-blue-600 dark:hover:text-blue-400">
          <Linkedin className="mr-2 h-5 w-5" />
          <span>{personalInfo.contact.linkedin}</span>
        </a>
        <a href={`https://www.${personalInfo.contact.github}`} target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-blue-600 dark:hover:text-blue-400">
          <Github className="mr-2 h-5 w-5" />
          <span>{personalInfo.contact.github}</span>
        </a>
      </div>
    </section>
  );
};

export default Header;
