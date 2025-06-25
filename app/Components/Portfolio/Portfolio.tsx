import { Card } from '@/app/Card/Card'
import React from 'react'

const Portfolio = () => {
    return (
        <div className='flex flex-col items-center justify-center'>
            <h3 className='md:text-5xl  relative z-20 bg-gradient-to-r from-pink-400 via-yellow-400 to-lime-400 bg-clip-text text-transparent text-5xl font-bold text-center mt-12 uppercase'>Portfolio</h3>
            <div className='grid md:grid-cols-3 grid-cols-1 gap-4 p-4 mt-4 mb-12'>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}

export default Portfolio