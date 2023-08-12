import React from 'react';
import { Footer } from '../../components/footer';
import { Navigation } from '../../components/navigation';
import useLanguage from '../../hooks/useLanguage';
import useTheme from '../../hooks/useTheme';

function ProjectsPage() {
  const { language, languageKey, switchLanguage } = useLanguage();
  const { mode, switchMode } = useTheme();

  return (
    <>
      <div
        className={`h-screen overflow-scroll pb-10 ${
          mode === 'light'
            ? 'text-gray-900 bg-white'
            : 'text-white bg-slate-900'
        }`}
      >
        <Navigation />
        <div className="flex flex-row w-full justify-center">
          Comming soon...
        </div>
        <Footer />
      </div>
    </>
  );
}

export default ProjectsPage;
