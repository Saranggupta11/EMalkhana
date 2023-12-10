import Image from 'next/image'
import { Inter } from 'next/font/google'
import Login from '../components/Login'
import { redirect } from 'next/navigation'
import Dashboard from "@/pages/homedashboard";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Dashboard/>
    </>
  )
}
