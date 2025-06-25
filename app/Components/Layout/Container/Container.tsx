import React from 'react'
import { SparklesCore } from '../../Motion/MotionLibrary'

const Container = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="container w-full max-w-7xl mx-auto">
            {children}
         
        </div>
    )
}

export default Container