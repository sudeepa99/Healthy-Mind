import React from 'react'
import bodyimg from "../assets/Group.png"



export default function BodyPart() {
    
    let heading=`What is
    depression?`;
  return (
    <div>
        <div className="para">
            <div>
                <h1>{heading}</h1>
            </div>
            <div>
                <p>Depression or ‘depressive disorder’ is a mood disorder that causes distressing symptoms that affect how you feel, think and handle your daily activities.</p>
            </div>
        </div>
        <div>
            <img src={bodyimg}></img>
        </div>
      
    </div>
  )
}
