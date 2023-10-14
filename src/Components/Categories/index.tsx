import { Icon } from '@iconify/react'
import { useTypedDispatch, useTypedSelector } from 'hooks/hooks'
import { RootState } from 'store/store'
import { changeIsCategoryCreating } from 'store/reducers/categories/categoriesSlice'
import { CategoriesList } from './CategoriesList'
import { usePosition } from 'hooks/usePosition'
import { BlockWrapper, CategoriesWrapper, FrameWrapper, StyledBtnDefault, StyledBtnX, StyledBtnY, StyledCategories, StyledIcon, VerticalLine } from './styles'
import { useEffect } from 'react'

export const Categories = () => {
  const dispatch = useTypedDispatch()

  const { isDragging, offset, handleMouseDown, handleMouseMove, handleMouseUp, toTop, toBottom, toLeft, toRight, toDefault } = usePosition()

  useEffect(() => {
    console.log('offset: ', offset)
  }, [offset])

  const isCategoryCreating = useTypedSelector((state: RootState) => state.categories?.isCategoryCreating)
  const categories = useTypedSelector((state: RootState) => state.categories?.categories)
  const scale = useTypedSelector((state: RootState) => state.scale.scale)

  // ===============================================================================
  // const [isDragging, setIsDragging] = useState(false)
  // const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 })

  // const handleMouseDown = (e: any) => {
  //   if (e.target.className !== 'not-draggable') {
  //     setIsDragging(true)
  //     setDragOffset({
  //       x: e.clientX - position.x,
  //       y: e.clientY - position.y,
  //     })
  //   }
  // }

  // const handleMouseUp = () => {
  //   setIsDragging(false)
  // }

  // const handleMouseMove = (e: { clientX: number, clientY: number }) => {
  //   if (isDragging) {
  //     dispatch(changeX({ x: e.clientX - dragOffset.x }))
  //     dispatch(changeY({ y: e.clientY - dragOffset.y }))
  //   }
  // }
  //==========================================================================================

  return (
    <FrameWrapper>
      <StyledBtnY style={{ top: 0 }} onClick={() => toTop()}>
        <Icon icon="ic:baseline-keyboard-arrow-up" style={{ width: 24, height: 24, color: 'white' }} />
      </StyledBtnY>
      <StyledBtnY style={{ bottom: 0 }} onClick={() => toBottom()}>
        <Icon icon="ic:baseline-keyboard-arrow-down" style={{ width: 24, height: 24, color: 'white' }} />
      </StyledBtnY>
      <StyledBtnX style={{ left: 0 }} onClick={() => toLeft()}>
        <Icon icon="ic:baseline-keyboard-arrow-left" style={{ width: 24, height: 24, color: 'white' }} />
      </StyledBtnX>
      <StyledBtnX style={{ right: 0 }} onClick={() => toRight()}>
        <Icon icon="ic:baseline-keyboard-arrow-right" style={{ width: 24, height: 24, color: 'white' }} />
      </StyledBtnX>
      <StyledBtnDefault style={{ right: 0, top: 0 }} onClick={() => toDefault()}>
        <Icon icon="ic:baseline-near-me" style={{ width: 16, height: 16, color: 'white' }} />
      </StyledBtnDefault>
      <CategoriesWrapper
        // style={{
        //   left: position.x + 'px',
        //   top: position.y + 'px',
        //   cursor: isDragging ? 'grabbing' : 'grab',
        //   transform: `scale(${scale})`,
        // }}
        // onMouseDown={handleMouseDown}
        // onMouseUp={handleMouseUp}
        // onMouseMove={handleMouseMove}

        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        style={{
          position: 'relative',
          left: offset.x,
          top: offset.y,
          cursor: isDragging ? 'grabbing' : 'move',
          transform: `scale(${scale})`,
        }}
      >
        <BlockWrapper className="not-draggable">
          <StyledCategories>Categories</StyledCategories>
          <StyledIcon icon="ic:baseline-add-circle" onClick={() => dispatch(changeIsCategoryCreating(true))} />
        </BlockWrapper>
        {(isCategoryCreating || !!categories.length) && <VerticalLine />}
        <CategoriesList />
      </CategoriesWrapper>
    </FrameWrapper>
  )
}
