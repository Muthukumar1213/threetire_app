document.addEventListener("DOMContentLoaded", function () {
    fetch("http://192.168.56.106:5000/items") // Backend API URL
        .then(response => response.json()) // Convert response to JSON
        .then(data => {
            const itemsList = document.getElementById("items-list");
            itemsList.innerHTML = ""; // Clear placeholder text

            if (data.items && data.items.length > 0) {
                data.items.forEach(item => {
                    let li = document.createElement("li");
                    li.textContent = `${item.name} - ${item.price}`;
                    itemsList.appendChild(li);
                });
            } else {
                itemsList.innerHTML = "<li>No items found</li>";
            }
        })
        .catch(error => {
            console.error("Error fetching items:", error);
            document.getElementById("items-list").innerHTML = "<li>Error loading items</li>";
        });
});

