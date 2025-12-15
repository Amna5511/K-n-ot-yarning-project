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

        // palette generator with hex filter easy 
        function generatePalette(hex) {
            const palette = document.getElementById('palette');
            palette.innerHTML = '';

            const colors = [
                { hex, label: 'Base' },
                { hex, filter: 'hue-rotate(120deg)', label: '+120°' },
                { hex, filter: 'hue-rotate(240deg)', label: '+240°' }
            ];

            colors.forEach(color => {
                const div = document.createElement('div');
                div.className = 'palette-color';
                div.style.backgroundColor = color.hex;
                if (color.filter) {
                    div.style.filter = color.filter;
                }
                div.textContent = color.label;
                div.onclick = () => navigator.clipboard.writeText(color.hex) && alert('Copié: ' + color.hex);
                palette.appendChild(div);
            });
        }

        // ===== YARN CALCULATOR =====
        function calculateYarn() {
            const length = parseFloat(document.getElementById('length').value);
            const width = parseFloat(document.getElementById('width').value);
            const density = parseFloat(document.getElementById('density').value);
            const ballLength = parseFloat(document.getElementById('ballLength').value) * 100;
            const ballPrice = parseFloat(document.getElementById('ballPrice').value);

            if (!length || !width || !density || !ballLength || !ballPrice) {
                alert('Remplissez tous les champs');
                return;
            }

            const yarnNeededCm = (length + width) * density;
            const ballsNeeded = Math.ceil(yarnNeededCm / ballLength);
            const totalPrice = (ballsNeeded * ballPrice).toFixed(2);

            document.getElementById('yarnNeeded').textContent = (yarnNeededCm / 100).toFixed(2) + ' m';
            document.getElementById('ballsNeeded').textContent = ballsNeeded;
            document.getElementById('totalPrice').textContent = totalPrice + ' €';
            document.getElementById('results').style.display = 'flex';
        }
         document.getElementById('calcForm').addEventListener('keypress', e => e.key === 'Enter' && calculateYarn());
        document.getElementById('colorPicker').addEventListener('change', e => generatePalette(e.target.value));

        // Init
        showList();
        generatePalette('#7d5740ff');