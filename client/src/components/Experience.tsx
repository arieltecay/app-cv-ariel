
import { useLanguage } from '../context/LanguageContext';
import DOMPurify from 'dompurify';

const Experience = () => {
  const { experience, sectionTitles } = useLanguage();

  return (
    <section className="mb-10">
      <h3 className="text-3xl font-bold border-b-2 border-blue-600 dark:border-blue-400 pb-2 mb-6 text-gray-900 dark:text-white">{sectionTitles.experience}</h3>
      <div className="space-y-8">
        {experience.map((job, index) => (
          <div key={index} className="relative pl-8">
            <div className="absolute left-0 top-1 h-4 w-4 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
            <div className="absolute left-[7px] top-4 h-full w-px bg-gray-300 dark:bg-gray-700"></div>
            <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-100">{job.title}</h4>
            <p className="text-md font-medium text-gray-700 dark:text-gray-300">{job.company}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{job.date}</p>            
            <p
              className="text-gray-600 dark:text-gray-400"
              dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(job.description) }}>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
