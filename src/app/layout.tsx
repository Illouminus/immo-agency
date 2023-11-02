import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Аренда и Учет - управляем неджвижимостью',
  description: 'Ваш надежный партнер в управлении недвижимостью в Москве.' +
      ' Предлагаем полный спектр услуг: ' +
      'от поиска надежных арендаторов до обслуживания ' +
      'и управления вашим имуществом. Максимизируем доходы и' +
      ' обеспечиваем спокойствие владельцев недвижимости.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
