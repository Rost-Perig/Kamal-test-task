import { useTypedDispatch, useTypedSelector } from 'hooks/hooks'
import { Icon } from '@iconify/react'
import { RootState } from 'store/store'
import { changeScale } from 'store/reducers/scale/positionSlice'
import { StyledLogo, StyledHeader, ServicesCount, StyledHeaderButton, StyledSelect } from './styles'

const options = [
  <option key={'001'} value="1">
    100%
  </option>,
  <option key={'002'} value="0.1">
    10%
  </option>,
  <option key={'003'} value="0.2">
    20%
  </option>,
  <option key={'004'} value="0.3">
    30%
  </option>,
  <option key={'005'} value="0.4">
    40%
  </option>,
  <option key={'006'} value="0.5">
    50%
  </option>,
  <option key={'007'} value="0.6">
    60%
  </option>,
  <option key={'008'} value="0.7">
    70%
  </option>,
  <option key={'009'} value="0.8">
    80%
  </option>,
  <option key={'010'} value="0.9">
    90%
  </option>,
  <option key={'011'} value="1.1">
    110%
  </option>,
  <option key={'012'} value="1.2">
    120%
  </option>,
  <option key={'013'} value="1.3">
    130%
  </option>,
  <option key={'014'} value="1.4">
    140%
  </option>,
  <option key={'015'} value="1.5">
    150%
  </option>,
  <option key={'016'} value="1.6">
    160%
  </option>,
  <option key={'017'} value="1.7">
    170%
  </option>,
  <option key={'018'} value="1.8">
    180%
  </option>,
  <option key={'019'} value="1.9">
    190%
  </option>,
  <option key={'020'} value="2">
    200%
  </option>,
]

export const Header = () => {
  const dispatch = useTypedDispatch()

  const scale = useTypedSelector((state: RootState) => state.scale.scale)

  return (
    <StyledHeader>
      <div style={{ display: 'flex' }}>
        <StyledLogo>Services</StyledLogo>
        <ServicesCount>0</ServicesCount>
      </div>
      <div style={{ display: 'flex' }}>
        <StyledHeaderButton
          style={{
            marginRight: 6,
            background: 'rgb(108, 116, 216)',
            color: 'white',
          }}
        >
          LIST VIEW
        </StyledHeaderButton>
        <StyledHeaderButton style={{ marginRight: 6, width: 32, padding: 0 }} onClick={() => dispatch(changeScale({ scale: 1 }))}>
          <Icon icon="ic:baseline-close-fullscreen" style={{ width: 16, height: 16 }} />
        </StyledHeaderButton>
        <StyledHeaderButton style={{ marginRight: 2 }} onClick={() => dispatch(changeScale({ scale: scale > 0.1 ? scale - 0.1 : 0.1 }))}>
          -
        </StyledHeaderButton>
        <StyledSelect name="scales" onChange={(e) => dispatch(changeScale({ scale: Number.parseFloat(e.target.value) }))}>
          {options.map((el) => el)}
        </StyledSelect>
        <StyledHeaderButton onClick={() => dispatch(changeScale({ scale: scale < 4 ? scale + 0.1 : 4 }))}>+</StyledHeaderButton>
      </div>
    </StyledHeader>
  )
}
