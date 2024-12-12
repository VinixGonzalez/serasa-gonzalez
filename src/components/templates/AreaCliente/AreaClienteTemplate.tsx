import cpfOk from "@/assets/cpf-ok.png";
import cardNeon from "@/assets/product@2x.png";

import Card from "@/components/atoms/Card";
import FastMenu from "@/pages/AreaCliente/components/organisms/FastMenu";
import { LuFileSearch } from "react-icons/lu";
import { FaClockRotateLeft } from "react-icons/fa6";
import { GrDashboard } from "react-icons/gr";
import { CiUnlock, CiGift } from "react-icons/ci";
import { AiOutlineDashboard } from "react-icons/ai";
import Button from "@/components/atoms/Button";
import News from "@/pages/AreaCliente/components/organisms/News";

export const AreaClienteTemplate = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10 px-2 lg:p-10">
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row">
        <div className="flex flex-col flex-wrap gap-6 w-full lg:max-w-[635px] mx-auto">
          <FastMenu />

          <section className="flex flex-col gap-4 mt-6">
            <p className="text-xl text-center sm:text-left lg:text-2xl font-bold">
              Atualizações dos seus pedidos
            </p>
            <Card
              icon={<FaClockRotateLeft size={18} />}
              title="Assinatura Premium, sua assinatura foi cancelada"
              subtitle="Sua assinatura foi cancelada"
            />
          </section>

          <section className="flex flex-col gap-4">
            <p className="text-xl text-center sm:text-left lg:text-2xl font-bold">
              Entenda seu momento financeiro
            </p>
            <div className="shadow rounded-xl bg-white p-4 flex flex-col gap-2">
              <p className="text-lg font-bold">Serasa Score</p>
              <div className="flex gap-2 items-center">
                <p className="font-bold text-5xl">973</p>
                <p className="px-4 py-2 bg-green-100 rounded-full font-medium text-gray-600">
                  Excelente
                </p>
              </div>
              <hr className="w-full my-2" />
              <div className="flex gap-4 cursor-pointer">
                <div className="text-primary">
                  <GrDashboard size={28} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Conecte suas contas</p>
                  <p>
                    Melhore a análise do seu perfil financeiro com suas contas
                    bancárias, FGTS e de aplicativos de trabalho
                  </p>
                </div>
              </div>
              <hr className="w-full my-2" />
              <div className="flex gap-4 cursor-pointer">
                <div className="text-primary">
                  <CiUnlock size={28} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">
                    Serasa Score desbloqueado
                  </p>
                  <p>Empresas podem ver seu score</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="shadow rounded-xl bg-white p-4 flex flex-col gap-2">
              <p className="text-lg font-bold">Seu nome está limpo</p>
              <div className="flex gap-2 items-center">
                <img src={cpfOk} alt="cpf ok" />
                <div>
                  <p className="text-gray-500">
                    Nenhuma dívida em seu CPF na Serasa.
                  </p>
                </div>
              </div>
              <p className="text-primary font-bold mt-2 cursor-pointer">
                Ver meu CPF
              </p>
            </div>
          </section>

          <section>
            <div className="shadow rounded-xl bg-white p-4 flex flex-col gap-2">
              <p className="text-lg font-bold">Monitoramento de dados</p>
              <p className="text-gray-500">
                Fique no controle da sua saúde financeira com o Serasa Premium
              </p>

              <hr className="w-full" />

              <div className="flex gap-4 cursor-pointer">
                <div className="text-primary">
                  <LuFileSearch size={28} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Conecte suas contas</p>
                  <p>Saiba quem te consultou</p>
                </div>
              </div>
              <hr className="w-full" />

              <div className="flex gap-4 cursor-pointer">
                <div className="text-primary">
                  <AiOutlineDashboard size={28} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">
                    Monitore seu Serasa Score
                  </p>
                  <p>Saiba quando sua pontuação variar</p>
                </div>
              </div>
            </div>
          </section>

          <section className="flex flex-col gap-4 mt-6">
            <p className="text-xl text-center sm:text-left lg:text-2xl font-bold">
              Confira o que você pode pedir
            </p>
            <div className="bg-white pt-2 rounded-xl p-0.5">
              <div className="p-4 flex flex-col items-center justify-center">
                <p className="text-lg uppercase text-gray-400 font-bold text-center">
                  Neon Visa Internacional Gold
                </p>
                <img src={cardNeon} alt="card neon" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <p className="text-lg text-gray-500">
                  Limite de{" "}
                  <span className="text-3xl font-bold text-gray-700">
                    R$ 3.000
                  </span>
                </p>
                <p className="px-4 py-2 my-2 bg-green-100 rounded-full text-green-700 font-bold">
                  Zero anuidade
                </p>
                <div className="flex w-full gap-2 p-4">
                  <Button
                    className="hover:bg-pink-100 w-full text-primary font-bold h-12 rounded-lg"
                    btnText="Ver detalhes"
                  />
                  <Button
                    className="bg-primary w-full text-white font-bold h-12 rounded-lg"
                    btnText="Pedir"
                  />
                </div>
              </div>
              <div className="bg-green-100 rounded-xl p-2 flex items-center justify-center gap-2">
                <CiGift size={24} className="text-green-700" />
                <p className="text-gray-500">
                  <span className="font-medium text-gray-600">
                    5 benefícios
                  </span>{" "}
                  para você
                </p>
              </div>
            </div>
          </section>

          <section className="lg:hidden">
            <News
              newsList={[
                { description: "Pod, Sê com Luciana Gimenez", img: <>😜</> },
                { description: "O Feirão foi prorrogado!", img: <>😜</> },
                { description: "Peça seu cartão Santander", img: <>😜</> },
                {
                  description: "Monitore seu Score em tempo real",
                  img: <>😜</>,
                },
              ]}
            />
          </section>
        </div>

        <aside className="hidden flex-1 lg:flex flex-col gap-4">
          <p className="text-xl font-bold">Novidades</p>
          <News
            newsList={[
              { description: "Pod, Sê com Luciana Gimenez", img: <>😜</> },
              { description: "O Feirão foi prorrogado!", img: <>😜</> },
              { description: "Peça seu cartão Santander", img: <>😜</> },
              { description: "Monitore seu Score em tempo real", img: <>😜</> },
            ]}
          />
        </aside>
      </div>
    </div>
  );
};

export default AreaClienteTemplate;
