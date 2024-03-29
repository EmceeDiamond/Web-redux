export default function Navbar() {
    return (
      <div>
          <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
              <a className="navbar-brand" href="/">React Gin</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                  <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="/add_provider">Submit an application</a>
                  </li>
                  <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="/admin">Admin</a>
                  </li>
                  <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="/add_product">Trouble</a>
                  </li>
              </ul>
              </div>
          </div>
        </nav>
      </div>
    )
  }