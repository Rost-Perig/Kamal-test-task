import styled from 'styled-components'

export const StyledHeader = styled.header`
  /* position: absolute;
  top: 0;
  left: 0; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 82px;
  padding: 0 24px;
  border-bottom: 1px solid rgb(199, 208, 216);
  /* z-index: 10; */
`

export const StyledLogo = styled.p`
  margin: 0;
  font-size: 20px;
  font-weight: 600;
  margin-right: 8px;
`

export const ServicesCount = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 40%;
  background: rgb(252, 185, 76);
  font-size: 12px;
  color: rgb(245, 247, 251);
`

export const StyledHeaderButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  background: white;
  border: none;
  padding: 0 12px;
  font-weight: 600;
  color: rgb(196, 196, 196);
  cursor: pointer;
`
