import React from 'react'
import Cookies from 'js-cookie'
const GetCookie = () => {
  alert(Cookies.get("jwt"));
};
export default function Classroom() {

  return (
    <div className='logistic Management'>
      <nav>
       <ul>
        <li>home</li>
        <li>classroom</li>
       </ul>
      </nav>
      <div className='slide'>room1</div>
      <div className='slide'>room2</div>
      <main>logistic Management details</main>
      <button onClick={GetCookie}>Get Cookie</button>

      </div>
      
      
  )
}
