import { toast } from 'react-toastify'

export const notifyError = (t) => (error) => {
  const tDefault = (t, key, defaultKey) => {
    const value = t(key)
    return value === key ? t(defaultKey) : value
  }
  if (error.response.data.error.name === 'ValidationError') {
    return toast(
      tDefault(
        t,
        `errors.validation.${error.response.data.error.details.errors[0].path[0]}`,
        'errors.validation.unknown'
      ),
      {
        type: 'error',
        toastId: error.response.data.error.details.errors[0].path[0],
      }
    )
  }
  return toast(t('errors.unknown'))
}
