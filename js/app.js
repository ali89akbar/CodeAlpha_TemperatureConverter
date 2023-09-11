const cel =document.querySelector("#celcius");
const deg = document.querySelector("#degree");
const cvtbtn = document.querySelector("#convert-btn");
const temp= document.querySelector("#temp-type")

window.addEventListener("load",()=>{
deg.value = ""

cel.innerHTML=""

})



cvtbtn.addEventListener("click",(e)=>{
    e.preventDefault();
    converttoCelcius();

    cel,innerHTML = "<span><i class='fa fa-spinner fa-spin'></i>Converting </span>"
setTimeout(()=>{
    cvtbtn.innerHTML= "<span>Convert</span>"
},1000)

})
const resultElement = document.querySelector('.result');
resultElement.classList.add('show');

function converttoCelcius(){
let  inputvalue= deg.value;

setTimeout(()=>{
    

if (temp.value === "fahrenheit"){
    const fahrenheit = (inputvalue -32) * (5/9)
    cel.innerHTML = `${fahrenheit.toFixed(3)} &deg; c `
}
else if(temp.value ==="kelvin"){
    const kelvin= (inputvalue -273.15);
    cel.innerHTML = `${kelvin.toFixed(3)} &deg;c`;

}
},1200)
}



    function updateClock() {
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();

        const ampm = hours >= 12 ? 'PM' : 'AM';
        const formattedHours = hours % 12 || 12;
        const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

        const timeString = `${formattedHours}:${formattedMinutes}${ampm}`;
        
        document.getElementById('time').textContent = timeString;

        setTimeout(updateClock, 1000); // Update every second
    }

    // Call the function when the page loads
    window.addEventListener('load', updateClock);


