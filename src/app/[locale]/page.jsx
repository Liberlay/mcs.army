'use client'

import gsap from 'gsap'
import Link from 'next/link'
import { useGSAP } from '@gsap/react'
import TextPlugin from 'gsap/TextPlugin'
import { Form } from 'components/Form/Form'
import { useTranslations } from 'next-intl'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Brigades } from 'components/Brigades/Brigades'

import FacebookIcon from '@mui/icons-material/Facebook'
import TelegramIcon from '@mui/icons-material/Telegram'
import TikTokIcon from 'components/TikTokIcon/TikTokIcon'
import InstagramIcon from '@mui/icons-material/Instagram'

import styles from './page.module.scss'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, TextPlugin)
}

export default function MainPage() {
  const t = useTranslations()
  const questions = t.raw('about.questions')
  const text = t.raw('about.text')

  useGSAP(() => {
    gsap
      .timeline()
      .fromTo(`.${styles.slogan}`, { x: 100, opacity: 0 }, { x: 0, opacity: 1, duration: 1 }, 1)
      .to(`.${styles.slogan}`, { duration: 1.2, text: t('top.h2'), ease: 'none' }, 1)
      .fromTo(
        `.${styles.title}`,
        { yPercent: 15, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: 1, delay: 0.5 },
        0
      )

    const questions = gsap.utils.toArray(`.${styles.question}`)
    const text = gsap.utils.toArray(`.${styles.text}`)

    const createScrollAnimation = (ref, from, to) =>
      gsap.fromTo(
        ref,
        { opacity: 0, ...from },
        {
          scrollTrigger: { trigger: ref, start: 'top bottom' },
          opacity: 1,
          duration: 1,
          ...to,
        }
      )

    createScrollAnimation(questions[0], { xPercent: 20 }, { xPercent: 0 })
    createScrollAnimation(questions[1], { xPercent: -20 }, { xPercent: 0 })
    createScrollAnimation(questions[2], { yPercent: 20 }, { yPercent: 0 })
    createScrollAnimation(text[0], { xPercent: 20 }, { xPercent: 0 })
    createScrollAnimation(text[1], { xPercent: -20 }, { xPercent: 0 })
    createScrollAnimation(text[2], { xPercent: 20 }, { xPercent: 0 })
    createScrollAnimation(text[3], { xPercent: -20 }, { xPercent: 0 })
    createScrollAnimation(`.${styles.socials}`, { xPercent: 20 }, { xPercent: 0 })
  })

  return (
    <main className={styles.main}>
      <section className={styles.section_top}>
        <div>
          <h2 className={styles.slogan}></h2>
          <h1 className={styles.title}>{t('top.h1')}</h1>
        </div>
      </section>
      <section id="about" className={styles.section_about}>
        <div className={styles.about}>
          <div className={styles.content}>
            <div className={styles.questions}>
              {questions.map((question, i) => (
                <p key={i} className={styles.question}>
                  {question}
                </p>
              ))}
            </div>
            <div className={styles.text_container}>
              {text.map((text, i) => (
                <p key={i} className={styles.text}>
                  {text}
                </p>
              ))}
            </div>
          </div>
          <div className={styles.socials}>
            <Link href="#" target="_blank">
              <FacebookIcon className={styles.icon} />
            </Link>
            <Link href="#" target="_blank">
              <TelegramIcon className={styles.icon} />
            </Link>
            <Link href="#" target="_blank">
              <InstagramIcon className={styles.icon} />
            </Link>
            <Link href="#" target="_blank">
              <TikTokIcon className={styles.icon} />
            </Link>
          </div>
        </div>
      </section>
      <section id="brigades" className={styles.section_brigades}>
        <h1 className={styles.heading}>{t('brigades.title')}</h1>
        <Brigades />
      </section>
      <section id="form" className={styles.section_form}>
        <h1 className={styles.heading}>{t('form.title')}</h1>
        <div className={styles.container}>
          <Form />
        </div>
      </section>
    </main>
  )
}
