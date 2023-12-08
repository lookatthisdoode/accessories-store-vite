import { useState } from 'react'
import './App.css'
import ProductCard from './components/ProductCard.jsx'
import Landing from './components/Landing.jsx'
import Nav from './components/Nav.jsx'
import Cart from './components/Cart.jsx'
import products from './products.json'

function App() {
  const STORAGE_PREFIX = 'VITALINA_ACCESORIES'
  const CART_STORAGE_KEY = `${STORAGE_PREFIX}-cart`

  const [cartOpen, toggleCartOpen] = useState(false)
  const [cartList, setCartList] = useState(loadCartContent())

  function loadCartContent() {
    const lanesJson = localStorage.getItem(CART_STORAGE_KEY)
    return JSON.parse(lanesJson) || []
  }

  function saveCartContent(cartContent) {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartContent))
  }

  function addToCart(id) {
    //create new array so you wont mess with original
    let newCart = [...cartList]
    //if item is exist in the cart just increase quantity
    const existingItem = newCart.find((i) => id === i.product.id)
    if (existingItem) {
      existingItem.quantity++
    }
    //if not push new entity to array
    else {
      const productToAdd = products.find((item) => item.id === id)
      productToAdd &&
        newCart.push({
          product: productToAdd,
          quantity: 1,
        })
    }

    setCartList(() => {
      saveCartContent(newCart)
      return newCart
    })
  }

  return (
    <>
      <section className="container flex justify-center px-5 py-10 pt-50vh">
        <Landing />
        {cartOpen && (
          <Cart
            toggleCartOpen={toggleCartOpen}
            cartList={cartList}
            setCartList={setCartList}
            saveCartContent={saveCartContent}
          />
        )}
      </section>
      <nav
        id="nav"
        className=" sticky top-0 z-40 flex w-full justify-center bg-neutral-600"
      >
        <div className="container p-5">
          <Nav toggleCartOpen={toggleCartOpen} cartQuantity={cartList.length} />
        </div>
      </nav>

      <div className="spacer h-40vh"></div>

      <div className="title w-full bg-neutral-100 p-5 text-center font-Nabi text-5xl text-pink-500 shadow-2xl lg:text-9xl">
        - Bracelettes -
      </div>
      <section className="flex w-full justify-center bg-pink-300">
        <div className="container">
          <div className="flex flex-wrap justify-center lg:justify-start">
            {products.map((product) => {
              if (product.type === 'bracelet')
                return (
                  <ProductCard
                    key={product.id}
                    addToCart={addToCart}
                    item={product}
                  />
                )
            })}
          </div>
        </div>
      </section>

      <div className="title w-full bg-neutral-100 p-5 text-center font-Nabi text-5xl text-pink-500 shadow-2xl lg:text-9xl">
        - Necklaces -
      </div>
      <section className="flex w-full justify-center bg-pink-300 ">
        <div className="container">
          <div className="flex flex-wrap justify-center lg:justify-start">
            {products.map((product) => {
              if (product.type === 'necklace')
                return (
                  <ProductCard
                    key={product.id}
                    addToCart={addToCart}
                    item={product}
                  />
                )
            })}
          </div>
        </div>
      </section>

      <div className="spacer h-40vh"></div>
    </>
  )
}

import '../script.js'
export default App
