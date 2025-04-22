'use client'

import gsap from 'gsap'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { useRouter } from 'next/navigation'

import CloseIcon from '@mui/icons-material/Close'

import styles from './Modal.module.scss'

export const Modal = ({ children }) => {
  const animRef = useRef()
  const router = useRouter()

  useGSAP(() => {
    animRef.current = gsap
      .timeline({ defaults: { ease: 'power2.inOut' }, onReverseComplete: () => router.back() })
      .timeScale(1.5)
      .fromTo(`.${styles.modal}`, { opacity: 0 }, { opacity: 1, duration: 0.3 })
      .fromTo(
        `.${styles.container}`,
        { yPercent: 20, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: 0.5 }
      )
  })

  return (
    <div className={styles.modal} onClick={() => animRef.current.reverse().timeScale(-1.5)}>
      <div className={styles.container} onClick={(e) => e.stopPropagation()}>
        <div className={styles.close} onClick={() => animRef.current.reverse().timeScale(-1.5)}>
          <CloseIcon />
        </div>
        {children}
      </div>
    </div>
  )
}
