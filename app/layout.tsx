import '@styles/global.css'
import Navbar from '@components/navbar'
import { Suspense } from 'react'
import Loader from '@components/loader';

export const metadeta = {
    title: 'Butterfly Effect Universe',
    description: 'A web application for the butterfly effect universe, which aims the conservation of butterflies in Pakistan, and create awareness about the impact of butterflies in our ecosystem',
}

const RootLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <html lang='en-US'>
        <head>
            <title>Butterfly Effect Universe</title>
            <link rel="icon" href="/assets/images/logo2.svg" />
        </head>
        <body>
            <Suspense fallback={<Loader />} >
          
            <Navbar />

            <div className='main'>
                <div className='gradient'/>
            </div>

            <main>
                {children}
            </main>
            </Suspense>
        </body>
    </html>
  )
}

export default RootLayout;