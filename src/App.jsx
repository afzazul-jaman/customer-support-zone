import './App.css'
import { Twitter, Linkedin, Facebook, Mail } from 'lucide-react';
import Navbar from './components/Navbar'
import Progress from './components/Progress'
import Ticketscard from './components/Ticketscard'
import Footer from './components/Footer'
import { Suspense } from 'react';


const fetchData = async () => {
  const res = await fetch('/data.json')
  return res.json()
}

function App() {
  const userPromise = fetchData();
  return (
    <>
      <Navbar />
      <Progress />
       <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
        <Ticketscard userPromise ={userPromise} />
       </Suspense>
      <Footer />
    </>
  )
}

export default App;