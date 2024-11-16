// Obtener elementos de la sección 1
const openFormBtn = document.getElementById('openFormBtn');
const closeFormBtn = document.getElementById('closeFormBtn');
const formSection = document.getElementById('formSection');

// Funciones para abrir y cerrar el formulario
openFormBtn.addEventListener('click', () => {
    formSection.style.display = 'block';
});
closeFormBtn.addEventListener('click', () => {
    formSection.style.display = 'none';
});

// Obtener elementos de la sección 2
const openSheetBtn = document.getElementById('openSheetBtn');
const closeSheetBtn = document.getElementById('closeSheetBtn');
const sheetSection = document.getElementById('sheetSection');

// Funciones para abrir y cerrar el Google Sheet
openSheetBtn.addEventListener('click', () => {
    sheetSection.style.display = 'block';
});
closeSheetBtn.addEventListener('click', () => {
    sheetSection.style.display = 'none';
});
