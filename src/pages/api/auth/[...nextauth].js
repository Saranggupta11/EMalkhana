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
        console.log("req.user in authorize:", req.user);
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
          console.log(user);
          return Promise.resolve(user);
        } catch (e) {
          console.log(e);
        }
      },
    }),
  ],
  session: {
    jwt: true,
    serialize: (user, callback) => {
      callback(null, user);
    },
    // Deserialize user from the session
    deserialize: (user, callback) => {
      callback(null, user);
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const authHandler = NextAuth(authOptions);

export default loggingMiddleware(authHandler);
