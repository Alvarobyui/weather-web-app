"use client"
import Head from "./components/Head"
import Main from "./components/Main"
import Hightlights from './components/Hightlights'
import Navbar from './components/Navbar'

export default function Home() {
  return (
    <body>
      <div className="container">
         <Head/>
         <Main />
         <h1>Today&apos;s Hightlights</h1>
         <Hightlights />
      </div>  
    </body>
  )
}