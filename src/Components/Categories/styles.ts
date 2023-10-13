import styled from 'styled-components'
import { Icon } from '@iconify/react'

export const CategoriesWrapper = styled.div`
  position: relative;
  top: 0;
  left: 0;

  display: flex;
  align-items: center;
  flex-direction: column;
  min-width: 100vw;
  padding: 48px 24px;
`

export const BlockWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
  margin: 0 4px;
  border: 1px solid rgb(199, 208, 216);
`

export const StyledCategories = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 120px;
  padding: 8px;
  border: 1px dashed rgb(199, 208, 216);
  font-weight: 600;
  font-size: 14px;
  background: white;
  overflow: hidden;
`

export const StyledIcon = styled(Icon)`
  width: 24px;
  height: 24px;
  margin-left: 4px;
  color: rgb(199, 208, 216);
  cursor: pointer;
`

export const SubIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  margin-left: 4px;
  background: rgb(199, 208, 216);
  border-radius: 50%;
  cursor: pointer;
`

export const StyledList = styled.ul`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin: 0;
  padding: 0;
`

export const StyledCategoryDiv = styled.div`
  max-width: 160px;
  max-height: 36px;
  padding: 8px;
  overflow: hidden;
  white-space: nowrap;
  font-weight: 600;
  color: rgb(245, 247, 251);
`

export const ListItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const VerticalLine = styled.div`
  height: 16px;
  border-left: 1px solid rgb(199, 208, 216);
`

export const HorizontalLine = styled.div`
  width: 100%;
  border-top: 1px solid rgb(199, 208, 216);
`
