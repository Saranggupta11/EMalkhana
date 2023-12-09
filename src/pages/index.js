import Image from 'next/image'
import { Inter } from 'next/font/google'
import Login from '../components/Login'
import { authOptions } from './api/auth/[...nextauth]'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import Dashboard from "@/components/Dashboard";

const inter = Inter({ subsets: ['latin'] })

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (session) redirect('/dashboard');
  return (
    <>
      {/* <Login/> */}
      <Dashboard/>
    </>
  )
}
