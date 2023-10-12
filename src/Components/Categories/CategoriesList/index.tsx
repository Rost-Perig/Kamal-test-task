import { useTypedSelector } from "hooks/hooks"
import { RootState } from "store/store"
import { CategoryBlock } from "../CategoryBlock"
import { Creator } from "../Creator"
import { ListItemWrapper, StyledList, VerticalLine } from "../styles"

export const CategoriesList = () => {

    const isCategoryCreating = useTypedSelector((state: RootState) => state.categories?.isCategoryCreating)
    const categories = useTypedSelector((state: RootState) => state.categories?.categories)

    return (
        <StyledList>
            {!!categories.length && categories.map(el => (
                <CategoryBlock key={el.categoryId} name={el.categoryName} blockId={el.categoryId} editing={el.isEditing} />
            ))}
            {!!isCategoryCreating &&
                <ListItemWrapper>
                    <VerticalLine />
                    <Creator inputName="categoryInput" placeholder="enter category name" categoryCreating={true} />
                </ListItemWrapper>}    
        </StyledList>
    )
}