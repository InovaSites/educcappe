import Image from "next/image";
import Link from "next/link";
import { COURSES_DETAILS } from "@/data/courses";

export default function CoursesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-16 text-gray-800 mt-12">
            Nossos Cursos
          </h1>
          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(COURSES_DETAILS).map(([slug, course]) => (
              <div 
                key={slug} 
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className="relative h-48">
                  <Image
                    src={course.imageUrl}
                    alt={course.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-3 text-gray-800">{course.title}</h2>
                  <p className="text-gray-600 mb-6">{course.description}</p>
                  <Link 
                    href={`/cursos/${slug}`}
                    className="bg-blue-600 text-white px-6 py-3 rounded-xl text-lg font-semibold hover:bg-blue-700 transition-all inline-flex items-center gap-2"
                  >
                    Ver detalhes
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
} 