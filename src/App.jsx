import { useState, useEffect } from 'react'
import './App.css'
import ProductCard from './components/ProductCard.jsx'
import Landing from './components/Landing.jsx'
import Nav from './components/Nav.jsx'
import Cart from './components/Cart.jsx'
import products from './products.json'

function App() {
  const [cartOpen, toggleCartOpen] = useState(false)
  const [cartList, setCartList] = useState([])

  function addToCart(id) {
    let newCart = [...cartList]
    const existingItem = newCart.find((i) => id === i.product.id)
    if (existingItem) {
      existingItem.quantity++
    } else {
      const productToAdd = products.find((item) => item.id === id)

      if (productToAdd) {
        newCart.push({
          product: productToAdd,
          quantity: 1,
        })
      }
    }
    setCartList(newCart)
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
          />
        )}
      </section>
      <nav
        id="nav"
        className=" sticky top-0 z-40 flex w-full justify-center bg-neutral-600"
      >
        <div className="container p-5">
          <Nav toggleCartOpen={toggleCartOpen} />
        </div>
      </nav>

      <div className="spacer h-40vh"></div>

      <div className="title w-full bg-neutral-100 p-5 text-center font-Nabi text-5xl text-blue-500 shadow-2xl lg:text-9xl">
        - Bracelettes -
      </div>

      <section className="flex w-full justify-center bg-pink-300">
        <div className="container">
          <div className="flex flex-wrap justify-center lg:justify-start">
            <ProductCard addToCart={addToCart} item={products[0]} />
            <ProductCard addToCart={addToCart} item={products[1]} />
            <ProductCard addToCart={addToCart} item={products[2]} />
            <ProductCard addToCart={addToCart} item={products[3]} />
            <ProductCard addToCart={addToCart} item={products[0]} />
            <ProductCard addToCart={addToCart} item={products[1]} />
          </div>
        </div>
      </section>

      <div className="title w-full bg-neutral-100 p-5 text-center font-Nabi text-5xl text-pink-300 shadow-2xl lg:text-9xl">
        - Necklaces -
      </div>
      <section className="flex w-full justify-center bg-pink-300 ">
        <div className="container">
          <div className="flex flex-wrap justify-center lg:justify-start">
            <ProductCard addToCart={addToCart} item={products[0]} />
            <ProductCard addToCart={addToCart} item={products[1]} />
            <ProductCard addToCart={addToCart} item={products[2]} />
            <ProductCard addToCart={addToCart} item={products[3]} />
          </div>
        </div>
      </section>
      <div className="spacer h-40vh"></div>
    </>
  )
}

import '../script.js'
export default App
