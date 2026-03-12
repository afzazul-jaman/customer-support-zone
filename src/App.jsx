import { useState, Suspense } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Progress from './components/Progress'
import Ticketscard from './components/Ticketscard'
import Footer from './components/Footer'

const loadData = async () => {
  const res = await fetch('/data.json')
  const jsonData = await res.json()
  return jsonData
}

const userPromise = loadData()

function App() {
  return (
    <>
      <Navbar />
     
      <Suspense fallback={<p>Loading...</p>}>
        <Ticketscard userPromise={userPromise} />
      </Suspense>
      <Footer />
    </>
  )
}

export default App