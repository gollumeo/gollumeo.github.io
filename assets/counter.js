const counterElement = document.getElementById('counter');
let current = 0;
function IncrementCount() {
    current++;
    counterElement.innerText = current.toString();
}