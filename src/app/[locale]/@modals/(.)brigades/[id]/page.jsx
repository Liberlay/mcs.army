import { useTranslations } from 'next-intl'
import { Modal } from 'components/Modal/Modal'

import styles from './page.module.scss'

export default function Brigade({ params: { id } }) {
  const t = useTranslations()
  const brigades = t.raw('brigades.list')

  return (
    <Modal>
      <div className={styles.brigade}>
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
                  src={`/images/brigades/${id}.png`}
                  alt="brigade chevron"
                />
                <div className={styles.brigade_content}>
                  <p className={styles.brigade_title}>
                    <img
                      className={styles.brigade_chevron_mobile}
                      src={`/images/brigades/${id}.png`}
                      alt="brigade chevron"
                    />
                    {t(`brigades.list.${id}.label`)}
                  </p>
                  <p className={styles.brigade_text}>{t(`brigades.list.${id}.text`)}</p>
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
      </div>
    </Modal>
  )
}
