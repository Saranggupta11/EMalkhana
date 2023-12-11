import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth/next";
import dbConnect from "@/db/utils/dbConnect";
import User from "@/db/model/User";
import bcrypt from 'bcrypt'

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {},
      async authorize(credentials, req) {
        const { userId, password } = credentials;
        try{
          await dbConnect();
          const user=await User.findOne({userId});

          if(!user){
            return null;
          }

          const isValid=await bcrypt.compare(password, user.password);

          if(!isValid){
            return null;
          }

          return user;
        }catch(e){
          console.log(e);
        }
      },
    }),
  ],
  session: {
    stratergy:"jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async signIn(user, account, profile) {
      return true;
    },
    async redirect(url, baseUrl) {
      return baseUrl;
    },
    async session(session, user) {
      return session;
    },
    async jwt(token, user, account, profile, isNewUser) {
      return token;
    },
  },
};

const authHandler = NextAuth(authOptions);

export default authHandler;
