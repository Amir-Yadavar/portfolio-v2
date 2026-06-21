import createMiddleware from 'next-intl/middleware';
import { locales } from './i18n/config'; // یا هر مسیری که کانفیگ شما قرار دارد

export default createMiddleware({
  locales: locales,
  defaultLocale: 'en', // زبان پیش‌فرض شما
  localeDetection: false // برای جلوگیری از ریدایرکت‌های ناخواسته مبتنی بر مرورگر که اسکریپت‌ها را خراب می‌کند
});

export const config = {
  // این ریجکس پپوشه‌های سیستم مثل static، _next و تصاویر را از میدل‌ویر مستثنی می‌کند
  matcher: ['/', '/(de|en|fa)/:path*', '/((?!_next|_vercel|.*\\..*).*)'],
};