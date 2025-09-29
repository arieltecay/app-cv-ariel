
import { useTheme } from './context/ThemeContext';
import { useLanguage } from './context/LanguageContext';
import Header from './components/Header';
import Summary from './components/Summary';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import { Sun, Moon, Languages } from 'lucide-react';

function App() {
  const { theme, toggleTheme } = useTheme();
  const { toggleLanguage } = useLanguage();

  return (
    <div className={`min-h-screen font-sans transition-colors duration-300 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200`}>
      <div className="container mx-auto p-4 sm:p-6 lg:p-8 max-w-4xl">
        
        <div className="fixed top-4 right-4 flex items-center space-x-2">
          <button 
            onClick={toggleTheme} 
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
          </button>
          <button 
            onClick={toggleLanguage} 
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            aria-label="Toggle language"
          >
            <Languages className="h-5 w-5" />
          </button>
        </div>

        <main className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden p-8">
          <Header />
          <Summary />
          <Experience />
          <Education />
          <Skills />
        </main>

      </div>
    </div>
  );
}

export default App;
