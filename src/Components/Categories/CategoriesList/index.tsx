import { useTypedSelector } from 'hooks/hooks'
import { RootState } from 'store/store'
import { CategoryBlock } from '../CategoryBlock'
import { Creator } from '../Creator'
import { LinePatch, ListItemWrapper, StyledList, VerticalLine } from '../styles'

export const CategoriesList = () => {
  const isCategoryCreating = useTypedSelector((state: RootState) => state.categories?.isCategoryCreating)
  const categories = useTypedSelector((state: RootState) => state.categories?.categories)

  return (
    <StyledList>
      {!!categories.length &&
        categories.map((el, index) => (
          <CategoryBlock
            key={el.categoryId}
            name={el.categoryName}
            categoryId={el.categoryId}
            editing={el.isEditing}
            firstPosition={index === 0 ? true : false}
            lastPosition={index === categories.length - 1 && !isCategoryCreating ? true : false}
            isPair={(index + 1) % 2 === 0 ? true : false}
          />
        ))}
      {!!isCategoryCreating && (
        <ListItemWrapper className="not-draggable" style={{ overflow: 'hidden' }}>
          <VerticalLine style={{ position: 'relative' }}>
            <LinePatch />
          </VerticalLine>
          <Creator inputName="categoryInput" placeholder="enter category name" categoryCreating={true} />
        </ListItemWrapper>
      )}
    </StyledList>
  )
}
