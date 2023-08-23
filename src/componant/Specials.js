import Card from "./Card"
import { useEffect, useState } from "react"
import cardsData from "./data/CardsData"

const Specials = () => {
    const [ data , setData ] = useState([{}]);
    useEffect(()=>{
        setData(cardsData)
    },[])
    return (
        <>
        <h1 className=" col-start-1  col-span-2 text-Karla text-2xl font-extrabold self-center text-primary-1  md:col-span-3 lg:col-start-3">This weeks specials!</h1>
            <button className="col-start-3 col-span-2 self-start justify-self-end h-9 w-36 mt-3 md:col-start-6 md:justify-self-center md:self-center md:col-span-4 lg:w-52 md:w-48  lg:h-16 md:h-14 lg:col-start-8  mb-4 bg-primary-1 rounded-lg text-Highlight-2 font-main lg:text-xl md:text-xl text-lg font-bold">Order online</button>
            <div className="col-start-1 col-span-4 my-10 md:col-start-2 md:col-span-6 lg:col-start-3 lg:col-span-8 lg:flex lg:justify-between lg:gap-x-5">
            {
                data.map((item) =>{
                    return <Card name={item.name} descripion={item.descripion} price={item.price} img={item.img} />
                })
            }
            </div>
        </>
    )
}
export default Specials;