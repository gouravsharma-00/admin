import React from 'react'
/**
 * Renders a User Feedback form
 * 
 * @returns { JSX.Element } Feedback form
 */

export function UserFeedback() {
    return(
        <fieldset className='border-2 h-max w-md p-1.75 '>
            <legend>Feedback</legend>
            <form className='flex justify-center content-center flex-col gap-1'>
                <input className='border-2'
                type='text' placeholder='Enter Your name' name='username' aria-description='input for username'/>
                <textarea className='border-2'
                 name='feedback' placeholder='Enter Your Feedback' />
                <button className='border-2 p-1.5' 
                type='submit' aria-label='submit'>Submit</button>
            </form>
        </fieldset>
    )
}