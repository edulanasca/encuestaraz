// app/api/subscribe/route.ts
import { ObjectId } from 'mongodb';
import clientPromise from '../../../lib/mongodb';
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const client = await clientPromise;
    const db = client.db(process.env.DB_NAME);

    const { id } = await req.json();

    if (!id) {
      return NextResponse.json({ message: "Falta el ID" }, { status: 400 });
    }

    const collection = db.collection('encuestaraz');
    const result = await collection.updateOne(
      { _id: new ObjectId(id as string) },
      { $set: { suscrito: true } }
    );

    if (result.modifiedCount === 0) {
      return NextResponse.json({ message: "No te encontramos o ya estabas suscrito" }, { status: 404 });
    }

    return NextResponse.json({ message: "Suscripción exitosa 😃" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Hubo un error al suscribirte 😔", error }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
    const client = await clientPromise;
    const db = client.db(process.env.DB_NAME);

    const { id } = await req.json();

    if (!id) {
      return NextResponse.json({ message: "Falta el ID" }, { status: 400 });
    }

    const collection = db.collection('encuestaraz');
    const result = await collection.updateOne(
      { _id: new ObjectId(id as string) },
      { $set: { suscrito: false } }
    );

    if (result.modifiedCount === 0) {
      return NextResponse.json({ message: "ID no encontrado" }, { status: 404 });
    }

    return NextResponse.json({ message: "Desuscripción exitosa 😃" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Ocurrió un error al desuscribirte 😔", error }, { status: 500 });
  }
}
