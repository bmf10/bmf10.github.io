import { Carousel } from "antd"
import styled from "styled-components"

export const Slick = styled(Carousel)`
  height: 100%;

  .slick-dots li button {
    background: #171717 !important;
    opacity: 1 !important;
  }

  .slick-dots li.slick-active button {
    background: #da0037 !important;
  }
`

export const CenteredImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`
