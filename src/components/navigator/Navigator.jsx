import React from 'react'
import "./navigator.css"
import {AiOutlineHome, AiOutlineUser, AiOutlineMail} from "react-icons/ai"
import {BsListCheck} from "react-icons/bs"

const Navigator = () => {
  return (
    <nav>
      <a href="#"><AiOutlineHome/></a>
      <a href="#about"><AiOutlineUser/></a>
      <a href="#experience"><BsListCheck/></a>
      <a href="#contact"><AiOutlineMail/></a>
    </nav>
  )
}

export default Navigator