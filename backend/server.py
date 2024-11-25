from flask import Flask, jsonify, request
from flask_cors import CORS
import psycopg2
from psycopg2 import sql
import bcrypt

app = Flask(__name__)
CORS(app) 

def get_db_connection():
    return psycopg2.connect(
        dbname="airbnbClone",
        user="postgres",
        password="5619",
        host="localhost",
        port="5432"
    )

@app.route('/')
def check_connection():
    try:
        conn = get_db_connection()
        return jsonify({"message": "Database connection successful"}), 200
    except Exception as e:
        print(f"Error: {e}")
        return jsonify({"message": "Database connection failed", "error": str(e)}), 500
    finally:
        conn.close()

@app.route('/register', methods=['POST'])
def post_data():
    try:
        new_data = request.get_json()
        password = new_data['password']

        # Hash the password securely
        hashed_password = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())

        conn = get_db_connection()
        cursor = conn.cursor()

        # Insert the user data into the database
        insert_query = sql.SQL("""
            INSERT INTO users (username, email, password) 
            VALUES (%s, %s, %s)
        """)
        cursor.execute(insert_query, (new_data['username'], new_data['email'], hashed_password))

        conn.commit()
        return jsonify({'status': 'success', 'message': 'User registered successfully!'}), 201

    except Exception as e:
        print(f"Error: {e}")
        return jsonify({'status': 'failure', 'message': str(e)}), 500

    finally:
        cursor.close()
        conn.close()

@app.route('/login', methods=['POST'])
def login():
    try:
        # Get login data from the request
        login_data = request.get_json()
        username = login_data.get('username', '')
        password = login_data.get('password', '')

        conn = get_db_connection()
        cursor = conn.cursor()

        # Fetch the user data from the database
        cursor.execute("SELECT username, password FROM users WHERE username = %s", (username,))
        user = cursor.fetchone()

        if user:
            stored_hashed_password = user[1]

            # Decode hex-encoded hash if necessary
            if stored_hashed_password.startswith(r"\x"):
                import binascii
                stored_hashed_password = binascii.unhexlify(
                    stored_hashed_password[2:]  # Remove the "\x" prefix
                ).decode('utf-8')

            if bcrypt.checkpw(password.encode('utf-8'), stored_hashed_password.encode('utf-8')):
                return jsonify({'status': 'success', 'message': 'Login successful!'}), 200

            else:
                return jsonify({'status': 'failure', 'message': 'Invalid password'}), 401
        else:
            return jsonify({'status': 'failure', 'message': 'User not found'}), 404

    except Exception as e:
        print(f"Error: {e}")
        return jsonify({'status': 'failure', 'message': str(e)}), 500

    finally:
        if 'cursor' in locals():
            cursor.close()
        if 'conn' in locals():
            conn.close()

if __name__ == '__main__':
    app.run(debug=True)
