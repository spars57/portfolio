function App() {
  return (
    <>
      <div className="grid grid-rows-1 grid-flow-col h-screen place-content-center">
        <div className="flex flex-row w-full items-center">
          <div className="flex flex-col">
            <div className="text-5xl font-bold">
              Front-end <br></br>React Developer 👋🏻
            </div>
            <div className="text-sm mt-1">
              {
                "Hi! I'm Bruno Moisão. A Fullstack Developer based in Lisbon, Portugal 📍"
              }
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
    </>
  )
}

export default App
