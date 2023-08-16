import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Platforms from './components/Platforms'
import PersonCreator from './components/PersonCreator'
import Offers from './components/Offers'
import CallToAction from './components/CallToAction'
import Footer from './components/Footer'

import { motion, useScroll} from 'framer-motion'

function App() {
  const {scrollYProgress} = useScroll();
  
  return (
    <>
      <motion.div 
      style={{ scaleX: scrollYProgress }}
      className='
       fixed
       top-0
       left-0
       right-0
       h-[2px]
       bg-[#F5841B]
       z-20
       origin-left
      '
      />
      <Header />
      <Hero />
      <Platforms />
      <PersonCreator />
      <Offers />
      <CallToAction />
      <Footer />
    </>
  )
}

export default App
