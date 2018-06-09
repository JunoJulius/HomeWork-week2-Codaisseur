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

    const copyCart = items.concat(this.items);
    return copyCart
    this.items = items
    let i, clone;

       if( Array.isArray( items ) ) {
           clone = items.slice( 0 );
           for( i = 0; i < clone.length; i++ ) {
               clone[ i ] = arrayClone( clone[ i ] );
           }
           return clone;
       }
       else {
           return items;
       }
  }


}


//
const cart1 = new ShoppingCart('banana', 12, 23)
const cart2 = cart1.clone()
// //
// console.log(cart2)
// //



module.exports = ShoppingCart;
