// import { Header } from '../Header'

import { Header } from 'Components/Header'
import { StyledLayout } from './styles'

interface ILayout {
  children: React.ReactNode;
}

export const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <StyledLayout>
      <Header />
      {children}
    </StyledLayout>
  )
}
