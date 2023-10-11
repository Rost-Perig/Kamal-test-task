import { useEffect, useState } from "react"
import { useTypedDispatch } from "hooks/hooks"

import { BlockWrapper, ListItemWrapper, StyledIcon, VerticalLine } from "../styles"
import { addCategory, changeIsCategoryCreating, changeIsEditingCategory, editCategoryName } from "store/reducers/categories/categoriesSlice"
const { v4: uuidv4 } = require('uuid')

export const Creator = ({ inputName, placeholder, categoryCreating, oldName, editing, blockId }: {
    inputName?: string,
    placeholder?: string,
    categoryCreating?: boolean,
    editing?: boolean,
    blockId?: string,
    oldName?: string
}) => {
    const dispatch = useTypedDispatch()
    
    const [name, setName] = useState<string>('')

    useEffect(() => {
      !!oldName && setName(oldName)
    },[oldName])

    return (
        
        <ListItemWrapper >
            <BlockWrapper>
                <input
                    name={inputName}
                    value={name}
                    style={{ height: 36, border: '1px solid rgb(199, 208, 216)', padding: '0 8px' }}
                    type={'text'}
                    autoComplete="off"
                    placeholder={placeholder}
                    onChange={(e) => setName(e.target.value)}
                />
                <StyledIcon 
                    icon="ic:baseline-cancel"
                    style={{ color: 'rgb(233, 202, 78)' }}
                    onClick={() => {
                        categoryCreating && dispatch(changeIsCategoryCreating(false))
                        editing && blockId && dispatch(changeIsEditingCategory({ blockId: blockId, editing: false }))
                        setName('')
                    }}
                />
                <StyledIcon
                    icon="ic:baseline-check-circle" style={{ color: 'green' }}
                    onClick={() => {
                        categoryCreating && name && dispatch(addCategory({ categoryName: name, categoryId: uuidv4(), isEditing: false }))
                        categoryCreating && dispatch(changeIsCategoryCreating(false))
                        editing && blockId && name &&  dispatch(editCategoryName({ blockId: blockId, newName: name }))
                        editing && blockId && dispatch(changeIsEditingCategory({ blockId: blockId, editing: false }))
                        setName('')
                    }}
                /> 
            </BlockWrapper>
                          
        </ListItemWrapper>
            
    )
}