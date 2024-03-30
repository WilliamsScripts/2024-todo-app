import { toast, ToastOptions } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export enum ToastTypes {
  SUCCESS = 'success',
  ERROR = 'error',
}

const useCustomToast = () => {
  const showToast = (message: string, type: ToastTypes) => {
    const options: ToastOptions = {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: 'colored',
      type: type,
    };

    toast(message, options);
  };

  return showToast;
};

export default useCustomToast;