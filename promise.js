function addWithPromise(a, b) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      if (!a || !b) {
        reject('this function needs two numbers as parameters');
      }
      resolve(a + b);
    }, 1000);
  });
}
//using promise with .then
addWithPromise(2, 3)
  .then(result => {
    console.log('Using promise with .then', result);
  })
  .catch(err => console.log(err));

//using promise with async and wait
async function getResult() {
  try {
    const result = await addWithPromise(2, 3);
    console.log('using pomise with async await:', result);
  } catch (err) {
    console.log(err);
  }
}
getResult();
