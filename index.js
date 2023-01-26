const searchValue = document.getElementById("input")
const bottom = document.getElementById("bottoms")
async function mysearch(){
    bottom.innerHTML=""
    let val = searchValue.value
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=351a7d79a597962bd9a3a9eb63ee8dfb`)
    const data = await response.json()
    // console.log(data)
    bottom.innerHTML=`<div id="bottom"><div class="name"> <h4>Weather of <span id="nam">${val}</span></h4></div>
    <div class="det">
        <h4>Sky Conditions :<span> ${data.weather[0].description}</span> </h4>
        <h4>Temperature : <span>${data.main.temp} </span></h4>
        <h4>Wind Speed :<span> ${data.wind.speed} </span></h4>
    </div></div>`
}
