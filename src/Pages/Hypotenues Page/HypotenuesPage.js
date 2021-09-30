import "./HypotenuesPage.css";

import { useState } from "react";

const HypotenuesPage = (props)=> {
    //var angle1 = 0 , angle2 = 0 , angle3 = 0 ;
    const [baseValue , setBaseValue] = useState(0);
    const [heightValue , setHeightValue] = useState(0);
    const [hypotenuseValue , setHypotenuseValue] = useState(0);


    return (
        <div className="verify-triangle" >
            <div className="page-title" >Hypotenuse of Triangle</div>
            
            <div className="sub-heading" >Enter Base value</div>
            <div><input type="number" onChange={(event)=>{
                setBaseValue( parseInt(event.target.value) );
            }} /></div>

            <div className="sub-heading" >Enter Height value</div>
            <div><input type="number" onChange={(event)=>{
                setHeightValue( parseInt(event.target.value) );
            }} /></div>

            
            <div className="btn" style={{marginTop: "1rem"}} onClick={(event)=>{
                setHypotenuseValue( Math.sqrt( baseValue*baseValue + heightValue*heightValue ) );
            }} >Find hypotenuse</div>

            <div style={{marginTop: "1rem"}} >The hypotenuse of your triangle is {hypotenuseValue}</div>
        </div>
    )
}

export default HypotenuesPage;