export const Header = () => {
  return (
    <header className="header">
    <div className="wrapper">
      <div className="header-content">
        
        <nav className="menu" aria-label="main-navigation">
          <ul>
            <li>
              <a className="is-active" href="#main">Hola</a>
            </li>
             <li>
              <a href="#project">Experiencias</a>
            </li>
            <li>
              <a href="#contact">Hablemos</a>
            </li>
            <li>
              <a href="/blog">Blog</a>
            </li>
          </ul>
        </nav>
        <p></p>
      </div>
    </div>
  </header>
  )
}
