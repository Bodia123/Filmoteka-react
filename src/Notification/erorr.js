import { toast } from 'react-toastify';

export const notificationErorr = function (text) {
  toast.error(`${text}`, {
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
