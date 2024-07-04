const Cart = ({ API_URL, cartList, updateCart, toggleCart }) => {
  const totalPrice = parseInt(
    cartList.reduce((accumulator, item) => {
      // Calculate the total value for the current item and add it to the accumulator
      accumulator += item.quantity * item.product.price
      return accumulator
    }, 0),
  )

  function deleteFromCart(_id) {
    // Create a shallow copy of the cartList
    let newCart = [...cartList]

    // Find the index of the item with the specified id
    const itemIndex = newCart.findIndex((item) => item.product._id === _id)

    // If the item exists in the cart
    if (itemIndex !== -1) {
      // Decrease the quantity if greater than 1
      if (newCart[itemIndex].quantity > 1) {
        newCart[itemIndex].quantity--
      } else {
        // Remove the item from the cartList if quantity is 1
        newCart.splice(itemIndex, 1)
      }
      // Optionally, you can set the updated cart back to your component state
      // For example, if using React and you have a setState function:

      updateCart(newCart)
    }
  }

  function sendOrder(cartList) {
    // Drops immediately if there is nothing in cartList array
    if (cartList.length < 1) return
    fetch(`${API_URL}/api/sendorder`, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(cartList),
    })
      .then((response) => {
        if (response.ok) {
          updateCart([])
          alert('Thank you for your order')
        } else {
          throw new Error(
            `Server responded with status: ${response.status}, ${response.statusText}`,
          )
        }
      })
      .catch((error) => {
        console.error(`CLIENT: ${error.message}`)
        alert('Something went wrong, try again..')
      })
  }

  return (
    <>
      <div className="fixed top-3 z-50 flex h-full w-full flex-col items-center rounded-md bg-amber-300 p-5 pb-20 shadow-2xl shadow-neutral-600 duration-500 lg:right-10 lg:h-2/3 lg:w-2/5 lg:p-10">
        <div className="flex w-full items-center justify-between text-5xl text-neutral-500 ">
          <div className="font-bold ">Shopping Cart</div>
          <button
            onClick={toggleCart}
            className="aspect-square w-10 cursor-pointer overflow-hidden  rounded-full bg-red-600 text-center text-[2rem] hover:bg-red-700"
          >
            <img
              width="512"
              alt="x"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Flat_cross_icon.svg/512px-Flat_cross_icon.svg.png"
            ></img>
          </button>
        </div>

        {cartList.length < 1 ? (
          <div className="empty-cart mt-6 max-h-[50vh] w-full overflow-y-scroll rounded-md bg-neutral-200 p-5 text-xl text-neutral-600 lg:max-h-[70vh]">
            There is nothing yet..
          </div>
        ) : (
          <div className="mb-10 mt-6 max-h-[50vh] w-full overflow-y-scroll rounded-md bg-neutral-200 p-5 text-neutral-600 lg:max-h-[70vh]">
            {cartList.map((cartListItem) => (
              <div
                key={cartListItem.product._id} // Add a unique key for each cartListItem
                className="flex justify-between py-2"
              >
                <div className="flex gap-3">
                  <div
                    onClick={() => deleteFromCart(cartListItem.product._id)}
                    className="flex h-full w-4 cursor-pointer items-center duration-200 hover:-translate-x-1"
                  >
                    <div className="minus h-1 w-3 rounded-full bg-red-600"></div>
                  </div>
                  <div>{cartListItem.quantity}</div>
                  <div>{cartListItem.product.name}</div>
                </div>
                <div>{`${
                  cartListItem.product.price * cartListItem.quantity
                }$`}</div>
              </div>
            ))}
            <div className="mt-4 w-full rounded-md bg-neutral-300 py-2 text-center text-3xl font-bold text-neutral-500">
              {`Total: ${totalPrice}.00$`}
            </div>
          </div>
        )}

        <div className="mt-auto flex w-full flex-col items-center gap-5 rounded-3xl bg-neutral-500 p-5 text-3xl lg:rounded-md">
          <div
            onClick={() => sendOrder(cartList)}
            className="cursor-pointer font-bold hover:text-pink-300 "
          >
            Proceed To Order
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart
