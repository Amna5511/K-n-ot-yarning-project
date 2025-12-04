
const UL_PRODUCTS = document.getElementById('products');
const INPUT_ITEM = document.getElementById('input-item');
const BTN_ADD = document.getElementById('ajouter');
const ELEMENT = ['yarn', 'acrylic-yarn', 'wool', 'pattern'];


showList();

BTN_ADD.addEventListener('click', () => {

    let newItem = INPUT_ITEM.value.trim();


    if (newItem !== "") {
        ELEMENT.push(newItem);

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

    showList()


}

