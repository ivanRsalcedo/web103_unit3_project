import { pool } from "./database.js"

const dropEvents = `DROP TABLE IF EXISTS events`
const dropLocations = `DROP TABLE IF EXISTS locations`

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

const resetDatabase = async function () {
    try {
        await pool.query(dropEvents)
        await pool.query(dropLocations)
        await pool.query(locations)
        await pool.query(events)
        console.log("Database tables reset")
    } catch (error) {
        console.error(error)
    } finally {
        await pool.end()
    }
}

resetDatabase()