import clsx from 'clsx'
import { useRef, useState } from 'react'
import { useTranslations } from 'next-intl'
import { useOnClickAway } from 'hooks/useOnClickAway'
import { Controller, useFormContext } from 'react-hook-form'

import ErrorIcon from '@mui/icons-material/Error'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'

import styles from './Select.module.scss'

export const Select = ({ name, label, placeholder, options, required }) => {
  const t = useTranslations()
  const {
    control,
    formState: { errors },
  } = useFormContext()
  const selectRef = useRef()
  const [isOpen, setIsOpen] = useState(false)

  useOnClickAway(selectRef, isOpen, () => setIsOpen(false))

  return (
    <div ref={selectRef} className={clsx(styles.select, isOpen && styles.opened)}>
      <p className={styles.label}>
        {label}
        {required && '*'}
      </p>
      <Controller
        control={control}
        name={name}
        rules={{
          required: required && t('form.error.select'),
        }}
        render={({ field: { onChange, value } }) => (
          <>
            <div className={styles.select_container}>
              <div className={styles.input} onClick={() => setIsOpen(!isOpen)}>
                {value || placeholder}
                {!isOpen ? (
                  <KeyboardArrowDownIcon className={styles.icon} />
                ) : (
                  <KeyboardArrowUpIcon className={styles.icon} />
                )}
              </div>
              <div className={styles.list_container}>
                <div className={clsx(styles.list, isOpen && styles.opened)}>
                  {options.map((degree, i) => (
                    <p
                      className={clsx(value === degree && styles.selected)}
                      key={i}
                      onClick={() => (onChange(degree), setIsOpen(false))}
                    >
                      {degree}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
      />
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
