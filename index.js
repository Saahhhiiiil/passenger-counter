let num = document.getElementById("number")
// console.log(num)

let count = 0
function increment(){
    count = count += 1
    num.textContent = count
}

let pvEntries = document.getElementById("pv-entries")
// console.log(pvEntries)

function save(){
    let countStr = count + " - "
    pvEntries.textContent += countStr
    console.log(count)
    num.textContent = 0
    count = 0
}

