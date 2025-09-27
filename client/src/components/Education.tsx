
import { useLanguage } from '../context/LanguageContext';

const Education = () => {
  const { education, sectionTitles } = useLanguage();

  return (
    <section className="mb-10">
      <h3 className="text-3xl font-bold border-b-2 border-blue-600 dark:border-blue-400 pb-2 mb-6 text-gray-900 dark:text-white">{sectionTitles.education}</h3>
      <div className="space-y-4">
        {education.map((edu, index) => (
          <div key={index}>
            <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-100">{edu.institution}</h4>
            <p className="text-md text-gray-700 dark:text-gray-300">{edu.degree}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">{edu.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
