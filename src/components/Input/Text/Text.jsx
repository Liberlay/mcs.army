import { useTranslations } from 'next-intl'
import { InputMask } from '@react-input/mask'
import { Controller, useFormContext } from 'react-hook-form'

import ErrorIcon from '@mui/icons-material/Error'

import styles from './Text.module.scss'

export const Text = ({
  id,
  type,
  label,
  placeholder,
  pattern,
  required,
  mask,
  replacement,
  prefix,
}) => {
  const t = useTranslations()
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext()

  return (
    <div className={styles.container}>
      <p className={styles.label}>
        {label}
        {required && '*'}
      </p>
      {!mask ? (
        <input
          id={id}
          className={styles.input}
          type={type}
          placeholder={placeholder}
          {...register(id, {
            required: required && t('form.error.required'),
            pattern,
          })}
        />
      ) : (
        <Controller
          control={control}
          name="phone"
          rules={{
            required: required && t('form.error.required'),
            pattern,
          }}
          render={({ field: { onChange } }) => (
            <InputMask
              id={id}
              className={styles.input}
              type={type}
              placeholder={placeholder}
              mask={mask}
              replacement={replacement}
              onMask={(e) => onChange(prefix + e.detail.input)}
            />
          )}
        />
      )}
      <div className={styles.error_container}>
        {errors[id] && (
          <div className={styles.error_message}>
            <ErrorIcon /> {errors[id].message}
          </div>
        )}
      </div>
    </div>
  )
}
