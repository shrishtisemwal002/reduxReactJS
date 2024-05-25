import Car from './Car';
import Garage from './industry';


const List = () =>{
    const obj = {
        name: "maruti",
        modalName: "alto",
        color:"red"
    }

    return(
        <>
        <Car details={obj} />
        </>
    )
}

export default List;