import "https://deno.land/x/dotenv/load.ts";
import {MongoClient} from "./deps.js"

const client = new MongoClient();
await client.connect(Deno.env.get("MONGODB_URI"));
console.log("Connected to MongoDB Successfully");

export const db = client.database(Deno.env.get("MONGODB_DATABASE"));