'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { MobileMenu } from 'components/MobileMenu/MobileMenu'
import { LanguageSwitcher } from 'components/LanguageSwitcher/LanguageSwitcher'

import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'

import styles from './Header.module.scss'

export const Header = () => {
  const t = useTranslations()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.left}>
            <Link href={`/`}>
              <img className={styles.logo} src="/images/logo.png" alt="Logo" />
            </Link>
            <nav>
              <Link href={`/#about`}>{t('header.nav.about')}</Link>
              <Link href={`/#brigades`}>{t('header.nav.brigades')}</Link>
              <Link href={`/#form`}>{t('header.nav.application')}</Link>
              <Link href={`/vacancies`}>{t('header.nav.vacancies')}</Link>
            </nav>
          </div>
          <div className={styles.right}>
            <div className={styles.phone}>
              <p>{t('header.phone')}</p>
              <Link className={styles.link} href="tel:+380661139360" scroll={false}>
                +38 (066) 113-93-60
              </Link>
            </div>
            <div className={styles.language}>
              <LanguageSwitcher />
            </div>
            {!isOpen ? (
              <MenuIcon className={styles.menu_icon} onClick={() => setIsOpen(true)} />
            ) : (
              <CloseIcon className={styles.menu_icon} onClick={() => setIsOpen(false)} />
            )}
          </div>
        </div>
      </div>
      <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </header>
  )
}
