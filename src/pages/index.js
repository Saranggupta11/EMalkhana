import Image from "next/image";
import { Inter } from "next/font/google";
import Login from "../components/Login";
import { redirect } from "next/navigation";
import Dashboard from "@/pages/homedashboard";
import { useSession, getSession } from "next-auth/react";
import { useRouter } from "next/router";
const inter = Inter({ subsets: ["latin"] });
import ManageEntDetailsData from '../components/ManageEntDetailsData'
export default function Home() {


  return (
    <>
    <ManageEntDetailsData/>
    </>
  );
}
