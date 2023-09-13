const cel =document.querySelector("#celcius");
const deg = document.querySelector("#degree");
const cvtbtn = document.querySelector("#convert-btn");
const temp= document.querySelector("#temp-type")
window.addEventListener("load",()=>{
deg.value = " "
cel.innerHTML=" "
})

cvtbtn.addEventListener("click",(e)=>{
    e.preventDefault();
    conversion();
    cel.innerHTML = "<span><i class='fa fa-spinner fa-spin'></i>Converting </span>"

    setTimeout(()=>{
    cvtbtn.innerHTML= "<span>Convert</span>"
    },1000)

})
const outputElement = document.querySelector('.output');
outputElement.classList.add('show');

function conversion(){
let  value= deg.value;
setTimeout(()=>{
    

if (temp.value === "fahrenheit"){
    const fahrenheit = (value -32) * (5/9)
    cel.innerHTML = `${fahrenheit.toFixed(3)} &deg; C <br>
    ${((value -32) * 5/9 + 273.15).toFixed(3) }  K `
}
else if(temp.value ==="kelvin"){
    const kelvin= (value -273.15);
    cel.innerHTML = `${kelvin.toFixed(3)} &deg;C <br>
    ${((value - 273.15 ) * 9/5 +32).toFixed(3)} &deg;F <br>
`
}
else if (temp.value === "celcius") {
    const celsius = parseInt(value);
    const k =   celsius +  273.15 ;
    const fa = (celsius * 9/5) + 32;
    
    cel.innerHTML = `${k} K <br>
    ${fa} &deg; F`;
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
window.addEventListener('load', updateClock);

    
