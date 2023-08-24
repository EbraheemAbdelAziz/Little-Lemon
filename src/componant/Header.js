import logo from "../assets/icons_assets/Logo .png"
import "./style/header.css"
import {FaTimes , FaBars} from "react-icons/fa"
import { useState } from "react"
import basket from "../assets/icons_assets/Basket.png"
const Header = ({children})=>{
    const [sidebar ,setSidebar] = useState(false);
    const handleClick = (e) => {
        (sidebar === false) ? setSidebar(true) : setSidebar(false)
    }
return(
    <>
    <header className="scroll-smooth lg:grid md:grid lg:h-28 h-16 lg:grid-cols-12 gap-x-5  lg:px-16 md:px-16 px-10 content-center md:grid-cols-8 md:h-32 grid grid-cols-4    ">
        <img alt="logo" src={logo} className="lg:object-fill lg:col-start-3 lg:col-end-5 lg:order-1 md:order-2 md:col-start-4 md:col-end-6 md:w-96 order-2 col-start-2 col-span-2 justify-self-center lg:justify-self-start lg:w-44 lg:self-center "  />
        {children}
        {
            !sidebar && (<button onClick={handleClick} className="lg:hidden md:col-start-1 md:order-1 md:text-5xl text-3xl order-1 col-start-1">
                <FaBars />
        </button>)
        }
        <button className="lg:hidden md:order-3 md:col-start-8 justify-self-end order-3 col-start-4 ">
                <img alt="Basket icon" className="md:w-14 w-9"  src={basket}/>
        </button>
    </header>
    {
        sidebar && (<aside className="scroll-smooth lg:hidden z-50  absolute top-0 left-0 md:w-full full bg-primary-2">
            {sidebar && (<button onClick={handleClick} className="lg:hidden text-Highlight-1 md:col-start-1  md:order-1 md:top-10 md:left-16 top-3 left-10 md:text-6xl text-4xl relative">
                        <FaTimes />
                    </button>)}
            <ul className="flex items-center  bg-primary-2 flex-col full lg:hidden h-96 mt-16  ">
                <li className=" p-5 md:font-bold text-3xl md:font-main"><a href="http://192.168.1.13:3000/Little-Lemon" >Home</a></li>
                <li className=" p-5 md:font-bold text-3xl md:font-main"><a href="http://192.168.1.13:3000/Little-Lemon" >About</a></li>
                <li className=" p-5 md:font-bold text-3xl md:font-main"><a href="http://192.168.1.13:3000/Little-Lemon" >Menu</a></li>
                <li className=" p-5 md:font-bold text-3xl md:font-main"><a href="http://192.168.1.13:3000/Little-Lemon" >Reservation</a></li>
                <li className=" p-5 md:font-bold text-3xl md:font-main"><a href="http://192.168.1.13:3000/Little-Lemon" >Order online</a></li>
                <li className=" p-5 md:font-bold text-3xl md:font-main bg-[#F4CE14] md:w-32 h-10 rounded-lg flex items-center justify-center"><a href="http://192.168.1.13:3000/Little-Lemon" >Login</a></li>
            </ul>
        </aside>)
    }
    </>
)
}
export default Header;