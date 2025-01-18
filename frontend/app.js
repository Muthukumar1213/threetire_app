fetch('http://backend:5000/products')
    .then(response => response.json())
    .then(data => {
        const productDiv = document.getElementById('products');
        productDiv.innerHTML = data.map(product => `<p>${product.name}: $${product.price}</p>`).join('');
    });
