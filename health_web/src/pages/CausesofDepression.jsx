import React from 'react'
import causimg from "../assets/mental health4.png"

export default function CausesofDepression() {

  const causes_list =["Early childhood trauma.","Severe illness e.g. heart disease.","Drug abuse.","Family history."];
  return (
    <div>
      <h1>Causes of depression</h1>
      <div>
        <img src={causimg}/>
        <div>
          <ol>
          {causes_list.map((cause,index)=>(
              <li key={index}>{cause}</li>
            ))}
          </ol>
          

        </div>
      </div>
      
    </div>
  )
}
