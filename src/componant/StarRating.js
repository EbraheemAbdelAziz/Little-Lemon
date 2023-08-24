import starIcon from "../assets/icons_assets/star.png"
import starIcon2 from "../assets/icons_assets/star (1).png"

const StarRating = (props)=> {

    const good = props.rateing
    const bad = 5 - props.rateing
    let goodStars = []
    let badStars = []
    for (let index = 0; index < good; index++) {
        goodStars.push(<img alt="icon" className="ml-1" src={starIcon} />);
    }
    for (let index = 0; index < bad ; index++) {
        badStars.push(<img alt="icon" className="ml-1"  src={starIcon2} />);
        
    }
    return(
        <div className="flex ml-1">
        {goodStars}
        {badStars}
        </div>
    )
}
export default StarRating;