import { Icon } from "@iconify/react"
import { BlockWrapper, ListItemWrapper, StyledCategoryDiv, StyledIcon, SubIcon, VerticalLine } from "../styles"
import { useTypedDispatch } from "hooks/hooks"
import { changeIsEditingCategory, delCategory } from "store/reducers/categories/categoriesSlice"
import { Creator } from "../Creator"

export const CategoryBlock = ({ name, blockId, editing }: { name: string, blockId: string, editing?: boolean }) => {
     const dispatch = useTypedDispatch()

    return (
        <ListItemWrapper>
             <VerticalLine />
            {!editing
                ? (
                    <BlockWrapper >
                    <StyledCategoryDiv style={{background: 'rgb(250, 156, 124)'}}>{name}</StyledCategoryDiv>
                    <StyledIcon icon="ic:baseline-add-circle" />
                    <SubIcon onClick={() => dispatch(changeIsEditingCategory({blockId, editing: true}))}> 
                        <Icon icon="ic:baseline-mode-edit" style={{color: 'white'}}/>
                    </SubIcon>
                    <StyledIcon
                        icon="ic:baseline-cancel"
                        onClick={() => dispatch(delCategory(blockId))}
                        style={{ color: 'red' }}
                    />
                    </BlockWrapper>
                )
                : (<Creator oldName={name} blockId={blockId} editing={ editing} />)}
        </ListItemWrapper>
    )
}