import { useState } from "react";
import image from "../assets/icons_assets/eating_02.jpg"
const BookingForm = (props)=>{

    const [alert1 ,setAlert1] = useState()
    const [x ,setX] = useState()
    const [date ,setDate] = useState()
    const [time ,setTime] = useState()
    const [guestsNumber ,setGuestNumber] = useState()
    const [occasion ,setOccasion] = useState()
    const [reservation, setReservation] = useState({guestsNumber: guestsNumber, date: '', time: '', occasion: occasion});

    const xChange = (e)=>{
        setX(e.target.value);
    }
    const dateHandle = (e)=>{
        setDate(e.target.value);
        setReservation({...reservation , date: date})
        props.dispatchTimeslotsOnDateChange(date);
    }
    const timeHandle =(e)=>{
        setTime(e.target.value);
        setReservation({...reservation , time: time})
    }
    const guestNumberHandle =(e)=>{
        setGuestNumber(e.target.value);
        setReservation({...reservation , guestsNumber: guestsNumber})

    }
    const occasionHandle =(e)=>{
        setOccasion(e.target.value);
        setReservation({...reservation , occasion: occasion})

    }
    const clear =()=>{
        setX(null)
        setDate("")
        setTime("")
        setGuestNumber("")
        setOccasion(null)
    }
    const submitHandle = (e)=>{
        e.preventDefault();
        setAlert1(true)
        clear()
    // Submission happens here
    props.submitReservation(reservation);
    }
    const validateReservation = () => {
    if (reservation.time !== '' && 
        reservation.date !== '' && 
        reservation.guests !== '' && 
        reservation.ocassion !== '') {
      return true;
    }

    return false;
  }




return (
    <>
    <img alt="img" src={image} className="col-span-4 md:col-start-3 md:col-span-4 lg:self-center "/>
    <form onSubmit={submitHandle}  className="col-span-4 mb-10 flex flex-wrap md:col-start-3  md:col-span-4 lg:col-start-7 lg:self-center lg:my-10"> 
        {
            (alert1 === true) && 
            <div class=" text-center py-4 lg:px-4 w-full">
        <div class="p-2 bg-green-700 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex w-full" role="alert">
            <span class="flex rounded-full bg-green-900 uppercase px-2 py-1 text-xs font-bold mr-3">Success</span>
            <span class="font-semibold mr-2 text-left flex-auto">You completed the reservation ✔</span>
        </div>
        </div>
        }
        <label htmlFor="res-date" className="">Choose date</label>
        <input value={date} onChange={dateHandle} type="date" id="res-date" className="px-4 py-3 rounded-full w-full my-2"/>
        <label htmlFor="res-time" className="">Choose time</label>
        <div className="my-3 flex w-full" onChange={xChange}>
            <input type="radio" value="morning" name="timeSection" className=" block self-center mr-2 "/> 
            <label>morning</label>
            <input type="radio" value="afternoon" name="timeSection" className=" block self-center mr-2 ml-3"/>
            <label>afternoon</label>
            <input type="radio" value="evening" name="timeSection" className=" block self-center mr-2 ml-3"/> 
            <label>evening</label>
        </div>
        <label htmlFor="res-time" className="">Avalibale times</label>
        <select value={time} onChange={timeHandle} id="res-time " placeholder="Choose time first" className="form-select w-full px-4 py-3 rounded-full my-2">
            {
                (x === "morning") &&
                props.availableTimeSlots.morning.map((item,index)=>{
                    return (
                        <option key={index}>{item}</option>
                    )
                })
            }
            {
                (x === "afternoon") &&
                props.availableTimeSlots.afternoon.map((item,index)=>{
                    return (
                        <option key={index}>{item}</option>
                    )
                })
            }
            {
                (x === "evening") &&
                props.availableTimeSlots.evening.map((item,index)=>{
                    return (
                        <option key={index}>{item}</option>
                    )
                })
            }
        </select>
        <label htmlFor="guests" className=" mt-2">Number of guests</label>
        <input value={guestsNumber} onChange={guestNumberHandle} type="number" placeholder="1" min="1" max="10" id="guests" className="px-4 py-3 rounded-full w-full form-input my-2"/>
        <label htmlFor="occasion" className="">Occasion</label>
        <select value={occasion} onChange={occasionHandle} id="occasion" className=" w-full my-2 px-4 py-3 rounded-full">
            <option>Birthday</option>
            <option>Anniversary</option>
        </select>
        {
            (validateReservation()) ?
            <input type="submit" value="Make Your reservation" className="mx-auto w-full mt-2 px-4 py-3 rounded-full bg-primary-1 font-main hover:cursor-pointer" />
            : <input type="submit" value="Make Your reservation" className="mx-auto w-full mt-2 px-4 py-3 rounded-full bg-primary-2 font-main hover:cursor-not-allowed" disabled/>

        }
    </form>
    </>
)
}
export default BookingForm;