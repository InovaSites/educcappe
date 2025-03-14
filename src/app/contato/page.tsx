import Image from "next/image";

export default function ContatoPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center mb-16 pt-12">
            <h1 className="text-4xl font-bold text-center text-gray-900">Entre em Contato</h1>
            <div className="w-20 h-1 bg-blue-600 mt-4 rounded-full"/>
            <p className="text-gray-600 text-center mt-6 max-w-2xl">
              Estamos aqui para ajudar. Preencha o formulário abaixo ou utilize um de nossos canais de atendimento.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Formulário */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <form className="space-y-6">
                <div>
                  <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-1">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all placeholder-gray-400 text-gray-900"
                    placeholder="Digite seu nome completo"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all placeholder-gray-400 text-gray-900"
                    placeholder="exemplo@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="assunto" className="block text-sm font-medium text-gray-700 mb-1">
                    Assunto
                  </label>
                  <select
                    id="assunto"
                    name="assunto"
                    className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-gray-900"
                  >
                    <option value="" className="text-gray-400">Selecione um assunto</option>
                    <option value="duvida">Dúvidas sobre cursos</option>
                    <option value="matricula">Informações de matrícula</option>
                    <option value="suporte">Suporte técnico</option>
                    <option value="outro">Outro assunto</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700 mb-1">
                    Mensagem
                  </label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    rows={4}
                    className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all placeholder-gray-400 text-gray-900"
                    placeholder="Escreva sua mensagem aqui..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors"
                >
                  Enviar mensagem
                </button>
              </form>
            </div>

            {/* Informações de Contato */}
            <div className="space-y-8">
              <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Outras formas de contato</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">E-mail</h3>
                      <p className="text-gray-600">contato@educcappe.com.br</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Telefone</h3>
                      <p className="text-gray-600">(11) 99999-9999</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Endereço</h3>
                      <p className="text-gray-600">
                        Av. Paulista, 1000 - Bela Vista<br />
                        São Paulo - SP, 01310-100
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-8 rounded-2xl text-white">
                <h2 className="text-2xl font-bold mb-4">Horário de Atendimento</h2>
                <p className="opacity-90">
                  Segunda a Sexta: 8h às 18h<br />
                  Sábado: 8h às 12h
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 