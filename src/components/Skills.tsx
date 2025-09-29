
import { useLanguage } from '../context/LanguageContext';

const Skills = () => {
  const { skills, sectionTitles } = useLanguage();

  return (
    <section className="mb-10">
      <h3 className="text-3xl font-bold border-b-2 border-blue-600 dark:border-blue-400 pb-2 mb-6 text-gray-900 dark:text-white">{sectionTitles.skills}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span key={index} className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full dark:bg-blue-900 dark:text-blue-300">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Skills;
