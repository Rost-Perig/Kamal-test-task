import { useState } from "react"
import { useTypedDispatch } from "hooks/hooks"

import { ListItemWrapper, StyledIcon, VerticalLine } from "../styles"
import { addCategory, changeIsCategoryCreating } from "store/reducers/categories/categoriesSlice"
const { v4: uuidv4 } = require('uuid')

export const Creator = ({ inputName, placeholder, categoryCreating }: { inputName?: string, placeholder?: string, categoryCreating?:boolean }) => {
    const dispatch = useTypedDispatch()
    
    const [name, setName] = useState<string>('')

    return (
        
        <ListItemWrapper >
            <VerticalLine />
            <div style={{ display: 'flex' }}>
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
                        setName('')
                        dispatch(changeIsCategoryCreating(false))
                    }}
                />
                <StyledIcon
                    icon="ic:baseline-check-circle" style={{ color: 'green' }}
                    onClick={() => {
                        categoryCreating && dispatch(addCategory({ categoryName: name, categoryId: uuidv4() }))
                        setName('')
                        dispatch(changeIsCategoryCreating(false))
                    }}
                /> 
            </div>
                          
        </ListItemWrapper>
            
    )
}