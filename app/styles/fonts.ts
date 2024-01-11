import { Inter } from 'next/font/google';
import localFont from 'next/font/local';

export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const cal = localFont({
  src: './CalSans-SemiBold.otf',
  variable: '--font-cal',
  weight: '600',
  display: 'swap',
});

export const calTitle = localFont({
  src: './CalSans-SemiBold.otf',
  variable: '--font-title',
  weight: '600',
  display: 'swap',
});

export const fontMapper = {
  'font-cal': calTitle.variable,
  'font-inter': inter.variable,
} as Record<string, string>;
