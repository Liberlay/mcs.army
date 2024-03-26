import { useTranslations } from 'next-intl'

import styles from './page.module.scss'

export default function PrivacyPolicy() {
  const t = useTranslations()
  const policy = t.raw('privacy-policy.list')

  return (
    <article className={styles.article}>
      <div className={styles.container}>
        <h1 className={styles.title}>{t('privacy-policy.title')}</h1>
        {Object.entries(policy).map(([key, obj]) => (
          <div key={key} className={styles.paragraph}>
            <p className={styles.title}>{`${key}. ` + t(`privacy-policy.list.${key}.title`)}</p>
            {Object.entries(obj.text).map(([key, text]) => (
              <p key={key} className={styles.text}>
                {text}
              </p>
            ))}
          </div>
        ))}
      </div>
    </article>
  )
}
