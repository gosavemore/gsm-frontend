<a href="#" data-target="mobile-demo" class="sidenav-trigger">
<i class="material-icons">menu</i>
</a>
<ul id="nav" class="right hide-on-med-and-down">
<li>
  <SearchBar
    placeholder={placeholder}
    handleChange={handleChange}
  />
</li>
<li>
  <Link className="navLink cart" to="/cart">
    Cart
  </Link>
</li>
{state.isAdmin ? (
  <>
    <li>
      <Link
        className="navLink addProduct"
        to="/admin/addProducts"
      >
        Admin Add Products
      </Link>
    </li>
  </>
) : null}
{state.isAuth ? (
  <>
    <li>
      <Link className="navLink track" to="/tracking">
        Orders
      </Link>
    </li>
    <li>
      <Link
        className="signout"
        onClick={handleLogOut}
        to="/tracking"
      >
        Logout
      </Link>
    </li>
  </>
) : (
  <>
    <li>
      <Link className="navLink login" to="/login">
        Login
      </Link>
    </li>
  </>
)}
</ul>
</div>
</div>
</nav>

<ul class="sidenav" id="mobile-demo">
<div>
{/* className="navbar"> */}
<div>
{/* class="nav-wrapper"> */}
{/* <ul class="right hide-on-med-and-down"> */}
<>
<Link
  style={{ textAlign: "center" }}
  className="navLink home"
  to="/"
>
  <img
    className="navLink image"
    src={GoSaveMoreLogoHeader}
    style={{ padding: "10px" }}
  ></img>
</Link>
</>
<ul>
{/* id="nav" class="sidenav sidenav-fixed"> */}
<li>
  <SearchBar
    placeholder={placeholder}
    handleChange={handleChange}
  />
</li>
<li>
  <Link className="navLink cart" to="/cart">
    Cart
  </Link>
</li>
{state.isAdmin ? (
  <>
    <li>
      <Link
        className="navLink addProduct"
        to="/admin/addProducts"
      >
        Admin Add Products
      </Link>
    </li>
  </>
) : null}
{state.isAuth ? (
  <>
    <li>
      <Link className="navLink track" to="/tracking">
        Orders
      </Link>
    </li>
    <li>
      <Link
        className="signout"
        onClick={handleLogOut}
        to="/tracking"
      >
        Logout
      </Link>
    </li>
  </>
) : (
  <>
    <li>
      <Link className="navLink login" to="/login">
        Login
      </Link>
    </li>
  </>
)}
</ul>
</div>
</div>
</ul>