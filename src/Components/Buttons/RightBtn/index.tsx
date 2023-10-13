import { Icon } from '@iconify/react'
import { useTypedDispatch, useTypedSelector } from 'hooks/hooks'
import { RootState } from 'store/store'
import { changeX } from 'store/reducers/position/positionSlice'
import { StyledBtnX } from '../styles'

export const RightBtn = () => {
  const dispatch = useTypedDispatch()

  const position = useTypedSelector((state: RootState) => state.position)

  return (
    <StyledBtnX style={{ right: 0 }} onClick={() => dispatch(changeX({ x: position.x + 16 }))}>
      <Icon icon="ic:baseline-keyboard-arrow-right" style={{ width: 24, height: 24, color: 'white' }} />
    </StyledBtnX>
  )
}
