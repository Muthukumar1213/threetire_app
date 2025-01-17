from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/products', methods=['GET'])
def get_products():
    products = [
        {"name": "Laptop", "price": 1200},
        {"name": "Phone", "price": 800},
        {"name": "Tablet", "price": 500},
    ]
    return jsonify(products)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
