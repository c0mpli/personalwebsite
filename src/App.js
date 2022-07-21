
import Navbar from './components/Navbar/Navbar';
import Intro from './components/Intro/Intro';
import Splash from './components/Splash/Splash'
import { useEffect, useState } from 'react';



function App() {
  const [loading, setLoading] = useState(false);
  useEffect(()=>{
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
      </>
    
  );
}

export default App;
