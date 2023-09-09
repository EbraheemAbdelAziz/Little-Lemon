import BookingForm from "../componant/BookingForm"
import Footer from "../componant/Footer"
import Header from "../componant/Header"
import Nav from "../componant/Nav"
const BookingPage = ()=>{
    return(
        <>
        <Header >
            <Nav />
        </Header>
        <BookingForm />
        <Footer />
        </>
    )
}
export default BookingPage;