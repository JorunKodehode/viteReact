import React from "react";

function Navbar() {
  return (
    <div>
      <h1>Navbar test</h1>
      <nav className="nav navbar">
        <NavLink title="I" text="I" />
        <NavLink title="Scream" text="scream" />
        <NavLink title="IceCream" text="Ice cream" />
      </nav>
      <ComponentChildren>
        <h3>Child 1</h3>
        <h3>Child 2</h3>
        <h3>Child 3</h3>
        <img src="https://images.unsplash.com/photo-1661956602926-db6b25f75947?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=698&q=80" />
      </ComponentChildren>
    </div>
  );
}

function NavLink(props) {
  const { title, text } = props;
  return (
    <li>
      <a title={title} href="./">
        {text}
      </a>
    </li>
  );
}
function ComponentChildren(props) {
  console.log(props);
  return <div>{props.children}</div>;
}

export default Navbar;
