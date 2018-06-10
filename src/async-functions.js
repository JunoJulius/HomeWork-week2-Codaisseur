function giveItBackLater(value, callback) {
  const giveItBack = () => {
    callback(value)
  }
  setTimeout(giveItBack, 1000, "Hellooo World")
}

function promiseToGiveItBackLater(value) {

  return new Promise((resolve, reject) => {
    const giveItBack = () => {
      if (Math.random(value) < 0.5 || Math.random(value > 0.5)) {
        resolve(value)
      } else {
        reject('Erroooarrr!')
      }
    }
    setTimeout(giveItBack, 100)
  })
}

function addSomePromises(somePromise) {
  // 
  // return new Promise(function(resolve, reject) {
  //
  //   if (somePromise === true) {
  //
  //     resolve(somePromise)
  //
  //   } else {
  //
  //     reject()
  //   }
  //
  // })

}


//
// When the code `const outputPromise = addSomePromises(somePromise)` is executed,
//  your function should return a new promise that has both a fulfillment handler and a rejection handler.
//
//      - When `somePromise` resolves with a string `"foo"`, the `outputPromise` should resolve with a string `"foofoo"`.
//      - When `somePromise` is rejected with the value `"bar"`, the `outputPromise`  should resolve with `"barbarbar"`.
//
//    So, your fulfillment handler should double the string and the rejection handler should triple the string.
//


module.exports = {
  giveItBackLater,
  addSomePromises,
  promiseToGiveItBackLater
};
