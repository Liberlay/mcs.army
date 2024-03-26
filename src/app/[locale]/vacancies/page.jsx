'use client'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useTranslations } from 'next-intl'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import styles from './page.module.scss'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function Vacancies() {
  const t = useTranslations()
  const vacancies = t.raw('vacancies.list')

  useGSAP(() => {
    const vacancies = gsap.utils.toArray(`.${styles.vacancy}`)

    vacancies.forEach((vacancy) => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: vacancy,
            start: 'top bottom',
          },
        })
        .fromTo(vacancy, { xPercent: -20, opacity: 0 }, { xPercent: 0, opacity: 1, duration: 1 })
    })
  })

  return (
    <article className={styles.article}>
      <h1 className={styles.title}>{t('vacancies.title')}</h1>
      <p className={styles.addittion}>{t('vacancies.addittion')}</p>
      <div className={styles.vacancies}>
        {vacancies.map((vacancy, i) => (
          <div key={i} className={styles.vacancy}>
            <div
              className={styles.background}
              style={{ backgroundImage: `url(/images/slider.png)` }}
            />
            <div className={styles.image} style={{ backgroundImage: `url(/images/slider.png)` }} />
            <div className={styles.content}>
              <p className={styles.label}>{vacancy.label}</p>
              <p className={styles.text}>{vacancy.text}</p>
            </div>
          </div>
        ))}
      </div>
    </article>
  )
}
