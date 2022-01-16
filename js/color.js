function change(slider) {
    let col = slider.id;
    document.getElementById(col+"Val").innerText = slider.value;
    let num = parseInt(slider.value).toString(16);
    document.getElementById(col+"Hex").innerText = (num.length==2)?num:"0"+num;
    let hexVal = document.getElementById("colorHex").innerText;
    document.getElementById("colorBox").style.backgroundColor = hexVal.substring(hexVal.indexOf('#'));
}