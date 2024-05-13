import Swal from 'sweetalert2'

export default function useSwal() {
  const success = async (message: string) => {
    await Swal.fire({
      icon: 'success',
      title: 'Success',
      text: message,
      showConfirmButton: false,
      timer: 1500
    })
  }

  const error = async (message: string) => {
    await Swal.fire({
      icon: 'error',
      title: 'Error',
      text: message,
      showConfirmButton: false,
      timer: 1500
    })
  }

  const warning = async (message: string) => {
    await Swal.fire({
      icon: 'warning',
      title: 'Warning',
      text: message,
      showConfirmButton: false,
      timer: 1500
    })
  }

  const info = async (message: string) => {
    await Swal.fire({
      icon: 'info',
      title: 'Info',
      text: message,
      showConfirmButton: false,
      timer: 1500
    })
  }

  const confirm = async (title: string, text: string, icon: any) => {
    const result = await Swal.fire({
      title,
      text,
      icon,
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No'
    })

    return result.isConfirmed
  }

  return {
    success,
    error,
    warning,
    info,
    confirm
  }
}
