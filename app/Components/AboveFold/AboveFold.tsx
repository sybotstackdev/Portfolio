import React from 'react'
import { BlinkingText, MotionText, SparklesCore } from '../Motion/MotionLibrary'
import Image from 'next/image'
import { MailIcon, MapPinIcon, PhoneIcon } from 'lucide-react'

const AboveFold = () => {
    return (
        <div className='h-[45rem] w-full relative'>
            <div className='flex flex-col items-center justify-center z-[99999]'>
                <div className='mt-18 rounded-full w-[100px] h-[100px] mx-auto md:w-[150px] md:h-[150px] shadow-[0_0_15px_rgba(56,189,248,0.3)]'>
                    <Image src="/profile/me.jpg" className='rounded-full w-full h-full object-cover' alt="Yash Kumar" width={300} height={300} />
                </div>
                <div className="mt-2 flex flex-col items-center justify-center overflow-hidden rounded-md">
                    <BlinkingText color1="#fff" color2="#38bdf8" duration={1}>
                        <h1 className="md:text-7xl text-3xl lg:text-9xl font-semibold text-center relative z-20 bg-gradient-to-r from-indigo-400 via-sky-400 to-emerald-400 bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(56,189,248,0.3)]">
                            Yash Kumar
                        </h1>
                    </BlinkingText>

                    <MotionText initialColor="#fff" animateColor="#38bdf8" transitionDuration={0.5} whileHoverScale={1.08}>
                        <p className="md:text-3xl mt-2 text-2xl font-bold text-center relative z-20 bg-gradient-to-r from-pink-400 via-yellow-400 to-lime-400 bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(56,189,248,0.3)]">
                            Full Stack Developer
                        </p>
                    </MotionText>
                    <div className='flex flex-col items-center justify-center mt-2'>
                        <p className='text-center flex mt-2 items-center gap-4 relative z-20 bg-gradient-to-r from-pink-400 via-yellow-400 to-lime-400 bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(56,189,248,0.3)]'>
                            <MailIcon className="h-6 w-6 text-sky-400" /> joyywithyash@gmail.com
                        </p>
                        <p className='text-center flex mt-2 items-center gap-4 relative z-20 bg-gradient-to-r from-pink-400 via-yellow-400 to-lime-400 bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(56,189,248,0.3)]'>
                            <PhoneIcon className="h-6 w-6 text-sky-400" /> +91 8219263810
                        </p>
                        <p className='text-center flex mt-2 items-center gap-4 relative z-20 bg-gradient-to-r from-pink-400 via-yellow-400 to-lime-400 bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(56,189,248,0.3)] mb-4'>
                            <MapPinIcon className="h-6 w-6 text-sky-400" /> Chandigarh, India
                        </p>
                    </div>

                    <div className="w-[40rem] h-40 relative">
                        {/* Gradients */}
                        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-sky-400 to-transparent h-[2px] w-3/4 blur-sm" />
                        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-sky-400 to-transparent h-px w-3/4" />
                        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-400 to-transparent h-[5px] w-1/4 blur-sm" />
                        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-400 to-transparent h-px w-1/4" />

                        {/* Core component */}
                        <SparklesCore
                            background="transparent"
                            minSize={0.4}
                            maxSize={0.8}
                            particleDensity={1200}
                            className="w-full h-full"
                            particleColor="#38bdf8"
                        />

                        {/* Radial Gradient to prevent sharp edges */}
                        <div className="absolute inset-0 w-full h-full [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboveFold