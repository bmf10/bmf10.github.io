import { FC, useEffect } from "react"
import Carousel from "components/Carousel"
import ReactGA from "react-ga"

const App: FC = () => {
  useEffect(() => {
    ReactGA.initialize("UA-178893183-1")
    ReactGA.pageview(window.location.pathname + window.location.search)
  }, [])

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#444444" }}>
      <Carousel />
    </div>
  )
}

export default App
