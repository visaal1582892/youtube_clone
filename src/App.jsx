import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import HeaderCategories from './components/HeaderCategories';
import SmallSideBar from './components/SmallSideBar';

function App() {
  return (
    <div className="w-full flex flex-row flex-wrap justify-start">
      <div className='sticky top-0 z-50 flex flex-wrap justify-start'>
        {/* Header */}
        <Header />

        {/* Sidebar */}
        <SmallSideBar />

        {/* Header Categories */}
        <HeaderCategories />
      </div>

      {/* Main content with Sidebar + Page */}
      <div className="flex flex-1">

        <Outlet />
      </div>
    </div>
  );
}

export default App;
