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

//var request = new XMLHttpRequest()

//request.open('GET', 'https://ghibliapi.herokuapp.com/films', true)
//request.onload = function () {
  // Begin accessing JSON data here
  //var data = JSON.parse(this.response)

  //if (request.status >= 200 && request.status < 400) {
    //data.forEach((movie) => {
      //console.log(movie.title)
    //})
  //} else {
    //console.log('error')
  //}
//}

//request.send()

const app = document.getElementById('root')

const logo = document.createElement('img')
logo.src = 'logo.png'

const container = document.createElement('div')
container.setAttribute('class', 'container')

app.appendChild(logo)
app.appendChild(container)