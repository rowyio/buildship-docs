import { ButtonIcon } from '../components/icons'
import { useTheme } from 'next-themes'
import { useMounted } from 'nextra/hooks'

function useThemeSwitch() {
  const theme = useTheme()
  const { setTheme, resolvedTheme } = theme

  const mounted = useMounted()
  const isDark = mounted && resolvedTheme === 'dark'

  const toggleTheme = () => setTheme(isDark ? 'light' : 'dark')

  const iconToUse: 'Moon' | 'Sun' = isDark ? 'Moon' : 'Sun'
  const iconText = isDark ? 'Dark' : 'Light'

  return {
    mounted,
    iconToUse,
    iconText,
    toggleTheme
  }
}

export function ThemeSwitchButton() {
  const { iconToUse, toggleTheme, mounted, iconText } = useThemeSwitch()

  return (
    <button
      style={{ opacity: mounted ? 1 : 0 }}
      onClick={toggleTheme}
    >
     <ButtonIcon icon={iconToUse} />
    </button>
  )
}

export function ThemeSwitchIconButton() {
  const { iconToUse, iconText, toggleTheme, mounted } = useThemeSwitch()

  return (
    <button
      style={{ opacity: mounted ? 1 : 0 }}
      onClick={toggleTheme}
      aria-label={iconText}
    >
      <ButtonIcon icon={iconToUse} />
    </button>
  )
}