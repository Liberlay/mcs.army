import gsap from 'gsap'
import Link from 'next/link'
import { useGSAP } from '@gsap/react'
import { useTranslations } from 'next-intl'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import styles from './Brigades.module.scss'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export const Brigades = () => {
  const t = useTranslations()
  const brigades = t.raw('brigades.list')

  useGSAP(() => {
    const brigades = gsap.utils.toArray(`.${styles.brigade}`)
    brigades.forEach((brigade) => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: brigade,
            start: 'top bottom',
          },
        })
        .fromTo(brigade, { yPercent: 20, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 0.5 })
    })
  })

  return (
    <div className={styles.brigades}>
      {Object.keys(brigades).map((key, i) => (
        <Link key={i} className={styles.brigade} href={`/brigades/${key}`} scroll={false}>
          <div
            className={styles.brigade_background}
            style={{ backgroundImage: `url(/images/slider.png)` }}
          />
          <div className={styles.brigade_content}>
            <img
              className={styles.brigade_chevron}
              src={`/images/brigades/${key}.png`}
              alt="brigade chevron"
            />
            <p>{t(`brigades.list.${key}.label`)}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}
