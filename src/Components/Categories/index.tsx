import { useTypedDispatch, useTypedSelector } from "hooks/hooks"
import { CategoriesList } from "./CategoriesList"
import { changeIsCategoryCreating } from "store/reducers/categories/categoriesSlice"
import { BlockWrapper, CategoriesWrapper, StyledCategories, StyledIcon, VerticalLine } from "./styles"
import { RootState } from "store/store"


export const Categories = () => { 
    const dispatch = useTypedDispatch()

    const isCategoryCreating = useTypedSelector((state: RootState) => state.categories?.isCategoryCreating)
    // const categories = useTypedSelector((state: RootState) => state.categories)
    
    return (
        <CategoriesWrapper>
            <BlockWrapper >
              <StyledCategories>Categories</StyledCategories>
                <StyledIcon
                    icon="ic:baseline-add-circle"
                    onClick={()=>dispatch(changeIsCategoryCreating(true))}
                />
            </BlockWrapper>
            {(isCategoryCreating)  &&  <VerticalLine/>}
            <CategoriesList/>

        </CategoriesWrapper>
    ) 
}