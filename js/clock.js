let offSet = "GMT";

setInterval(function() {
    let myArray = new Date().toLocaleString('en-US', { timeZone: offSet}).split(", ");
    document.getElementById("date").innerText = myArray[0];
    document.getElementById("time").innerText = myArray[1];
    document.getElementById("clockDisplay").style.display = (offSet=="GMT")?"none":"block";
},1000);

function loadList() {
    fetch("res/timezone.json").then(response => response.json())
    .then(data => populate(data))
    .catch(function() {
        console.log("error API");
    });
}

function populate(data) {
    let dropDown = document.getElementById("selectZone");
    data.zones.forEach(element => {
        let option = document.createElement("option");
        option.text = element.zoneName;
        option.value = element.zoneName;
        dropDown.add(option);
    });
}

function change(optionSelect) {
    document.getElementById("zoneDisplay").innerText = optionSelect.value;
    // to get text of selected option ----  optionSelect.options[optionSelect.selectedIndex].text;
    offSet = optionSelect.value;
}