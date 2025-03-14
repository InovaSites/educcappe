import Link from 'next/link';
import Image from 'next/image';

interface CourseCardProps {
  title: string;
  description: string;
  imageUrl?: string;
  slug: string;
}

export default function CourseCard({ title, description, imageUrl, slug }: CourseCardProps) {
  return (
    <div className="group bg-white rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 border border-gray-100">
      <div className="h-48 bg-gray-100 rounded-xl mb-6 overflow-hidden relative">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-100" />
        )}
      </div>
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-600 line-clamp-2">
          {description}
        </p>
        <Link 
          href={`/cursos/${slug}`}
          className="inline-flex items-center gap-2 text-blue-600 font-semibold group-hover:text-blue-700"
        >
          Saiba mais
          <svg 
            className="w-4 h-4 group-hover:translate-x-1 transition-transform" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
          </svg>
        </Link>
      </div>
    </div>
  );
} 