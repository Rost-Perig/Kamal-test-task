import { Icon } from '@iconify/react'
import { useTypedDispatch } from 'hooks/hooks'
import { changeIsEditingSubCategory, delSubCategory } from 'store/reducers/sub-categories/subCategoriesSlice'
import { Creator } from '../Creator'
import { BlockWrapper, LinePatch, ListItemWrapper, StyledCategoryDiv, StyledIcon, SubIcon, VerticalLine } from '../styles'
import { ChoseBlock } from '../ChoseBlock'
import { useState } from 'react'

export const SubCategoryBlock = ({
  name,
  categoryId,
  isSubEditing,
  subCategoryId,
  firstPosition,
  lastPosition,
  isService,
  isPair,
}: {
  name?: string,
  categoryId?: string,
  isSubEditing?: boolean,
  subCategoryId: string,
  listPosition?: string,
  firstPosition?: boolean,
  lastPosition?: boolean,
  isService?: boolean,
  isPair?: boolean,
}) => {
  const dispatch = useTypedDispatch()

  const [isChose, setIsChose] = useState(false)
  const [pairItemCreate, setPairItemCreate] = useState(false)
  const [serviceCreate, setServiceCreate] = useState(false)

  const offChose = () => setIsChose(false)

  const onPairItemCreate = (value: boolean) => setPairItemCreate(value)
  const onServiceCreate = (value: boolean) => setServiceCreate(value)

  return (
    <ListItemWrapper style={{ overflow: 'visible' }}>
      {firstPosition && <LinePatch style={{ right: 'calc(50% + 1px)' }} />}
      {lastPosition && !isPair && <LinePatch style={{ left: 'calc(50% + 1px)' }} />}
      <VerticalLine />
      {!isSubEditing ? (
        <BlockWrapper>
          <StyledCategoryDiv style={{ background: !isService ? 'rgb(51, 192, 211)' : 'rgb(116, 163, 152)' }}>{name}</StyledCategoryDiv>
          <StyledIcon icon="ic:baseline-add-circle" onClick={() => setIsChose(true)} />
          <SubIcon onClick={() => dispatch(changeIsEditingSubCategory({ subCategoryId, editing: true }))}>
            <Icon icon="ic:baseline-mode-edit" style={{ color: 'white' }} />
          </SubIcon>
          <StyledIcon icon="ic:baseline-cancel" onClick={() => dispatch(delSubCategory(subCategoryId))} style={{ color: 'red' }} />
        </BlockWrapper>
      ) : (
        <Creator oldName={name} subCategoryId={subCategoryId} isSubEditing={isSubEditing} />
      )}
      {isChose && isPair && (
        <span style={{ position: 'relative', top: -72, left: 66, width: 300, height: lastPosition ? 200 : 36 }}>
          <ChoseBlock offChose={offChose} onPairItemCreate={onPairItemCreate} onServiceCreate={onServiceCreate} />
        </span>
      )}
      {(pairItemCreate || serviceCreate) && isPair && (
        <ListItemWrapper>
          <VerticalLine style={{ position: 'relative' }}>
            <LinePatch />
          </VerticalLine>
          <Creator
            inputName="subCategoryInput"
            placeholder="enter name"
            subCategoryCreating={true}
            categoryId={categoryId}
            isPair={isPair}
            onPairItemCreate={onPairItemCreate}
            onServiceCreate={onServiceCreate}
            serviceCreate={serviceCreate}
          />
        </ListItemWrapper>
      )}
    </ListItemWrapper>
  )
}
