interface Props{
    arrayLength:number
}

const Navbar = ({arrayLength}:Props) => {
  return (
    <div>

        <nav>Cart:{arrayLength}</nav>
      
    </div>
  )
}

export default Navbar
