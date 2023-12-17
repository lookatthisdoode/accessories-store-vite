import { useState, useEffect } from 'react'
import './App.css'
import Cart from './components/Cart.jsx'
import Landing from './components/Landing.jsx'
import Nav from './components/Nav.jsx'
import ProductCard from './components/ProductCard.jsx'
import productsStatic from './products.json'
import {
  saveCartContentHelper,
  loadCartContentHelper,
} from './helpers/Helpers.js'
const herokuUrl = 'https://accesories-store-api-83f92813ccbf.herokuapp.com'
const localUrl = 'http://localhost:5000/'

function App() {
  const [cartOpen, toggleCartOpen] = useState(false)
  const [cartList, setCartList] = useState([])
  const [products, setProducts] = useState([])

  // This stuff gets run once the page is loaded
  useEffect(() => {
    getProducts()
    setCartList(loadCartContentHelper())
  }, [])

  function getProducts() {
    fetch(herokuUrl + '/products')
      .then((response) => {
        // Check if data is not sent
        if (response.status === 200) {
          return response.json() // Resolve the promise with JSON data
        } else {
          // This will be thrown only if fetch resolved with any code
          // Otherwise it will automatically catch "Network error" if fetch didnt get to server
          throw new Error(
            `Server responded with status: ${response.status}, ${response.statusText}`,
          )
        }
      })
      .then((data) => {
        // This would only run if status code is 200, and data present
        setProducts(data)
      })
      .catch((error) => {
        // Handle errors, message to the user
        console.error(`CLIENT: ${error.message}`)
        console.log('Setting static products..')
        // Set hardcoded products (for dev purposes)
        setProducts(productsStatic)
      })
  }

  function updateCart(newCart) {
    saveCartContentHelper(newCart)
    setCartList(newCart)
  }

  function addToCart(id) {
    // Create new array so you won't mess with original
    let newCart = [...cartList]
    // If item is exist in the cart just increase quantity
    const existingItem = newCart.find((i) => id === i.product.id)
    if (existingItem) {
      existingItem.quantity++
    }
    // If not push new entity to array
    else {
      const productToAdd = products.find((item) => item.id === id)
      productToAdd &&
        newCart.push({
          product: productToAdd,
          quantity: 1,
        })
    }
    updateCart(newCart)
  }

  return (
    <>
      <section className="container flex justify-center px-5 py-10 pt-50vh">
        <Landing />
        {cartOpen && (
          <Cart
            toggleCartOpen={toggleCartOpen}
            cartList={cartList}
            updateCart={updateCart}
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
            {products &&
              products.map((product) => {
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
            {products &&
              products.map((product) => {
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

export default App
