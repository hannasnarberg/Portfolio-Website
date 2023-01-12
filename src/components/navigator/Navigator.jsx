import React from 'react'
import "./navigator.css"
import {AiOutlineHome, AiOutlineUser, AiOutlineMail} from "react-icons/ai"
import {BsListCheck} from "react-icons/bs"
import {useState} from "react"

const Navigator = () => {
  const [activeNav, setActiveNav] = useState("#"); //not working with the classname.Stylings don't stick
  return (
    <nav>
      <a href="#" onClick={()=> setActiveNav("#")} className={activeNav === "#"? "active": ""}><AiOutlineHome/></a>
      <a href="#about" onClick={()=> setActiveNav("#about")} className={activeNav === "#about"? "active": ""}><AiOutlineUser/></a>
      <a href="#experience" onClick={()=> setActiveNav("#experience")} className={activeNav === "#experience"? "active": ""}><BsListCheck/></a>
      <a href="#contact" onClick={()=> setActiveNav("#contact")} className={activeNav === "#contact"? "active": ""}><AiOutlineMail/></a>
    </nav>
  )
}

export default Navigator