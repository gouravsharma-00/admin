import React from 'react'
/**
 * Renders a User Feedback form
 * 
 * @returns { JSX.Element } Feedback form
 */

export function UserFeedback() {
    return(
        <fieldset className='border-2 h-max w-md p-1.5'>
            <legend>Feedback</legend>
            <form className='flex justify-center content-center flex-col gap-1' method='POST' action='/api/feedback'>
                <input className='border-2 p-1'
                type='text' placeholder='Enter Your name' name='username' aria-description='input for username' required/>
                <textarea className='border-2 p-1' rows={5}
                 name='feedback' placeholder='Enter Your Feedback' required />
                <button className='border-2 p-1.5 bg-black text-white' 
                type='submit' aria-label='submit'>Submit</button>
            </form>
        </fieldset>
    )
}