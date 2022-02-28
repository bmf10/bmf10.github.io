import styled from "styled-components"

export const ContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`

export const ContentStyled = styled.div`
  position: relative;
  margin: 20px 20px 50px;
  width: 768px;
  padding: 26px;
  background-color: #171717;
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.42);
  -webkit-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.42);
  -moz-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.42);

  @media (max-width: 768px) {
    width: 95%;
  }

  @media (max-width: 576px) {
    padding-bottom: 80px;
  }
`
