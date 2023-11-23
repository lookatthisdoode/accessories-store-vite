const Landing = () => {
  return (
    <>
      <div className="fixed top-10 p-10 flex w-full h-full z-40">
        <div className="cart bg-neutral-600 h-100vh w-full">
          <div className="buttons flex justify-between p-5">
            <div className="text-4xl font-Nabi uppercase">Cart</div>
            <div className="text-4xl font-Nabi uppercase">Close</div>
          </div>

          <div className="item-container h-4/6 bg-pink-300 p-5 font-Nabi text-neutral-600">
            <div className="item flex text-4xl py-2 justify-between">
              <div className="name-qty  flex ">
                <div className="qty pr-2">2</div>
                <div className="name">Emerald Quartz</div>
              </div>
              <div className="price">20$</div>
            </div>
          </div>

          <div className="buttons flex justify-start p-5">
            <div className="text-4xl font-Nabi uppercase">Proceed To order</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Landing

const red = "hello"
