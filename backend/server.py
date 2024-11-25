from flask import Flask,jsonify
from flask_cors import cross_origin
import psycopg2

app=Flask(__name__)
def get_db_connection():
    connection = psycopg2.connect(
        dbname="airbnbClone",
        user="postgres",
        password="5619",
        host="localhost",  
        port="5432"
    )
    return connection

@app.route('/')
def checkConnection():
        conn = get_db_connection()
        if(conn):
          return jsonify({"message": "Database connection successful"}), 200


    

if __name__ == '__main__':
    app.run(debug=True)
