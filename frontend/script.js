// Fetch products from the backend and display them
fetch('http://localhost:5000/products')  // Adjust the URL if needed
    .then(response => response.json())
    .then(data => {
        const productsList = document.getElementById('productsList');
        data.products.forEach(product => {
            const listItem = document.createElement('li');
            listItem.textContent = `ID: ${product.id} | Name: ${product.name} | Price: $${product.price}`;
            productsList.appendChild(listItem);
        });
    })
    .catch(error => {
        console.error('Error fetching products:', error);
        alert('Failed to load products.');
    });

// Fetch orders from the backend and display them
fetch('http://localhost:5000/orders')  // Adjust the URL if needed
    .then(response => response.json())
    .then(data => {
        const ordersList = document.getElementById('ordersList');
        data.orders.forEach(order => {
            const listItem = document.createElement('li');
            listItem.textContent = `Order ID: ${order.id} | Product ID: ${order.product_id} | Customer: ${order.customer_name}`;
            ordersList.appendChild(listItem);
        });
    })
    .catch(error => {
        console.error('Error fetching orders:', error);
        alert('Failed to load orders.');
    });

// Handle the order form submission
document.getElementById('orderForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const productId = document.getElementById('productId').value;
    const customerName = document.getElementById('customerName').value;

    if (!productId || !customerName) {
        alert('Please fill out all fields.');
        return;
    }

    // Send the order to the backend
    fetch('http://localhost:5000/orders', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ product_id: productId, customer_name: customerName })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Order placed successfully!');
            // Reload orders list to include the new order
            window.location.reload();
        } else {
            alert('Failed to place order.');
        }
    })
    .catch(error => {
        console.error('Error placing order:', error);
        alert('Failed to place order.');
    });
});

