from flask import Flask, jsonify
import mysql.connector
import os

app = Flask(__name__)

@app.route('/items', methods=['GET'])
def get_items():
    try:
        db_conn = mysql.connector.connect(
            host=os.getenv("DB_HOST"),
            user=os.getenv("DB_USER"),
            password=os.getenv("DB_PASSWORD"),
            database=os.getenv("DB_NAME")
        )
        cursor = db_conn.cursor(dictionary=True)
        cursor.execute("SELECT name, price FROM items;")
        items = cursor.fetchall()
        return jsonify({"items": items})
    except Exception as e:
        return jsonify({"error": str(e)}), 500
    finally:
        if 'db_conn' in locals() and db_conn.is_connected():
            cursor.close()
            db_conn.close()

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
