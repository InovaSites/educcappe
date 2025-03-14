import Image from "next/image";
import Link from "next/link";

export default function MatriculePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Header da página */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 mt-5">
              Comece sua jornada de sucesso
            </h1>
            <p className="text-xl text-gray-600">
              Junte-se a milhares de alunos que já transformaram suas vidas através da educação de qualidade
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Formulário */}
            <div className="lg:col-span-2 bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
              <form className="grid md:grid-cols-2 gap-6">
                {/* Dados Pessoais */}
                <div className="md:col-span-2 flex items-center gap-4 pb-2 border-b border-gray-100">
                  <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">Dados Pessoais</h2>
                    <p className="text-gray-500 text-sm">Preencha seus dados para começar</p>
                  </div>
                </div>

                {/* Campos de dados pessoais */}
                <div className="space-y-4">
                  <div>
                    <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-1">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      id="nome"
                      name="nome"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all placeholder-gray-400 text-gray-900 bg-gray-50 hover:bg-white"
                      placeholder="Digite seu nome completo"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all placeholder-gray-400 text-gray-900 bg-gray-50 hover:bg-white"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label htmlFor="cpf" className="block text-sm font-medium text-gray-700 mb-1">
                      CPF *
                    </label>
                    <input
                      type="text"
                      id="cpf"
                      name="cpf"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all placeholder-gray-400 text-gray-900 bg-gray-50 hover:bg-white"
                      placeholder="000.000.000-00"
                    />
                  </div>

                  <div>
                    <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 mb-1">
                      Telefone *
                    </label>
                    <input
                      type="tel"
                      id="telefone"
                      name="telefone"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all placeholder-gray-400 text-gray-900 bg-gray-50 hover:bg-white"
                      placeholder="(00) 00000-0000"
                    />
                  </div>
                </div>

                {/* Curso */}
                <div className="md:col-span-2 flex items-center gap-4 pb-2 border-b border-gray-100 mt-6">
                  <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">Escolha seu Curso</h2>
                    <p className="text-gray-500 text-sm">Selecione o curso desejado</p>
                  </div>
                </div>

                <div className="md:col-span-2">
                  <select
                    id="curso"
                    name="curso"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-gray-900 bg-gray-50 hover:bg-white"
                  >
                    <option value="">Selecione um curso</option>
                    <option value="preparatorio-pm">Preparatório PM</option>
                    <option value="preparatorio-vestibular">Preparatório Vestibular</option>
                    <option value="preparatorio-concursos">Preparatório Concursos</option>
                  </select>
                </div>

                {/* Termos e Botão */}
                <div className="md:col-span-2 space-y-6 mt-6">
                  <div className="flex items-start">
                    <input
                      id="termos"
                      name="termos"
                      type="checkbox"
                      required
                      className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded mt-1"
                    />
                    <label htmlFor="termos" className="ml-3 text-sm text-gray-600">
                      Li e aceito os{" "}
                      <Link href="/termos" className="text-blue-600 hover:text-blue-700 font-medium">
                        termos e condições
                      </Link>{" "}
                      e a{" "}
                      <Link href="/privacidade" className="text-blue-600 hover:text-blue-700 font-medium">
                        política de privacidade
                      </Link>
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-blue-700 transition-all transform hover:scale-[1.02] shadow-lg shadow-blue-500/30 flex items-center justify-center gap-2"
                  >
                    Finalizar Matrícula
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                    </svg>
                  </button>
                </div>
              </form>
            </div>

            {/* Card Lateral */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-8 rounded-2xl text-white shadow-xl">
              <h3 className="text-2xl font-bold mb-6">Benefícios do Curso</h3>
              <ul className="space-y-4">
                {[
                  "Material didático completo",
                  "Professores especialistas",
                  "Suporte personalizado",
                  "Plataforma exclusiva",
                  "Certificado reconhecido",
                  "Garantia de satisfação"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-blue-500">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-2 bg-blue-500 rounded-lg">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold">Pagamento Seguro</h4>
                    <p className="text-sm text-blue-200">Ambiente 100% seguro</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-2 bg-blue-500 rounded-lg">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold">Garantia de 7 dias</h4>
                    <p className="text-sm text-blue-200">Satisfação garantida</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 