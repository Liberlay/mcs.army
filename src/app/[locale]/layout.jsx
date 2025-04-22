import { ToastContainer } from 'react-toastify'
import { Header } from 'components/Header/Header'
import { Footer } from 'components/Footer/Footer'
import { NextIntlClientProvider, useMessages, useTranslations } from 'next-intl'

import '../../styles/index.scss'
import '../../styles/normalize.css'
import 'react-toastify/dist/ReactToastify.css'
import '/node_modules/flag-icons/css/flag-icons.min.css'

export const metadata = {
  icons: {
    icon: '/images/favicon.ico',
    shortcut: '/images/icon.png',
    apple: '/images/icon.png',
  },
  robots: {
    index: true,
    follow: true,
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://mcs.army/'),
  openGraph: {
    url: 'https://mcs.army/',
    type: 'website',
    images: [
      {
        url: 'https://mcs.army/images/logo.png',
      },
    ],
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: 0,
  themeColor: '#000000',
}

export default function Layout({ children, modals, params: { locale } }) {
  const t = useTranslations()
  const messages = useMessages()

  return (
    <html lang={locale}>
      <head>
        <title>{t('meta.title')}</title>
        <meta name="description" content={t('meta.description')} />
        <meta name="keywords" content={t.raw('meta.keywords')} />
        <meta name="og:title" content={t('meta.title')} />
        <meta name="og:description" content={t('meta.description')} />
        <meta name="og:site_name" content={t('meta.title')} />
        <meta name="og:locale" content={locale} />
      </head>
      <body>
        <NextIntlClientProvider {...{ locale, messages }}>
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
        <div id="modals">{modals}</div>
        <ToastContainer position="bottom-right" theme="dark" stacked />
      </body>
    </html>
  )
}
