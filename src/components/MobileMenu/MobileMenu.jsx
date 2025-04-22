import clsx from 'clsx'
import Link from 'next/link'
import { useRef } from 'react'
import { useTranslations } from 'next-intl'
import { useOnClickAway } from 'hooks/useOnClickAway'
import { LanguageSwitcher } from 'components/LanguageSwitcher/LanguageSwitcher'

import styles from './MobileMenu.module.scss'

export const MobileMenu = ({ isOpen, setIsOpen }) => {
  const menuRef = useRef()
  const t = useTranslations()
  const cities = t.raw('footer.cities')

  useOnClickAway(menuRef, isOpen, () => setIsOpen(false))

  return (
    <div ref={menuRef} className={clsx(styles.menu, isOpen && styles.opened)}>
      <nav>
        <Link href={`/#about`} onClick={() => setIsOpen(false)}>
          {t('header.nav.about')}
        </Link>
        <Link href={`/#brigades`} onClick={() => setIsOpen(false)}>
          {t('header.nav.brigades')}
        </Link>
        <Link href={`/#form`} onClick={() => setIsOpen(false)}>
          {t('header.nav.application')}
        </Link>
        <Link href={`/vacancies`} onClick={() => setIsOpen(false)}>
          {t('header.nav.vacancies')}
        </Link>
      </nav>
      <div className={styles.phone}>
        <p>{t('header.phone')}</p>
        <Link className={styles.link} href="tel:+380661139360" scroll={false}>
          +38 (066) 113-93-60
        </Link>
      </div>
      <div className={styles.cities}>
        {Object.keys(cities).map((key, i) => (
          <div key={i} className={styles.city}>
            <p>{t(`footer.cities.${key}.label`)}</p>
            <Link href={`tel:${t(`footer.cities.${key}.phone`)}`}>
              {t(`footer.cities.${key}.phone`)}
            </Link>
          </div>
        ))}
      </div>
      <div className={styles.language}>
        <LanguageSwitcher />
      </div>
    </div>
  )
}
