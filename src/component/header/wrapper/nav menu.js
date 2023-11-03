import React, {useState} from 'react'
import {Link, useMatch, useResolvedPath} from 'react-router-dom'
import './styles/navMenu.css'
import ReorderIcon from '@mui/icons-material/Reorder';
function NavMenu() {
  const [openLinks,setOpenLinks] = useState(false);
  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  }
  return (
    <nav className='navbar'>
      <div className='leftSide' id={openLinks?'open':'close'}>
        <Link to="/" className='site-title'>SoftwareAlley</Link>
        <div className='hiddenLinks'>
          <CustomLink to="/category">Category</CustomLink>
          <CustomLink to="/cardProduct">Card Product</CustomLink>
          <CustomLink to="/cart">Cart</CustomLink>
          <CustomLink to="/contact">Contact</CustomLink>
          <CustomLink to="/deliveryPayment">Delivery & Payment</CustomLink>
        </div>
      </div>
      <div className='rightSide'>
        <CustomLink to="/category">Category</CustomLink>
        <CustomLink to="/cardProduct">Card Product</CustomLink>
        <CustomLink to="/cart">Cart</CustomLink>
        <CustomLink to="/contact">Contact</CustomLink>
        <CustomLink to="/deliveryPayment">Delivery & Payment</CustomLink>
        <button onClick={toggleNavbar}>
          <ReorderIcon/>
        </button>
      </div>
    </nav>
  );
}

function CustomLink({to, children, ...props}){
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({path: resolvedPath.pathname, end:true})
  return(
    <li className={isActive?"active": ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}
export default NavMenu;
