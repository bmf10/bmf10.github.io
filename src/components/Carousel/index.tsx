import { FC, useRef } from "react"
import Overview from "components/Overview"
import { Slick, CenteredImage } from "./styled"
import Wrapper from "components/Wrapper"
import { CarouselProps, Image, Typography } from "antd"
import Typist from "react-text-typist"
import { CarouselRef } from "antd/lib/carousel"
import Experience from "components/Experience"
import NavigationButton from "components/NavigationButton"
import ReactGA from "react-ga"

const Carousel: FC = () => {
  const slickRef = useRef<CarouselRef>(null)

  const settings: CarouselProps = {
    lazyLoad: "ondemand",
    dots: true,
    infinite: false,
    onSwipe: (dir) => {
      ReactGA.event({
        action: `Swipe ${dir}`,
        category: "Carousel",
        label: "SWIPE",
      })
    },
  }

  const handleNext = () => {
    slickRef.current?.next()
    ReactGA.event({
      action: "Next",
      category: "Carousel",
      label: "SWIPE",
    })
  }

  const handlePrev = () => {
    slickRef.current?.prev()
    ReactGA.event({
      action: "Prev",
      category: "Carousel",
      label: "SWIPE",
    })
  }

  return (
    <Slick {...settings} ref={slickRef}>
      <div>
        <Overview onNext={handleNext} />
      </div>
      <div>
        <Experience onNext={handleNext} onPrev={handlePrev} />
      </div>
      <div>
        <Wrapper>
          <CenteredImage>
            <Image preview={false} width={500} src="/code.gif" />
          </CenteredImage>
          <Typography.Title
            level={3}
            style={{ textAlign: "center", marginTop: 16 }}
          >
            <Typist
              showCursor={false}
              sentences={["I'm still working on it!", "Stay Tuned!"]}
              pauseTime={1000}
              loop={true}
            />
          </Typography.Title>
          <NavigationButton
            state="prev"
            onClick={handlePrev}
            tooltipText="My Experience"
          />
        </Wrapper>
      </div>
    </Slick>
  )
}

export default Carousel
