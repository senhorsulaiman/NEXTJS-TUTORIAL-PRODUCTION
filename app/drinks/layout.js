import React from 'react'

const Drinkslayout = ({ children }) => {
    return (
        <div className='max-w-xl'>

            <div className='mockup-code mb-8'>
                <pre data-prefix="$">

                    <code>npx create app@latest</code>
                </pre>
            </div>
            {children}
        </div>
    )
}

export default Drinkslayout