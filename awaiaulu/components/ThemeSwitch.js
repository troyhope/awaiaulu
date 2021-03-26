import { useTheme } from 'next-themes'
import LightSwitch from '@/components/LightSwitch.js'
import NightSwitch from '@/components/NightSwitch.js'

const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme()

  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className="lg:invisible xl:visible focus:outline-none xl:mr-20 xl:pb-8 w-8 h-8 p-1 ml-1 mr-1 rounded sm:ml-4"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      <div className="xl:-mt-14">
        {theme === 'dark' ? (
          <div className="xl:mt-9 xl:pt-1 xl:ml-10">
            <LightSwitch />
          </div>
        ) : (
          <div className="xl:pt-12 xl:mt-1 xl:pl-14">
            <NightSwitch />
          </div>
        )}
      </div>
    </button>
  )
}

export default ThemeSwitch
