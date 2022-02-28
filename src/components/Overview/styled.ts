import { Descriptions, Image, Typography } from "antd"
import styled from "styled-components"

export const TopText = styled(Typography.Title)`
  margin-bottom: 32px !important;

  mark {
    padding: 0;
    background-color: #da0037;
    color: white;
  }
`

export const ProfilePictureContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: column;
  text-align: center;

  h1 {
    font-size: 20px;
    margin-bottom: 8px;
  }

  h2 {
    font-size: 16px;
    margin-top: 0 !important;
  }

  h5 {
    font-size: 12px;
    margin-top: 0 !important;
  }
`

export const ProfilePicture = styled(Image)`
  border-radius: 100%;
  margin-bottom: 16px;
`

export const MyDescription = styled(Descriptions)`
  margin-top: 20px;

  .ant-descriptions-header {
    margin-bottom: 8px;
  }

  .ant-descriptions-item {
    padding-bottom: 4px;
  }

  .ant-descriptions-item-label,
  .ant-descriptions-item-content {
    color: #ededed;
  }
`
