import React from 'react'
/**
 * Renders the RootLayout
 * 
 * @param {{children : React.ReactNode}} props - Layout props 
 * @returns { JSX.Element } RootLayout
 */

import "./globals.css"

export default function RootLayout({children} : {children : React.ReactNode}) {
    return(
        <html lang='en'>
            <head></head>
            <body>
                {children}
            </body>
        </html>
    )
}