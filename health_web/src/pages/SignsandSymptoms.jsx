import React from 'react';
import signsimg from "../assets/mental health 3.png"

export default function SignsandSymptoms() {
  const sign_list =["Persistent sadness","Feelings of guilt and hopelessness.","Loss of interest in activities one enjoyed e.g. hobbies.","Fatigue","Sudden loss or gain of appetite."];
  return (
    <div>
      <h1>Signs and symptoms of depression</h1>
      <div>
        <img src={signsimg}></img>
        <div>
          <ol style={{listStyle:"upper-roman"}}>
            {sign_list.map((sign,index)=>(
              <li key={index}>{sign}</li>
            ))}
          </ol>

        </div>
      </div>
    </div>
  )
}
