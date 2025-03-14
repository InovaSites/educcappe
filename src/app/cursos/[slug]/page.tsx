import { notFound } from "next/navigation";
import { COURSES_DETAILS } from "@/data/courses";
import Image from "next/image";
import Link from "next/link";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function CourseDetails({ 
  params,
  searchParams 
}: PageProps) {
  // Aguarda a resolução dos parâmetros
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;
  
  const course = COURSES_DETAILS[resolvedParams.slug as keyof typeof COURSES_DETAILS];
  
  if (!course) {
    notFound();
  }

  return (
    <main className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
      {/* Back Button */}
      <div className="container mx-auto px-4 py-6 pt-24">
        <Link
          href="/cursos"
          className="inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/>
          </svg>
          Voltar para cursos
        </Link>
      </div>

      {/* Hero Section */}
      <section className="text-white py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1 space-y-6">
              <div className="space-x-3">
                <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium">
                  CURSO COMPLETO
                </span>
                <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium inline-flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"/>
                  </svg>
                  Início Imediato
                </span>
              </div>
              <h1 className="text-5xl font-bold">{course.title}</h1>
              <p className="text-xl text-white/90">{course.fullDescription}</p>
              <div className="text-4xl font-bold">
                12x de {course.price.installments}
              </div>
              <p className="text-white/90">ou {course.price.full} à vista</p>
              <Link 
                href="/matricula"
                className="bg-yellow-500 text-gray-900 px-12 py-4 rounded-xl text-xl font-semibold hover:bg-yellow-400 transition-all inline-flex items-center gap-2 shadow-lg shadow-yellow-500/30"
              >
                Garantir minha vaga agora
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                </svg>
              </Link>
            </div>
            <div className="flex-1">
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={course.imageUrl}
                  alt={course.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">O que você vai receber</h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            Tudo que você precisa para se preparar adequadamente e alcançar a aprovação
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {course.benefits.map((benefit, index) => (
              <div key={index} className="bg-blue-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300 border border-blue-100">
                <div className="w-14 h-14 bg-blue-500 rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-blue-200">
                  {getBenefitIcon(index)}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Benefício {index + 1}</h3>
                <p className="text-gray-700">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Grade Curricular */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">Grade Curricular</h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            Conteúdo completo e atualizado para sua preparação
          </p>
          <div className="space-y-6 max-w-3xl mx-auto">
            {course.curriculum.map((module, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 font-bold">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{module.title}</h3>
                </div>
                <ul className="space-y-3 pl-4">
                  {module.topics.map((topic, topicIndex) => (
                    <li key={topicIndex} className="flex items-center gap-3 text-gray-700">
                      <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                      </svg>
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">O que dizem nossos alunos</h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            Histórias reais de alunos que transformaram suas vidas
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {course.testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-blue-100/50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-blue-500 rounded-full blur-sm opacity-20"/>
                    <Image
                      src={testimonial.photo}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      className="rounded-full relative border-2 border-white"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-blue-600">{testimonial.role}</p>
                  </div>
                </div>
                <div className="relative">
                  <p className="text-gray-700 italic">
                    "{testimonial.text}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"/>
        <div className="container mx-auto px-4 text-center relative">
          <h2 className="text-4xl font-bold mb-6">Comece sua jornada hoje mesmo</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Não perca mais tempo. Junte-se aos milhares de alunos que já transformaram suas vidas através dos nossos cursos.
          </p>
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl inline-block">
            <div className="text-4xl font-bold mb-4">
              <span className="text-yellow-400">12x de </span>
              <span>{course.price.installments}</span>
            </div>
            <p className="text-white/90 mb-6">ou {course.price.full} à vista</p>
            <Link 
              href="/matricula"
              className="bg-yellow-500 text-gray-900 px-12 py-4 rounded-xl text-xl font-semibold hover:bg-yellow-400 transition-all inline-flex items-center gap-2 shadow-lg shadow-yellow-500/30"
            >
              Quero me matricular agora
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function getBenefitIcon(index: number) {
  const icons = [
    <svg key="1" className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
    </svg>,
    <svg key="2" className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/>
    </svg>,
    <svg key="3" className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
    </svg>,
    <svg key="4" className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
    </svg>
  ];
  
  return icons[index % icons.length];
} 