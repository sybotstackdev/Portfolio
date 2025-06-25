
import React from 'react'

const Header = () => {
    return (
        <header>
            <div className="container mx-auto bg-[#000a13]">
                <nav className="sm:hidden pt-3 pb-2">
                    <ul className="flex justify-center gap-10">
                        <li>
                            <a
                                href="#about"
                                className="bg-gradient-to-r from-indigo-400 via-sky-400 to-emerald-400 bg-clip-text text-transparent hover:opacity-80 transition"
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                href="#services"
                                className="bg-gradient-to-r from-pink-400 via-yellow-400 to-lime-400 bg-clip-text text-transparent hover:opacity-80 transition"
                            >
                                Services
                            </a>
                        </li>
                        <li>
                            <a
                                href="#portfolio"
                                className="bg-gradient-to-r from-purple-400 via-blue-400 to-green-400 bg-clip-text text-transparent hover:opacity-80 transition"
                            >
                                Portfolio
                            </a>
                        </li>
                        <li>
                            <a
                                href="#contact"
                                className="bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent hover:opacity-80 transition"
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>
                <nav className="justify-between items-center h-10 p-10 hidden sm:flex">
                    <p className="font-bold text-2xl bg-gradient-to-r from-indigo-400 via-sky-400 to-emerald-400 bg-clip-text text-transparent">
                        Yash
                    </p>
                    <ul className="flex gap-10">
                        <li>
                            <a
                                href="#about"
                                className="bg-gradient-to-r from-indigo-400 via-sky-400 to-emerald-400 bg-clip-text text-transparent hover:opacity-80 transition"
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                href="#services"
                                className="bg-gradient-to-r from-pink-400 via-yellow-400 to-lime-400 bg-clip-text text-transparent hover:opacity-80 transition"
                            >
                                Services
                            </a>
                        </li>
                        <li>
                            <a
                                href="#portfolio"
                                className="bg-gradient-to-r from-purple-400 via-blue-400 to-green-400 bg-clip-text text-transparent hover:opacity-80 transition"
                            >
                                Portfolio
                            </a>
                        </li>
                        <li>
                            <a
                                href="#contact"
                                className="bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent hover:opacity-80 transition"
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                    <a
                        className="px-5 py-1 rounded-full ring-1 ring-gray-100 hover:bg-white bg-gradient-to-r from-indigo-400 via-sky-400 to-emerald-400 bg-clip-text text-transparent font-semibold transition"
                        href="#"
                    >
                        Hire Me
                    </a>
                </nav>
            </div>
        </header>
    )
}

export default Header