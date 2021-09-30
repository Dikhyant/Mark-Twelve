import "./TriangleAreaPage.css";

import { useState } from "react";

const VerifyTrianglePage = (props)=> {
    //var angle1 = 0 , angle2 = 0 , angle3 = 0 ;
    const [side1 , setSide1] = useState(0);
    const [side2 , setSide2] = useState(0);
    const [side3 , setSide3] = useState(0);
    const [area , setArea] = useState(0);

    return (
        <div className="verify-triangle" >
            <div className="page-title" >Area of Triangle</div>
            
            <div className="sub-heading" >Enter first side of a triangle</div>
            <div><input type="number" onChange={(event)=>{
                setSide1( parseInt(event.target.value) );
            }} /></div>

            <div className="sub-heading" >Enter second side of a triangle</div>
            <div><input type="number" onChange={(event)=>{
                setSide2( parseInt(event.target.value) );
            }} /></div>

            <div className="sub-heading" >Enter third side of a triangle</div>
            <div><input type="number" onChange={(event)=>{
                setSide3( parseInt(event.target.value) );
            }} /></div>

            
            <div className="btn" style={{marginTop: "1rem"}} onClick={(event)=>{
                const s = (side1 + side2 + side3) / 2;
                setArea( Math.sqrt( s*(s - side1)*(s - side2)*(s - side3) ) );
            }} >Find Area of triangle</div>

            <div style={{marginTop: "1rem"}} >Area of your triangle is {area}</div>
        </div>
    )
}

export default VerifyTrianglePage;