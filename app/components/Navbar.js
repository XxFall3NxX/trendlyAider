"use client";
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const clientSolutions = [
        { name: 'Basic Package Clients', href: '#' },
        { name: 'Standard Package Clients', href: '#' },
    ];

    return (
        <nav className="bg-white shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex-shrink-0 flex items-center">
                        {/* Replace with your actual logo */}
                        <div className="h-8 w-8 relative">
                            <Image
                                src="/logo.png"
                                alt="Company Logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>

                    {/* Desktop menu */}
                    <div className="hidden sm:flex sm:items-center">
                        <Link href="/blog" className="px-3 py-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100">
                            Blog
                        </Link>
                        <div className="relative ml-3">
                            <button
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                className="px-3 py-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 inline-flex items-center"
                            >
                                Client Solutions
                                <svg className="ml-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </button>
                            {isDropdownOpen && (
                                <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                                    <div className="py-1" role="menu">
                                        {clientSolutions.map((item) => (
                                            <Link
                                                key={item.name}
                                                href={item.href}
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                role="menuitem"
                                            >
                                                {item.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="sm:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                        >
                            <span className="sr-only">Open main menu</span>
                            {!isOpen ? (
                                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            ) : (
                                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="sm:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        <Link href="/blog" className="block px-3 py-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100">
                            Blog
                        </Link>
                        <button
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className="w-full text-left px-3 py-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                        >
                            Client Solutions
                        </button>
                        {isDropdownOpen && (
                            <div className="pl-4">
                                {clientSolutions.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className="block px-3 py-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
}
