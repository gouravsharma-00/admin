import React from 'react'
/**
 * App element (combined components)
 * 
 * @returns { JSX.Element } Element with combined components
 */
import { UserFeedback } from '@components/ui/userFeedback';

export function App() {
    return(
        <main aria-label='main' className='w-screen h-screen flex justify-center items-center'>
            <UserFeedback />
        </main>
    )
}