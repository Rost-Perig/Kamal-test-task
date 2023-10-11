import { Icon } from "@iconify/react"
import { ListItemWrapper, StyledCategoryDiv, StyledIcon, SubIcon, VerticalLine } from "../styles"

export const CategoryBlock = ({name}:{name: string}) => {
    return (
        <ListItemWrapper>
            <VerticalLine/>
            <div style={{display: 'flex'}}>
                <StyledCategoryDiv style={{background: 'rgb(250, 156, 124)'}}>{name}</StyledCategoryDiv>
                <StyledIcon icon="ic:baseline-add-circle" />
                <SubIcon> 
                    <Icon icon="ic:baseline-mode-edit" style={{color: 'white'}}/>
                </SubIcon>
                <StyledIcon icon="ic:baseline-cancel" style={{ color: 'red' }} />
            </div>
        </ListItemWrapper>
    )
}