import { Categories } from 'Components/Categories'
import { TopBtn } from 'Components/Buttons/TopBtn'
import { BottomBtn } from 'Components/Buttons/BottomBtn'
import { LeftBtn } from 'Components/Buttons/LeftBtn'
import { RightBtn } from 'Components/Buttons/RightBtn'
import { HomeWrapper } from './styles'

export const Home = () => {
  return (
    <HomeWrapper>
      <TopBtn />
      <BottomBtn />
      <LeftBtn />
      <RightBtn />
      <Categories />
    </HomeWrapper>
  )
}
