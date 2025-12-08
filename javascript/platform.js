// JS TO DO LIST//
const UL_PRODUCTS = document.getElementById('products');
const INPUT_ITEM = document.getElementById('input-item');
const BTN_ADD = document.getElementById('ajouter');
let ELEMENT = JSON.parse(localStorage.getItem('items')) ?? [];
console.log(ELEMENT);






showList();


BTN_ADD.addEventListener('click', () => {

    let newItem = INPUT_ITEM.value.trim();


    if (newItem !== "") {
        ELEMENT.push(newItem);
        localStorage.setItem('items', JSON.stringify(ELEMENT));

        INPUT_ITEM.value = "";



        showList()

    }

})


function showList() {

    UL_PRODUCTS.innerHTML = '';


    ELEMENT.forEach((pick, index) => {
        UL_PRODUCTS.innerHTML += `<li class="">${pick} <button class"btn" onclick="deleteItem(${index})" >X</button></li>`;
    })
}

function deleteItem(index) {
    ELEMENT.splice(index, 1)
    localStorage.setItem('items', JSON.stringify(ELEMENT));

    showList()


}
// JS COUNTER

const COUNT_DIS = document.getElementById('counter');
const BTN_PLUS = document.getElementById('plus');
const BTN_MINUS = document.getElementById('minus');
const BTN_RESET = document.getElementById('zero');

let count = 0;

COUNT_DIS.textContent = 0;

BTN_PLUS.addEventListener('click', () => {

    count++;
    COUNT_DIS.textContent = count;
    
})
BTN_MINUS.addEventListener('click', () => {
   


    if (count > 0) {
        
        count--;

        COUNT_DIS.textContent = count;
    }
    console.log(count)

})

BTN_RESET.addEventListener('click', () => {

    count = 0;

    COUNT_DIS.textContent = count;


})
