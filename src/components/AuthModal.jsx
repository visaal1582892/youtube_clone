import { useSelector, useDispatch } from 'react-redux';
import Login from './Login';
import Register from './Register';
import { closeAuthModal } from '../utils/redux/slices/showAuthSlice';

const AuthModal = () => {
  const { showModal, authType } = useSelector((state) => state.showAuth);
  const dispatch = useDispatch();

  if (!showModal) return null;

  const handleBackdropClick = () => {
    dispatch(closeAuthModal());
  };

  const handleModalClick = (e) => {
    e.stopPropagation(); // Prevent closing when clicking inside modal
  };

  return (
    <div
      className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-[100]"
      onClick={handleBackdropClick}
    >
      <div
        className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-md relative"
        onClick={handleModalClick}
      >
        <button
          onClick={() => dispatch(closeAuthModal())}
          className="absolute top-2 right-2 text-3xl text-gray-500 hover:text-gray-700 cursor-pointer"
        >
          ×
        </button>

        {authType === 'login' ? <Login /> : <Register />}
      </div>
    </div>
  );
};

export default AuthModal;
