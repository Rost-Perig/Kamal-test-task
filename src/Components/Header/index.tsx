import { useTypedDispatch } from 'hooks/hooks'
import { Icon } from '@iconify/react'
import { changeX, changeY } from 'store/reducers/position/positionSlice'
import { StyledLogo, StyledHeader, ServicesCount, StyledHeaderButton } from './styles'

export const Header = () => {
  const dispatch = useTypedDispatch()

  return (
    <StyledHeader>
      <div style={{ display: 'flex' }}>
        <StyledLogo>Services</StyledLogo>
        <ServicesCount>0</ServicesCount>
      </div>
      <div style={{ display: 'flex' }}>
        <StyledHeaderButton
          style={{
            marginRight: 2,
            background: 'rgb(108, 116, 216)',
            color: 'white',
          }}
        >
          LIST VIEW
        </StyledHeaderButton>
        <StyledHeaderButton
          style={{ marginRight: 6, width: 32, padding: 0 }}
          onClick={() => {
            dispatch(changeX({ x: 0 }))
            dispatch(changeY({ y: 100 }))
          }}
        >
          <Icon icon="ic:baseline-near-me" style={{ width: 16, height: 16 }} />
        </StyledHeaderButton>
        <StyledHeaderButton style={{ marginRight: 2 }}>-</StyledHeaderButton>
        <StyledHeaderButton style={{ marginRight: 2 }}>100%</StyledHeaderButton>
        <StyledHeaderButton>+</StyledHeaderButton>
      </div>
    </StyledHeader>
  )
}
