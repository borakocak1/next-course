// index.js
import express from "express";
import { promises as fs } from "fs";
import db, { populateDBIfEmpty } from "./database.js"

const app = express();
const port = "3001";
let properties = [];

async function getData() {
  try {
    const data = await fs.readFile("./data/data.json");

    properties = JSON.parse(data);
    //console.log(properties);
  } catch (err) {
    console.log("ERROR READING DATA: ", err);
  }
}

// middlewares
app.use(express.json());

//routes
app.get("/properties", (req, res) => {
  const query = db.prepare("SELECT * FROM properties");
  
  const properties = query.all().map((p) => ({
    ...p,
    pictures: JSON.parse(p.pictures || "[]"),
    equipments: JSON.parse(p.equipments || "[]"),
    tags: JSON.parse(p.tags || "[]"),
  }))
  // if (!properties) {
  //   return res.status(500).json({ error: "Failed to load properties" });
  // }
  res.json(properties);
});

// function createNewProperty() {
//   const property = {};

//   property.id =
//   property.title =
//   property.cover = /*url*/
//   property.pictures = [/*urls*/]
//   property.description =
//   property.host = {
//     name: ,
//     picture: /*url*/,
//   }
//   property.rating =
//   property.location =
//   property.equipments = [/*strings*/]
//   property.tags = [/*strings*/]

//   return property;
// }

// CREATE
app.post("/properties", (req, res) => {
  console.log("REQ: ", req);
  console.log("BODY: ", req.body);

  properties.push(req.body);

  res.status(201).end();
});

// READ
app.get("/properties/:propertyID", (req, res) => {
  const found = properties.find(
    (property) => req.params.propertyID == property.id
  );
  if (!found) {
    return res.status(404).json({ error: "id not found" });
  }

  res.json(found);
});

// UPDATE
app.put("/properties/:propertyID", (req, res) => {
  const found = properties.findIndex(
    (property) => req.params.propertyID == property.id
  );
  if (!found) {
    return res.status(404).json({ error: "id not found" });
  }

  properties[found] = req.body;

  res.json(properties[found]);
});

// postman
// DELETE
app.delete("/properties/:propertyID", (req, res) => {
  const found = properties.findIndex(
    (property) => req.params.propertyID == property.id
  );
  if (found === -1) {
    return res.status(404).json({ error: "id not found" });
  }

  const deleted = properties.splice(index, 1);

  res.json(deleted[0]);
});

async function init() {
  //await getData();
  await populateDBIfEmpty();
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
}
init();
