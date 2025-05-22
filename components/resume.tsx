const Resume = () => {
  return (
    <div className="bg-white text-black p-8 max-w-4xl mx-auto">
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold">João Victor da Silva Lima</h1>
        <p className="text-lg">Analista de dados</p>
        <p className="mt-2">
          victorls13@hotmail.com | +55 16 992520228
          <br />
          <a href="https://linkedin.com/in/joaovictorlima" className="text-blue-600 hover:underline">
            Linkedin
          </a>{" "}
          |{" "}
          <a href="https://github.com/joaovictorlima" className="text-blue-600 hover:underline">
            GitHub
          </a>{" "}
          |{" "}
          <a href="https://joaovictorlima.com" className="text-blue-600 hover:underline">
            Portfólio
          </a>
        </p>
      </div>

      <section className="mb-6">
        <h2 className="text-xl font-bold border-b border-gray-300 pb-1 mb-3">Resumo</h2>
        <p>
          Analista de Dados com mais de 3 anos de experiência em BI, automações e engenharia de dados. Especialista em
          desenvolver dashboards no Power BI que reduziram indicadores logísticos e financeiros e aumentaram a
          produtividade operacional. Criei pipelines de dados e sistemas de orquestração com Python, SQL, Pandas e
          Apache Airflow, automatizando rotinas que diminuíram retrabalho e tempo de análise.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-bold border-b border-gray-300 pb-1 mb-3">Experiência</h2>

        <div className="mb-4">
          <div className="flex justify-between">
            <h3 className="font-bold">J&T Express Brasil | Analista de Dados Pleno</h3>
            <span>Julho 2024 - Atual</span>
          </div>
          <ul className="list-disc pl-5 mt-2">
            <li>
              Desenvolvi dashboards de desempenho logístico no Power BI, utilizando DAX e ETL para extração e
              transformação de dados, aumentando em até 10% os indicadores do setor.
            </li>
            <li>
              Implementei automações em Python com Selenium e Playwright para coleta de dados em sites e unificação de
              arquivos, reduzindo o trabalho manual em 70%.
            </li>
            <li>
              Construi pipelines de dados para tratamento e padronização de informações provenientes do sistema interno,
              possibilitando a alimentação contínua e estruturada no Power BI.
            </li>
            <li>
              Orquestrei fluxos de dados utilizando Apache Airflow, garantindo a atualização automatizada e monitorável
              de processos analíticos.
            </li>
            <li>
              Modelei dados em camadas (bronze, silver e gold) em ambientes analíticos, promovendo governança,
              rastreabilidade e reuso dos datasets.
            </li>
            <li>
              Realizei análises exploratórias com Python (Pandas e Matplotlib), identificando padrões de falhas
              logísticas e apoiando a área operacional na tomada de decisão.
            </li>
            <li>
              Interagi com áreas de negócio para levantamento de requisitos e construção de indicadores sob demanda,
              acelerando entregas estratégicas para a operação.
            </li>
          </ul>
        </div>

        <div className="mb-4">
          <div className="flex justify-between">
            <h3 className="font-bold">J&T Express Brasil | Analista de Dados Júnior</h3>
            <span>Fevereiro 2023 - Junho 2024</span>
          </div>
          <ul className="list-disc pl-5 mt-2">
            <li>
              Estruturei o processo de extração e ingestão de dados com Python, reduzindo o tempo de atualização dos
              painéis Power BI de 40 para 5 minutos.
            </li>
            <li>Colaborei com a equipe de logística para criar análises que reduziram falhas de entrega em 15%.</li>
            <li>
              Desenvolvi um painel interativo no Power BI para monitoramento do tempo de triagem de pacotes, otimizando
              o processo logístico e identificando gargalos críticos para ações corretivas.
            </li>
          </ul>
        </div>

        <div className="mb-4">
          <div className="flex justify-between">
            <h3 className="font-bold">Alter Benefícios | Analista de controladoria</h3>
            <span>Março 2022 - Fevereiro 2023</span>
          </div>
          <ul className="list-disc pl-5 mt-2">
            <li>
              Elaborei e enviei indicadores financeiros mensais à diretoria, apoiando decisões estratégicas da área
              comercial.
            </li>
            <li>
              Apurei comissionamentos internos e externos, garantindo acurácia nos pagamentos de vendedores e
              corretoras.
            </li>
            <li>
              Desenvolvi dashboards financeiros em Power BI e Excel para análise de performance e acompanhamento de
              resultados.
            </li>
            <li>
              Automatizei o envio em massa de e-mails corporativos e relatórios usando VBA, otimizando processos
              repetitivos.
            </li>
            <li>
              Realizei tratamento de dados com técnicas de ETL, aplicando Power Query e fórmulas avançadas no Excel para
              consolidar bases financeiras.
            </li>
          </ul>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-bold border-b border-gray-300 pb-1 mb-3">Habilidades</h2>
        <ul className="list-none">
          <li>
            <strong>Linguagens de Programação:</strong> Python, SQL e Java
          </li>
          <li>
            <strong>Ferramentas de BI:</strong> Power BI, Tableaun e Excel
          </li>
          <li>
            <strong>ETL e Pipelines:</strong> Power Query, Apache Airflow, ETL com Pandas e Polars
          </li>
          <li>
            <strong>Bancos de Dados:</strong> PostgreSQL, SQL Server, MySQL, MongoDB
          </li>
          <li>
            <strong>Ferramentas:</strong> Jupyter Notebook, GitHub, AWS e VS Code.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold border-b border-gray-300 pb-1 mb-3">Formação Acadêmica</h2>
        <div className="flex justify-between">
          <h3 className="font-bold">Universidade Estácio de Sá</h3>
          <span>2022 - 2024</span>
        </div>
        <p>Análise e desenvolvimento de sistemas</p>
      </section>
    </div>
  )
}

export default Resume
