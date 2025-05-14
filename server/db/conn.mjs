import { MongoClient} from 'mongodb';

const client =  new MongoClient('mongodb+srv://mohamedilyasaffan:nq3PqOjmxm2C0EUg@cluster0.dieynmr.mongodb.net/')

let conn;
try{
    console.log('Connecting to MongoDB...');
    conn = await client.connect();
    console.log("Connectedt to MongoDB")
} catch(err){
    console.log("Failed to connect to MongoDB",err)
    process.exit(1)
}

const db = conn.db('Student Management');

export default db;