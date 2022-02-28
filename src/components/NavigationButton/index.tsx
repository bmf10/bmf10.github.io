import { Button, Tooltip } from "antd"
import { FC } from "react"
import { ButtonContainer } from "./styled"
import RightOutlined from "@ant-design/icons/RightOutlined"
import LeftOutlined from "@ant-design/icons/LeftOutlined"

interface Props {
  readonly onClick?: () => void
  readonly state: "next" | "prev"
  readonly tooltipText: string
}

const NavigationButton: FC<Props> = ({
  state,
  onClick,
  tooltipText,
}: Props) => (
  <ButtonContainer state={state}>
    <Tooltip title={tooltipText}>
      <Button
        type="ghost"
        size="large"
        shape="circle"
        onClick={onClick}
        color="primary"
        icon={state === "next" ? <RightOutlined /> : <LeftOutlined />}
      />
    </Tooltip>
  </ButtonContainer>
)

export default NavigationButton
