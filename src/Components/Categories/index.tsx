import { Icon } from '@iconify/react'
import { useTypedDispatch, useTypedSelector } from 'hooks/hooks'
import { RootState } from 'store/store'
import { changeIsCategoryCreating } from 'store/reducers/categories/categoriesSlice'
import { CategoriesList } from './CategoriesList'
import { usePosition } from 'hooks/usePosition'
import { BlockWrapper, CategoriesWrapper, FrameWrapper, StyledBtnDefault, StyledBtnX, StyledBtnY, StyledCategories, StyledIcon, VerticalLine } from './styles'

export const Categories = () => {
  const dispatch = useTypedDispatch()

  const { isDragging, offset, handleMouseDown, handleMouseMove, handleMouseUp, toTop, toBottom, toLeft, toRight, toDefault } = usePosition()

  const isCategoryCreating = useTypedSelector((state: RootState) => state.categories?.isCategoryCreating)
  const categories = useTypedSelector((state: RootState) => state.categories?.categories)
  const scale = useTypedSelector((state: RootState) => state.scale.scale)

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
        // onMouseDown={handleMouseDown}
        // onMouseMove={handleMouseMove}
        // onMouseUp={handleMouseUp}
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
