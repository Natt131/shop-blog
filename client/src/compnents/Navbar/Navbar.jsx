import React, {useState} from 'react'
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import Cart from "../Cart/Cart"
import "./Navbar.scss"
import { CgWebsite } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from '../../pages/context/AuthContext';
import { getToken, removeToken } from "../../helpers";
import { Button, Space } from "antd";
//import Cart from "../Cart/Cart";
//import { useSelector } from "react-redux";

const Navbar = () => {
  //new
  const  {...user}  = useAuthContext();
  const navigate = useNavigate();
  const token = getToken();
  //console.log(token, "token")
  const handleLogout = () => {
    removeToken();    
    navigate("/products/1", { replace: true });
  };
  //old
  const [open, setOpen] = useState(false)
  return (
    <div className='navbar'>
        <div className='wrapper'>
            <div className='left'>
                <div className='item'>
                 <img src="https://bagra.ru/logos/httpnaplyajuru.png" alt=""/>
                 <KeyboardArrowDownIcon/>
                </div>
                <div className='item'>
                  <span> Products </span>
                  <KeyboardArrowDownIcon/>
                </div>
                <div className="item">
                  <Link className='link' to="/products/1">Women</Link>
                </div>
                <div className="item">
                  <Link className='link' to="/products/2">Men</Link>
                </div>
                <div className="item">
                  <Link className='link' to="/posts">Posts</Link>
                </div>
            </div>
            <div className='center'>
              <Link className='link' to="/">MyBestChoice</Link>
            </div>
            <div className='right'>
              <div className='item'>
                <Link className='link' to="/">Home</Link>
              </div>
              <div className='item'>
                <Link  className='link' to="/">About</Link>
              </div>
              {(token!==null) ?
             ( <div className='item'>
              <Link className='link' to="/profile">My profile</Link>
              </div>
             )
             : (<div/>)
              }
           { (token!==null) ?    
              ( <>
                <div className='item' onClick={handleLogout}>
                  <Link  className='link' to="/">Logout</Link>
                </div>
              </>)
              :
              (<div className='item' >
                <Link  className='link' to="/signin">Sign In</Link>
              </div>
              )
            }
              <div className="icons">
                <SearchIcon/>
                <Link to="/profile"><PersonOutlineOutlinedIcon/></Link>
                <FavoriteBorderOutlinedIcon/>
                <div className="cartIcon" onClick={()=>setOpen(!open)}>
                  <ShoppingCartOutlinedIcon/>
                  <span>0</span>
                </div>
              </div>
            </div>
        </div>
        {open && <Cart/>}
    </div>
  )
}

export default Navbar