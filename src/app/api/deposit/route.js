import connect from "@/utils/config/dbconfig";
import Deposit from "@/utils/models/deposit";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    // Connect to the database
    await connect();
    console.log(Deposit);
    const { name, email, txid, amount } = await request.json();

    // Retrieve all users from the database
    await Deposit.insertMany([{ name, email, txid, amount }]);

    // Return the users as JSON
    return NextResponse.json({ sucess: true }, { status: 200 });
  } catch (error) {
    // Handle any errors
    console.log(error);
    return NextResponse.json(
      { message: "Error submiting deposit request", error: error.message },
      { status: 500 }
    );
  }
}
