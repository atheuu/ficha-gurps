import Image from "next/image";

export default function Ficha() {
  return (
    <div className="flex items-center justify-center m-4">
      <div className="bg-white w-[210mm] aspect-[210/297] py-14 px-8">
        {/* Container Principal */}
        <div className="flex justify-between">
          {/* Coluna da Logo */}
          <div className="flex items-center">
            <Image
              src="/gurps-logo.png"
              alt="Logo do GURPS"
              width={180}
              height={100}
            />
          </div>

          {/* Coluna dos Campos */}
          <div className="flex flex-col gap-1">
            {/* Primeira Linha */}
            <div className="flex gap-1">
              {/* Campo Nome */}
              <div className="flex h-5 gap-1">
                <label htmlFor="nome" className="text-xs text-black mt-1">
                  Nome
                </label>
                <input
                  type="text"
                  id="nome"
                  className="w-44 border-b border-black text-xs text-black outline-none bg-none"
                />
              </div>

              {/* Campo Jogador */}
              <div className="flex h-5 gap-1">
                <label htmlFor="jogador" className="text-xs text-black mt-1">
                  Jogador
                </label>
                <input
                  type="text"
                  id="jogador"
                  className="w-32 border-b border-black text-xs text-black outline-none bg-none"
                />
              </div>

              {/* Campo Total de Pontos */}
              <div className="flex h-5 gap-1">
                <label htmlFor="total-pontos" className="text-xs text-black mt-1">
                  Total de Pontos
                </label>
                <input
                  type="text"
                  id="total-pontos"
                  className="w-10 border-b border-black text-xs text-black outline-none bg-none text-center"
                />
              </div>
            </div>

            {/* Segunda Linha */}
            <div className="flex gap-1">
              {/* Campo Altura */}
              <div className="flex h-5 gap-1">
                <label htmlFor="altura" className="text-xs text-black mt-1">
                  Altura
                </label>
                <input
                  type="text"
                  id="altura"
                  className="w-10 border-b border-black text-xs text-black outline-none bg-none text-center"
                />
              </div>

              {/* Campo Peso */}
              <div className="flex gap-1 h-5">
                <label htmlFor="peso" className="text-xs text-black mt-1">
                  Peso
                </label>
                <input
                  type="text"
                  id="peso"
                  className="w-10 border-b border-black text-xs text-black outline-none bg-none text-center"
                />
              </div>

              {/* Campo Mod. de Tamanho */}
              <div className="flex gap-1 h-5">
                <label htmlFor="mod-tamanho" className="text-xs text-black mt-1">
                  Mod. de Tamanho
                </label>
                <input
                  type="text"
                  id="mod-tamanho"
                  className="w-8 border-b border-black text-xs text-black outline-none bg-none text-center"
                />
              </div>

              {/* Campo Idade */}
              <div className="flex gap-1 h-5">
                <label htmlFor="idade" className="text-xs text-black mt-1">
                  Idade
                </label>
                <input
                  type="text"
                  id="idade"
                  className="w-10 border-b border-black text-xs text-black outline-none bg-none text-center"
                />
              </div>

              {/* Campo Pontos p/ Gastar */}
              <div className="flex gap-1 h-5">
                <label htmlFor="pontos-gastar" className="text-xs text-black mt-1">
                  Pontos p/ Gastar
                </label>
                <input
                  type="text"
                  id="pontos-gastar"
                  className="w-10 border-b border-black text-xs text-black outline-none bg-none text-center"
                />
              </div>
            </div>

            {/* Terceira Linha */}
            <div className="flex gap-1">
              {/* Campo Aparência */}
              <div className="flex gap-1 h-5">
                <label htmlFor="aparencia" className="text-xs text-black mt-1">
                  Aparência
                </label>
                <input
                  type="text"
                  id="aparencia"
                  className="w-[481px] border-b border-black text-xs text-black outline-none bg-none"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
