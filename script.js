function converter(){
    let celsius=Number(document.getElementById('input').value)
    let fahrenheit= celsius * 9 / 5 + 32;
    let result=document.getElementById("result")
    result.innerHTML=fahrenheit+" Fahrenheit"
}