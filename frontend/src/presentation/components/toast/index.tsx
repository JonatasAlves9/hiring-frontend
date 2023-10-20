import { toast } from 'react-toastify';

export const toastSuccess = (title: string) =>
  toast(title, {
    position: 'top-center',
    hideProgressBar: true,
    closeOnClick: false,
    autoClose: 2000,
    pauseOnHover: true,
    type: 'success',
    theme: 'colored',
  });

export const toastError = (title: string) =>
  toast(title, {
    position: 'top-center',
    hideProgressBar: true,
    closeOnClick: false,
    autoClose: 2000,
    pauseOnHover: true,
    type: 'error',
    theme: 'colored',
  });
