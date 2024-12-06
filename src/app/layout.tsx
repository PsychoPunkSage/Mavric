import { Inter } from 'next/font/google'
import './styles/globals.css'
import { Providers } from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'AI Trading Agent',
    description: 'AI-powered cross-chain trading agent built for ETHIndia 2024',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Providers>
                    {children}
                </Providers>
            </body>
        </html>
    )
}