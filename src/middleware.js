import { locales, localePrefix } from './i18n'
import createMiddleware from 'next-intl/middleware'

export default createMiddleware({
  locales,
  localePrefix,
  defaultLocale: 'uk',
})

export const config = {
  matcher: ['/((?!_next|images|fonts|sitemap\\.xml|robots\\.txt).*)'],
}
