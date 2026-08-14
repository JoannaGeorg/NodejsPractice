const add = (a, b, callback) => {
  setTimeout(() => {
    console.log("2 second timer")
  }, 2000)
  const sum = a + b
  callback(sum)
}

add(4, 5, (sum) => {
  console.log(sum)
})