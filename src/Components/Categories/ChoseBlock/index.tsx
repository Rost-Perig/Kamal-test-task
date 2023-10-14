import { StyledIcon } from '../styles'
import { ChosenBlockWrapper, StyledBtn } from './styles'
import { useTypedDispatch } from 'hooks/hooks'

export const ChoseBlock = ({
  offChose,
  onPairItemCreate,
  onServiceCreate,
}: {
  offChose: () => void,
  onPairItemCreate: (value: boolean) => void,
  onServiceCreate: (value: boolean) => void,
}) => {
  const dispatch = useTypedDispatch()
  return (
    <ChosenBlockWrapper>
      <span> What do You want to create?</span>
      <div>
        <StyledBtn
          onClick={() => {
            offChose()
            onPairItemCreate(true)
          }}
          style={{ background: 'rgb(108, 116, 216)' }}
        >
          CATEGORY
        </StyledBtn>
        <StyledBtn
          onClick={() => {
            offChose()
            onServiceCreate(true)
          }}
          style={{ background: 'rgb(116, 163, 152)' }}
        >
          SERVICE
        </StyledBtn>
      </div>
      <StyledIcon icon="ic:baseline-cancel" onClick={() => offChose()} style={{ position: 'absolute', right: -8, top: -8, color: 'grey' }} />
    </ChosenBlockWrapper>
  )
}
