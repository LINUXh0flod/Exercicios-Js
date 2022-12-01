fetch('https://api.github.com/users/diego3g')
.then(response => {
  response.json().then(body => {
    console.log(body)
  })
})
.catch(err => {
  console.log(err)
})