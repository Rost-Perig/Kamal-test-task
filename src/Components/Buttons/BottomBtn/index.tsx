import { Icon } from '@iconify/react'
import { useTypedDispatch, useTypedSelector } from 'hooks/hooks'
import { RootState } from 'store/store'
import { changeY } from 'store/reducers/position/positionSlice'
import { StyledBtnY } from '../styles'

export const BottomBtn = () => {
  const dispatch = useTypedDispatch()

  const position = useTypedSelector((state: RootState) => state.position)

  return (
    <StyledBtnY style={{ bottom: 0 }} onClick={() => dispatch(changeY({ y: position.y + 16 }))}>
      <Icon icon="ic:baseline-keyboard-arrow-down" style={{ width: 24, height: 24, color: 'white' }} />
    </StyledBtnY>
  )
}
