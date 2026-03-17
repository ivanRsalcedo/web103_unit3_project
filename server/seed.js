import dotenv from 'dotenv'
import { pool } from './config/database.js'
dotenv.config()

const seedDatabase = async () => {
    try {

        await pool.query(`
      INSERT INTO locations (name, address, city, state, zip, image)
      VALUES
      ('Echo Lounge', '1323 Main St', 'Dallas', 'TX', '75202', 'https://images.unsplash.com/photo-1506157786151-b8491531f063'),
      ('House of Blues', '2200 N Lamar St', 'Dallas', 'TX', '75202', 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a'),
      ('The Pavilion', '1818 1st Ave', 'Dallas', 'TX', '75210', 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3'),
      ('American Airlines Center', '2500 Victory Ave', 'Dallas', 'TX', '75219', 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678');
    `)

        await pool.query(`
      INSERT INTO events (title, date, time, image, location_id)
      VALUES
      ('Indie Rock Night', '2026-07-10', '20:00', 'https://images.unsplash.com/photo-1497032205916-ac775f0649ae', 1),
      ('Jazz Evening', '2026-07-11', '19:30', 'https://images.unsplash.com/photo-1464375117522-1311d6a5b81f', 2),
      ('EDM Festival', '2026-07-12', '21:00', 'https://images.unsplash.com/photo-1506157786151-b8491531f063', 3),
      ('NBA Game Night', '2026-07-13', '18:30', 'https://images.unsplash.com/photo-1517649763962-0c623066013b', 4);
    `)

        console.log("Seed data inserted")

    } catch (err) {
        console.error(err)
    } finally {
        await pool.end()
    }
}

seedDatabase()