import { pool } from '../config/database.js'

const getAllLocations = async (req, res) => {
    try {
        const results = await pool.query(
            'SELECT * FROM locations ORDER BY id ASC'
        )
        res.status(200).json(results.rows)
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Server error' })
    }
}

export {
    getAllLocations
}