let countEl = document.getElementById("count-el")
let count = 0 

function increment(){
    count += 1
    countEl.textContent = count
    console.log(count)
}

function save(){    
    let saveEl = document.getElementById("save-el")
    let saved = count + " - "
    saveEl.textContent += saved
    countEl.textContent = 0
    count = 0

    console.log(count)
}

