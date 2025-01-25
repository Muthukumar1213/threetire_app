fetch('http://backend:5000/items')
    .then(response => response.json())
    .then(data => {
        const itemsDiv = document.getElementById('items');
        data.items.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.textContent = `${item.name} - $${item.price}`;
            itemsDiv.appendChild(itemDiv);
        });
    })
    .catch(error => console.error('Error fetching items:', error));
