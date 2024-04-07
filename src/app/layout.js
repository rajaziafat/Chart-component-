import './globals.css'
import Head from 'next/head'








export default function RootLayout({ children }) {

  return (
    <html lang="en" className='scroll-smooth'>
     

      <body  >
    

        {children}
      
   
      </body>
    </html>
  )
}
