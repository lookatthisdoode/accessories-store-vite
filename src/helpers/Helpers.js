import { CART_STORAGE_KEY } from '../constants.js'

export function loadCartContentHelper() {
  const lanesJson = localStorage.getItem(CART_STORAGE_KEY)
  return JSON.parse(lanesJson) || []
}

export function saveCartContentHelper(cartContent) {
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartContent))
}
