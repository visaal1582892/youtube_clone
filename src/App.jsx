import { Outlet,useLocation } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import HeaderCategories from './components/HeaderCategories';
import SmallSideBar from './components/SmallSideBar';
import { useDispatch, useSelector } from 'react-redux';
import AuthModal from './components/AuthModal';
import { useEffect } from 'react';
import { setUserDetails } from './utils/redux/slices/authSlice';
import { jwtDecode } from 'jwt-decode';
import { login } from './utils/redux/slices/authSlice';
import axios from 'axios';

function App() {

  const { isLoggedIn, userId } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const location=useLocation();

  useEffect(() => {
    if (localStorage.getItem("userToken")) {
      const userToken=localStorage.getItem("userToken")
      const tokenDecodeRes = jwtDecode(userToken);
      console.log(tokenDecodeRes);
      dispatch(login(tokenDecodeRes.userId));
      if(userId){axios.get(`http://localhost:5000/users/${userId}`, {
        headers: {
          Authorization: `JWT ${localStorage.getItem("userToken")}`
        }
      })
        .then(res => dispatch(setUserDetails(res.data)))
        .catch(err => console.error("Unauthorized or failed to fetch", err));}
    }
  }, [isLoggedIn, userId])

  return (
    <div className="w-full flex flex-row flex-wrap justify-center">
      <div className='sticky top-0 z-50 flex flex-wrap justify-start w-[100%]'>
        {/* Header */}
        <Header />

        {/* Sidebar */}
        {location.pathname === '/' && <SmallSideBar />}

        {/* Header Categories */}
        {location.pathname === '/' && <HeaderCategories />}
        </div>

        {/* Main content with Sidebar + Page */}
      <div className="flex flex-1">

        <Outlet />
      </div>
      <AuthModal />
    </div>
  );
}

export default App;
