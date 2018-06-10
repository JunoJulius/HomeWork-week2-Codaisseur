const giveItBackLater = (value, callback) => {
      const giveItBack = () => {
        callback(value)
      }
      setTimeout(giveItBack, 1000, "Hellooo World")
}

const promiseToGiveItBackLater = (value) => {

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

 const addSomePromises = (somePromise) => {
    return new Promise((resolve, reject) => resolve(somePromise))
      .then((result) => result.repeat(2))
      .catch((error) => error.repeat(3))
  }


module.exports = {
  giveItBackLater,
  addSomePromises,
  promiseToGiveItBackLater
};
