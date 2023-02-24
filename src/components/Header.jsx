import React from 'react'
import {AiOutlineQuestionCircle} from "react-icons/ai"
import pic from "../assets/logo.png";

const Header = () => {
  return (
    <div className='header'>
        
        <img src={pic} className="logo"/>
        <h1>Wordle</h1>
    
    <AiOutlineQuestionCircle className='questionCircle'/>
    </div>
  )
}

export default Header