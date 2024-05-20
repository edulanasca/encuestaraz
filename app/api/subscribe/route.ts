// app/api/subscribe/route.ts
import clientPromise from '../../../lib/mongodb';
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const client = await clientPromise;
    const db = client.db(process.env.DB_NAME);

    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ message: "Email is required" }, { status: 400 });
    }

    const collection = db.collection('encuestaraz');
    const result = await collection.updateOne(
      { email },
      { $set: { subscribe: true } }
    );

    if (result.modifiedCount === 0) {
      return NextResponse.json({ message: "No records found or already subscribed" }, { status: 404 });
    }

    return NextResponse.json({ message: "Subscription updated successfully" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Failed to update subscription", error }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
    const client = await clientPromise;
    const db = client.db(process.env.DB_NAME);

    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ message: "Email is required" }, { status: 400 });
    }

    const collection = db.collection('encuestaraz');
    const result = await collection.deleteOne(
      { email, subscribe: true }  // Check if the user is subscribed before deleting
    );

    if (result.deletedCount === 0) {
      return NextResponse.json({ message: "User is not subscribed or email not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Unsubscribed successfully" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Failed to unsubscribe user", error }, { status: 500 });
  }
}
