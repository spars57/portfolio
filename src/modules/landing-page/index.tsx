import React from 'react';
import { Navigation } from '../../components/navigation';
import useLanguage from '../../hooks/useLanguage';
import useTheme from '../../hooks/useTheme';

function LandingPage() {
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
        <Navigation
          language={language}
          languageKey={languageKey}
          switchLanguage={switchLanguage}
          switchMode={switchMode}
          mode={mode}
        />

        <div className="w-full 3 flex flex-row text- p-3 justify-between"></div>
        <div
          className="grid grid-rows-1 grid-flow-col place-content-center"
          style={{ marginTop: 50 }}
        >
          <div className="flex flex-row w-full items-center">
            <div className="flex flex-col">
              <div className="text-5xl font-bold">
                {language.landingPage.title}
              </div>
              <div className="text-sm mt-1">
                {language.landingPage.description}
              </div>
              <div className="flex flex-row mt-2">
                <img
                  onClick={() =>
                    window.open(
                      'https://www.linkedin.com/in/bruno-mois%C3%A3o-3556a9209/',
                      '_blank'
                    )
                  }
                  title="LinkedIn"
                  style={mode === 'dark' ? { filter: 'invert(1)' } : {}}
                  className="w-6 cursor-pointer"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg"
                />{' '}
                <img
                  onClick={() =>
                    window.open('https://github.com/spars57', '_blank')
                  }
                  title="LinkedIn"
                  style={mode === 'dark' ? { filter: 'invert(1)' } : {}}
                  className="mx-2 w-6 cursor-pointer"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                />
              </div>
              <div className=" flex flex-row mt-5 w-full align-middle">
                <div className="text-sm font-bold mt-5">
                  {language.landingPage.tools.toUpperCase()}
                </div>
                <div className="flex flex-row mt-2 space-x-8 ml-5">
                  {[
                    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
                    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
                    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
                    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
                    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
                    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
                    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg',
                  ].map((link) => (
                    <img key={link} className="w-10" src={link} />
                  ))}
                </div>
              </div>
            </div>
            <img
              className="rounded-full lg:w-60 lg:h-60 md:w-40 md:h-40 w-20 mr-10 h-20 ml-10"
              src="https://media.licdn.com/dms/image/D4D03AQFE1Nl2zu-cEQ/profile-displayphoto-shrink_800_800/0/1677108925221?e=1697068800&v=beta&t=LQsp_GZlKvExnEOloBtEovipg_Zh4HRmDdigWxDM6nw"
            ></img>
          </div>
        </div>
        <div className="w-full flex flex-row justify-center">
          <div className="font-bold text-2xl mt-5">
            {language?.landingPage?.aboutMe}
          </div>
        </div>
        <div className="w-full flex flex-column justify-center mt-5">
          <div className="flex flex-column w-2/3">
            <div className="w-full">
              {language?.landingPage?.aboutText1}
              <br />
              <br />
              {language?.landingPage?.aboutText2}
              <br />
              <br />
              {language?.landingPage?.aboutText3}
            </div>
          </div>
        </div>
        <div className="fixed bottom-0 flex flex-row w-full justify-center text-xs opacity-20 p-1">
          Copyright © Bruno Moisão 2023. All rights reserved.
        </div>
      </div>
    </>
  );
}

export default LandingPage;
