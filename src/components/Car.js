// const Car = (props) =>{
//     return(
//         <>
//         <h1>This is a {props.details.name}</h1>
//         </>
//     )
// }


// export default Car;

// import Garage from "./industry"
// import React from "react"

import { Component } from "react";
import Garage from "./industry";

class Car extends Component{

    constructor(props){
        super(props);
        this.state = {
            name:"suzuki",
            modalName:"alto800",
            color:"red"
        }
    }
    
    handleChange = () =>{
        this.setState({color :"blue"});
    }

    render(){
        
        return (
        <>
        {/* <Garage info={this.state} /> */}
        <h1>This is a {this.state.color} car</h1>
        <button onclick="this.handleChange">Change Color</button>
        </>
        )
    }
}

export default Car;