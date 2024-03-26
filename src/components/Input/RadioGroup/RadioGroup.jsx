import clsx from 'clsx'
import { useTranslations } from 'next-intl'
import { Controller, useFormContext } from 'react-hook-form'

import ErrorIcon from '@mui/icons-material/Error'

import styles from './RadioGroup.module.scss'

export const RadioGroup = ({ label, name, options, required }) => {
  const t = useTranslations()
  const {
    control,
    formState: { errors },
  } = useFormContext()

  return (
    <div className={styles.group}>
      <p className={styles.label}>
        {label}
        {required && '*'}
      </p>
      <div className={styles.group_container}>
        {options.map((option, i) => (
          <Controller
            key={i}
            control={control}
            name={name}
            rules={{
              required: required && t('form.error.radio'),
            }}
            render={({ field: { onChange, value } }) => (
              <div className={styles.radio_container}>
                <div
                  className={clsx(styles.radio, value === option.value && styles.selected)}
                  onClick={() => onChange(option.value)}
                ></div>
                <p className={styles.label} onClick={() => onChange(option.value)}>
                  {option.label}
                </p>
              </div>
            )}
          />
        ))}
      </div>
      <div className={styles.error_container}>
        {errors[name] && (
          <div className={styles.error_message}>
            <ErrorIcon /> {errors[name].message}
          </div>
        )}
      </div>
    </div>
  )
}
