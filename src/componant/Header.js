import logo from "../assets/icons_assets/Logo .png"

const Header = ({children})=>{
return(
    <header>
        <img alt="logo" src={logo} />
        {children}
    </header>
)
}
export default Header;