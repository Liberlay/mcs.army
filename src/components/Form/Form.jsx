import { omit } from 'lodash-es'
import { Input } from 'components/Input'
import { useTranslations } from 'next-intl'
import { useForm, FormProvider } from 'react-hook-form'

import styles from './Form.module.scss'

export const Form = () => {
  const t = useTranslations()
  const methods = useForm({ mode: 'onBlur' })
  const onSubmit = (data) => console.log(omit(data, ['age', 'terms']))

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
              { value: 'yes', label: t('form.radio.option_1') },
              { value: 'no', label: t('form.radio.option_2') },
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

          <button className={styles.button} onClick={onSubmit}>
            {t('form.button')}
          </button>
        </form>
      </FormProvider>
    </div>
  )
}
