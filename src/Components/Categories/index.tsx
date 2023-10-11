import { useTypedDispatch } from "hooks/hooks"
import { CategoriesList } from "./CategoriesList"
import { changeIsCategoryCreating } from "store/reducers/categories/categoriesSlice"
import { CategoriesWrapper, StyledCategories, StyledIcon, VerticalLine } from "./styles"


export const Categories = () => { 
    const dispatch = useTypedDispatch()
    
    return (
        <CategoriesWrapper>
            <div style={{display: 'flex', justifyContent: 'baseline'}}>
              <StyledCategories>Categories</StyledCategories>
                <StyledIcon
                    icon="ic:baseline-add-circle"
                    onClick={()=>dispatch(changeIsCategoryCreating(true))}
                />
            </div>
             <VerticalLine/>
            <CategoriesList/>

        </CategoriesWrapper>
    ) 
}