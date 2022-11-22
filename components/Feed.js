import React from 'react'
import Stories from './Stories'

const Feed = () => {
  return (
    <main className='grid grid-cols-1 md:grid-cols-2 md:max-w-3xl
    xl:grid-cols-3 xl:max-w-5xl mx-auto'>

    {/* Section 1 */}
    <section className='col-span-2'>
        {/* Stories */}
        <Stories />
        {/* Posts */}
    </section>

     {/* Section 2 */}
     <section>
        {/* Main profile */}
        {/* Suggestions */}
    </section>

    </main>
  )
}

export default Feed