import { useState } from 'react'
import './App.css'
import ProductCard from './components/ProductCard.jsx'
import Landing from './components/Landing.jsx'
import Nav from './components/Nav.jsx'
import Cart from './components/Cart.jsx'

let products = [
  {
    id: 1,
    name: 'Earthy Jasper',
    type: 'bracelette',
    picture:
      'https://i.pinimg.com/564x/6d/06/16/6d0616ae6200700f26027f6d8dbda8fc.jpg',
    price: 30,
    quantity: 12,
    likes: 142,
    bio: 'Discover our stunning collection of handmade accessories, crafted with natural stones and organic materials. ',
  },
  {
    id: 2,
    name: 'Crystal Quartz Delight',
    type: 'bracelette',
    picture:
      'https://i.pinimg.com/564x/ee/a8/df/eea8dffa8e9242f384e709f2f8045eca.jpg',
    price: 50,
    quantity: 6,
    likes: 123,
    bio: 'Discover our stunning collection of handmade accessories, crafted with natural stones and organic materials. ',
  },
  {
    id: 3,
    name: 'Amethyst Serenity',
    type: 'necklace',
    picture:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fc7%2F2c%2F48%2Fc72c480853c11c0fc4c08789654dd732.jpg&f=1&nofb=1&ipt=2c91bcb7a02647182bff2ba093fa188626654ca8fa42c0776d1ce3e58e111e46&ipo=images',
    price: 15,
    quantity: 0,
    likes: 441,
    bio: 'Discover our stunning collection of handmade accessories, crafted with natural stones and organic materials. ',
  },
  {
    id: 4,
    name: 'Rose Quartz Elegance',
    type: 'necklace',
    picture:
      'https://i.pinimg.com/564x/60/c0/e6/60c0e6525063fabd5fb78f25be701bd4.jpg',
    price: 12,
    quantity: 23,
    likes: 23,
    bio: 'Discover our stunning collection of handmade accessories, crafted with natural stones and organic materials. ',
  },
]

let cart = []

document.addEventListener('DOMContentLoaded', function () {
  document.addEventListener('click', (e) => {
    if (!e.target.matches('[data-add-to-cart]')) return
    const id = e.target.closest('[data-store-item]').dataset.itemId
    addToCart(id)
  })
})

function addToCart(id) {
  const existingItem = cart.find((i) => id === i.id)
  if (existingItem) {
    existingItem.quantity++
  } else {
    cart.push({
      id: id,
      quantity: 1,
    })
  }
  console.log(cart)
}

function App() {
  const [cartOpen, toggleCartOpen] = useState(true)

  //make this as separate util function
  document.addEventListener('DOMContentLoaded', function () {
    document.addEventListener('click', (e) => {
      if (!e.target.matches('[data-cart-close]')) return
      toggleCartOpen(false)
    })
  })

  document.addEventListener('DOMContentLoaded', function () {
    document.addEventListener('click', (e) => {
      if (!e.target.matches('[data-cart-open]')) return
      toggleCartOpen(true)
    })
  })

  return (
    <>
      <section className="container flex justify-center px-5 py-10 pt-50vh">
        <Landing />
        {cartOpen && <Cart />}
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
            <ProductCard item={products[0]} />
            <ProductCard item={products[1]} />
            <ProductCard item={products[2]} />
            <ProductCard item={products[3]} />
            <ProductCard item={products[0]} />
            <ProductCard item={products[1]} />
          </div>
        </div>
      </section>

      <div className="title w-full bg-neutral-100 p-5 text-center font-Nabi text-5xl text-pink-300 shadow-2xl lg:text-9xl">
        - Necklaces -
      </div>
      <section className="flex w-full justify-center bg-pink-300 ">
        <div className="container">
          <div className="flex flex-wrap justify-center lg:justify-start">
            <ProductCard item={products[0]} />
            <ProductCard item={products[1]} />
            <ProductCard item={products[2]} />
            <ProductCard item={products[3]} />
          </div>
        </div>
      </section>
      <div className="spacer h-40vh"></div>
    </>
  )
}

import '../script.js'
export default App
