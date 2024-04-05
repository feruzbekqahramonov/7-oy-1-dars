import icon1 from './assets/icon-1.svg'
import icon2 from './assets/icon-2.svg'
import icon3 from './assets/icon-3.svg'
import "./App.css";

function App() {
  return (
    <>
      <div className="mx-auto flex">
        <div className="flex w-3/4 mx-auto flex justify-between items-center py-8">
          <div className="logo">
            <span>Alifreza</span>
          </div>
          <nav className="flex gap-6 items-center">
            <a
              className="hover:text-yellow-500 transition duraction-50"
              href="#"
            >
              Home
            </a>
            <a
              className="hover:text-yellow-500 transition duraction-50"
              href="#"
            >
              Services
            </a>
            <a
              className="hover:text-yellow-500 transition duraction-50"
              href="#"
            >
              Work
            </a>
            <a
              className="hover:text-yellow-500 transition duraction-50"
              href="#"
            >
              About us
            </a>
            <a
              className="hover:text-yellow-500 transition duraction-50"
              href="#"
            >
              Blog
            </a>
            <button className="button">Contact</button>
          </nav>
        </div>
      </div>

      <div className="mx-auto mt-30 cont">
        <div className="w-3/4 mx-auto ">
          <h3 className="text-4xl font-bold text-green-600 mb-6">Hello, I’m Alif Reza</h3>
          <h1 className="text-7xl font-bold mb-8">Product Designer|</h1>
          <p className="text-neutral-500 mb-7">
            I’m from Singapore and I have been working as a Product Designer for <br />
            more than 7 years. I’ve worked for a Hanziree company Pabloo as a <br />            Product Designer and Front-end Developer for 3 years.
          </p>
          <div className="flex items-center gap-5">
            <button className="button">Email Me</button>
            <button className="text-neutral-500 font-bold">Download CV</button>
          </div>
        </div>
      </div>

      <div className="w-100 mx-auto mt-36 mb-5">
        <div className="flex justify-between items-center mx-auto w-3/4">
          <h2 className="text-5xl font-bold mb-6">7+ years experience <br /> working</h2>
          <div>
            <span className="text-green-600">___ Services</span>
            <p className="text-neutral-500 mt-1">Discover the best services I offer, designed to <br /> ensure the success of your project.</p>
          </div>
        </div>
        <div className="w-3/4 mx-auto mt-36 flex gap-5">
          <div className="w-80 bg-zinc-800 h-80 py-10 px-8 card">
            <img  src={icon1} alt="" />
            <h4 className='text-2xl font-bold mb-6 mt-7'>Product design</h4>
            <p className="text-neutral-500 mt-1">
            I offer innovative and attention-grabbing product design services. From initial ideation to implementation.
            </p>
          </div>
          <div className="w-80 bg-zinc-800 h-80 py-10 px-8 card">
            <img  src={icon2} alt="" />
            <h4 className='text-2xl font-bold mb-6 mt-7'>Frontend develop</h4>
            <p className="text-neutral-500 mt-1">
            Specialize in responsive and interactive front-end development. With a deep understanding of HTML, CSS, and JS.
            </p>
          </div>      
          <div className="w-80 bg-zinc-800 h-80 py-10 px-8 card">
            <img  src={icon3} alt="" />
            <h4 className='text-2xl font-bold mb-6 mt-7'>Brand strategy</h4>
            <p className="text-neutral-500 mt-1">
            I help design strong and captivating brand strategies. Through thorough research and market analysis.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
