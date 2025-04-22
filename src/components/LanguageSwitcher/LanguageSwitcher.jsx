'use client'

import clsx from 'clsx'
import { locales } from 'i18n'
import { useLocale } from 'next-intl'
import { useRef, useState } from 'react'
import { Link, usePathname } from 'navigation'
import { useOnClickAway } from 'hooks/useOnClickAway'

import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

import styles from './LanguageSwitcher.module.scss'

export const LanguageSwitcher = () => {
  const locale = useLocale()
  const switchRef = useRef()
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const languages = {
    uk: 'UA',
    en: 'EN',
  }

  useOnClickAway(switchRef, isOpen, () => setIsOpen(false))

  return (
    <div ref={switchRef} className={styles.container}>
      <div className={styles.switcher_top} onClick={() => setIsOpen(!isOpen)}>
        <span
          className={(locale === 'uk' && 'fi fi-ua') || (locale === 'en' && 'fi fi-gb')}
          style={{ borderRadius: '4px' }}
        />
        <p className={styles.selectedLng}>{languages[locale]}</p>
        {!isOpen ? (
          <KeyboardArrowDownIcon className={styles.icon} />
        ) : (
          <KeyboardArrowUpIcon className={styles.icon} />
        )}
      </div>
      <div className={clsx(styles.lng_list, isOpen && styles.opened)}>
        {locales
          .filter((l) => locale !== l)
          .map((l, i) => (
            <Link key={i} className={styles.lng} href={pathname} locale={l} scroll={false}>
              {
                <span
                  className={(l === 'uk' && 'fi fi-ua') || (l === 'en' && 'fi fi-gb')}
                  style={{ borderRadius: '4px' }}
                />
              }
              {languages[l]}
            </Link>
          ))}
      </div>
    </div>
  )
}
