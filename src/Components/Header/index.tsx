import { StyledLogo, StyledHeader, ServicesCount, StyledHeaderButton } from "./styles"
import { Icon } from "@iconify/react"


export const Header = () => {

  return (
    <StyledHeader >
      <div style={{display: 'flex'}}>
        <StyledLogo>Services</StyledLogo>
        <ServicesCount>0</ServicesCount>
      </div>
      <div style={{ display: 'flex' }}>
        <StyledHeaderButton style={{marginRight: 2, background: 'rgb(108, 116, 216)', color: 'white'}}>LIST VIEW</StyledHeaderButton>
        <StyledHeaderButton style={{ marginRight: 6 , width:32, padding: 0}}>
           <Icon icon="ic:baseline-near-me" style={{width: 16, height: 16}}/>
        </StyledHeaderButton>
        <StyledHeaderButton style={{marginRight: 2}}>-</StyledHeaderButton>
        <StyledHeaderButton style={{marginRight: 2}}>100%</StyledHeaderButton>
        <StyledHeaderButton>+</StyledHeaderButton>
      </div>
    </StyledHeader>
  )
}
