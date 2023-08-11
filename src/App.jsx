import { useEffect } from 'react';
import useLanguage from './hooks/useLanguage';

function App() {
  const { language, languageKey, switchLanguage } = useLanguage();

  useEffect(() => {
    console.log('lang', languageKey);
  }, [languageKey]);

  return (
    <>
      <div className="w-full flex flex-row p-3 justify-between">
        <div className="flex flex-row space-x-5">
          <img
            className="w-5 animate-spin delay-1000 hover:animate-pulse"
            src="https://d2fltix0v2e0sb.cloudfront.net/dev-black.png"
          />

          <div className="font-bold text-sm hover:cursor-pointer">
            {language.landingPage.about.toUpperCase()}
          </div>
          <div className="font-bold text-sm hover:cursor-pointer">
            {language.landingPage.contact.toUpperCase()}
          </div>
          <div className="font-bold text-sm hover:cursor-pointer">
            {language.landingPage.projects.toUpperCase()}
          </div>
        </div>
        <div className="flex flex-row ">
          <img
            className="w-5"
            src="https://www.svgrepo.com/show/506518/language.svg"
          />
          <select
            id="language-select"
            className="select"
            onChange={(p) => {
              switchLanguage(p?.target?.value);
            }}
          >
            <option value={languageKey}>{language.languages.main}</option>
            <option value="en">{language.languages.english}</option>
            <option value="pt-PT">{language.languages.portuguese}</option>
            <option value="fr">{language.languages.french}</option>
            <option value="de">{language.languages.german}</option>
            <option value="ru">{language.languages.russian}</option>
            <option value="ar">{language.languages.arab}</option>
            <option value="es">{language.languages.spanish}</option>
            <option value="hi">{language.languages.indian}</option>
          </select>
        </div>
      </div>
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
                className="w-6 cursor-pointer"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg"
              />{' '}
              <img
                onClick={() =>
                  window.open('https://github.com/spars57', '_blank')
                }
                title="LinkedIn"
                className="mx-2 w-6 cursor-pointer"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
              />
            </div>
            <div className=" flex flex-row mt-5 w-full align-middle">
              <div className="text-sm font-bold mt-5">TECH STACK</div>
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
            className="rounded-full w-60 h-60 ml-10"
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
    </>
  );
}

export default App;
