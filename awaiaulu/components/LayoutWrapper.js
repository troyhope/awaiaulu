import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import Link from './Link'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import Nav from './Nav'

const LayoutWrapper = ({ children }) => {
  return (
    <SectionContainer>
      <Nav />
      <div className="flex flex-col justify-between h-auto lg:h-auto xl:h-screen 2xl:h-auto ipad:h-auto md:-mx-9 ipad:mx-20 xl:-mr-14 2xl:-mr-10">
        <header className="flex items-center justify-between py-2">
          <div className="flex items-center text-base leading-5"></div>
        </header>
        <main className="mb-auto">{children}</main>
      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper
