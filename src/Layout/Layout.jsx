import { Component } from "react";
import { Link, Outlet } from "react-router";

class Layout extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <nav>
            <Link to={"/"}>Home</Link>
          </nav>
        </div>
        <Outlet />
      </div>
    );
  }
}
export default Layout;
