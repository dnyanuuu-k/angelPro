import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { connect } from "@/utils/config/dbconfig";
import User from "@/utils/models/user";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorizationUrl: `https://accounts.google.com/o/oauth2/auth?response_type=code&prompt=consent&access_type=offline&client_id=${process.env.GOOGLE_CLIENT_ID}`,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      await connect();

      const existingUser = await User.findOne({ email: user.email });
      if (!existingUser) {
        // Determine if the user is the admin
        const isAdmin = user.email === "onlineangelpro@gmail.com";

        const newUser = await User.create({
          name: user.name,
          email: user.email,
          isAdmin: isAdmin,
        });
        console.log("New user created:", newUser);
      } else {
        console.log("Existing user:", existingUser);
      }
      return true;
    },
    async session({ session, token }) {
      session.user.id = token.sub;
      session.user.picture = token.picture;
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.sub = user.id;
        token.picture = user.image;
      }
      return token;
    },
  },
});

export { handler as GET, handler as POST };
