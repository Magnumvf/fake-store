function getCategories(){
    fetch('https://fakestoreapi.com/products/categories')
    .then(response => response.json())
    .then(response => {
        for(let i = 0; i < response.length; i++){
            categorias.innerHTML += `<option>${response[i]}</option>`;
        }
    })
} getCategories();

async function getProducts(){
    try {
        const request = await fetch('https://fakestoreapi.com/products');
        const response = await request.json();
        produtos.innerHTML = '';
        response.map(produto => {
            produtos.innerHTML += `<li>${produto.title}</li>`;
        })
        return;
    } catch (error) {
        alert("produtos não encontrados :/");
    }
} getProducts();
