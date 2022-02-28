import { CSSProperties, FC, ReactNode } from "react"
import { ContentStyled, ContainerStyled } from "./styled"

interface Props {
  readonly children: ReactNode
  readonly style?: CSSProperties
}

const Wrapper: FC<Props> = ({ children, style }: Props) => {
  return (
    <ContainerStyled>
      <ContentStyled style={style}>{children}</ContentStyled>
    </ContainerStyled>
  )
}

export default Wrapper
