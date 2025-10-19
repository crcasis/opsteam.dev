import { useEffect, useState } from 'react'

const ThemeMode = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null
    if (savedTheme) {
      setTheme(savedTheme)
      document.documentElement.setAttribute('data-bs-theme', savedTheme)
    }
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute('data-bs-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <>
      <div className="form-check form-switch mode-switch order-lg-2 me-3 me-lg-4 ms-auto">
        <input
          className="form-check-input"
          type="checkbox"
          id="theme-mode"
          checked={theme === 'dark'}
          onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
        />
        <label className="form-check-label" htmlFor="theme-mode">
          <i className={`ai-sun fs-lg ${theme === 'light' ? 'text-primary' : 'text-muted'}`} />
        </label>

        <label className="form-check-label" htmlFor="theme-mode">
          <i className={`ai-moon fs-lg ${theme === 'dark' ? 'text-primary' : 'text-muted'}`} />
        </label>
      </div>
    </>
  )
}

export default ThemeMode
