import logo from "../assets/icons_assets/Logo .png"
const Footer = ()=>{
return(
    <footer>
        <img alt="logo" src={logo} />
        <div>
            <h3>Doormat<br/>Navigation</h3>
            <a href=" http://localhost:3000/Little-Lemon" >Home</a>
            <a href=" http://localhost:3000/Little-Lemon" >About</a>
            <a href=" http://localhost:3000/Little-Lemon" >Menu</a>
            <a href=" http://localhost:3000/Little-Lemon" >Reservation</a>
            <a href=" http://localhost:3000/Little-Lemon" >Order online</a>
            <a href=" http://localhost:3000/Little-Lemon" >Login</a>
        </div>
        <div>
            <h3>Contact</h3>
            <a href=" http://localhost:3000/Little-Lemon" >Address</a>
            <a href=" http://localhost:3000/Little-Lemon" >Phone number</a>
            <a href=" http://localhost:3000/Little-Lemon" >email</a>
        </div>
        <div>
            <h3>Social media</h3>
            <a href=" http://localhost:3000/Little-Lemon" >Address</a>
            <a href=" http://localhost:3000/Little-Lemon" >Phone number</a>
            <a href=" http://localhost:3000/Little-Lemon" >email</a>
        </div>
    </footer>
)
}
export default Footer;