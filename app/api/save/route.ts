import clientPromise from '../../../lib/mongodb';
import Encuestaraz from 'encuestaraz/app/types/Encuestaraz';
import { NextResponse } from "next/server";
import { sendToHubSpot } from 'encuestaraz/app/hubspot';

export async function POST(req: Request) {
  try {
    const client = await clientPromise;
    const db = client.db(process.env.DB_NAME);

    const data: Encuestaraz & { timestamp: Date } = {
      ...(await req.json()),
      timestamp: new Date()  // Agrega un timestamp al objeto recibido
    };

    const collection = db.collection<Encuestaraz>('encuestaraz');
    const result = await collection.insertOne(data);
    const hubSpotResult = await sendToHubSpot(data);

    return NextResponse.json({ message: "Tus respuestas fueron guardadas 😊", result }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Hubo un error al guardar tus respuestas 😔", error }, { status: 500 });
  }
}


