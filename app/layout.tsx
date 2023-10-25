import '@styles/global.css'
import navbar from '@components/navbar'

export const metadeta = {
    title: 'Butterfly Effect Universe',
    description: 'A web application for the butterfly effect universe, which aims the conservation of butterflies in Pakistan, and create awareness about the impact of butterflies in our ecosystem',
}

const RootLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <html lang='en-US'>
        <body>
            {navbar()}

            <div className='main'>
                <div className='gradient'/>
            </div>

            <main>
                {children}
            </main>
        </body>
    </html>
  )
}

export default RootLayout;