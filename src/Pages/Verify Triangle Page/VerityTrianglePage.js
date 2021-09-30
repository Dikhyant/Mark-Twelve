import "./VerifyTrianglePage.css";

import { useState } from "react";

const VerifyTrianglePage = (props)=> {
    //var angle1 = 0 , angle2 = 0 , angle3 = 0 ;
    const [angle1 , setAngle1] = useState(0);
    const [angle2 , setAngle2] = useState(0);
    const [angle3 , setAngle3] = useState(0);


    const [isTriangle , setIsTriangle] = useState(null);

    var Message;

    if (isTriangle === 1) {
        Message = (
            <div>
                Yes it is triangle
            </div>
        );
    } else if(isTriangle === 0) {
        Message = (
            <div>
                No it is not triangle
            </div>
        );
    }
    return (
        <div className="verify-triangle" >
            <div className="page-title" >Verify Triangle</div>
            
            <div className="sub-heading" >Angle 1</div>
            <div><input type="number" onChange={(event)=>{
                setAngle1( parseInt(event.target.value) );
            }} /></div>

            <div className="sub-heading" >Angle 2</div>
            <div><input type="number" onChange={(event)=>{
                setAngle2( parseInt(event.target.value) );
            }} /></div>

            <div className="sub-heading" >Angle 3</div>
            <div><input type="number" onChange={(event)=>{
                setAngle3( parseInt(event.target.value) );
            }} /></div>

            
            <div className="btn" style={{marginTop: "1rem"}} onClick={(event)=>{
                if ( angle1 + angle2 + angle3 === 180) {
                    setIsTriangle(1);
                } else {
                    setIsTriangle(0);
                }
            }} >Is it a triangle</div>

            <div style={{marginTop: "1rem"}} >{Message}</div>
        </div>
    )
}

export default VerifyTrianglePage;