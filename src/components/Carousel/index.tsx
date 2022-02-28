import { FC, useRef } from "react"
import Overview from "components/Overview"
import { Slick, CenteredImage } from "./styled"
import Wrapper from "components/Wrapper"
import { CarouselProps, Image, Typography } from "antd"
import Typist from "react-text-typist"
import { CarouselRef } from "antd/lib/carousel"
import Experience from "components/Experience"
import NavigationButton from "components/NavigationButton"

const Carousel: FC = () => {
  const slickRef = useRef<CarouselRef>(null)

  const settings: CarouselProps = {
    lazyLoad: "ondemand",
    dots: true,
    infinite: false,
  }

  return (
    <Slick {...settings} ref={slickRef}>
      <div>
        <Overview onNext={() => slickRef.current?.next()} />
      </div>
      <div>
        <Experience
          onNext={() => slickRef.current?.next()}
          onPrev={() => slickRef.current?.prev()}
        />
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
            onClick={() => slickRef.current?.prev()}
            tooltipText="My Experience"
          />
        </Wrapper>
      </div>
    </Slick>
  )
}

export default Carousel
