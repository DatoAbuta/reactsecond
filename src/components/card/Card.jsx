import React from 'react'
import dis from './cards.module.css'

const Card = ({
    hover,
    name,
    imgUrl,
    desc,
    backgroundColor,
    buttonColor,
    button
  }) => {


  return (
    <div style ={{background:backgroundColor}}  className={`${dis.card}`}>
        <img className={dis.img} src={imgUrl} />
        <h1 className={dis.h1}>{name}</h1>
        <p className={dis.p}>{desc}</p>
        <button style={{color:buttonColor}}  className={`${dis.button}   ${dis[hover]}`}>{button}</button>
    </div>
  )
}

export default Card