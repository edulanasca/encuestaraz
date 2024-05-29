// app/api/subscribe/route.ts
import { ObjectId } from 'mongodb';
import clientPromise from '../../../lib/mongodb';
import { NextResponse } from "next/server";
import { updateHubSpotSubscription } from 'encuestaraz/app/hubspot/index';

export async function POST(req: Request) {
  try {
    const client = await clientPromise;
    const db = client.db(process.env.DB_NAME);
    const { id, email } = await req.json();

    if (!id || !email) {
      return NextResponse.json({ message: "Falta el ID o el email" }, { status: 400 });
    }

    const collection = db.collection('encuestaraz');
    const result = await collection.updateOne(
      { _id: new ObjectId(id as string) },
      { $set: { suscrito: true } }
    );

    if (result.modifiedCount === 0) {
      return NextResponse.json({ message: "No te encontramos o ya estabas suscrito" }, { status: 404 });
    }

    // Update HubSpot
    await updateHubSpotSubscription(email, true);

    return NextResponse.json({ message: "Suscripción exitosa 😃" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Hubo un error al suscribirte 😔", error }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
    const client = await clientPromise;
    const db = client.db(process.env.DB_NAME);
    const { id, email } = await req.json();

    if (!id || !email) {
      return NextResponse.json({ message: "Falta el ID o el email" }, { status: 400 });
    }

    const collection = db.collection('encuestaraz');
    const result = await collection.updateOne(
      { _id: new ObjectId(id as string) },
      { $set: { suscrito: false } }
    );

    if (result.modifiedCount === 0) {
      return NextResponse.json({ message: "ID no encontrado" }, { status: 404 });
    }

    // Update HubSpot
    await updateHubSpotSubscription(email, false);

    return NextResponse.json({ message: "Desuscripción exitosa 😃" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Ocurrió un error al desuscribirte 😔", error }, { status: 500 });
  }
}
