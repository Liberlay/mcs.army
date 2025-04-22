import clsx from 'clsx'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { Controller, useFormContext } from 'react-hook-form'

import ErrorIcon from '@mui/icons-material/Error'

import styles from './Checkbox.module.scss'

export const Checkbox = ({ name, required, label, link, href }) => {
  const t = useTranslations()
  const {
    control,
    formState: { errors },
  } = useFormContext()

  return (
    <Controller
      name={name}
      control={control}
      rules={{
        required: required && t('form.error.checkbox'),
      }}
      render={({ field: { onChange, value } }) => (
        <>
          <div className={styles.checkbox_container}>
            <svg
              className={clsx(styles.checkbox, value && styles.checked)}
              onClick={() => onChange(!value)}
              aria-hidden="true"
              viewBox="0 0 24 24"
              stroke={value ? '#fff' : 'none'}
              fill={value ? '#fff' : 'none'}
            >
              <path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
            </svg>
            <div className={styles.label} onClick={() => onChange(!value)}>
              {label}
              {link && (
                <Link
                  className={styles.link}
                  href={href}
                  target="_blank"
                  onClick={(e) => e.stopPropagation()}
                >
                  {link}
                </Link>
              )}
            </div>
          </div>
          <div className={styles.error_container}>
            {errors[name] && (
              <div className={styles.error_message}>
                <ErrorIcon /> {errors[name].message}
              </div>
            )}
          </div>
        </>
      )}
    />
  )
}
