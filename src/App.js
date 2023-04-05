import "./styles/styles.css"
import Sun from "./assets/sun.png"
import Logo from "./assets/Union.png"
import Me from "./assets/me.png"
import {GrLinkedinOption} from "react-icons/gr";
import {FaInstagram, FaDribbble, FaGithub} from "react-icons/fa";

function App() {
  return (
    <div className="App">
      <div className="navbar px-20 bg-black h-20 text-white flex flex-row justify-between items-center">
        <div className="logo flex items-center">
          <img src={Logo} alt="logo" />
          <p className="font-bold text-lg ml-3">BISCUIT</p>
        </div>
        <div className="menu w-96">
          <ul className="flex justify-between items-center">
            <li>About</li>
            <li>Work</li>
            <li>Contact</li>
            <li><img src={Sun} alt="dark mode"/></li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col items-center max-w-4xl mx-auto py-16">
          <div className="text-white flex flex-col items-center">
            <img src={Me} alt="Me" width="128"/>
            <h3 className="mt-3">Hi, I’m Nanang Prasetya</h3>
          </div>
          <div className="mt-10">
            <h1 className="text-white font-extrabold text-6xl text-center">
              UI/UX Designer and Software Development
            </h1>
          </div>
          <div className="text-zinc-500 max-w-xl mt-10">
            <p className="text-center">I’m from Indonesia and I have been working (Freelance) as a Software Development especially in the UI/UX Designer and Development for more than 2 year at <span className="text-white">Panemu Indonesia</span> company.</p>
          </div>
          <div className="button-group mt-16">
            <button className="text-white py-1 px-10 rounded-2xl mr-10 bg-emerald-500 hover:bg-emerald-600">Say Helloo</button>
            <button className="text-white py-1 px-10 rounded-2xl mr-10 bg-cyan-500 ">Say Helloo</button>
          </div>
          <div className="text-white flex flex-row items-center justify-between gap-8 mt-10 text-2xl">
            <GrLinkedinOption/>
            <FaInstagram />
            <FaDribbble />
            <FaGithub />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
