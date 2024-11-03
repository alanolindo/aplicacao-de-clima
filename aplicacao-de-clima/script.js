const form = document.querySelector("#form")
form.addEventListener('submit',async(event)=>{
event.preventDefault();

const input = document.querySelector('#search').value
const apiKey = `e98553e81bc1148e6a1dfc91a0a02f39`
const url =`https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(input)}&appid=${apiKey}&units=metric&lang=pt_br`
if (input === ""){

    document.querySelector(".inputError").style.display = 'block';
}else{
    document.querySelector(".inputError").style.display = 'none';
fetch(url)
.then(response => response.json())
.then(data => {
    console.log(data)
    document.querySelector("#cidade").innerHTML = `<div>${data.name}</div>`
    document.querySelector("#temp-value").innerHTML = `<div>${data.main.temp}</div>`
    document.querySelector("#temp-descricao").innerHTML = `<div>${data.weather[0].description}</div>`
    document.querySelector("#temp-min").innerHTML = `<p>${data.main.temp_min.toFixed(1)}</p>`
    document.querySelector("#temp-max").innerHTML = `<p>${data.main.temp_max.toFixed(1)}</p>`
    document.querySelector("#humidade").innerHTML = `<p>${data.main.humidity.toFixed(1)}</p>`
    document.querySelector("#vento").innerHTML = `<p>${data.wind.speed.toFixed(1)}</p>`

})

}


})



