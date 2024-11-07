import {
  TodoItemType,
  TodoItemTypeWithouId,
} from "@/models/Todo";
import { MongoClient, ObjectId, ServerApiVersion } from "mongodb";

import { NextResponse } from "next/server";
let client: MongoClient;
async function getClientAndCollection() {
  if (client == undefined) {
    const uri = process.env.MONGODB_URI as string;
    client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });
    await client.connect();
  }
  // const client = await MongoClient.connect(uri);
  const dbName = process.env.MONGODB_DB_NAME;
  const collection = client.db(dbName).collection("todos");
  return { client, collection };
}

// Handles GET requests to /api
export async function GET(request: Request) {
  // ...
  const todos = await getTodoItemData();

  return NextResponse.json(todos);
}

// Handles POST requests to /api
export async function POST(request: Request) {
  const { client, collection } = await getClientAndCollection();
  const body = (await request.json()) as TodoItemTypeWithouId;
  const result = await collection.insertOne(body);
  return NextResponse.json(result);
}

export async function DELETE(request: Request) {
  const { client, collection } = await getClientAndCollection();
  const body = new ObjectId(await request.json());
  const query = { _id: body };
  const result = await collection.deleteOne(query);
  return NextResponse.json(result);
}
async function getTodoItemData() {
  const { client, collection } = await getClientAndCollection();
  const todos = await collection.find({}).toArray();
  // await client.close();
  return todos;
}

export async function PATCH(request: Request) {
  const { client, collection } = await getClientAndCollection();
  const body = (await request.json()) as TodoItemType;
  const response = await collection.findOneAndReplace(
    { _id: new ObjectId(body._id) },
    {
      label: body.label,
      done: body.done,
    },
    { returnDocument: "after" }
  );
  return NextResponse.json(response);
}
