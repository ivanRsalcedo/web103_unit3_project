import { pool } from "./database.js"

// SERIAL = auto-increment ID
// TEXT = string
// INTEGER = numbers
// DATE = date values
// TIMESTAMP = date + time

// PRIMARY KEY = this column uniquely id's each row

const locations = `CREATE TABLE IF NOT EXISTS locations (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    address TEXT,
    city TEXT,
    state TEXT,
    zip TEXT,
    image TEXT,
    description TEXT
)`

const events = `CREATE TABLE IF NOT EXISTS events (
    id SERIAL PRIMARY KEY,
    location_id INTEGER,
    title TEXT,
    date DATE,
    time TIME,
    image TEXT,
    description TEXT
)`

const resetDatabase = async function() {
    try  {
        await pool.query(locations)
        await pool.query(events)
        console.log("Database tables created")
    } catch (error) {
        console.error(error)
    } finally {
        await pool.end()
    }
}

resetDatabase()