import axios from 'axios'
import { toast } from 'react-toastify'
import { Input } from 'components/Input'
import { notifyError } from 'utils/errors'
import { useTranslations } from 'next-intl'
import { useForm, FormProvider } from 'react-hook-form'

import styles from './Form.module.scss'

export const Form = () => {
  const t = useTranslations()
  const methods = useForm({ mode: 'onBlur' })
  const onSubmit = (form) =>
    axios
      .post('https://api.mcs.army/api/candidates', { data: form })
      .then(() => toast(t('form.toast'), { toastId: 'success' }))
      .catch(notifyError(t))

  return (
    <div className={styles.form}>
      <FormProvider {...methods}>
        <form className={styles.container} onSubmit={methods.handleSubmit(onSubmit)} noValidate>
          <Input.Text
            id="lastName"
            type="text"
            label={t('form.lastName')}
            placeholder={t('form.lastName')}
            pattern={{ value: /([a-zA-Z]{2,20}$)/, message: t('form.error.lastName') }}
            required
          />
          <Input.Text
            id="firstName"
            type="text"
            label={t('form.firstName')}
            placeholder={t('form.firstName')}
            pattern={{ value: /([a-zA-Z]{2,20}$)/, message: t('form.error.firstName') }}
            required
          />
          <Input.Text
            id="surname"
            type="text"
            label={t('form.surname')}
            placeholder={t('form.surname')}
            pattern={{ value: /([a-zA-Z]{2,20}$)/, message: t('form.error.surname') }}
            required
          />
          <Input.Text
            id="phone"
            type="text"
            label={t('form.phone')}
            placeholder="+38 (0__) ___- __-__"
            pattern={{
              value: /\d{11}/,
              message: t('form.error.phone'),
            }}
            required
            mask={'+38 (0__) ___-__-__'}
            replacement={{ _: /\d/ }}
            prefix={'380'}
          />
          <Input.Text
            id="email"
            type="email"
            label={t('form.email')}
            placeholder="mail@example.com"
            pattern={{
              value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
              message: t('form.error.email'),
            }}
            required
          />
          <Input.Select
            name={'education'}
            label={t('form.select.label')}
            placeholder={t('form.select.label')}
            options={[t('form.select.option_1'), t('form.select.option_2')]}
            required
          />
          <Input.RadioGroup
            name={'military'}
            label={t('form.radio.label')}
            options={[
              { value: 'Так', label: t('form.radio.option_1') },
              { value: 'Ні', label: t('form.radio.option_2') },
            ]}
            required
          />
          <Input.Checkbox name={'age'} label={t('form.age')} required />
          <Input.Checkbox
            name={'terms'}
            label={t('form.terms.label')}
            link={t('form.terms.link')}
            href={'/privacy-policy'}
            required
          />

          <button className={styles.button} onClick={() => onSubmit}>
            {t('form.button')}
          </button>
        </form>
      </FormProvider>
    </div>
  )
}
