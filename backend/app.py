@app.route('/data')
def get_data():
    try:
        # Connect to the database
        conn = mysql.connector.connect(
            host='database',  # Database service name in Docker Compose
            user='root',
            password='password',
            database='appdb'
        )
        cursor = conn.cursor()
        cursor.execute('SELECT message FROM messages LIMIT 1')
        result = cursor.fetchone()
        
        # Check if result exists
        if result:
            return jsonify({'message': result[0]})
        else:
            return jsonify({'error': 'No data found'}), 404
    except mysql.connector.Error as err:
        return jsonify({'error': f'MySQL error: {str(err)}'}), 500
    except Exception as e:
        return jsonify({'error': f'An error occurred: {str(e)}'}), 500
    finally:
        if conn.is_connected():
            conn.close()
