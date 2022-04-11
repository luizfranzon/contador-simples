var counter = document.getElementById('number')
console.log(total)

var total = 0;

function add() {

    total += 1;
    counter.textContent = total

}

function remove() {

    total -= 1;
    counter.textContent = total
    
}