from flask import Flask, jsonify
import mysql.connector

app = Flask(__name__)

@app.route('/data')
def get_data():
    try:
        # Connect to the database
        conn = mysql.connector.connect(
            host='shopping_application-database',  # Database service name in the Docker network
            user='root',
            password='password',
            database='appdb'
        )
        cursor = conn.cursor()
        cursor.execute('SELECT message FROM messages LIMIT 1')
        result = cursor.fetchone()
        return jsonify({'message': result[0]})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
