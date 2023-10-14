import { StyledIcon } from '../styles'
import { ChosenBlockWrapper, StyledBtn } from './styles'

export const ChoseBlock = ({ offChose }: { offChose: () => void }) => {
  return (
    <ChosenBlockWrapper>
      <span> What do You want to create?</span>
      <div>
        <StyledBtn style={{ background: 'rgb(108, 116, 216)' }}>CATEGORY</StyledBtn>
        <StyledBtn style={{ background: 'rgb(116, 163, 152)' }}>SERVICE</StyledBtn>
      </div>
      <StyledIcon
        icon="ic:baseline-cancel"
        onClick={() => {
          offChose()
        }}
        style={{ position: 'absolute', right: -8, top: -8, color: 'grey' }}
      />
    </ChosenBlockWrapper>
  )
}
