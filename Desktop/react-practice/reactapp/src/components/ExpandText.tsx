import { useState } from "react"

interface Props{
    children:string,
    chars? : number
}

const ExpandText = ({children,chars=100}:Props) => {
  if(children.length <= chars) return <p>{children}</p>

  const [isExpanded, setExpand] = useState(false)
  
  const text =isExpanded ? children : children.substring(0,chars)

  return <p>{text}...<button className="border bg-red-400 p-4 " onClick={()=> setExpand(!isExpanded)}>{isExpanded ? 'less ': 'more'}</button></p>
  
}

export default ExpandText
