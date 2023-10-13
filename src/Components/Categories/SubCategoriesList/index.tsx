import { useTypedSelector } from 'hooks/hooks'
import { RootState } from 'store/store'
import { Creator } from '../Creator'
import { LinePatch, ListItemWrapper, StyledList, VerticalLine } from '../styles'
import { SubCategoryBlock } from '../SubCategoryBlock '

export const SubCategoriesList = ({
  categoryId,
  createSub,
  onSubCreatingClick,
}: {
  categoryId?: string,
  createSub?: boolean,
  onSubCreatingClick?: () => void,
}) => {
  const subCategory = useTypedSelector((state: RootState) => state.subCategories.subCategories).filter((el) => el.categoryId === categoryId)

  return (
    <StyledList>
      {!!subCategory?.length &&
        subCategory.map((el, index) => (
          <SubCategoryBlock
            key={el.subCategoryId}
            name={el.subCategoryName}
            categoryId={el.categoryId}
            isSubEditing={el.isSubEditing}
            subCategoryId={el.subCategoryId}
            firstPosition={index === 0 ? true : false}
            lastPosition={index === subCategory.length - 1 && !createSub ? true : false}
          />
        ))}
      {createSub && (
        <ListItemWrapper>
          <VerticalLine style={{ position: 'relative' }}>
            <LinePatch />
          </VerticalLine>
          <Creator
            inputName="subCategoryInput"
            placeholder="enter sub-category name"
            subCategoryCreating={true}
            categoryId={categoryId}
            onSubCreatingClick={onSubCreatingClick}
          />
        </ListItemWrapper>
      )}
    </StyledList>
  )
}
