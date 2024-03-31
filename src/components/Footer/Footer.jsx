import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { LanguageSwitcher } from 'components/LanguageSwitcher/LanguageSwitcher'

import FacebookIcon from '@mui/icons-material/Facebook'
import TelegramIcon from '@mui/icons-material/Telegram'
import TikTokIcon from 'components/TikTokIcon/TikTokIcon'
import InstagramIcon from '@mui/icons-material/Instagram'

import styles from './Footer.module.scss'

export const Footer = () => {
  const t = useTranslations()
  const cities = t.raw('footer.cities')

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.info}>
          <img src="/images/logo.png" alt="" />
          <p>{t('footer.mainOffice.title')}</p>
          <p>{t('footer.mainOffice.street')}</p>
          <p>{t('footer.mainOffice.city')}</p>
          <Link href="mailto:PivdenMP@gmail.com">PivdenMP@gmail.com</Link>
          <Link href="tel:+380661139360">+38 (066) 113-93-60</Link>
        </div>
        <div className={styles.cities}>
          {Object.entries(cities).map(([key, city], i) => (
            <div key={i} className={styles.city}>
              <p>{t(`footer.cities.${key}.label`)}</p>
              <a href={`tel:${city.phone}`}>{city.phone}</a>
            </div>
          ))}
        </div>
        <div className={styles.right}>
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
          <LanguageSwitcher />
        </div>
      </div>
    </footer>
  )
}
