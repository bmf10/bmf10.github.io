import styled from "styled-components"

interface Props {
  readonly state: "next" | "prev"
}

export const ButtonContainer = styled.div`
  position: absolute;
  bottom: 20px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;

  ${(props: Props) => {
    if (props.state === "next") {
      return `
        right: 20px;
      `
    } else {
      return `
        left: 20px;
      `
    }
  }}
`
