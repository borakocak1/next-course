import Database from 'better-sqlite3';
const db = new Database('./data/database.db');
import { promises as fs } from "fs";

db.prepare(`
    CREATE TABLE IF NOT EXISTS properties (
        id TEXT PRIMARY KEY,
        title TEXT,
        cover TEXT,
        description TEXT,
        pictures TEXT,
        host_name TEXT,
        host_picture TEXT,
        rating REAL,
        location TEXT,
        equipments TEXT,
        tags TEXT
    )
`).run();

export async function populateDBIfEmpty(){
    const count = db.prepare("SELECT COUNT(*) as c FROM properties").get().c
    if (count > 0) {
        return;
    }

    try {
        const data = await fs.readFile("./data/data.json");
        properties = JSON.parse(data);

        const insert = db.prepare(`
        INSERT INTO properties (
            id, title, cover, description, pictures,
            host_name, host_picture, rating, location,
            equipments, tags
        )

        VALUES (@id, @title, @cover, @description, @pictures,
            @host_name, @host_picture, @rating, @location,
            @equipments, @tags)
        `)
        
        const insertAll = db.transaction((properties) => {
            for (const p in properties) {
                insert.run({
                    id: p.id,
                    title: p.title,
                    cover: p.cover,
                    description: p.description,
                    pictures: p.pictures,
                    host_name: p.host_name,
                    host_picure: p.host_picure,
                    rating: p.rating,
                    location: p.location,
                    equipments: p.equipments,
                    tags: p.tags   
                })
            }
        })

        insertAll(properties)

    }
    catch (err) {
        console.log("Error reading seed data");
    }
}

export default db
