import { Icon } from '@iconify/react'
import { useTypedDispatch, useTypedSelector } from 'hooks/hooks'
import { changeIsEditingCategory, delCategory } from 'store/reducers/categories/categoriesSlice'
import { Creator } from '../Creator'
import { BlockWrapper, HorizontalLine, LinePatch, ListItemWrapper, StyledCategoryDiv, StyledIcon, SubIcon, VerticalLine } from '../styles'
import { SubCategoriesList } from '../SubCategoriesList'
import { useState } from 'react'
import { RootState } from 'store/store'
import { delSubCategories } from 'store/reducers/sub-categories/subCategoriesSlice'

export const CategoryBlock = ({
  name,
  categoryId,
  editing,
  firstPosition,
  lastPosition,
  isPair,
}: {
  name: string,
  categoryId: string,
  editing?: boolean,
  lastPosition?: boolean,
  firstPosition?: boolean,
  isPair?: boolean,
}) => {
  const dispatch = useTypedDispatch()

  const [isSubCreating, setIsSubCreating] = useState(false)

  const onSubCreatingClick = () => setIsSubCreating(false)

  const subCategory = useTypedSelector((state: RootState) => state.subCategories.subCategories).filter((el) => el.categoryId === categoryId)

  return (
    <ListItemWrapper>
      {firstPosition && <LinePatch style={{ right: 'calc(50% + 1px)' }} />}
      {lastPosition && <LinePatch style={{ left: 'calc(50% + 1px)' }} />}
      <VerticalLine />
      {!editing ? (
        <BlockWrapper>
          <StyledCategoryDiv style={{ background: 'rgb(250, 156, 124)' }}>{name}</StyledCategoryDiv>
          <StyledIcon icon="ic:baseline-add-circle" onClick={() => setIsSubCreating(true)} />
          <SubIcon onClick={() => dispatch(changeIsEditingCategory({ categoryId, editing: true }))}>
            <Icon icon="ic:baseline-mode-edit" style={{ color: 'white' }} />
          </SubIcon>
          <StyledIcon
            icon="ic:baseline-cancel"
            onClick={() => {
              dispatch(delSubCategories(categoryId))
              dispatch(delCategory(categoryId))
            }}
            style={{ color: 'red' }}
          />
        </BlockWrapper>
      ) : (
        <Creator oldName={name} categoryId={categoryId} editing={editing} />
      )}
      {(isSubCreating || !!subCategory.length) && <VerticalLine />}
      {(subCategory.length > 1 || (!!subCategory.length && subCategory)) && <HorizontalLine />}

      <SubCategoriesList categoryId={categoryId} createSub={isSubCreating} onSubCreatingClick={onSubCreatingClick} isPair={isPair} />
    </ListItemWrapper>
  )
}
