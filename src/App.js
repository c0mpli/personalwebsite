
import Navbar from './components/Navbar/Navbar';
import Intro from './components/Intro/Intro';
import Splash from './components/Splash/Splash'
import { useEffect, useState } from 'react';
import Project from './components/Project/Project';
import Footer from './components/Footer/Footer'


function App() {
  const [loading, setLoading] = useState(false);
  useEffect(()=>{
    document.title = "Jash Doshi | Personal Website"
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },2500)
  },[])
  return (
      loading?
      <Splash/>
      :
      <>
        <Navbar/>
        <Intro/>
        <Project/>
        <Footer/>
      </>
    
  );
}

export default App;
