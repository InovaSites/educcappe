"use client"

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50 border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/educcappe.webp" alt="Educcappe" width={150} height={40} />
          </Link>
          
          {/* Menu Desktop */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-gray-600 hover:text-gray-900">Inicial</Link>
            <Link href="/cursos" className="text-gray-600 hover:text-gray-900">Cursos</Link>
            <Link href="/sobre" className="text-gray-600 hover:text-gray-900">Sobre Nós</Link>
            <Link href="/area-do-aluno" className="text-gray-600 hover:text-gray-900">Área do Aluno</Link>
            <Link href="/contato" className="text-gray-600 hover:text-gray-900">Contato</Link>
          </nav>

          {/* Botão Menu Mobile */}
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-800 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>

            <Link 
              href="/matricule-se"
              className="hidden md:block bg-blue-600 text-white px-6 py-2 rounded-xl font-medium hover:bg-blue-700 transition-colors"
            >
              Matricule-se
            </Link>
          </div>
        </div>

        {/* Menu Mobile */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col gap-4">
              <Link href="/" className="text-gray-600 hover:text-gray-900 px-2">Inicial</Link>
              <Link href="/cursos" className="text-gray-600 hover:text-gray-900 px-2">Cursos</Link>
              <Link href="/sobre" className="text-gray-600 hover:text-gray-900 px-2">Sobre Nós</Link>
              <Link href="/area-do-aluno" className="text-gray-600 hover:text-gray-900 px-2">Área do Aluno</Link>
              <Link href="/contato" className="text-gray-600 hover:text-gray-900 px-2">Contato</Link>
              <Link 
                href="/matricule-se"
                className="bg-blue-600 text-white px-6 py-2 rounded-xl font-medium hover:bg-blue-700 transition-colors text-center mt-2"
              >
                Matricule-se
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
} 