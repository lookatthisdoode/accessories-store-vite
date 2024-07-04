import { useState, useEffect } from 'react'
import Cart from './components/Cart.jsx'
import Landing from './components/Landing.jsx'
import Nav from './components/Nav.jsx'
import Category from './components/Category.jsx'
import {
  saveCartContentHelper,
  loadCartContentHelper,
} from './helpers/Helpers.js'
import { API_URL } from './constants.js'

function App() {
  const [cartOpen, toggleCartOpen] = useState(false)
  const [cartList, setCartList] = useState([])
  const [products, setProducts] = useState([])
  const [productsErrorMessage, setProductsErrorMessage] = useState('')

  // This stuff runs once when the page is loaded
  useEffect(() => {
    setCartList(loadCartContentHelper())
    getProducts()
  }, [])

  function getProducts() {
    fetch(API_URL + '/api/products')
      .then((res) => {
        console.log(res, 'riesponce')
        if (res.status === 200) {
          return res.json()
        } else {
          throw new Error(
            `Server responded with status: ${res.status} ${res.statusText}`,
          )
        }
      })
      .then((data) => {
        // This would only run if status code is 200, AND data is present
        setProducts(data)
      })
      .catch((error) => {
        // Handle errors, message to the client
        console.error(`CLIENT: ${error.message}`)
        // Set error message to render instead of content
        setProductsErrorMessage('Sorry, cant get products list at this time')
      })
  }

  function updateCart(newCart) {
    saveCartContentHelper(newCart) // Saves to localstorage
    setCartList(newCart) // Saves to state
  }

  function addToCart(_id) {
    // Create new array so you won't mess with original
    let newCart = [...cartList]
    // If item is exist in the cart, increase quantity in the cart
    const existingItem = newCart.find((item) => _id === item.product._id)
    if (existingItem) {
      existingItem.quantity++
    }
    // If not, create new object and push it to the cart array
    else {
      // Find reference product by id from all products
      const productToAdd = products.find((item) => _id === item._id)
      const newCartItem = {
        product: productToAdd,
        quantity: 1,
      }
      newCart.push(newCartItem)
    }
    // Update cart contents and localstorage
    updateCart(newCart)
  }

  function scrollToCategory(categoryId) {
    const categoryElement = document.getElementById(categoryId)

    if (categoryElement) {
      categoryElement.scrollIntoView({ behavior: 'smooth' })
    } else {
      console.warn(`Category with ID "${categoryId}" not found.`)
    }
  }

  function toggleCart() {
    toggleCartOpen(!cartOpen)
  }

  // Render

  return (
    <>
      {cartOpen && (
        <Cart
          toggleCart={toggleCart}
          cartList={cartList}
          updateCart={updateCart}
          API_URL={API_URL}
        />
      )}

      <Landing />

      <Nav
        toggleCart={toggleCart}
        cartQuantity={cartList.length}
        scrollToCategory={scrollToCategory}
      />

      <div className="spacer h-40vh"></div>

      {products.length ? (
        <>
          <Category
            type="bracelet"
            title={'- Bracelettes -'}
            products={products}
            addToCart={addToCart}
          />
          <Category
            type="necklace"
            title={'- Necklaces -'}
            products={products}
            addToCart={addToCart}
          />
        </>
      ) : (
        <div className="text-5xl">{productsErrorMessage}</div>
      )}

      <div className="spacer h-40vh"></div>
    </>
  )
}

export default App
