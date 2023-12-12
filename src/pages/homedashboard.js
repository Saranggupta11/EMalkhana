import React from "react";
import Homepage from "../components/Homepage";
import { useSession, getSession } from "next-auth/react";
import { useRouter } from "next/router";


export default function Dashboard() {
  const { data: session, status } = useSession()
  const router = useRouter();
  if (status === "loading") {
    return <p>Loading...</p>;
  }
  if (!session || session === null || session === undefined) {
    router.push("/login");
  }
  return (
    <div>
      <Homepage />
    </div>
  );
}
