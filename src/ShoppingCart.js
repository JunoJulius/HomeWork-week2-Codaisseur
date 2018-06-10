class ShoppingCart {

  constructor(items) {

    this.items = []

  }

  addItem(name, quantity, pricePerUnit) {
    const shopCart = this.items.push({
      name: name,
      quantity: quantity,
      pricePerUnit: pricePerUnit
    })

    return shopCart
  }

  getItems(...items) {
    const displayItems = this.items
    return displayItems

  }

  clear(...items) {
    const emptyCart = this.items.length = []
    return emptyCart
  }

  clone(...items) {
    const copyCart = new ShoppingCart()
    copyCart.items = JSON.parse(JSON.stringify(this.items))
    return copyCart

  }


}


//
// const cart1 = new ShoppingCart('banana', 12, 23)
// const cart2 = cart1.clone()
// //
// console.log(cart2)
// //



module.exports = ShoppingCart;
