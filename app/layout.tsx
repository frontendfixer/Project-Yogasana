import './styles/globals.css';

import type { Metadata } from 'next';

import { cn } from '~/lib/utils';

import { Providers } from './providers';
import { cal, inter } from './styles/fonts';

export const metadata: Metadata = {
  title: 'Project Yogasana',
  description: 'Yogasana Management App',
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(cal.variable, inter.variable)}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
