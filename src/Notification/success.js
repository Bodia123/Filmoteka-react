import { toast } from 'react-toastify';

export const notificationSuccess = function (text) {
  toast.success(`${text}`, {
    position: 'top-right',
    autoClose: 1000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: 'dark',
  });
};
