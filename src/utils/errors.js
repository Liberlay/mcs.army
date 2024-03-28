import { toast } from 'react-toastify'

export const errors = {
  0: 'Невідома помилка',
  400: 'Кандидат з таким телефоном або email вже існує',
  403: 'Помилка авторизаціЇ',
}

export const notifyError = (error) =>
  toast(errors[error.response.data.error.status], {
    type: 'error',
    toastId: `error${error.response.data.error.status}`,
  })
