import { connect } from "@/utils/config/dbconfig";
import User from "@/utils/models/user";
import { NextResponse } from "next/server";

// Handle GET request to fetch user data
export async function GET(request) {
  try {
    // Connect to the database
    await connect();

    // Retrieve all users from the database
    const users = await User.find({});

    // Return the users as JSON
    return NextResponse.json(users, { status: 200 });
  } catch (error) {
    // Handle any errors
    return NextResponse.json(
      { message: "Error fetching users", error: error.message },
      { status: 500 }
    );
  }
}
