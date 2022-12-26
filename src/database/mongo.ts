import { MongoClient as Mongo, Db } from "mongodb";

export const MongoClient = {
  client: undefined as unknown as Mongo,
  db: undefined as unknown as Db,

  async connect(): Promise<void> {
    const url = process.env.DB_URL || "localhost:27017";
    const username = process.env.DB_USERNAME;
    const password = process.env.DB_PASSWORD;

    const client = new Mongo(url, { auth: { username, password } });
    const db = client.db("ts-users-api");

    this.client = client;
    this.db = db;

    console.log("==> Connected to mongodb!");
  },
  map(user: any) {
    const { _id, ...rest } = user;
    return { id: _id.toHexString(), ...rest };
  },
};
