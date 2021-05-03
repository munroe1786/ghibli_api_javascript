// Replace ./data.json with your JSON feed
//fetch('https://ghibliapi.herokuapp.com/films')
  //.then((response) => {
  //  return response.json()
  //})
  //.then((data) => {
    // Work with JSON data here
    //console.log(data)
  //})
  //.catch((err) => {
    // Do something for an error here
  //})

const app = document.getElementById('root');

const logo = document.createElement('img');
logo.src = "https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fen%2Fthumb%2Fc%2Fca%2FStudio_Ghibli_logo.svg%2F1200px-Studio_Ghibli_logo.svg.png&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FStudio_Ghibli&tbnid=U7MOowdpqYHy-M&vet=12ahUKEwixmsGYvazwAhWPhK0KHZVwDPIQMygAegUIARC9AQ..i&docid=YGHRdLByY8ZjoM&w=1200&h=576&q=studio%20ghibli%20logo&ved=2ahUKEwixmsGYvazwAhWPhK0KHZVwDPIQMygAegUIARC9AQ"
  
const container = document.createElement('div')
container.setAttribute('class', 'container')
  
app.appendChild(logo)
app.appendChild(container)

var request = new XMLHttpRequest()

request.open('GET', 'https://ghibliapi.herokuapp.com/films', true)
request.onload = function () {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)

  if (request.status >= 200 && request.status < 400) {
    data.forEach((movie) => {
      const card = document.createElement('div')
      card.setAttribute('class', 'card')

      const h1 = document.createElement('h1')
      h1.textContent = movie.title

      const p = document.createElement('p')
      movie.description = movie.description.substring(0, 300)
      p.textContent = `${movie.description}...`

      container.appendChild(card)
      card.appendChild(h1)
      card.appendChild(p)
    })
  } else {
    const errorMessage = document.createElement('error')
    errorMessage.textContent = `Oh no, something went wrong!`
    app.appendChild(errorMessage)
  }
}

request.send()