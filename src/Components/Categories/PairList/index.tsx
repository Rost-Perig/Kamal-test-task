import { useTypedSelector } from 'hooks/hooks'
import { RootState } from 'store/store'
import { StyledPairList } from '../styles'
import { SubCategoryBlock } from '../SubCategoryBlock'

export const PairList = ({ categoryId, createSub }: { categoryId?: string, createSub?: boolean }) => {
  const subCategory = useTypedSelector((state: RootState) => state.subCategories.subCategories).filter((el) => el.categoryId === categoryId)
  return (
    <StyledPairList>
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
            isService={el.isService}
            isPair={el.isPair}
          />
        ))}
    </StyledPairList>
  )
}
