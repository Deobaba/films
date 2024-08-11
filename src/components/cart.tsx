interface Props{
    carts :string[],
    clearCart:()=>void
}

const Cart = ({carts,clearCart}:Props) => {
  return (
    <div>

    <ul className="text-2xl">
        {carts.map(cart=> <li>{cart}</li>)}
    </ul>
    <button onClick={clearCart}>clear</button>
      
    </div>
  )
}

export default Cart
