import { Outlet, useLocation } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import HeaderCategories from './components/HeaderCategories';
import SmallSideBar from './components/SmallSideBar';
import { useDispatch, useSelector } from 'react-redux';
import AuthModal from './components/AuthModal';
import { useEffect } from 'react';
import { setUserDetails } from './utils/redux/slices/authSlice';
import { jwtDecode } from 'jwt-decode';
import { login, logout } from './utils/redux/slices/authSlice';
import axios from 'axios';
import useFetch from './utils/customHooks/useFetch';
import { setVideos, setLoading, setError } from './utils/redux/slices/videosSlice';

function App() {

  const { isLoggedIn, userId, userDetails } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const location = useLocation();

  // Using custom hook
  const { data, error, loading } = useFetch("http://localhost:5000/videos/getAllVideos");

  useEffect(() => {
    const userToken = localStorage.getItem("userToken");
    if (userToken) {
      try {
        const tokenDecodeRes = jwtDecode(userToken);
        if (!isLoggedIn || !userId) {
          dispatch(login(tokenDecodeRes.userId));
        }
        if (!userDetails && tokenDecodeRes.userId) {
          axios.get(`http://localhost:5000/users/${tokenDecodeRes.userId}`, {
            headers: {
              Authorization: `JWT ${userToken}`
            }
          })
          .then(res => dispatch(setUserDetails(res.data)))
          .catch(err => {
            console.error("Unauthorized or failed to fetch", err);
            dispatch(logout());
          });
        }
      } catch (err) {
        console.error("Invalid token", err);
        dispatch(logout());
      }
    } else {
      dispatch(logout());
    }
  }, [dispatch, isLoggedIn, userId, userDetails]);

  // Dispatch to Redux store
  useEffect(() => {
    if (data) {
      dispatch(setVideos(data));
    } else if (error) {
      dispatch(setError(error.message));
    } else if (loading) {
      dispatch(setLoading(true));
    }
  }, [dispatch, data, error]);

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
