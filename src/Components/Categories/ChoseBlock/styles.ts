import styled from 'styled-components'

export const ChosenBlockWrapper = styled.div`
  position: absolute;
  top: 48px;
  left: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 200px;
  height: 120px;
  background: rgb(245, 247, 251);
  border: 1px solid rgb(199, 208, 216);
  color: gray;
  font-weight: 600;
  font-size: 16px;
  z-index: 10;
  box-shadow:
    0px 0px 10px 6px rgba(0, 0, 0, 0.1),
    0px 0px 12px 8px rgba(255, 255, 255, 0.2),
    0px 0px 4px 2px rgba(255, 255, 255, 0.7);
`

export const StyledBtn = styled.button`
  padding: 8px;
  margin: 0 2px;
  border: 1px solid rgb(199, 208, 216);
  font-weight: 600;
  color: rgb(245, 247, 251);
  cursor: pointer;
`
