/* eslint-disable @typescript-eslint/no-unused-vars */
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




export async function DELETE(request: Request) {
    const { client, collection } = await getClientAndCollection();
    const body = await request.json();
    const query = { userId: body.userId , done: body.done };
    const result = await collection.deleteMany(query);
    return NextResponse.json(result);
  }