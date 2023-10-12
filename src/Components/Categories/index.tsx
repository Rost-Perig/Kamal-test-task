import { useTypedDispatch, useTypedSelector } from "hooks/hooks"
import { RootState } from "store/store"
import { changeIsCategoryCreating } from "store/reducers/categories/categoriesSlice"
import { CategoriesList } from "./CategoriesList"
import { BlockWrapper, CategoriesWrapper, HorizontalLine, StyledCategories, StyledIcon, VerticalLine } from "./styles"



export const Categories = () => { 
    const dispatch = useTypedDispatch()

    const isCategoryCreating = useTypedSelector((state: RootState) => state.categories?.isCategoryCreating)
    const categories = useTypedSelector((state: RootState) => state.categories?.categories)
    
    return (
        <CategoriesWrapper>
            <BlockWrapper >
              <StyledCategories>Categories</StyledCategories>
                <StyledIcon
                    icon="ic:baseline-add-circle"
                    onClick={()=>dispatch(changeIsCategoryCreating(true))}
                />
            </BlockWrapper>           
            {(isCategoryCreating || !!categories.length) && <VerticalLine />}
            {(categories.length > 1 || (!!categories.length  && isCategoryCreating)) && <HorizontalLine/>}
            
            <CategoriesList/>
        </CategoriesWrapper>
    ) 
}