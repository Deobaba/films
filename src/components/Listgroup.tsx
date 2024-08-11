import { useState } from "react"

interface Props {
    items: string[],
    heading:string,
    handleClick:(item:string) => void
}


const Listgroup = ({items,heading,handleClick}:Props) => {
    
    const [selectIndex, useSelectIndex] = useState(-1)
    return (
       
      <div>
          {items.length !== 0 ? <p>{heading}</p> : null}
        <ul>
          {items.map((item,index) => 
          <li className={ selectIndex === index ? ' text-green-400 text-3xl' : "text-black text-2xl" } onClick={() =>{useSelectIndex(index), handleClick(item)}} key={item}>{item}</li>)}
        </ul>
      </div>
    )
  }

export default Listgroup
