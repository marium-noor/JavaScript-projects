let count = 0;
let val = document.querySelector('#value')
let btn1 = document.querySelector('.decrease');
let btn2 = document.querySelector('.reset');
let btn3 = document.querySelector('.increase');

btn1.addEventListener('click', () => {
    val.innerHTML = count--;
    val.textContent = count;
    updateColor()
})

btn2.addEventListener('click', () => {
    count = 0;
    val.textContent = count;
    updateColor();
});

btn3.addEventListener('click', () => {
    val.innerHTML = count++;
    val.textContent = count;
    updateColor()
})

function updateColor() {
    if (count > 0) {
        val.style.color = "green";
    } else if (count < 0) {
        val.style.color = "red";
    } else {
        val.style.color = "#222";
    }
}