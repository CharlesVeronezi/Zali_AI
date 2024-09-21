import toast from 'react-hot-toast'

function ErrorAlert(message) {
    return toast.error(message, {
      position: 'top-center',
      style: {
        borderRadius: '10px',
        background: '#ea5455',
        color: "#fff"
      },
      duration: 5000
    })
  }

  function SuccessAlert(message) {
    return toast.success(message, {
      position: 'top-center',
      style: {
        borderRadius: '10px',
        background: '#28c76f',
        color: "#fff"
      }
    })
  }

  export { ErrorAlert, SuccessAlert }