const Cart = (props) => {
  function deleteFromCart(id) {
    // Create a shallow copy of the cartList
    let currCart = [...props.cartList]

    // Find the index of the item with the specified id
    const itemIndex = currCart.findIndex((item) => item.product.id === id)

    // If the item exists in the cart
    if (itemIndex !== -1) {
      // Decrease the quantity if greater than 1
      if (currCart[itemIndex].quantity > 1) {
        currCart[itemIndex].quantity--
      } else {
        // Remove the item from the cartList if quantity is 1
        currCart.splice(itemIndex, 1)
      }
      // Optionally, you can set the updated cart back to your component state
      // For example, if using React and you have a setState function:
      props.setCartList(currCart)
    }
  }

  return (
    <>
      <div
        data-cart
        className="fixed top-14 z-50 flex h-full w-full flex-col items-center rounded-md bg-yellow-400 p-5 pb-20 shadow-2xl shadow-neutral-600 duration-500 lg:right-10 lg:h-2/3 lg:w-2/5 lg:p-10"
      >
        <div className="flex w-full items-center justify-between text-5xl">
          <div className="font-bold ">Cart</div>
          <button
            onClick={() => props.toggleCartOpen(false)}
            className="aspect-square w-10 cursor-pointer overflow-hidden  rounded-full bg-red-600 text-center text-[2rem] hover:bg-red-700"
          >
            <img
              data-cart-close
              width="512"
              alt="Flat cross icon"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Flat_cross_icon.svg/512px-Flat_cross_icon.svg.png"
            ></img>
          </button>
        </div>

        <div
          data-cart-item-container
          className="mt-6 max-h-[50vh] w-full overflow-y-scroll rounded-t-md bg-neutral-200 p-5 font-Nabi text-neutral-600 lg:max-h-[70vh]"
        >
          {props.cartList.map((item) => {
            return (
              <div
                key={item.product.id} // Add a unique key for each item
                data-cart-item
                className="flex justify-between py-2"
              >
                <div className="flex items-baseline gap-3">
                  <div
                    onClick={() => deleteFromCart(item.product.id)}
                    data-cart-item-delete
                    className="text-1xl h-3 w-3 cursor-pointer overflow-hidden rounded-full bg-red-600 hover:bg-red-700"
                  >
                    -
                  </div>
                  <span>{item.quantity}</span>
                  <div data-cart-item-name>{item.product.name}</div>
                </div>
                <div data-cart-item-price>{`${
                  item.product.price * item.quantity
                }$`}</div>
              </div>
            )
          })}
        </div>

        <div className="w-full rounded-b-md bg-neutral-300 py-2 text-center text-3xl text-neutral-500">
          Total:
          {` ${parseInt(
            props.cartList.reduce((accumulator, item) => {
              // Calculate the total value for the current item and add it to the accumulator
              accumulator += item.quantity * item.product.price

              return accumulator
            }, 0),
          )}$`}
        </div>
        <div className=" mt-auto flex w-full flex-col items-center gap-5 rounded-3xl bg-green-600 p-5 text-3xl lg:rounded-md">
          <div className="cursor-pointer font-bold hover:text-red-500 ">
            Proceed To Order
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart
