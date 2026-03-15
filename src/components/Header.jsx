function Header({ theme, onToggleTheme }) {
  return (
    <header className="site-header">
      <div className="logo">Alon Etos</div>
      <nav className="nav" id="nav">
        <a href="#about">About</a>
        <a href="#education">Education</a>
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>
        <a href="#skills">Skills</a>
        <a href="#languages">Languages</a>
        <a href="#contact">Contact</a>
      </nav>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <button
          type="button"
          className="theme-toggle"
          onClick={onToggleTheme}
          aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          title={theme === 'dark' ? 'Brighter mode' : 'Dark mode'}
        >
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
        <button className="nav-toggle" id="navToggle" aria-label="Toggle navigation">
          <span /><span /><span />
        </button>
      </div>
    </header>
  )
}

export default Header
