import connect from "@/utils/config/dbconfig";
import Sellusdt from "@/utils/models/sellusdt";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    // Connect to the database
    await connect();
    const { usdtVol, phone, txref, accnum, accifsc, accname, email } =
      await request.json();

    // Retrieve all users from the database
    await Sellusdt.insertMany([
      { usdtVol, phone, txref, accnum, accifsc, accname, email },
    ]);

    // Return the users as JSON
    return NextResponse.json({ sucess: true }, { status: 200 });
  } catch (error) {
    // Handle any errors
    return NextResponse.json(
      { message: "Error fetching sell", error: error.message },
      { status: 500 }
    );
  }
}

// export async function GET() {
//   await connect();
//   const topics = await SellUsdt.find();
//   return NextResponse.json({ topics });
// }

// export async function DELETE(request) {
//   const id = request.nextUrl.searchParams.get("id");
//   await connect();
//   await SellUsdt.findByIdAndDelete(id);
//   return NextResponse.json({ message: "Topic deleted" }, { status: 200 });
// }
