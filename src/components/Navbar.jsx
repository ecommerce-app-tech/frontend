import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../context/auth.context";
import { Button, Navbar, Modal } from "react-bootstrap";

function NavbarComponent() {

  const { isLoggedIn, user, logOutUser } = useContext(AuthContext); // <== ADD
  const [show, setShow]= useState(false)
  const handleClose =() =>setShow(false)
  const handleShow =() => setShow(true)
 
  
  return (
    <>
      <Navbar expend="sm">
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Link to="/">Home</Link>

          {isLoggedIn && (
            <>
              <Link to="/projects">All Proroducts</Link>
              <button onClick={logOutUser}>Logout</button>
              <span>{user && user.name}</span>
            </>
          )}

          {!isLoggedIn && (
            <>
              <Link to="/signup"> Sign Up</Link>
              <Link to="/login"> Login </Link>
              <Button onClick={handleShow}>cart  item</Button>
            </>
          )}
        </Navbar.Collapse>
      </Navbar>
      <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Shopping Cart</Modal.Title>
            </Modal.Header >
            <Modal.Body>Modal body</Modal.Body>
      </Modal>
    </>
  );
}

export default NavbarComponent;
