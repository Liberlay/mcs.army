'use client'

import { useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'

import CloseIcon from '@mui/icons-material/Close'

import styles from './page.module.scss'

export default function Brigade({ params: { id } }) {
  const router = useRouter()
  const t = useTranslations()
  const brigades = t.raw('brigades.list')

  return (
    <article className={styles.article}>
      {Object.entries(brigades).map(
        ([brigadeKey, brigade], i) =>
          brigadeKey === id && (
            <div key={i} className={styles.brigade}>
              <div
                className={styles.brigade_background}
                style={{ backgroundImage: `url(/images/brigades/35_bg.png)` }}
              />
              <img
                className={styles.brigade_chevron}
                src={`/images/brigades/${brigadeKey}.png`}
                alt="brigade chevron"
              />
              <div className={styles.brigade_content}>
                <div className={styles.close} onClick={() => router.back()}>
                  <CloseIcon />
                </div>
                <p className={styles.brigade_title}>
                  <img
                    className={styles.brigade_chevron_mobile}
                    src={`/images/brigades/${brigadeKey}.png`}
                    alt="brigade chevron"
                  />
                  {t(`brigades.list.${brigadeKey}.label`)}
                </p>
                <p className={styles.brigade_text}>{t(`brigades.list.${brigadeKey}.text`)}</p>
                <div className={styles.battalions}>
                  {brigade.battalions &&
                    Object.keys(brigade.battalions).map((battalionKey, i) => (
                      <div key={i} className={styles.battalion}>
                        <img
                          className={styles.battalion_chevron}
                          src={`/images/brigades/battalions/${brigadeKey}/${battalionKey}.png`}
                          alt="battalion chevron"
                        />
                        <p className={styles.battalion_text}>
                          {t(`brigades.list.${brigadeKey}.battalions.${battalionKey}.label`)}
                        </p>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          )
      )}
    </article>
  )
}
