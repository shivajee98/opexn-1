import { Loader2 } from 'lucide-react'
import React from 'react'

const Loader = () => {
  return (
    <div className='w-full h-screen flex items-center justify-center'>
        <span>
            <Loader2 className='w-6 h-6' />
        </span>
    </div>
  )
}

export default Loader
