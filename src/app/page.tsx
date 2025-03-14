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
      <section className="bg-white pt-20 pb-6">
        <div className="container mx-auto px-4">
          <div className="relative">
            <Image 
              src="/Ad.webp"
              alt="Adquira uma pós graduação e ganhe outra"
              width={1800}
              height={600}
              className="w-full rounded-2xl shadow-xl mt-5"
              priority
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-gray-900/10 to-transparent" />
          </div>
        </div>
      </section>

      {/* Banner Promocional */}
      <section className="py-20 relative overflow-hidden">
        {/* Ondas decorativas */}
        <div className="absolute inset-0 w-full h-full">
          {/* Ondas superiores */}
          <svg 
            className="absolute w-full h-[120%] top-0 left-0 transform -translate-y-1/2"
            viewBox="0 0 1440 320" 
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path 
              fill="#f3f4f6" 
              fillOpacity="0.6" 
              d="M0,160L48,144C96,128,192,96,288,106.7C384,117,480,171,576,165.3C672,160,768,96,864,74.7C960,53,1056,75,1152,96C1248,117,1344,139,1392,149.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
          <svg 
            className="absolute w-full h-[120%] top-0 left-0 transform -translate-y-1/3"
            viewBox="0 0 1440 320" 
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path 
              fill="#e5e7eb" 
              fillOpacity="0.4" 
              d="M0,128L48,138.7C96,149,192,171,288,165.3C384,160,480,128,576,128C672,128,768,160,864,165.3C960,171,1056,149,1152,144C1248,139,1344,149,1392,154.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>

          {/* Ondas inferiores (espelhadas) */}
          <svg 
            className="absolute w-full h-[120%] bottom-0 left-0 transform translate-y-1/2 rotate-180"
            viewBox="0 0 1440 320" 
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path 
              fill="#f3f4f6" 
              fillOpacity="0.6" 
              d="M0,160L48,144C96,128,192,96,288,106.7C384,117,480,171,576,165.3C672,160,768,96,864,74.7C960,53,1056,75,1152,96C1248,117,1344,139,1392,149.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
          <svg 
            className="absolute w-full h-[120%] bottom-0 left-0 transform translate-y-1/3 rotate-180"
            viewBox="0 0 1440 320" 
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path 
              fill="#e5e7eb" 
              fillOpacity="0.4" 
              d="M0,128L48,138.7C96,149,192,171,288,165.3C384,160,480,128,576,128C672,128,768,160,864,165.3C960,171,1056,149,1152,144C1248,139,1344,149,1392,154.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 flex items-center justify-between shadow-xl border border-gray-100">
            <div>
              <span className="text-gray-600 text-sm font-medium mb-2 block">PROMOÇÃO ESPECIAL</span>
              <h2 className="text-3xl font-bold mb-3 text-gray-800">Novo ano, Novas conquistas</h2>
              <p className="text-xl text-gray-600">Invista no que realmente importa: o seu futuro.</p>
            </div>
            <Link 
              href="/matricula"
              className="bg-gray-900 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-800 transition-all transform hover:scale-105 flex items-center gap-2 shadow-lg"
            >
              Matricule-se
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Cursos em Destaque */}
      <section className="py-20 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center mb-16">
            <span className="text-gray-600 text-sm font-medium mb-2">NOSSOS CURSOS</span>
            <h2 className="text-4xl font-bold text-center text-gray-800">Cursos em Destaque</h2>
            <div className="w-20 h-1 bg-gray-800 mt-4 rounded-full"/>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
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
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-gray-200 via-transparent to-transparent opacity-50" />
        <div className="container mx-auto px-4 relative">
          <div className="flex flex-col items-center mb-16">
            <span className="text-gray-600 text-sm font-medium mb-2">POR QUE NOS ESCOLHER</span>
            <h2 className="text-4xl font-bold text-center text-gray-800">Nossos Diferenciais</h2>
            <div className="w-20 h-1 bg-gray-800 mt-4 rounded-full"/>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
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
            ].map((diferencial) => (
              <div key={diferencial.titulo} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gray-100 rounded-full transform translate-x-16 -translate-y-16 group-hover:scale-110 transition-transform" />
                <div className="relative">
                  <span className="text-4xl mb-6 block">{diferencial.icone}</span>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">{diferencial.titulo}</h3>
                  <p className="text-gray-600">{diferencial.descricao}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
