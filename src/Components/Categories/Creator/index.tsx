import { useEffect, useState } from "react"
import { useTypedDispatch } from "hooks/hooks"
import { addCategory, changeIsCategoryCreating, changeIsEditingCategory, editCategoryName } from "store/reducers/categories/categoriesSlice"
import { BlockWrapper, StyledIcon } from "../styles"
import { addSubCategory, changeIsEditingSubCategory,  editSubCategoryName } from "store/reducers/sub-categories/subCategoriesSlice"
const { v4: uuidv4 } = require('uuid')

export const Creator = (
    {
        inputName,
        placeholder,
        categoryCreating,
        oldName,
        editing,
        categoryId,
        subCategoryCreating,
        isSubEditing,
        subCategoryId,
        onSubCreatingClick,
        isPair,
        onPairItemCreate,
        onServiceCreate,
        serviceCreate
    }: {
        inputName?: string,
        placeholder?: string,
        categoryCreating?: boolean,
        editing?: boolean,
        categoryId?: string,
        oldName?: string,
        subCategoryCreating?: boolean
        isSubEditing?: boolean,
        subCategoryId?: string,
        onSubCreatingClick?: () => void,
        isPair?: boolean,
        isService?: boolean,
        onPairItemCreate?: (value: boolean) => void,
        onServiceCreate?: (value: boolean) => void,
        serviceCreate?: boolean
    }) => {
        const dispatch = useTypedDispatch()
        
        const [name, setName] = useState<string>('')

        useEffect(() => {
        !!oldName && setName(oldName)
        }, [oldName])

    return (
        <div className="not-draggable">
        <BlockWrapper >
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
                    editing && categoryId && dispatch(changeIsEditingCategory({ categoryId: categoryId, editing: false }))
                    isSubEditing && subCategoryId && dispatch(changeIsEditingSubCategory({ subCategoryId: subCategoryId, editing: false }))
                    onSubCreatingClick && onSubCreatingClick()
                    isPair && onPairItemCreate && onPairItemCreate(false)
                    isPair && onServiceCreate && onServiceCreate(false)
                    setName('')
                }}
            />
            <StyledIcon
                icon="ic:baseline-check-circle" style={{ color: 'green' }}
                onClick={() => {
                    if (categoryCreating) {
                        name && dispatch(addCategory({ categoryName: name, categoryId: uuidv4(), isEditing: false }))
                        dispatch(changeIsCategoryCreating(false))        
                    }
                    if (editing && categoryId) {
                        name &&  dispatch(editCategoryName({ categoryId: categoryId, newName: name }))
                        dispatch(changeIsEditingCategory({ categoryId: categoryId, editing: false })) 
                    }
                    if (subCategoryCreating && categoryId && name) {
                        dispatch(addSubCategory({ subCategoryName: name, subCategoryId: uuidv4(), categoryId: categoryId, isSubEditing: false, isPair: isPair || false, isService: serviceCreate || false}))
                    }
                    isSubEditing && subCategoryId && dispatch(editSubCategoryName({ subCategoryId: subCategoryId, newName: name }))
                    isSubEditing && subCategoryId && dispatch(changeIsEditingSubCategory({ subCategoryId: subCategoryId, editing: false }))
                    onSubCreatingClick && onSubCreatingClick()
                    isPair && onPairItemCreate && onPairItemCreate(false)
                    isPair && onServiceCreate && onServiceCreate(false)
                    setName('')
                }}
            /> 
            </BlockWrapper>  
        </div>
            
    )
}