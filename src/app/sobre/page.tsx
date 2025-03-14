import Image from "next/image";
import Link from "next/link";

export default function SobreNosPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 space-y-6">
              <h1 className="text-5xl font-bold text-gray-900">
                Transformando sonhos em conquistas
              </h1>
              <p className="text-xl text-gray-600">
                Há mais de 10 anos, a Educcappe tem se dedicado a preparar alunos para alcançarem seus objetivos através de uma metodologia única e eficaz.
              </p>
            </div>
            <div className="flex-1">
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/sobre-hero.jpg"
                  alt="Alunos estudando"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nossa História */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Nossa História</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl text-blue-600">1</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Fundação</h3>
              <p className="text-gray-600">
                Iniciamos nossa jornada em 2013 com o objetivo de democratizar o acesso ao ensino de qualidade.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl text-blue-600">2</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Crescimento</h3>
              <p className="text-gray-600">
                Expandimos nossa atuação para todo o Brasil através da nossa plataforma online.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl text-blue-600">3</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Hoje</h3>
              <p className="text-gray-600">
                Mais de 10.000 alunos aprovados e uma metodologia reconhecida nacionalmente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nossa Missão */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl font-bold">Nossa Missão</h2>
            <p className="text-xl text-white/90">
              Transformar a vida das pessoas através da educação, oferecendo ensino de qualidade e preparação completa para concursos públicos e vestibulares.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3">Missão</h3>
                <p className="text-white/80">Democratizar o acesso ao ensino de qualidade</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3">Visão</h3>
                <p className="text-white/80">Ser referência nacional em educação preparatória</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3">Valores</h3>
                <p className="text-white/80">Excelência, Compromisso e Inovação</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8 text-gray-900">Faça parte da nossa história</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Junte-se aos milhares de alunos que já transformaram suas vidas através dos nossos cursos
          </p>
          <Link 
            href="/cursos"
            className="bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-blue-700 transition-all inline-flex items-center gap-2"
          >
            Conheça nossos cursos
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6"/>
            </svg>
          </Link>
        </div>
      </section>
    </main>
  );
} 