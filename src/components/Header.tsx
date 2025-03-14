import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50 border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/educcappe.webp" alt="Educcappe" width={150} height={40} />
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-gray-600 hover:text-gray-900">Inicial</Link>
            <Link href="/cursos" className="text-gray-600 hover:text-gray-900">Cursos</Link>
            <Link href="/sobre" className="text-gray-600 hover:text-gray-900">Sobre Nós</Link>
            <Link href="/area-do-aluno" className="text-gray-600 hover:text-gray-900">Área do Aluno</Link>
            <Link href="/contato" className="text-gray-600 hover:text-gray-900">Contato</Link>
          </nav>

          <Link 
            href="/matricule-se"
            className="bg-blue-600 text-white px-6 py-2 rounded-xl font-medium hover:bg-blue-700 transition-colors"
          >
            Matricule-se
          </Link>
        </div>
      </div>
    </header>
  );
} 