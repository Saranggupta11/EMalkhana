import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth/next";
import dbConnect from "@/db/utils/dbConnect";
import User from "@/db/model/User";
import bcrypt from "bcrypt";
import loggingMiddleware from "../logMiddleware";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {},
      async authorize(credentials, req) {
        const { userId, password } = credentials;
        try {
          await dbConnect();
          const user = await User.findOne({ userId });

          if (!user) {
            return null;
          }

          const isValid = await bcrypt.compare(password, user.password);

          if (!isValid) {
            return null;
          }

          // Include the entire user object in the session
          console.log("user in authorize:", user);
          return { ...user, id: user._id.toString() }; // returning session object with user details
        } catch (e) {
          console.log(e);
          return null;
        }
      },
    }),
  ],
  session: {
    jwt: true, // use JWT for session
  },

  secret: process.env.NEXTAUTH_SECRET,
};

const authHandler = NextAuth(authOptions);

export default authHandler;
