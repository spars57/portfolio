import React from 'react';
import { Footer } from '../../components/footer';
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
        <Navigation />

        <div className="w-full  flex flex-row text- p-3 justify-between"></div>
        <div className="grid grid-rows-1 grid-flow-col place-content-center">
          <div className="p-3 md:p-0 flex flex-col md:flex-row w-full items-center">
            <div className="flex flex-col">
              <div className="text-5xl font-bold">
                {language.landingPage.title}
              </div>
              <div className="text-sm mt-1">
                {language.landingPage.description}
              </div>
              <div className="flex space-x-2 flex-row mt-2">
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
                />
                <img
                  onClick={() =>
                    window.open(
                      'https://www.instagram.com/brumoisao/',
                      '_blank'
                    )
                  }
                  title="Instagram"
                  style={mode === 'dark' ? { filter: 'invert(1)' } : {}}
                  className="w-6 cursor-pointer"
                  src="https://www.svgrepo.com/show/521711/instagram.svg"
                />
                <img
                  onClick={() =>
                    window.open('https://github.com/spars57', '_blank')
                  }
                  title="LinkedIn"
                  style={mode === 'dark' ? { filter: 'invert(1)' } : {}}
                  className="w-6 cursor-pointer"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                />
              </div>
              <div className=" flex flex-col md:flex-row mt-5 w-full align-middle">
                <div className="text-sm font-bold mt-5">
                  {language.landingPage.tools.toUpperCase()}
                </div>
                <div className="flex flex-row mt-2 space-x-8 md:ml-5">
                  {[
                    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
                    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
                    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
                    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
                    'https://www.svgrepo.com/show/475678/shopify-color.svg',
                    'https://www.svgrepo.com/show/452075/node-js.svg',
                  ].map((link) => (
                    <img key={link} className="w-10" src={link} />
                  ))}
                </div>
              </div>
            </div>
            <img
              className="rounded-full w-60 h-60 p-2 md:p-0 md:ml-10 mt-5 md:mt-0"
              src="https://media.licdn.com/dms/image/D4D03AQFki7ybyu1Tow/profile-displayphoto-shrink_800_800/0/1693489588182?e=1698883200&v=beta&t=fI6ibI1KdLIqrsLeV-FB5CoEVu7_hncXbvOnEdW7o5Q"
            ></img>
          </div>
        </div>
        <div className="w-full flex flex-row justify-center">
          <div className="font-bold text-2xl mt-5">
            {language?.landingPage?.aboutMe}
          </div>
        </div>
        <div className="w-full flex flex-column justify-center mt-5 mb-40">
          <div className="flex flex-column w-2/3">
            <div className="w-full text-justify">
              {language?.landingPage?.aboutText1}
              <br />
              <br />
              {language?.landingPage?.aboutText2}
              <br />
              <br />
              {language?.landingPage?.aboutText3}
              <br />
              <br />
              {language?.landingPage?.aboutText4}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default LandingPage;
