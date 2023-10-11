import { CategoryBlock } from "../CategoryBlock"
import { StyledList } from "../styles"
import { Creator } from "../Creator"
import { useTypedSelector } from "hooks/hooks"
import { RootState } from "store/store"

export const CategoriesList = () => {

    const isCategoryCreating = useTypedSelector((state: RootState) => state.categories?.isCategoryCreating)
    const categories = useTypedSelector((state: RootState) => state.categories?.categories)

    return (
        <StyledList>
            {!!categories.length && categories.map(el => (
                <CategoryBlock key={el.categoryId} name={el.categoryName} blockId={el.categoryId} editing={el.isEditing} />
            ))}
            {!!isCategoryCreating && <Creator inputName="categoryInput" placeholder="enter category name" categoryCreating={true}/> }    
        </StyledList>
    )
}