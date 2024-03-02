import First from "./components/First"
import Club from "./components/Club"
import Activies from "./components/Activies"
import Events from "./components/Events"
import PastEvents from "./components/PastEvents"
import Social from "./components/Social"
import Team from "./components/Team"
import { motion, useScroll } from "framer-motion"
function App() {
  const { scrollYProgress } = useScroll();
  console.log(scrollYProgress)
  return (
    <>
      <motion.div className="fixed top-0 w-full bg-green-200 h-1" style={{scaleX:scrollYProgress}}/>
      <First/>
      <Club />
      <Events />
      <Activies />
      <PastEvents />
      <Social />
      <Team />
    </>
  )
}

export default App
