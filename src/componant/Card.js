import icon from "../assets/icons_assets/fast-delivery.png"
const Card = (props) => {
    return (
    <div className="grid grid-cols-4 gap-x-5 auto-rows-auto md:grid-cols-6 lg:grid-cols-3 lg:w-72 " >
    <h2 className="col-start-1 col-span-2 text-xl font-bold font-second lg:order-2 lg:mt-3">{props.name}</h2>
    <p className="text-primary-2 col-start-1 col-span-2 h-24 text-ellipsis font-second overflow-hidden  md:col-span-4 md:col-start-1 lg:order-4 lg:my-5 ">{props.descripion}</p>
    <img alt="food-img" src={props.img}
    className="col-start-3 col-span-2 w-24 h-24 font-second justify-self-end rounded-md md:col-start-5 md:justify-self-center md:w-36 md:h-36
    lg:order-first lg:col-start-1 lg:col-span-3  lg:w-full lg:h-48 lg:rounded-none lg:rounded-t-lg"></img>
    <p className="col-start-1 col-span-2 p-5 text-lg text-Secondary-1 lg:order-3 lg:col-start-3 lg:justify-self-center lg:p-0 lg:self-center lg:col-span-1 lg:mt-3 font-main "><span>$</span>{props.price}</p>
    <button className="col-start-3 col-span-2 justify-self-center flex lg:order-5 lg:col-start-1 lg:col-span-3 lg:justify-self-start"><p className="self-center text-sm w-fit lg:text-base font-second font-bold">Order a delivery</p>
        <img alt="icon" src={icon} className="ml-3 self-center w-6"/>
    </button>
    </div>
    )
}
export default Card;