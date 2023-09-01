import React from 'react';
import { useNavigate } from 'react-router';
import { Footer } from '../../components/footer';
import { Navigation } from '../../components/navigation';
import { PATHS } from '../../config/paths';
import useLanguage from '../../hooks/useLanguage';
import useTheme from '../../hooks/useTheme';

function ProjectsPage() {
  const { language, languageKey, switchLanguage } = useLanguage();
  const { mode, switchMode } = useTheme();
  const navigate = useNavigate();

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
        <div className="px-2 grid space-x-1 grid-cols-1 md:grid-cols-3 ">
          <div
            className="flex flex-col text-center"
            onClick={() => navigate(PATHS['PROJECTS.PORTFOLIO'])}
          >
            <div>Portfolio</div>
            <img
              className="w-full"
              src="https://brunomoisao.dev/project-1.png"
            />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default ProjectsPage;
