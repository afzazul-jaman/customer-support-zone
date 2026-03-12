import './App.css'
import { Twitter, Linkedin, Facebook, Mail } from 'lucide-react';
import Navbar from './components/Navbar'
import Progress from './components/Progress'
import Ticketscard from './components/Ticketscard'
import Footer from './components/Footer'
 console.log("hello");
function App(){
  return (
    <>
      <Navbar />
      <Progress />
      <Ticketscard />
      <Footer />
    </>
  )
}

export default App