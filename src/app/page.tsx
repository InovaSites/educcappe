import Image from "next/image";
import Link from 'next/link';
import CourseCard from '@/components/CourseCard';

const FEATURED_COURSES = [
  {
    title: 'Preparatório PM',
    description: 'Preparação completa para o concurso da Polícia Militar com material atualizado e simulados exclusivos.',
    imageUrl: '/preparatorioPM.jpg', // Adicionar imagem depois
    slug: 'preparatorio-pm'
  },
  {
    title: 'Preparatório Vestibular',
    description: 'Curso intensivo para vestibulares com foco nas principais universidades e metodologia comprovada.',
    imageUrl: '/preparatorioVestibular.jpeg', // Adicionar imagem depois
    slug: 'preparatorio-vestibular'
  },
  {
    title: 'Preparatório Concursos',
    description: 'Preparação especializada para concursos públicos com professores experientes e material completo.',
    imageUrl: '/preparatorioConcurso.jpeg', // Adicionar imagem depois
    slug: 'preparatorio-concursos'
  }
] as const;

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-gray-50 to-white">
      {/* Banner Principal */}
      <section className="bg-white pt-16 md:pt-20 pb-6">
        <div className="container mx-auto px-4">
          <div className="relative">
            <div className="block md:hidden mt-3">
              <Image 
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1"
                alt="Estudantes em sala de aula"
                width={800}
                height={600}
                className="w-full rounded-xl shadow-lg mt-5"
                priority
              />
            </div>
            <div className="hidden md:block">
              <Image 
                src="/Ad.webp"
                alt="Adquira uma pós graduação e ganhe outra"
                width={1800}
                height={600}
                className="w-full rounded-2xl shadow-xl mt-5"
                priority
              />
            </div>
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-gray-900/10 to-transparent" />
          </div>
        </div>
      </section>

      {/* Banner Promocional */}
      <section className="py-12 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          {/* Grid Pattern */}
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(to right, #f1f5f9 1px, transparent 1px),
              linear-gradient(to bottom, #f1f5f9 1px, transparent 1px)
            `,
            backgroundSize: '4rem 4rem'
          }} />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-blue-50/30" />
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 md:gap-0 md:justify-between shadow-xl border border-gray-100">
            <div className="text-center md:text-left">
              <span className="text-gray-600 text-sm font-medium mb-2 block">PROMOÇÃO ESPECIAL</span>
              <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gray-800">Novo ano, Novas conquistas</h2>
              <p className="text-lg md:text-xl text-gray-600">Invista no que realmente importa: o seu futuro.</p>
            </div>
            <Link 
              href="/matricula"
              className="w-full md:w-auto bg-gray-900 text-white px-6 py-3 md:px-8 md:py-4 rounded-xl text-lg font-semibold hover:bg-gray-800 transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg"
            >
              Matricule-se
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Cursos em Destaque */}
      <section className="py-12 md:py-20 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center mb-10 md:mb-16">
            <span className="text-gray-600 text-sm font-medium mb-2">NOSSOS CURSOS</span>
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800">Cursos em Destaque</h2>
            <div className="w-20 h-1 bg-gray-800 mt-4 rounded-full"/>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {FEATURED_COURSES.map((course) => (
              <CourseCard
                key={course.slug}
                title={course.title}
                description={course.description}
                imageUrl={course.imageUrl}
                slug={course.slug}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-gray-200 via-transparent to-transparent opacity-50" />
        <div className="container mx-auto px-4 relative">
          <div className="flex flex-col items-center mb-10 md:mb-16">
            <span className="text-gray-600 text-sm font-medium mb-2">POR QUE NOS ESCOLHER</span>
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800">Nossos Diferenciais</h2>
            <div className="w-20 h-1 bg-gray-800 mt-4 rounded-full"/>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                titulo: 'Professores Especialistas',
                descricao: 'Profissionais com vasta experiência no mercado',
                icone: '👨‍🏫'
              },
              {
                titulo: 'Material Atualizado',
                descricao: 'Conteúdo sempre em dia com as últimas mudanças',
                icone: '📚'
              },
              {
                titulo: 'Plataforma Online',
                descricao: 'Estude quando e onde quiser',
                icone: '💻'
              },
              {
                titulo: 'Suporte Personalizado',
                descricao: 'Acompanhamento individual do seu progresso',
                icone: '🤝'
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl border border-gray-100 shadow-lg hover:shadow-xl transition-all text-center"
              >
                <div className="text-4xl mb-4">{item.icone}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{item.titulo}</h3>
                <p className="text-gray-600">{item.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
