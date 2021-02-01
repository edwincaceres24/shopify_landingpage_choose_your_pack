const   pokeStat = document.getElementsByName("stat-item"),
        pokeBar = Array.from(document.querySelectorAll(".status-bar")),
        colorValue  = Array.from(pokeStat),
        statusValue = Array.from(pokeStat);
// pokeAtr=pokeBar.map(e=>console.log(e.previousElementSibling.previousElementSibling.textContent));


// Array.from(pokeStat).forEach(e => e.classList.add("items"))

Array.from(pokeStat).map(e => e.classList.add("items"))

// addValue("Max CP", "red")

//function

function addValue() {
    // let pokeAtrStat = pokeBar.map(e=>e.previousElementSibling.previousElementSibling)

    if (statusValue[0].firstElementChild.textContent=="Max CP"){
        statusValue[0].lastElementChild.style.background="red";
    } 
    if (statusValue[1].firstElementChild.textContent=="Attack"){
        statusValue[1].lastElementChild.style.background="orange";
    } 
    if (statusValue[2].firstElementChild.textContent=="Defense"){
        statusValue[2].lastElementChild.style.background="blue";
    } 
    if (statusValue[3].firstElementChild.textContent=="Stamina"){
        statusValue[3].lastElementChild.style.background="green";
    }
}

function addColor(value,color,index){
    if (statusValue[index].firstElementChild.textContent==value){
        statusValue[index].lastElementChild.style.background=color;
        statusValue[index].lastElementChild.style.border=color;
    }
}



addColor("Max CP","red",0)
addColor("Attack","green",1)
addColor("Defense","blue",2)
addColor("Stamina","yellow",3)
// addColor("red",1)
// addColor("blue",2)
// addColor("purple",3)
