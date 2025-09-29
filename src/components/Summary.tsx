import { useLanguage } from '../context/LanguageContext';
import DOMPurify from 'dompurify';

const Summary = () => {
  const { summary } = useLanguage();

  // Sanitize the HTML content
  const sanitizedSummary = DOMPurify.sanitize(summary);

  return (
    <section className="mb-10">
      <p
        className="text-lg text-justify text-gray-700 dark:text-gray-300 leading-relaxed"
        dangerouslySetInnerHTML={{ __html: sanitizedSummary }}
      />
    </section>
  );
};

export default Summary;