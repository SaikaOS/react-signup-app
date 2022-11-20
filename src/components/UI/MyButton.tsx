import React, { FC, MouseEventHandler } from 'react'

interface IButton {
    title: string,
    styleBtn: string,
    styleTitle: string,
    onClick?: MouseEventHandler
}

const MyButton:FC<IButton> = ({title, styleBtn, styleTitle, onClick}) => {
  return (
    <button className={styleBtn} onClick={onClick}>
       <p className={styleTitle}>{title}</p>
    </button>
  )
}

export default MyButton