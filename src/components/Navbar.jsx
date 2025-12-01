
const navbar = ({setCategory}) => {
  return (
<nav className="navbar navbar-expand-lg bg-body-tertiary"  data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <button className="nav-link active" aria-current="page" onClick={()=>setCategory("sports")}>Sports</button>
        </li>
        <li className="nav-item">
          <button className="nav-link active"onClick={()=>setCategory("business")} >Business</button>
        </li>
        <li className="nav-item">
          <button className="nav-link active" onClick={()=>setCategory("politics")} >Politics</button>
        </li>
         <li className="nav-item">
          <button className="nav-link active" onClick={()=>setCategory("health")} >health</button>
        </li>
         <li className="nav-item">
          <button className="nav-link active" onClick={()=>setCategory("technology")} >Technology</button>
        </li>
       
      </ul>
    </div>
  </div>
</nav>
  )
}

export default navbar

