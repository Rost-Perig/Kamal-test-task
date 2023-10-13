import { Icon } from '@iconify/react'
import { useTypedDispatch } from 'hooks/hooks'
import { changeIsEditingSubCategory, delSubCategory } from 'store/reducers/sub-categories/subCategoriesSlice'
import { Creator } from '../Creator'
import { BlockWrapper, ListItemWrapper, StyledCategoryDiv, StyledIcon, SubIcon, VerticalLine } from '../styles'

export const SubCategoryBlock = ({
  name,
  categoryId,
  isSubEditing,
  subCategoryId,
}: {
  name?: string,
  categoryId?: string,
  isSubEditing?: boolean,
  subCategoryId: string,
}) => {
  const dispatch = useTypedDispatch()

  return (
    <ListItemWrapper>
      <VerticalLine />
      {!isSubEditing ? (
        <BlockWrapper>
          <StyledCategoryDiv style={{ background: 'rgb(51, 192, 211)' }}>{name}</StyledCategoryDiv>
          <StyledIcon icon="ic:baseline-add-circle" />
          <SubIcon onClick={() => dispatch(changeIsEditingSubCategory({ subCategoryId, editing: true }))}>
            <Icon icon="ic:baseline-mode-edit" style={{ color: 'white' }} />
          </SubIcon>
          <StyledIcon icon="ic:baseline-cancel" onClick={() => dispatch(delSubCategory(subCategoryId))} style={{ color: 'red' }} />
        </BlockWrapper>
      ) : (
        <Creator oldName={name} subCategoryId={subCategoryId} isSubEditing={isSubEditing} />
      )}
    </ListItemWrapper>
  )
}
