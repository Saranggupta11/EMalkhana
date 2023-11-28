import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth/next";
import dbConnect from "@/db/utils/dbConnect";
export const authOptions = {
  session: {
    stratergy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {},
      async authorize(credentials, req) {
        const { userId, password } = credentials;
        await dbConnect();
        const user = await User.findOne({ userId }).clone();
        if (!user) throw new Error("User not found");
        const isValid = await user.comparePassword(password);
        if (!isValid) throw new Error("Invalid password");
        return user;
      },
    }),
  ],
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

export { authHandler as GET, authHandler as POST };
