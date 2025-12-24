import React, { useContext } from 'react'
import Button from './Button'
import { Link ,useNavigate} from 'react-router-dom'
import { AuthContext } from '../AuthProvider'

const Header = () => {
  const {isLoggedIn, setIsLoggedIn} = useContext(AuthContext)
  const navigate = useNavigate();
  
  const handleLogout = ()=>{
    localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshToken')
    setIsLoggedIn(false)
    console.log('logged out');
    navigate('/login')
  }
  return (
    <>
      <nav className='navbar container pt-3 align-items-start'>
        <Link href='#' to="/" className='navbar-brand text-light'>Stock Prediction portal</Link>
        <div>
          {isLoggedIn ? (
            <button className='btn btn-danger' onClick={handleLogout}>LogOut</button>
          ):(
            <>
            <Button text='Login' class='btn-outline-info' url="/login" />
          &nbsp;
          <Button text='Register' class='btn-info' url="/register" />
            </>
          )} 
          
        </div>
      </nav>
    </>
  )
}

export default Header