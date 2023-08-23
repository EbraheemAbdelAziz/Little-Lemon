const Nav = ()=>{
    return (
        <>
        <nav className="lg:col-span-6 lg:order-2" >
            <ul className="lg:flex lg:items-center lg:justify-end md:hidden hidden">
                <li className="mr-9"><a href="http://192.168.1.13:3000/Little-Lemon" >Home</a></li>
                <li className="mr-9"><a href="http://192.168.1.13:3000/Little-Lemon" >About</a></li>
                <li className="mr-9"><a href="http://192.168.1.13:3000/Little-Lemon" >Menu</a></li>
                <li className="mr-9"><a href="http://192.168.1.13:3000/Little-Lemon" >Order online</a></li>
                <li className="mr-9"><a href="http://192.168.1.13:3000/Little-Lemon" >Reservation</a></li>
                <li className="mr-9 bg-[#F4CE14] lg:w-28 h-10 rounded-lg flex items-center justify-center"><a href="http://192.168.1.13:3000/Little-Lemon" >Login</a></li>
            </ul>
        </nav>
        </>

    )
}
export default Nav ;