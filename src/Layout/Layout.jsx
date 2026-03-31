import { Component } from "react";
import { Link, Outlet } from "react-router";

class Layout extends Component {
  render() {
    return (
      <div className="max-w-[1440px] m-[0_auto] px-[20px]">
        <div className="header">
          <nav>
            <Link className="hover:underline text-[blue]" to={"/"}>
              Home
            </Link>
          </nav>
        </div>
        <Outlet />
      </div>
    );
  }
}
export default Layout;
