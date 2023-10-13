import { useTypedDispatch, useTypedSelector } from 'hooks/hooks'
import { RootState } from 'store/store'
import { changeIsCategoryCreating } from 'store/reducers/categories/categoriesSlice'
import { CategoriesList } from './CategoriesList'
import { BlockWrapper, CategoriesWrapper, HorizontalLine, StyledCategories, StyledIcon, VerticalLine } from './styles'
import { useState } from 'react'
import { changeX, changeY } from 'store/reducers/position/positionSlice'

export const Categories = () => {
  const dispatch = useTypedDispatch()

  const position = useTypedSelector((state: RootState) => state.position)

  const [isDragging, setIsDragging] = useState(false)
  // const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 })

  const handleMouseDown = (e: any) => {
    if (e.target.className !== 'not-draggable') {
      setIsDragging(true)
      setDragOffset({
        x: e.clientX - position.x,
        y: e.clientY - position.y,
      })
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleMouseMove = (e: { clientX: number, clientY: number }) => {
    if (isDragging) {
      // setPosition({
      //   x: e.clientX - dragOffset.x,
      //   y: e.clientY - dragOffset.y,
      // })
      dispatch(changeX({ x: e.clientX - dragOffset.x }))
      dispatch(changeY({ y: e.clientY - dragOffset.y }))
    }
  }

  const isCategoryCreating = useTypedSelector((state: RootState) => state.categories?.isCategoryCreating)
  const categories = useTypedSelector((state: RootState) => state.categories?.categories)
  const scale = useTypedSelector((state: RootState) => state.scale.scale)

  return (
    <CategoriesWrapper
      style={{
        left: position.x + 'px',
        top: position.y + 'px',
        cursor: isDragging ? 'grabbing' : 'grab',
        transform: `scale(${scale})`,
      }}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      <BlockWrapper className="not-draggable">
        <StyledCategories>Categories</StyledCategories>
        <StyledIcon
          icon="ic:baseline-add-circle"
          onClick={(e) => {
            console.log('position: ', e)

            dispatch(changeIsCategoryCreating(true))
          }}
        />
      </BlockWrapper>
      {(isCategoryCreating || !!categories.length) && <VerticalLine />}
      {(categories.length > 1 || (!!categories.length && isCategoryCreating)) && <HorizontalLine />}
      <CategoriesList />
    </CategoriesWrapper>
  )
}
