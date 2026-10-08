// Banco de Dados Estruturado de Serviços & Metadados SEO - Agência Naut
// Padrão rigoroso: Title = 55 caracteres | Description = 132 caracteres

export const COMPANY_INFO = {
  name: "Agência Naut - Marketing Digital & Criação de Sites",
  shortName: "Agência Naut",
  domain: "https://agencianaut.com.br",
  email: "contato@agencianaut.com.br",
  telephone: "+55-11-99745-8464",
  whatsappUrl: "https://wa.me/5511997458464",
  address: {
    street: "Rua do bosque, 319",
    neighborhood: "Jd. Bela Vista",
    city: "São Paulo",
    region: "SP",
    postalCode: "01136-000",
    country: "BR"
  },
  geo: {
    latitude: -23.5288,
    longitude: -46.6565
  },
  openingHours: "Mo-Fr 09:00-18:00",
  priceRange: "$$$",
  sameAs: [
    "https://www.instagram.com/agencianaut",
    "https://www.linkedin.com/company/agencianaut"
  ]
};

export const SERVICES_PILLARS = [
  {
    id: "criacao-de-sites",
    title: "Criação de Sites & Desenvolvimento Web",
    desc: "Sites ultrarrápidos em Next.js, arquitetura moderna e experiência voltada para conversão de leads e vendas.",
    icon: "💻"
  },
  {
    id: "desenvolvimento-de-seo",
    title: "Desenvolvimento de SEO & Otimização",
    desc: "Estratégia completa de posicionamento orgânico no Google para dominar a primeira página e gerar tráfego qualificado.",
    icon: "🔍"
  },
  {
    id: "gestao-online",
    title: "Gestão Online & Performance para Empresas",
    desc: "Tráfego pago inteligente (Google e Meta Ads), autoridade em redes sociais e automação de vendas integrada a CRM.",
    icon: "⚡"
  }
];

export const servicesList = [
  // ==========================================
  // PILAR 1: CRIAÇÃO DE SITES & DESENVOLVIMENTO WEB
  // ==========================================
  {
    id: "criacao-de-sites-profissionais",
    slug: "criacao-de-sites-profissionais",
    pillarId: "criacao-de-sites",
    pillarName: "Criação de Sites",
    keyword: "criação de sites profissionais para empresas",
    // 55 chars
    title: "Criação de Sites Profissionais e Velozes | Agência Naut",
    // 132 chars
    description: "Criação de sites profissionais e modernos para empresas com Next.js. Alcance o topo do Google e gere mais vendas com a Agência Naut.",
    badge: "Alta Performance Next.js",
    h1: "Criação de Sites Profissionais para Empresas com Alta Conversão",
    subtitle: "Desenvolvemos sites institucionais modernos, ultrarrápidos e estruturados para transformar visitantes em reuniões comerciais.",
    highlights: [
      { number: "95+", label: "Score Google PageSpeed" },
      { number: "< 1.2s", label: "Tempo de Carregamento" },
      { number: "100%", label: "Responsivo & Mobile First" },
      { number: "LGPD", label: "Conformidade e Segurança" }
    ],
    targetAudience: [
      "Empresas B2B que precisam transmitir autoridade imediata a tomadores de decisão.",
      "Negócios com sites lentos ou desatualizados no WordPress que perdem clientes para concorrentes.",
      "Empresas que investem em tráfego pago e necessitam de uma estrutura que converta cliques em orçamentos.",
      "Marcas em expansão que exigem código limpo, escalabilidade e facilidade de manutenção."
    ],
    scope: [
      {
        title: "Arquitetura Next.js & React",
        desc: "Desenvolvimento em framework de ponta mundial, garantindo carregamento instantâneo e nota máxima em Core Web Vitals."
      },
      {
        title: "UX/UI Design Sob Medida",
        desc: "Layout exclusivo criado no Figma por designers especialistas, sem templates genéricos ou temas engessados."
      },
      {
        title: "Estrutura Nativa de SEO Técnico",
        desc: "Hierarquia semântica de headings (H1-H4), meta tags dinâmicas, OpenGraph, sitemap.xml e schemas JSON-LD já implementados."
      },
      {
        title: "Integração de Contato & WhatsApp",
        desc: "Formulários inteligentes com validação instantânea conectados ao seu e-mail comercial, CRM e WhatsApp da equipe."
      },
      {
        title: "Infraestrutura de Rastreamento (GA4 & GTM)",
        desc: "Configuração completa do Google Analytics 4 e Google Tag Manager com mensuração de cliques em botões e conversões."
      },
      {
        title: "Segurança & Conformidade LGPD",
        desc: "Certificado SSL ativo, políticas de privacidade, banners de consentimento de cookies e proteção contra vulnerabilidades."
      }
    ],
    process: [
      {
        step: "01",
        title: "Briefing Estratégico & Imersão",
        desc: "Analisamos seu mercado, perfil do cliente ideal, concorrentes diretos e objetivos de receita da empresa."
      },
      {
        step: "02",
        title: "Prototipagem UX/UI no Figma",
        desc: "Criamos a experiência visual e a jornada de conversão para sua aprovação antes de qualquer linha de código."
      },
      {
        step: "03",
        title: "Desenvolvimento & Testes Rigorosos",
        desc: "Programamos em Next.js com testes de velocidade, acessibilidade, compatibilidade mobile e auditoria SEO."
      },
      {
        step: "04",
        title: "Publicação, Indexação e Acompanhamento",
        desc: "Deploy em CDN global de alta performance, envio ao Google Search Console e treinamento da sua equipe."
      }
    ],
    comparison: [
      { criterion: "Tecnologia", naut: "Next.js 16 + React (Código Limpo)", others: "WordPress com dezenas de plugins pesados" },
      { criterion: "Velocidade de Carregamento", naut: "Instantâneo (< 1.5s em 4G)", others: "Lento (> 4.5s) causando fuga de visitantes" },
      { criterion: "SEO On-Page", naut: "Schemas nativos, SSG e semântica pura", others: "Configuração básica em plugins com conflitos" },
      { criterion: "Design", naut: "100% exclusivo alinhado ao seu público", others: "Templates pré-fabricados e clonados" }
    ],
    faqs: [
      {
        q: "Quanto tempo leva para criar um site profissional na Naut?",
        a: "O prazo médio varia entre 15 e 30 dias úteis, dependendo da complexidade do projeto e da agilidade no alinhamento de conteúdos e aprovação de wireframes."
      },
      {
        q: "O site já vem pronto para aparecer na primeira página do Google?",
        a: "Sim. Toda a base de SEO técnico (código semântico, velocidade, schemas e sitemaps) é entregue 100% otimizada para que o Google indexe suas páginas com máxima relevância."
      },
      {
        q: "Por que escolher Next.js em vez do WordPress tradicional?",
        a: "Next.js oferece segurança absoluta contra invasões, velocidade incomparável (o que melhora o ranking no Google e barateia o clique no Google Ads) e durabilidade técnica sem quebras frequentes."
      },
      {
        q: "Como receberei as mensagens e pedidos de orçamento do site?",
        a: "Os leads preenchidos no formulário são enviados instantaneamente para o e-mail comercial da sua equipe e também podem acionar uma conversa direta no WhatsApp ou integração com seu CRM."
      },
      {
        q: "Terei suporte técnico após a entrega do site?",
        a: "Com certeza. Fornecemos garantia pós-lançamento, suporte operacional contínuo e planos de evolução contínua para manutenção e otimização de conversão."
      }
    ],
    relatedSlugs: [
      "criacao-de-landing-pages-alta-conversao",
      "consultoria-seo-estrategico",
      "otimizacao-de-velocidade-core-web-vitals"
    ]
  },

  {
    id: "criacao-de-landing-pages-alta-conversao",
    slug: "criacao-de-landing-pages-alta-conversao",
    pillarId: "criacao-de-sites",
    pillarName: "Criação de Sites",
    keyword: "criação de landing pages de alta conversão",
    // 55 chars
    title: "Landing Pages de Alta Conversão p/ Venda | Agência Naut",
    // 132 chars
    description: "Criação de landing pages de alta conversão para o tráfego pago. Otimize seu custo por lead e aumente suas vendas com a Agência Naut.",
    badge: "Foco em Tráfego Pago & ROI",
    h1: "Criação de Landing Pages de Alta Conversão para Campanhas",
    subtitle: "Páginas de vendas e captação de leads cientificamente projetadas para reduzir o custo por clique e multiplicar seus contatos comerciais.",
    highlights: [
      { number: "3x", label: "Média de Conversão vs Sites Comuns" },
      { number: "A/B", label: "Preparada para Testes de Copy" },
      { number: "Direct", label: "Gatilhos Mentais & CTA Claro" },
      { number: "Zero", label: "Distrações fora do Objetivo" }
    ],
    targetAudience: [
      "Empresas que anunciam no Google Ads ou Meta Ads e sofrem com alta taxa de rejeição.",
      "Lançamentos de produtos, serviços de alto valor ou infoprodutos que necessitam de copy persuasiva.",
      "Negócios de serviços locais que buscam chamadas diretas no WhatsApp de clientes prontos para fechar.",
      "Times comerciais que precisam de leads pré-qualificados por meio de formulários objetivos."
    ],
    scope: [
      {
        title: "Copywriting Persuasivo Focado em Vendas",
        desc: "Redação publicitária estratégica aplicando gatilhos de urgência, autoridade, prova social e quebra de objeções."
      },
      {
        title: "Design Científico de Conversão (CRO)",
        desc: "Posicionamento visual planejado para conduzir o olhar do leitor diretamente aos pontos de conversão."
      },
      {
        title: "Carregamento Relâmpago para Mídia Paga",
        desc: "Desenvolvida com código enxuto para que o usuário não abandone o clique antes mesmo de a página abrir."
      },
      {
        title: "Integração Multicanal de Conversão",
        desc: "Botões de WhatsApp com mensagens pré-formatadas, formulários dinâmicos e rastreamento de eventos de Pixel."
      },
      {
        title: "Tags de Rastreamento & Conversão Avançadas",
        desc: "Pixel do Facebook, Tag de Conversão do Google Ads e API de Conversões do Meta configurados sem perda de dados."
      },
      {
        title: "Adaptação Mobile Cirúrgica",
        desc: "Mais de 80% do tráfego pago navega pelo smartphone: otimizamos botões de polegar e formulários compactos."
      }
    ],
    process: [
      {
        step: "01",
        title: "Estudo da Oferta & Análise de Dores",
        desc: "Mapeamos a proposta de valor irresistível do seu serviço e as principais dúvidas do comprador."
      },
      {
        step: "02",
        title: "Estruturação da Copy & Roteiro",
        desc: "Escrevemos o texto persuasivo de cada bloco: promessa, problemas, solução, depoimentos e chamada para ação."
      },
      {
        step: "03",
        title: "Design de Alto Impacto & Desenvolvimento",
        desc: "Desenvolvemos a página com visual sofisticado, micro-animações elegantes e alta legibilidade."
      },
      {
        step: "04",
        title: "Testes de Pixel & Lançamento de Tráfego",
        desc: "Simulamos conversões em ambiente real para validar disparos de leads antes do início dos anúncios."
      }
    ],
    comparison: [
      { criterion: "Foco Principal", naut: "100% voltada ao clique no CTA e agendamento", others: "Cheia de links externos e menus que dispersam o lead" },
      { criterion: "Velocidade Mobile", naut: "Abertura instantânea (< 1s)", others: "Carregamento arrastado com alta perda de investimento" },
      { criterion: "Redação (Copy)", naut: "Redatores focados em resposta direta e psicologia", others: "Textos institucionais frios sem apelo comercial" },
      { criterion: "Métricas", naut: "Mensuração de cada etapa do funil", others: "Apenas visualizações de página genéricas" }
    ],
    faqs: [
      {
        q: "Qual a diferença entre um site institucional e uma landing page?",
        a: "O site institucional apresenta toda a empresa e possui diversos caminhos de navegação. A Landing Page tem um único objetivo específico: fazer o visitante solicitar um orçamento ou comprar."
      },
      {
        q: "Posso usar a landing page em campanhas de Google Ads e Instagram?",
        a: "Sim! Ela é desenvolvida exatamente para receber o tráfego das duas plataformas, com URLs parametrizadas para rastrear a origem de cada contato."
      },
      {
        q: "Vocês escrevem o texto ou eu preciso fornecer a copy?",
        a: "Nossa equipe de copywriting cria toda a narrativa persuasiva, alinhando com você os detalhes técnicos da sua solução."
      },
      {
        q: "Como o lead chega até a minha equipe?",
        a: "Via notificação instantânea por e-mail, direcionamento automático para conversa no WhatsApp ou inserção direta no seu CRM de vendas."
      },
      {
        q: "A landing page melhora meu Índice de Qualidade no Google Ads?",
        a: "Com certeza. Por ser rápida, altamente relevante e responsiva, o Google atribui índices de qualidade elevados, barateando o Custo por Clique (CPC)."
      }
    ],
    relatedSlugs: [
      "gestao-de-trafego-pago-performance",
      "gestao-de-google-ads-para-empresas",
      "criacao-de-sites-profissionais"
    ]
  },

  {
    id: "criacao-de-lojas-virtuais-ecommerce",
    slug: "criacao-de-lojas-virtuais-ecommerce",
    pillarId: "criacao-de-sites",
    pillarName: "Criação de Sites",
    keyword: "desenvolvimento de lojas virtuais e e-commerce",
    // 55 chars
    title: "Lojas Virtuais em E-commerce para Vendas | Agência Naut",
    // 132 chars
    description: "Criação de lojas virtuais e e-commerces profissionais com checkout otimizado. Venda seus produtos online com escala na Agência Naut.",
    badge: "Vendas Online 24/7",
    h1: "Desenvolvimento de Lojas Virtuais e E-commerce de Alta Performance",
    subtitle: "Estruture uma operação de vendas pela internet robusta, com navegação fluida, checkout transparente e máxima segurança.",
    highlights: [
      { number: "99.9%", label: "Uptime & Estabilidade" },
      { number: "Checkout", label: "Transparente em 1 Clique" },
      { number: "Multi", label: "Meios de Pagamento e Frete" },
      { number: "SEO", label: "Páginas de Produtos Otimizadas" }
    ],
    targetAudience: [
      "Varejistas e distribuidores que desejam expandir suas vendas do físico para o digital.",
      "E-commerces que sofrem com carrinhos abandonados devido a lentidão e checkout confuso.",
      "Marcas D2C (Direct to Consumer) que precisam de identidade visual marcante e experiência de compra premium.",
      "Operações que demandam integração com ERPs, emissores de nota fiscal e gateways de frete."
    ],
    scope: [
      {
        title: "Arquitetura Escalável de Catálogo",
        desc: "Organização lógica de categorias, filtros avançados de busca, variações de atributos (cor, tamanho) e estoque em tempo real."
      },
      {
        title: "Checkout Otimizado contra Abandono",
        desc: "Fluxo de pagamento enxuto, sem etapas desnecessárias, com suporte a PIX instantâneo, cartão parcelado e boleto."
      },
      {
        title: "Integração com Fretes e Transportadoras",
        desc: "Cálculo automático de CEP integrado a Correios, Melhor Envio, Jadlog e modalidades expressas locais."
      },
      {
        title: "SEO Específico para E-commerce",
        desc: "Schemas JSON-LD do tipo Product e Offer, URLs amigáveis, avaliações de clientes e sitemap para produtos."
      },
      {
        title: "Recuperação de Vendas & Automação",
        desc: "Configuração de fluxos para envio automático de e-mail e WhatsApp para clientes que abandonaram o carrinho."
      },
      {
        title: "Painel Administrativo Intuitivo",
        desc: "Facilidade total para seu time gerenciar pedidos, atualizar preços, emitir relatórios de faturamento e cadastrar promoções."
      }
    ],
    process: [
      {
        step: "01",
        title: "Planejamento Operacional & Meios de Pagamento",
        desc: "Definimos taxas de intermediadores, gateways bancários e estrutura logística de envio."
      },
      {
        step: "02",
        title: "Design de Interface Focado no Produto",
        desc: "Criamos vitrines dinâmicas, fotos ampliáveis, cards de benefícios e layout mobile-first."
      },
      {
        step: "03",
        title: "Integração Técnica & Testes de Compra",
        desc: "Simulamos o ciclo completo de compras: do clique inicial ao processamento no banco e confirmação de estoque."
      },
      {
        step: "04",
        title: "Go-Live & Treinamento Comercial",
        desc: "Colocamos a loja no ar com monitoramento de tráfego e instruímos sua equipe no gerenciamento de vendas."
      }
    ],
    comparison: [
      { criterion: "Experiência de Compra", naut: "Fluida, rápida e responsiva sem travamentos", others: "Lenta, gerando desconfiança e perda de clientes" },
      { criterion: "Taxa de Conversão", naut: "Checkout enxuto e PIX com confirmação em segundos", others: "Excesso de cadastros e telas confusas" },
      { criterion: "Personalização", naut: "Identidade única condizente com o valor da marca", others: "Visual genérico compartilhado por milhares de lojas" },
      { criterion: "Segurança", naut: "Certificados SSL modernos e conformidade antifraude", others: "Vulnerabilidade a fraudes e instabilidades" }
    ],
    faqs: [
      {
        q: "Quais formas de pagamento posso oferecer aos meus clientes?",
        a: "Sua loja poderá aceitar PIX com aprovação instantânea, cartão de crédito parcelado com análise de risco antifraude, boleto bancário e carteiras digitais."
      },
      {
        q: "Como funciona o cálculo de frete para o comprador?",
        a: "O frete é calculado em tempo real a partir do CEP do cliente, consultando as tabelas e regras das transportadoras conectadas à loja."
      },
      {
        q: "Consigo cadastrar novos produtos sozinho depois que o projeto for entregue?",
        a: "Sim. O painel administrativo é intuitivo e permite que qualquer membro da sua equipe adicione fotos, edite descrições e controle o estoque."
      },
      {
        q: "A loja virtual funciona perfeitamente no celular?",
        a: "Absolutamente. Projetamos a experiência de compra primeiro para dispositivos móveis, garantindo botões de compra acessíveis e navegação simples."
      },
      {
        q: "É possível integrar a loja com meu sistema ERP ou emissor de notas?",
        a: "Sim, realizamos integrações via API com os principais ERPs do mercado (Bling, Tiny, Omie e outros)."
      }
    ],
    relatedSlugs: [
      "criacao-de-sites-profissionais",
      "otimizacao-de-velocidade-core-web-vitals",
      "gestao-de-trafego-pago-performance"
    ]
  },

  {
    id: "redesign-e-modernizacao-de-sites",
    slug: "redesign-e-modernizacao-de-sites",
    pillarId: "criacao-de-sites",
    pillarName: "Criação de Sites",
    keyword: "redesign e modernização de sites corporativos",
    // 55 chars
    title: "Redesign e Modernização de Sites Velozes | Agência Naut",
    // 132 chars
    description: "Redesign e modernização de sites corporativos antigos. Melhore a experiência do usuário, velocidade e conversões com a Agência Naut.",
    badge: "Renovação Digital Completa",
    h1: "Redesign e Modernização de Sites Corporativos para Alta Performance",
    subtitle: "Transforme um site antigo e ultrapassado em um ativo comercial moderno, rápido e seguro, preservando todo o seu histórico no Google.",
    highlights: [
      { number: "100%", label: "Preservação de SEO & Redirecionamentos" },
      { number: "Visual", label: "UI Premium Alinhada à Marca" },
      { number: "Mobile", label: "Adaptação Total a Smartphones" },
      { number: "3x", label: "Mais Retenção de Visitantes" }
    ],
    targetAudience: [
      "Empresas estabelecidas cuja imagem digital não reflete o tamanho e a autoridade real do negócio.",
      "Sites construídos há anos que não abrem corretamente em celulares modernos.",
      "Marcas que sofreram queda de posições no Google por causa de código antigo e lentidão.",
      "Gestores que sentem vergonha de compartilhar o link do site atual com prospects e clientes."
    ],
    scope: [
      {
        title: "Diagnóstico e Auditoria do Site Atual",
        desc: "Mapeamento minucioso de todas as URLs indexadas, pontos de fricção visual e gargalos de código do site existente."
      },
      {
        title: "Estratégia de Redirecionamento 301 (SEO Safe)",
        desc: "Garantia de que nenhuma autoridade de backlinks ou posicionamento no Google seja perdida durante a migração."
      },
      {
        title: "Nova Linguagem Visual Sofisticada",
        desc: "Redesenho completo das interfaces com estética contemporânea, tipografia de alta legibilidade e paleta de cores harmônica."
      },
      {
        title: "Reconstrução em Tecnologia de Ponta",
        desc: "Substituição de tecnologias obsoletas por Next.js e React, reduzindo o tempo de carregamento em mais de 70%."
      },
      {
        title: "Reestruturação de Conteúdo & Copy",
        desc: "Reorganização das mensagens para comunicar clareza, autoridade e diferenciais competitivos aos novos clientes."
      },
      {
        title: "Testes Aprofundados de Transição",
        desc: "Validação em ambiente de homologação antes de virar a chave, assegurando que formulários e links funcionem 100%."
      }
    ],
    process: [
      {
        step: "01",
        title: "Auditoria de Conteúdo & URLs",
        desc: "Listamos todas as páginas que geram tráfego para planejar a migração sem risco de páginas com erro 404."
      },
      {
        step: "02",
        title: "Novo Conceito Visual e Interativo",
        desc: "Apresentamos o design moderno no Figma para validação antes de iniciar a programação."
      },
      {
        step: "03",
        title: "Desenvolvimento & Migração Segura",
        desc: "Programamos o novo layout e configuramos os redirecionamentos 301 sem indisponibilidade de serviço."
      },
      {
        step: "04",
        title: "Virada de DNS & Monitoramento Google",
        desc: "Publicamos a nova versão e monitoramos o Search Console para confirmar a indexação correta dos novos ativos."
      }
    ],
    comparison: [
      { criterion: "Segurança de SEO", naut: "Mapeamento rigoroso de 301 protegendo o tráfego", others: "Exclusão de páginas gerando erros 404 e perda de tráfego" },
      { criterion: "Percepção da Marca", naut: "Visual de empresa inovadora e líder de mercado", others: "Aparência amadora de 2012 que afasta compradores" },
      { criterion: "Velocidade", naut: "Ganho instantâneo de velocidade (PageSpeed 90+)", others: "Mesma lentidão com apenas uma camada nova de tinta" },
      { criterion: "Taxa de Conversão", naut: "CTAs posicionados onde o usuário realmente olha", others: "Formulários escondidos no rodapé" }
    ],
    faqs: [
      {
        q: "Meu site vai perder as posições que já conquistou no Google?",
        a: "Não se o processo for feito pela Naut. Aplicamos um protocolo estrito de redirecionamento 301 e preservação de títulos e dados estruturados, garantindo que o Google transfira toda a relevância acumulada."
      },
      {
        q: "O site sairá do ar durante a modernização?",
        a: "Não. O site atual continuará funcionando normalmente enquanto desenvolvemos a nova versão em um servidor seguro de testes. A troca ocorre em minutos."
      },
      {
        q: "Como saber se meu site precisa de um redesign?",
        a: "Se ele demora mais de 3 segundos para abrir no celular, possui layout quebrado em telas menores, visual datado ou não gera contatos comerciais, o redesign é urgente."
      },
      {
        q: "Podemos manter o mesmo domínio e e-mails corporativos?",
        a: "Sim, seu domínio e todas as suas contas de e-mail continuam exatamente os mesmos, sem qualquer interrupção."
      },
      {
        q: "Quanto tempo dura o processo de reformulação?",
        a: "Projetos de redesign levam em média de 20 a 35 dias úteis, incluindo as etapas de auditoria, novo design e homologação."
      }
    ],
    relatedSlugs: [
      "criacao-de-sites-profissionais",
      "otimizacao-de-velocidade-core-web-vitals",
      "auditoria-tecnica-de-seo"
    ]
  },

  {
    id: "desenvolvimento-web-sob-medida",
    slug: "desenvolvimento-web-sob-medida",
    pillarId: "criacao-de-sites",
    pillarName: "Criação de Sites",
    keyword: "desenvolvimento de sites e sistemas web sob medida",
    // 55 chars
    title: "Desenvolvimento de Sistemas Web Modernos | Agência Naut",
    // 132 chars
    description: "Desenvolvimento de sistemas web e sites sob medida em Next.js e React. Tecnologia de alta performance e valor junto da Agência Naut.",
    badge: "Soluções Digitais Customizadas",
    h1: "Desenvolvimento de Sites e Sistemas Web Sob Medida para Empresas",
    subtitle: "Criamos plataformas digitais, portais corporativos e integrações personalizadas com arquitetura escalável e segurança de ponta.",
    highlights: [
      { number: "Custom", label: "Regras de Negócio Personalizadas" },
      { number: "API", label: "Integrações Fluidas com Sistemas" },
      { number: "Scale", label: "Pronto para Alto Volume de Dados" },
      { number: "Cloud", label: "Hospedagem em Nuvem Segura" }
    ],
    targetAudience: [
      "Empresas com processos de negócio únicos que ferramentas prontas não conseguem atender.",
      "Plataformas que exigem área restrita para clientes, parceiros ou membros com controle de permissão.",
      "Negócios que necessitam conectar múltiplos softwares e bancos de dados através de APIs seguras.",
      "Startups e scale-ups que buscam lançar produtos digitais de alta confiabilidade técnica."
    ],
    scope: [
      {
        title: "Modelagem de Requisitos & Arquitetura",
        desc: "Definição precisa do fluxo de dados, diagramas de entidade-relacionamento e especificação de regras de negócio."
      },
      {
        title: "Frontend em Next.js e React",
        desc: "Interface rica, dinâmica e reativa, proporcionando experiência de uso semelhante a softwares nativos modernos."
      },
      {
        title: "APIs e Microsserviços Confiáveis",
        desc: "Desenvolvimento de endpoints seguros, autenticação JWT/OAuth, criptografia de dados e logs de auditoria."
      },
      {
        title: "Painéis de Controle Customizados",
        desc: "Dashboards administrativos com gráficos, filtros analíticos e permissões hierarquizadas por tipo de usuário."
      },
      {
        title: "Integração com Ferramentas Existentes",
        desc: "Conexão com CRMs, gateways de pagamento, plataformas de ERP e serviços em nuvem (AWS, Vercel, Google Cloud)."
      },
      {
        title: "Documentação Técnica & Código Limpo",
        desc: "Código modular, padronizado e documentado, garantindo total liberdade e continuidade no futuro."
      }
    ],
    process: [
      {
        step: "01",
        title: "Levantamento & Escopo Técnico",
        desc: "Mapeamento detalhado das necessidades operacionais e definição das regras de validação do sistema."
      },
      {
        step: "02",
        title: "Prototipagem de Telas & Fluxos",
        desc: "Desenho da experiência do usuário em todas as telas e validação do fluxo operacional com os gestores."
      },
      {
        step: "03",
        title: "Desenvolvimento Ágil em Sprints",
        desc: "Codificação modular com entregas parciais para que você acompanhe o progresso e teste funcionalidades reais."
      },
      {
        step: "04",
        title: "Deploy Contínuo & Suporte Ativo",
        desc: "Lançamento em ambiente de produção com monitoramento de desempenho e acompanhamento de estabilidade."
      }
    ],
    comparison: [
      { criterion: "Adaptação ao Negócio", naut: "100% moldado às regras e rotinas da sua empresa", others: "Sistemas engessados que forçam sua equipe a se adaptar" },
      { criterion: "Propriedade Intelectual", naut: "O código-fonte e o sistema pertencem à sua empresa", others: "Dependência perpétua de plataformas de terceiros" },
      { criterion: "Performance & Escala", naut: "Projetado para suportar crescimento sem travar", others: "Gargalos rápidos quando o volume de acessos aumenta" },
      { criterion: "Segurança de Dados", naut: "Autenticação robusta e proteção contra invasões", others: "Brechas frequentes por plugins e scripts genéricos" }
    ],
    faqs: [
      {
        q: "O que é um desenvolvimento sob medida?",
        a: "É a criação de um software ou portal web desenvolvido do zero exclusivamente para sua empresa, atendendo às necessidades exatas da sua operação sem limitações de templates."
      },
      {
        q: "Minha empresa terá os direitos e a posse do código desenvolvido?",
        a: "Sim. Todo o código produzido pela Naut pertence inteiramente ao seu negócio, sem taxas ocultas de licenciamento."
      },
      {
        q: "Como o sistema é mantido e atualizado?",
        a: "Oferecemos planos contínuos de sustentação, monitoramento e implementação de novas funcionalidades de acordo com a evolução do seu negócio."
      },
      {
        q: "Vocês conseguem integrar o sistema com nosso banco de dados atual?",
        a: "Sim, criamos conectores e APIs para sincronizar dados com seus sistemas legados com segurança e sem perda de histórico."
      },
      {
        q: "Qual a metodologia de acompanhamento do projeto?",
        a: "Trabalhamos com metodologia ágil, com reuniões periódicas de alinhamento e demonstrações práticas a cada etapa concluída."
      }
    ],
    relatedSlugs: [
      "criacao-de-sites-profissionais",
      "redesign-e-modernizacao-de-sites",
      "automacao-de-marketing-e-funis-crm"
    ]
  },

  // ==========================================
  // PILAR 2: DESENVOLVIMENTO DE SEO & OTIMIZAÇÃO
  // ==========================================
  {
    id: "consultoria-seo-estrategico",
    slug: "consultoria-seo-estrategico",
    pillarId: "desenvolvimento-de-seo",
    pillarName: "Desenvolvimento de SEO",
    keyword: "consultoria de seo estratégico para empresas",
    // 55 chars
    title: "Consultoria de SEO Estratégico no Google | Agência Naut",
    // 132 chars
    description: "Consultoria de SEO estratégico para colocar sua marca na primeira página do Google. Aumente seu tráfego orgânico com a Agência Naut.",
    badge: "Liderança Orgânica no Google",
    h1: "Consultoria de SEO Estratégico para Empresas Dominarem o Google",
    subtitle: "Conquiste as primeiras posições nas buscas e construa um canal previsível de atração de leads qualificados sem pagar por cada clique.",
    highlights: [
      { number: "Top 3", label: "Foco em Posições de Alta Intenção" },
      { number: "Zero Custo", label: "Por Clique Gerado no Orgânico" },
      { number: "100%", label: "Técnicas White Hat Aprovadas" },
      { number: "Mensal", label: "Relatórios de ROI e Palavras-Chave" }
    ],
    targetAudience: [
      "Empresas cansadas de depender exclusivamente de anúncios pagos e custos de leilão crescentes.",
      "Negócios B2B com soluções de alto tíquete cujos clientes pesquisam no Google antes de comprar.",
      "Empresas que produzem conteúdo em blogs mas não veem crescimento real no tráfego qualificado.",
      "Gestores que buscam construir autoridade duradoura e barreira competitiva contra concorrentes."
    ],
    scope: [
      {
        title: "Pesquisa Avançada de Palavras-Chave de Intenção",
        desc: "Identificação das palavras que tomadores de decisão digitam no Google quando estão no momento de contratar."
      },
      {
        title: "Planejamento de Topic Clusters & Silos",
        desc: "Estruturação semântica do site para que o Google reconheça sua empresa como a maior autoridade do setor."
      },
      {
        title: "Otimização de SEO On-Page Rigorosa",
        desc: "Revisão de títulos, meta descriptions, hierarquia H1-H3, links internos e densidade semântica de entidades."
      },
      {
        title: "Correções de SEO Técnico Avançado",
        desc: "Resolução de problemas de indexação, páginas canônicas, dados estruturados (Schema) e velocidade de carregamento."
      },
      {
        title: "Estratégia de Link Building & Autoridade",
        desc: "Aquisição de menções e backlinks em portais de notícias e sites relevantes para elevar o Domain Authority."
      },
      {
        title: "Relatórios Executivos de Performance",
        desc: "Dashboards transparentes no Looker Studio mostrando a evolução de palavras posicionadas, cliques e orçamentos gerados."
      }
    ],
    process: [
      {
        step: "01",
        title: "Diagnóstico Inicial & Benchmark Concorrencial",
        desc: "Mapeamos onde seus concorrentes estão posicionados e onde estão as brechas comerciais para sua empresa ultrapassá-los."
      },
      {
        step: "02",
        title: "Plano de Ação Técnico & Editorial",
        desc: "Elaboramos o cronograma detalhado de correções técnicas e produção de conteúdos estratégicos de alto impacto."
      },
      {
        step: "03",
        title: "Implementação & Otimização Contínua",
        desc: "Nossos especialistas aplicam as alterações no código e lapidam cada página para os algoritmos de busca."
      },
      {
        step: "04",
        title: "Monitoramento de Ganhos & Expansão",
        desc: "Acompanhamos as oscilações de ranking semanalmente e expandimos para novos grupos de palavras de cauda longa."
      }
    ],
    comparison: [
      { criterion: "Abordagem de SEO", naut: "Estratégia holística: Código + Conteúdo + Autoridade", others: "Apenas preenchimento de palavras-chave genéricas" },
      { criterion: "Foco dos Resultados", naut: "Leads qualificados e receita gerada para sua empresa", others: "Métricas vazias de visualizações sem conversão" },
      { criterion: "Conformidade com o Google", naut: "Boas práticas 100% White Hat sem risco de punição", others: "Técnicas arriscadas que podem derrubar seu domínio" },
      { criterion: "Transparência", naut: "Reuniões mensais e relatórios em tempo real", others: "E-mails confusos com PDFs incompreensíveis" }
    ],
    faqs: [
      {
        q: "Quanto tempo demora para o SEO trazer resultados práticos?",
        a: "Os primeiros ganhos de indexação e cliques começam a aparecer entre 60 e 90 dias. Resultados consolidados de liderança no nicho geralmente amadurecem entre 4 e 6 meses de trabalho consistente."
      },
      {
        q: "Qual a diferença entre investir em SEO e investir em Google Ads?",
        a: "No Google Ads você paga por cada clique e o tráfego cessa assim que a verba acaba. No SEO você constrói um patrimônio orgânico: o tráfego continua entrando todos os dias sem custo por clique."
      },
      {
        q: "Vocês cuidam da parte técnica do site ou só enviam relatórios?",
        a: "Nossa equipe atua diretamente na implementação técnica, ajustando código, schemas, sitemaps e metadados, sem repassar a carga para você."
      },
      {
        q: "Como medimos o retorno sobre o investimento (ROI) da consultoria?",
        a: "Acompanhamos a quantidade de formulários e ligações originadas de buscas orgânicas, comparando com o valor que você precisaria investir em mídia paga para ter o mesmo volume."
      },
      {
        q: "O SEO funciona para o meu segmento B2B ou nichado?",
        a: "Sim, e costuma ser onde traz mais retorno, pois clientes corporativos fazem pesquisas técnicas e aprofundadas no Google antes de fechar contratos."
      }
    ],
    relatedSlugs: [
      "auditoria-tecnica-de-seo",
      "seo-local-google-meu-negocio",
      "link-building-e-autoridade-de-dominio"
    ]
  },

  {
    id: "seo-local-google-meu-negocio",
    slug: "seo-local-google-meu-negocio",
    pillarId: "desenvolvimento-de-seo",
    pillarName: "Desenvolvimento de SEO",
    keyword: "seo local e otimização do google meu negócio",
    // 55 chars
    title: "SEO Local e Google Meu Negócio Otimizado | Agência Naut",
    // 132 chars
    description: "SEO local e gestão do Google Meu Negócio para empresas dominarem buscas regionais. Conquiste mais clientes locais pela Agência Naut.",
    badge: "Dominância Regional & Mapas",
    h1: "SEO Local e Otimização do Google Meu Negócio para Empresas",
    subtitle: "Apareça nas primeiras posições do Google Maps e nas pesquisas locais quando clientes da sua região procurarem pelo que você faz.",
    highlights: [
      { number: "Top 3", label: "Pacote Local do Google Maps" },
      { number: "+85%", label: "Chamadas e Rotas no Perfil" },
      { number: "NAP", label: "Consistência de Nome e Endereço" },
      { number: "Avaliações", label: "Estratégia de Prova Social" }
    ],
    targetAudience: [
      "Empresas físicas, clínicas, escritórios e prestadores de serviços com atuação regional em São Paulo e capitais.",
      "Negócios que perdem clientes para concorrentes vizinhos que aparecem melhor posicionados no Google Maps.",
      "Empresas que possuem perfil no Google Meu Negócio mas não recebem ligações ou mensagens por ele.",
      "Redes de lojas e franquias que necessitam gerenciar e padronizar múltiplos endereços no mapa."
    ],
    scope: [
      {
        title: "Otimização Completa do Perfil da Empresa",
        desc: "Categorias primárias e secundárias estratégicas, descrição rica com palavras-chave locais e horário de atendimento."
      },
      {
        title: "Schema Markup LocalBusiness Técnico",
        desc: "Implementação de dados estruturados com endereço completo, coordenadas geográficas, telefone e horário de funcionamento."
      },
      {
        title: "Gestão e Padronização NAP (Name, Address, Phone)",
        desc: "Auditoria e correção dos dados da sua empresa em diretórios comerciais para garantir consistência e autoridade local."
      },
      {
        title: "Estratégia de Gestão de Avaliações e Respostas",
        desc: "Criação de processo automatizado para incentivar clientes satisfeitos a deixarem depoimentos positivos de 5 estrelas."
      },
      {
        title: "Criação de Páginas de Destino Regionais",
        desc: "Desenvolvimento de landing pages específicas por bairro ou cidade atendida com conteúdo hiperlocalizado."
      },
      {
        title: "Postagens Periódicas & Otimização de Fotos",
        desc: "Publicação semanal de atualizações, ofertas e fotos georreferenciadas que o algoritmo do Google valoriza."
      }
    ],
    process: [
      {
        step: "01",
        title: "Auditoria do Perfil & Concorrência Local",
        desc: "Analisamos o raio de alcance da sua empresa no mapa e o perfil dos concorrentes nas primeiras posições."
      },
      {
        step: "02",
        title: "Calibração de Categorias & Informações",
        desc: "Preenchimento estratégico de todos os atributos ocultos e categorias de alta intenção de busca."
      },
      {
        step: "03",
        title: "Implementação de Código & Schemas no Site",
        desc: "Conexão perfeita entre o site oficial e o perfil do Google através de Schema.org LocalBusiness."
      },
      {
        step: "04",
        title: "Rotina de Engajamento & Avaliações",
        desc: "Gestão contínua de fotos, respostas humanizadas a feedbacks e monitoramento do volume de rotas solicitadas."
      }
    ],
    comparison: [
      { criterion: "Visibilidade no Mapa", naut: "Presença no concorrido 3-Pack do Google Maps", others: "Invisível fora do raio imediato da calçada" },
      { criterion: "Conexão com o Site", naut: "Schema LocalBusiness completo ligando site e perfil", others: "Site sem qualquer menção estruturada de localização" },
      { criterion: "Gestão de Avaliações", naut: "Roteiro ativo de captação de reviews e respostas", others: "Deixar o perfil abandonado à mercê de reclamações" },
      { criterion: "Conteúdo Local", naut: "Imagens com metadados e posts semanais", others: "Fotos amadoras desatualizadas há anos" }
    ],
    faqs: [
      {
        q: "O que é o 3-Pack do Google Maps?",
        a: "É o bloco com os 3 primeiros negócios locais em destaque que o Google exibe no topo das pesquisas quando alguém busca por serviços em uma região (ex: 'agência em São Paulo')."
      },
      {
        q: "Como o Google decide quem fica no topo da busca local?",
        a: "O algoritmo se baseia em três pilares: Relevância (compatibilidade do serviço buscado), Distância (proximidade geográfica) e Proeminência (reputação, avaliações e autoridade do site)."
      },
      {
        q: "Vocês atendem empresas com múltiplos endereços ou filiais?",
        a: "Sim, estruturamos a estratégia para consolidar a presença de cada filial de forma independente e sem canibalizar as buscas das outras unidades."
      },
      {
        q: "Preciso ter um endereço físico aberto ao público para fazer SEO Local?",
        a: "Não necessariamente. Empresas que atendem na casa ou no escritório do cliente (área de cobertura de serviços) também podem e devem ser otimizadas no Google."
      },
      {
        q: "Em quanto tempo sinto o aumento de ligações pelo perfil?",
        a: "Ajustes de categorias e dados de perfil costumam apresentar reflexos no volume de ligações e pedidos de rota em 3 a 5 semanas."
      }
    ],
    relatedSlugs: [
      "consultoria-seo-estrategico",
      "auditoria-tecnica-de-seo",
      "gestao-de-google-ads-para-empresas"
    ]
  },

  {
    id: "auditoria-tecnica-de-seo",
    slug: "auditoria-tecnica-de-seo",
    pillarId: "desenvolvimento-de-seo",
    pillarName: "Desenvolvimento de SEO",
    keyword: "auditoria técnica de seo e diagnóstico de sites",
    // 55 chars
    title: "Auditoria Técnica de SEO para seus Sites | Agência Naut",
    // 132 chars
    description: "Auditoria técnica de SEO e diagnóstico completo de sites corporativos. Corrija erros de rastreamento e indexação com a Agência Naut.",
    badge: "Diagnóstico Clínico de Busca",
    h1: "Auditoria Técnica de SEO e Diagnóstico Completo de Sites",
    subtitle: "Descubra e elimine os erros invisíveis que estão impedindo o Google de rastrear, indexar e posicionar suas páginas nas buscas.",
    highlights: [
      { number: "+120", label: "Parâmetros Técnicos Analisados" },
      { number: "Crawler", label: "Varredura Completa de Código" },
      { number: "Prático", label: "Plano de Correção Priorizado" },
      { number: "Zero", label: "Erros Críticos de Indexação" }
    ],
    targetAudience: [
      "Sites que perderam tráfego abruptamente após uma atualização de algoritmo do Google.",
      "Empresas que lançaram um site novo mas observaram queda no número de páginas indexadas.",
      "Portais com milhares de URLs que sofrem com canibalização de palavras e links quebrados.",
      "Times de marketing que precisam de um parecer independente para orientar a equipe de desenvolvedores."
    ],
    scope: [
      {
        title: "Rastreamento Profundo com Ferramentas Avançadas",
        desc: "Varredura detalhada simulando o Googlebot para identificar códigos de status 4xx, 5xx, loops e redirecionamentos incorretos."
      },
      {
        title: "Diagnóstico de Indexação & Search Console",
        desc: "Análise profunda de páginas rastreadas mas não indexadas, erros de noindex acidentais e problemas de robots.txt."
      },
      {
        title: "Auditoria de Arquitetura & Canibalização",
        desc: "Mapeamento de páginas concorrendo entre si pelas mesmas palavras-chave e revisão de profundidade de cliques (Click Depth)."
      },
      {
        title: "Avaliação de Core Web Vitals e PageSpeed",
        desc: "Inspeção de métricas de LCP, FID/INP e CLS que afetam diretamente o algoritmo de ranqueamento da experiência da página."
      },
      {
        title: "Validação de Dados Estruturados (Schema.org)",
        desc: "Verificação de sintaxe de schemas JSON-LD para corrigir falhas que impedem a exibição de Rich Snippets."
      },
      {
        title: "Dossiê Executivo com Matriz de Priorização",
        desc: "Entrega de documento didático dividindo as correções entre Críticas (urgentes), Médias e Oportunidades de Crescimento."
      }
    ],
    process: [
      {
        step: "01",
        title: "Coleta de Dados & Varredura do Crawler",
        desc: "Conectamos ferramentas analíticas para inspecionar cada linha de código, imagem e script do seu site."
      },
      {
        step: "02",
        title: "Análise Forense dos Algoritmos",
        desc: "Identificamos se houve impacto por atualizações do Google (Core Updates, Helpful Content, Spam Updates)."
      },
      {
        step: "03",
        title: "Elaboração do Plano de Correções",
        desc: "Traduzimos jargões técnicos em tarefas claras e acionáveis com passo a passo de resolução."
      },
      {
        step: "04",
        title: "Apresentação & Acompanhamento de Validação",
        desc: "Reunião de alinhamento com seus gestores e verificação posterior para confirmar que os erros foram sanados."
      }
    ],
    comparison: [
      { criterion: "Profundidade da Análise", naut: "Auditoria manual e analítica por especialistas sênior", others: "Relatório gerado automaticamente por software gratuito" },
      { criterion: "Orientação Prática", naut: "Instruções exatas de código para cada correção", others: "Listagem genérica de problemas sem indicar a solução" },
      { criterion: "Foco em Negócios", naut: "Prioriza erros que impactam diretamente vendas", others: "Trata alertas cosméticos com o mesmo peso de falhas graves" },
      { criterion: "Validação Pós-Correção", naut: "Novo rastreamento para homologar as soluções", others: "Entrega o PDF e encerra o contato" }
    ],
    faqs: [
      {
        q: "Qual a diferença entre uma auditoria gratuita e a auditoria técnica da Naut?",
        a: "Testadores gratuitos apontam erros automáticos superficiais. Nossa auditoria examina a lógica do negócio, histórico no Search Console, arquivos de log do servidor e arquitetura semântica profunda."
      },
      {
        q: "Vocês mesmos aplicam as correções encontradas?",
        a: "Sim! Se o seu site for desenvolvido ou mantido pela Naut, nós mesmos implementamos 100% das soluções. Caso tenha equipe interna de TI, instruímos seu time com especificações claras."
      },
      {
        q: "Por que um site que funcionava bem pode parar de ranquear?",
        a: "O Google atualiza seus algoritmos centenas de vezes ao ano. Além disso, plugins desatualizados, scripts novos e migrações malfeitas costumam gerar erros graves sem que ninguém perceba."
      },
      {
        q: "Quanto tempo leva para receber o relatório da auditoria?",
        a: "Em média de 7 a 10 dias úteis, tempo necessário para rastrear, cruzar dados e estruturar o plano de ação estratégico."
      },
      {
        q: "A auditoria técnica é suficiente para o site subir no ranking?",
        a: "A auditoria remove os freios do seu site. Corrigir os erros técnicos é o alicerce obrigatório para que as estratégias de conteúdo e autoridade funcionem em seu potencial máximo."
      }
    ],
    relatedSlugs: [
      "consultoria-seo-estrategico",
      "otimizacao-de-velocidade-core-web-vitals",
      "redesign-e-modernizacao-de-sites"
    ]
  },

  {
    id: "otimizacao-de-velocidade-core-web-vitals",
    slug: "otimizacao-de-velocidade-core-web-vitals",
    pillarId: "desenvolvimento-de-seo",
    pillarName: "Desenvolvimento de SEO",
    keyword: "otimização de velocidade de sites e core web vitals",
    // 55 chars
    title: "Otimização de Velocidade Core Web Vitals | Agência Naut",
    // 132 chars
    description: "Otimização de velocidade de sites e Core Web Vitals no Google. Carregamento ultra veloz para reter leads e vender pela Agência Naut.",
    badge: "Velocidade Extrema no PageSpeed",
    h1: "Otimização de Velocidade de Sites e Pontuação Core Web Vitals",
    subtitle: "Acelere seu site para carregar em menos de 1,5 segundo, encante seus usuários e conquiste a pontuação máxima no Google PageSpeed.",
    highlights: [
      { number: "90+", label: "Score no Mobile e Desktop" },
      { number: "Verde", label: "Aprovação em LCP, INP e CLS" },
      { number: "WebP", label: "Compressão de Mídias de Última Geração" },
      { number: "+25%", label: "Mais Conversões por Redução de Espera" }
    ],
    targetAudience: [
      "Empresas com sites lentos que perdem visitantes nos primeiros segundos de carregamento.",
      "E-commerces onde cada segundo extra de espera representa abandono de carrinho de compras.",
      "Anunciantes que sofrem com Custo por Clique alto devido a notas baixas de experiência da página.",
      "Empresas reprovadas nos relatórios de Core Web Vitals do Google Search Console."
    ],
    scope: [
      {
        title: "Otimização de Largest Contentful Paint (LCP)",
        desc: "Priorização de recursos críticos e carregamento antecipado de fontes e imagens do topo para renderização imediata."
      },
      {
        title: "Resolução de Cumulative Layout Shift (CLS)",
        desc: "Eliminação de saltos visuais bruscos na tela definindo dimensões fixas de imagens, fontes e banners dinâmicos."
      },
      {
        title: "Aperfeiçoamento do Interaction to Next Paint (INP)",
        desc: "Otimização do tempo de resposta da página aos cliques do usuário, quebrando scripts longos e liberando a thread principal."
      },
      {
        title: "Conversão de Imagens para WebP & AVIF",
        desc: "Redução de até 80% no peso de fotos e ilustrações sem qualquer perda visível de nitidez ou qualidade gráfica."
      },
      {
        title: "Minificação e Tree-Shaking de JavaScript/CSS",
        desc: "Remoção de códigos mortos, adiamento de scripts secundários (defer/async) e compactação total de arquivos."
      },
      {
        title: "Configuração Avançada de Cache & CDN",
        desc: "Distribuição dos arquivos do site em servidores globais ultrarrápidos próximos geograficamente do visitante."
      }
    ],
    process: [
      {
        step: "01",
        title: "Diagnóstico dos Gargalos de Performance",
        desc: "Identificamos exatamente quais scripts, fontes ou imagens estão travando o carregamento da página."
      },
      {
        step: "02",
        title: "Otimização de Recursos Estáticos",
        desc: "Comprimimos ativos pesados e reestruturamos a ordem de requisição de arquivos no cabeçalho do site."
      },
      {
        step: "03",
        title: "Refatoração de Código e Scripts",
        desc: "Adiantamos a execução de códigos vitais e postergamos scripts analíticos para não bloquear a renderização."
      },
      {
        step: "04",
        title: "Validação nos Testes do Google",
        desc: "Aferimos a pontuação em ambiente real e monitoramos a resposta nos relatórios do Search Console."
      }
    ],
    comparison: [
      { criterion: "Tempo de Carregamento", naut: "Abaixo de 1.5 segundo em conexões móveis", others: "Acima de 4 a 6 segundos irritando o visitante" },
      { criterion: "Pontuação PageSpeed", naut: "Faixa verde (90 a 100) validada no Google", others: "Faixa vermelha ou laranja com alertas graves" },
      { criterion: "Abordagem Técnica", naut: "Otimização limpa no código e na arquitetura", others: "Instalação de plugins de cache que quebram o layout" },
      { criterion: "Impacto em Vendas", naut: "Usuário navega sem atrito e fecha negócio", others: "Visitante desiste e volta para o Google em busca de outro" }
    ],
    faqs: [
      {
        q: "O que são Core Web Vitals e por que o Google se importa com isso?",
        a: "São as métricas oficiais do Google que medem a velocidade de carregamento (LCP), a estabilidade visual (CLS) e a interatividade da página (INP). Sites rápidos recebem prioridade no ranqueamento orgânico."
      },
      {
        q: "O visual do meu site vai mudar depois da otimização?",
        a: "Não. O site continua esteticamente idêntico, com a mesma qualidade de imagens e elementos, apenas carregando de maneira incomparavelmente mais rápida."
      },
      {
        q: "A velocidade afeta o valor que pago no Google Ads?",
        a: "Sim! O Google Ads avalia a experiência na página de destino. Páginas rápidas recebem notas melhores no Índice de Qualidade, reduzindo seu Custo por Clique (CPC)."
      },
      {
        q: "Por que plugins de cache comuns do WordPress nem sempre resolvem?",
        a: "Plugins apenas disfarçam o problema e muitas vezes entram em conflito. A verdadeira velocidade decorre de código enxuto, imagens bem tratadas e infraestrutura moderna como a que a Naut desenvolve."
      },
      {
        q: "Como posso conferir a velocidade do meu site hoje?",
        a: "Basta inserir a URL da sua empresa na ferramenta oficial do Google (PageSpeed Insights). Se sua nota mobile estiver abaixo de 80, sua empresa está perdendo clientes diariamente."
      }
    ],
    relatedSlugs: [
      "criacao-de-sites-profissionais",
      "auditoria-tecnica-de-seo",
      "consultoria-seo-estrategico"
    ]
  },

  {
    id: "link-building-e-autoridade-de-dominio",
    slug: "link-building-e-autoridade-de-dominio",
    pillarId: "desenvolvimento-de-seo",
    pillarName: "Desenvolvimento de SEO",
    keyword: "link building estratégico e autoridade de domínio",
    // 55 chars
    title: "Link Building e Ganho de Autoridade Web | Naut Agência.",
    // 132 chars
    description: "Link building estratégico e conquista de autoridade de domínio no Google. Eleve a relevância do seu site com o time da Agência Naut.",
    badge: "Autoridade Digital & Backlinks",
    h1: "Link Building Estratégico e Conquista de Autoridade de Domínio",
    subtitle: "Ganhe menções e links de alta reputação em portais relevantes para transferir autoridade e impulsionar suas páginas ao topo do Google.",
    highlights: [
      { number: "White Hat", label: "Relacionamento e PR Digital Genuíno" },
      { number: "High DA", label: "Portais com Alta Reputação e Tráfego" },
      { number: "Zero Risco", label: "Segurança Total contra Punições" },
      { number: "DoFollow", label: "Links de Alto Valor de PageRank" }
    ],
    targetAudience: [
      "Empresas com sites excelentes e conteúdos ricos que ainda não conseguem ultrapassar concorrentes tradicionais.",
      "Domínios novos que precisam acelerar o ganho de confiança aos olhos do algoritmo do Google.",
      "Marcas em nichos altamente competitivos onde o desempate para a primeira posição exige peso de autoridade externa.",
      "Negócios que foram prejudicados no passado por compras de links de baixa qualidade e precisam limpar seu perfil."
    ],
    scope: [
      {
        title: "Auditoria do Perfil de Backlinks Atual",
        desc: "Análise completa do Domain Authority, âncoras de texto utilizadas e identificação de links tóxicos para rejeição (Disavow)."
      },
      {
        title: "Prospecção Qualificada de Parceiros e Portais",
        desc: "Mapeamento ativo de veículos de notícias, blogs de setor e portais institucionais que dialogam com seu mercado."
      },
      {
        title: "Assessoria de Conteúdo & PR Digital",
        desc: "Produção de artigos ricos e pesquisas exclusivas que despertam interesse espontâneo de jornalistas e editores."
      },
      {
        title: "Distribuição Natural de Textos-Âncora",
        desc: "Equilíbrio estratégico de âncoras exatas, marcas e termos de cauda longa, respeitando o padrão natural que o Google exige."
      },
      {
        title: "Estratégia de Link Building Interno",
        desc: "Revisão e ampliação da arquitetura de links entre as páginas do seu próprio site para distribuir a força recebida."
      },
      {
        title: "Monitoramento de Indexação e Retenção de Links",
        desc: "Acompanhamento contínuo para garantir que os links conquistados permaneçam ativos e indexados ao longo do tempo."
      }
    ],
    process: [
      {
        step: "01",
        title: "Mapeamento de Autoridade da Concorrência",
        desc: "Identificamos de onde vêm os melhores links dos seus concorrentes diretos para traçar uma rota de superação."
      },
      {
        step: "02",
        title: "Definição de Ativos Linkáveis",
        desc: "Desenvolvemos páginas de valor real e dados de mercado que justifiquem a menção editorial por terceiros."
      },
      {
        step: "03",
        title: "Outreach & Publicações Editoriais",
        desc: "Conectamos sua marca com veículos respeitados para garantir publicações com links contextuais e relevantes."
      },
      {
        step: "04",
        title: "Mensuração de Impacto no Ranking",
        desc: "Acompanhamos a elevação da autoridade do domínio e o salto de posições das páginas estratégicas no Google."
      }
    ],
    comparison: [
      { criterion: "Origem dos Backlinks", naut: "Portais reais de alta credibilidade e tráfego orgânico", others: "Redes privadas artificiais (PBNs) ou fazendas de links" },
      { criterion: "Segurança do Domínio", naut: "Conformidade absoluta com as diretrizes do Google", others: "Alto risco de penalização manual e sumiço das buscas" },
      { criterion: "Contexto do Conteúdo", naut: "Artigos aprofundados relevantes para seu setor", others: "Textos gerados sem sentido em sites sem público" },
      { criterion: "Efeito a Longo Prazo", naut: "Autoridade perene que sustenta a liderança", others: "Quedas repentinas assim que o Google atualiza" }
    ],
    faqs: [
      {
        q: "O que é um backlink e por que ele é tão importante?",
        a: "Um backlink é uma ligação de outro site apontando para o seu. Para o Google, cada link de qualidade funciona como um voto de confiança, comprovando que seu conteúdo é relevante e confiável."
      },
      {
        q: "Comprar pacotes de links na internet é perigoso?",
        a: "Extremamente perigoso. O Google pune severamente sites que compram links em listas de spam. Na Naut, trabalhamos exclusivamente com relações públicas digitais e parcerias editoriais legítimas."
      },
      {
        q: "Quantos backlinks preciso para chegar na primeira página?",
        a: "Não se trata de quantidade, mas de qualidade e relevância. Um único link em um portal de notícias de peso vale mais do que centenas de links em diretórios irrelevantes."
      },
      {
        q: "O que significa link DoFollow?",
        a: "É um atributo de link que autoriza os robôs de busca a seguirem o caminho e transferirem autoridade de PageRank para o site de destino, impulsionando seu ranqueamento."
      },
      {
        q: "Como vocês protegem meu site contra links ruins de spam?",
        a: "Monitoramos constantemente o perfil de links e utilizamos a ferramenta oficial de desautorização (Disavow Tool) do Google para neutralizar qualquer link nocivo."
      }
    ],
    relatedSlugs: [
      "consultoria-seo-estrategico",
      "auditoria-tecnica-de-seo",
      "criacao-de-sites-profissionais"
    ]
  },

  // ==========================================
  // PILAR 3: GESTÃO ONLINE & PERFORMANCE PARA EMPRESAS
  // ==========================================
  {
    id: "gestao-de-trafego-pago-performance",
    slug: "gestao-de-trafego-pago-performance",
    pillarId: "gestao-online",
    pillarName: "Gestão Online",
    keyword: "gestão de tráfego pago de alta performance",
    // 55 chars
    title: "Gestão de Tráfego Pago de Alta Conversão | Agência Naut",
    // 132 chars
    description: "Gestão de tráfego pago de alta performance com foco em ROI e escala. Atraia leads qualificados no Google e redes com a Agência Naut.",
    badge: "Mídia Paga com Foco em ROI",
    h1: "Gestão de Tráfego Pago de Alta Performance para Escalar Empresas",
    subtitle: "Conectamos sua marca a clientes prontos para comprar, investindo seu orçamento com precisão científica e foco obsessivo no lucro.",
    highlights: [
      { number: "ROI 4.2x", label: "Média de Retorno Sobre Investimento" },
      { number: "Omnichannel", label: "Google, Meta, TikTok e LinkedIn" },
      { number: "BI", label: "Dashboards em Tempo Real" },
      { number: "Semanal", label: "Otimização Ativa de Campanhas" }
    ],
    targetAudience: [
      "Empresas que já investem em anúncios mas sentem que estão apenas 'queimando dinheiro' sem retorno previsível.",
      "Negócios que dependem de indicações e querem criar uma máquina automatizada de novos orçamentos todos os dias.",
      "Marcas em expansão que precisam de escala acelerada com Custo de Aquisição de Clientes (CAC) controlado.",
      "Diretores que exigem clareza cirúrgica sobre quais canais e criativos estão gerando vendas reais."
    ],
    scope: [
      {
        title: "Planejamento Estratégico de Mídia & Funil",
        desc: "Distribuição inteligente de verba entre canais de atração, nutrição e conversão de fundo de funil."
      },
      {
        title: "Criação de Anúncios e Criativos de Alto Impacto",
        desc: "Designers e copywriters dedicados para produzir artes estáticas e roteiros de vídeos que prendem a atenção."
      },
      {
        title: "Implementação de Infraestrutura de Dados",
        desc: "Configuração de Pixel, API de Conversões (CAPI) do Facebook, Google Tag Manager e GA4 para zero perda de atribuição."
      },
      {
        title: "Testes A/B Sistemáticos de Criativos e Públicos",
        desc: "Experimentação contínua de copys, títulos e formatos para descobrir os anúncios de menor custo por aquisição."
      },
      {
        title: "Estratégia Avançada de Remarketing Inteligente",
        desc: "Campanhas dinâmicas para reimpactar quem visitou o site ou visualizou vídeos sem comprar, fechando o ciclo de venda."
      },
      {
        title: "Acompanhamento de Vendas e Otimização Semanal",
        desc: "Reuniões periódicas para analisar o retorno financeiro real, pausando o que não funciona e escalando o que gera lucro."
      }
    ],
    process: [
      {
        step: "01",
        title: "Imersão no Negócio & Cálculo de CAC/LTV",
        desc: "Entendemos sua margem de lucro, ciclo de vendas e tíquete médio para estipular metas realistas de retorno."
      },
      {
        step: "02",
        title: "Estruturação Técnica de Rastreamento",
        desc: "Blindamos as contas de anúncio com pixels configurados, públicos personalizados e tags de conversão."
      },
      {
        step: "03",
        title: "Produção de Criativos & Lançamento",
        desc: "Subimos as campanhas com múltiplas variações de público e anúncios validados pelo nosso time de estratégia."
      },
      {
        step: "04",
        title: "Otimização Diária & Escala Segura",
        desc: "Monitoramos as métricas de leilão diariamente, injetando mais verba nos conjuntos de melhor desempenho."
      }
    ],
    comparison: [
      { criterion: "Foco Principal", naut: "Dinheiro no caixa da empresa (ROI e faturamento)", others: "Métricas de vaidade (curtidas e impressões vazias)" },
      { criterion: "Rastreamento", naut: "API de Conversões e GA4 configurados de ponta a ponta", others: "Pixels desatualizados perdendo dados do iOS" },
      { criterion: "Criativos", naut: "Designers profissionais criando peças de alta conversão", others: "Artes amadoras recicladas de postagens comuns" },
      { criterion: "Atendimento", naut: "Especialista dedicado com contato ágil no WhatsApp", others: "Tickets impessoais respondidos dias depois" }
    ],
    faqs: [
      {
        q: "Quanto preciso investir em anúncios por mês para ter resultados?",
        a: "Recomendamos um investimento mínimo inicial em mídia entre R$ 1.500 e R$ 3.000 para gerar dados estatísticos suficientes nos leilões do Google e Meta."
      },
      {
        q: "Qual plataforma é melhor: Google Ads ou Meta Ads (Instagram/Facebook)?",
        a: "Depende do seu modelo de negócio. O Google Ads captura clientes que já estão buscando ativamente pelo seu serviço. O Meta Ads desperta o desejo em quem tem o perfil ideal. A combinação de ambos é a estratégia vencedora."
      },
      {
        q: "A verba dos anúncios é paga para a Naut ou diretamente às plataformas?",
        a: "A verba de anúncios é paga por você diretamente ao Google e Meta via cartão ou boleto. Você mantém total posse e transparência das suas contas."
      },
      {
        q: "Como saberei se o tráfego pago está dando lucro?",
        a: "Disponibilizamos dashboards transparentes e realizamos reuniões de alinhamento mostrando exatamente quantos leads chegaram e qual foi o custo por oportunidade gerada."
      },
      {
        q: "Vocês também criam as imagens e vídeos dos anúncios?",
        a: "Sim! Nosso time interno de design e copywriting é responsável por criar os criativos e os textos persuasivos de todas as campanhas."
      }
    ],
    relatedSlugs: [
      "gestao-de-google-ads-para-empresas",
      "gestao-de-meta-ads-instagram-facebook",
      "criacao-de-landing-pages-alta-conversao"
    ]
  },

  {
    id: "gestao-de-google-ads-para-empresas",
    slug: "gestao-de-google-ads-para-empresas",
    pillarId: "gestao-online",
    pillarName: "Gestão Online",
    keyword: "gestão de anúncios no google ads para empresas",
    // 55 chars
    title: "Gestão de Google Ads para Empresas em SP | Agência Naut",
    // 132 chars
    description: "Gestão profissional de Google Ads para empresas: Pesquisa, Display e PMax. Alcance clientes prontos para comprar com a Agência Naut.",
    badge: "Intenção de Compra no Google",
    h1: "Gestão Profissional de Google Ads para Empresas e Captação de Leads",
    subtitle: "Apareça no topo das pesquisas exatamente no momento em que seu cliente ideal digita o que sua empresa oferece.",
    highlights: [
      { number: "Top 1", label: "Rede de Pesquisa de Alta Intenção" },
      { number: "PMax", label: "Campanhas Performance Max com IA" },
      { number: "Negativação", label: "Filtro Rigoroso de Cliques Desperdiçados" },
      { number: "Auditado", label: "Índice de Qualidade Elevado" }
    ],
    targetAudience: [
      "Empresas de serviços que precisam de ligações e mensagens no WhatsApp de clientes prontos para contratar.",
      "Negócios que tentaram anunciar sozinhos e gastaram dinheiro com cliques desqualificados e termos errados.",
      "Empresas que atuam no segmento B2B e querem atingir compradores corporativos buscando fornecedores.",
      "E-commerces que precisam anunciar produtos no Google Shopping e campanhas Performance Max."
    ],
    scope: [
      {
        title: "Pesquisa Cirúrgica de Palavras-Chave de Fundo de Funil",
        desc: "Foco nos termos que indicam decisão de compra (ex: 'orçamento de...', 'empresa de...', 'serviço especializado')."
      },
      {
        title: "Negativação Diária de Termos Irrelevantes",
        desc: "Bloqueio ativo de palavras que queimam verba sem intenção comercial (ex: 'grátis', 'como fazer', 'vagas de emprego')."
      },
      {
        title: "Redação de Anúncios Responsivos Persuasivos",
        desc: "Criação de títulos e descrições dinâmicas que garantem excelente taxa de clique (CTR) e relevância no leilão."
      },
      {
        title: "Configuração Completa de Extensões de Anúncio",
        desc: "Inclusão de sitelinks, frases de destaque, recursos de chamada, formulários de lead e snippets estruturados."
      },
      {
        title: "Campanhas Performance Max e Rede de Display",
        desc: "Utilização do aprendizado de máquina do Google para expandir o alcance no YouTube, Gmail, Maps e sites parceiros."
      },
      {
        title: "Rastreamento Rigoroso de Conversões",
        desc: "Mensuração de cada ligação telefônica, clique no botão de WhatsApp e envio de formulário com valor atribuído."
      }
    ],
    process: [
      {
        step: "01",
        title: "Estruturação das Campanhas & Grupos de Anúncios",
        desc: "Organizamos os grupos por temas específicos para que cada busca receba um anúncio perfeitamente alinhado."
      },
      {
        step: "02",
        title: "Negativação Inicial de Mais de 500 Termos",
        desc: "Aplicamos listas consolidadas da Naut para proteger seu orçamento desde o primeiro minuto de veiculação."
      },
      {
        step: "03",
        title: "Otimização de Lances & Inteligência de IA",
        desc: "Ajustamos estratégias de Maximizar Conversões e CPA Desejado conforme o algoritmo aprende o padrão do cliente."
      },
      {
        step: "04",
        title: "Refinamento & Expansão de ROI",
        desc: "Realocamos verba para os horários, regiões geográficas e dispositivos que trazem os melhores fechamentos."
      }
    ],
    comparison: [
      { criterion: "Aproveitamento de Verba", naut: "100% focado em termos comerciais qualificados", others: "Cliques desperdiçados em buscas sem intenção de compra" },
      { criterion: "Extensões de Anúncio", naut: "Todos os recursos ativados para ocupar mais tela", others: "Apenas anúncio simples de texto fácil de ser ignorado" },
      { criterion: "Alinhamento com Landing Page", naut: "Anúncios alinhados à página para baratear o clique", others: "Anúncio direcionado para a home genérica do site" },
      { criterion: "Relatórios", naut: "Dados claros com custo por lead e retorno real", others: "Métricas confusas de impressões sem apelo financeiro" }
    ],
    faqs: [
      {
        q: "Como o Google Ads decide qual anúncio aparece em primeiro lugar?",
        a: "O Google utiliza o Ad Rank, que calcula o valor do lance multiplicado pelo Índice de Qualidade (relevância do anúncio, taxa de clique esperada e velocidade da página de destino)."
      },
      {
        q: "Como vocês evitam que cliques indesejados gastem meu dinheiro?",
        a: "Através da negativação rigorosa de palavras-chave. Monitoramos diariamente os termos pesquisados reais e bloqueamos tudo o que não seja qualificado."
      },
      {
        q: "O que é uma campanha Performance Max (PMax)?",
        a: "É o formato mais inteligente do Google, onde uma única campanha veicula em todos os canais do ecossistema Google (Pesquisa, Maps, YouTube, Gmail e Display) buscando o maior número de conversões."
      },
      {
        q: "Em quanto tempo as campanhas começam a gerar leads?",
        a: "Diferente do SEO, os anúncios entram no leilão assim que aprovados pelo Google. É comum receber os primeiros contatos já nas primeiras 24 a 48 horas após a ativação."
      },
      {
        q: "Eu tenho acesso direto à minha conta do Google Ads?",
        a: "Sim, a conta pertence à sua empresa. A Naut atua como agência parceira conectada via MCC (Central do Administrador)."
      }
    ],
    relatedSlugs: [
      "gestao-de-trafego-pago-performance",
      "criacao-de-landing-pages-alta-conversao",
      "consultoria-seo-estrategico"
    ]
  },

  {
    id: "gestao-de-meta-ads-instagram-facebook",
    slug: "gestao-de-meta-ads-instagram-facebook",
    pillarId: "gestao-online",
    pillarName: "Gestão Online",
    keyword: "gestão de anúncios no instagram e facebook ads",
    // 55 chars
    title: "Gestão de Meta Ads: Instagram e Facebook | Agência Naut",
    // 132 chars
    description: "Gestão de anúncios no Meta Ads: Instagram e Facebook. Atraia mais clientes qualificados com bons criativos e escala na Agência Naut.",
    badge: "Escala & Desejo no Instagram",
    h1: "Gestão Estratégica de Anúncios no Meta Ads (Instagram e Facebook)",
    subtitle: "Atraia compradores qualificados nas redes sociais com criativos visuais irresistíveis e segmentação avançada de público.",
    highlights: [
      { number: "CAPI", label: "API de Conversões Meta Configurada" },
      { number: "Vídeo & Estático", label: "Criativos Validados de Alta Atenção" },
      { number: "Lookalike", label: "Públicos Semelhantes a Clientes Reais" },
      { number: "Remarketing", label: "Recuperação Ativa de Oportunidades" }
    ],
    targetAudience: [
      "Marcas que precisam gerar desejo visual e demonstrar os benefícios dos seus serviços em imagens e vídeos.",
      "Empresas que querem alcançar tomadores de decisão em momentos de lazer no feed e stories do Instagram.",
      "Negócios locais que buscam inundar sua região com ofertas atrativas e atendimento direto no WhatsApp.",
      "E-commerces que necessitam de catálogo dinâmico de produtos com remarketing para recuperar carrinhos."
    ],
    scope: [
      {
        title: "Configuração do Gerenciador de Negócios (BM)",
        desc: "Estruturação profissional com verificação de domínio, autenticação de dois fatores e contas de anúncio protegidas."
      },
      {
        title: "API de Conversões (CAPI) do Meta",
        desc: "Integração server-side com seu site para contornar bloqueadores de anúncios e restrições do iOS, garantindo dados precisos."
      },
      {
        title: "Segmentação Estratégica de Públicos",
        desc: "Criação de públicos Lookalike (semelhantes aos seus melhores clientes), públicos personalizados e exclusões inteligentes."
      },
      {
        title: "Produção de Criativos Focados em Retenção",
        desc: "Desenvolvimento de carrosséis informativos, criativos estáticos de alto contraste e roteiros para vídeos em Reels."
      },
      {
        title: "Campanhas de Mensagens Diretas no WhatsApp",
        desc: "Anúncios 'clique para o WhatsApp' otimizados para iniciar conversas com leads prontos para receber propostas."
      },
      {
        title: "Estratégia de Funil Completo (Topo, Meio e Fundo)",
        desc: "Nutrição visual que transforma pessoas que nunca ouviram falar da sua marca em clientes fiéis."
      }
    ],
    process: [
      {
        step: "01",
        title: "Mapeamento dos Ângulos de Venda",
        desc: "Identificamos os principais desejos, frustrações e diferenciais do seu produto para guiar as peças visuais."
      },
      {
        step: "02",
        title: "Produção Criativa & Validação de Copy",
        desc: "Nossos designers criam formatos adequados para Feed, Stories e Reels com ganchos visuais nos primeiros 3 segundos."
      },
      {
        step: "03",
        title: "Ativação & Testes de Leilão",
        desc: "Lançamos as campanhas com orçamento distribuído estrategicamente para validar quais peças convertem com menor custo."
      },
      {
        step: "04",
        title: "Escala Vertical e Horizontal",
        desc: "Aumentamos a verba nos criativos vencedores e abrimos novos públicos para manter o custo estável em alto volume."
      }
    ],
    comparison: [
      { criterion: "Qualidade dos Criativos", naut: "Designers e redatores profissionais criando peças exclusivas", others: "Apenas apertar o botão 'impulsionar' no aplicativo" },
      { criterion: "Infraestrutura Técnica", naut: "API de Conversões ativa com rastreamento server-side", others: "Pixel básico que perde metade dos dados de conversão" },
      { criterion: "Engenharia de Públicos", naut: "Públicos personalizados, Lookalikes e exclusão de compradores", others: "Segmentação aberta genérica sem estratégia de funil" },
      { criterion: "Foco Financeiro", naut: "Geração de leads no WhatsApp e vendas rastreadas", others: "Comemoração de curtidas e comentários que não pagam contas" }
    ],
    faqs: [
      {
        q: "Por que não devo usar o botão 'Turbinar' ou 'Impulsionar' do Instagram?",
        a: "O botão turbinar foca apenas em engajamento superficial (curtidas). No Gerenciador de Negócios configurado pela Naut, nós anunciamos com foco em geração de leads, conversas no WhatsApp e compras reais."
      },
      {
        q: "O que é a API de Conversões do Meta e por que ela é indispensável?",
        a: "É uma tecnologia que envia eventos de compra diretamente do servidor do site para o Meta, contornando bloqueadores e as restrições do iOS da Apple para manter a inteligência das campanhas."
      },
      {
        q: "Quantos criativos diferentes são testados por mês?",
        a: "Produzimos e testamos múltiplos criativos todos os meses para evitar a 'fadiga de anúncios' e manter o custo por lead sempre baixo."
      },
      {
        q: "Os anúncios no Instagram funcionam para empresas B2B?",
        a: "Sim! Executivos e tomadores de decisão utilizam o Instagram diariamente. Anúncios bem direcionados com posicionamento corporativo geram oportunidades B2B de alto valor."
      },
      {
        q: "Como o atendimento do lead deve ser feito?",
        a: "Se os anúncios forem direcionados para o WhatsApp, sua equipe comercial deve responder com rapidez (idealmente em até 5 minutos) para garantir a máxima taxa de conversão em vendas."
      }
    ],
    relatedSlugs: [
      "gestao-de-trafego-pago-performance",
      "gestao-de-google-ads-para-empresas",
      "criacao-de-landing-pages-alta-conversao"
    ]
  },

  {
    id: "gestao-de-redes-sociais-para-empresas",
    slug: "gestao-de-redes-sociais-para-empresas",
    pillarId: "gestao-online",
    pillarName: "Gestão Online",
    keyword: "gestão de redes sociais e presença digital corporativa",
    // 55 chars
    title: "Gestão de Redes Sociais Corporativas | Agência Naut SP.",
    // 132 chars
    description: "Gestão de redes sociais estratégica para marcas líderes. Fortaleça seu posicionamento, autoridade e vendas junto com a Agência Naut.",
    badge: "Autoridade de Marca & Branding",
    h1: "Gestão Estratégica de Redes Sociais e Presença Digital Corporativa",
    subtitle: "Construa uma presença digital de destaque no Instagram e LinkedIn que posiciona sua marca como autoridade indiscutível no seu mercado.",
    highlights: [
      { number: "Posicionamento", label: "Design Editorial de Prestígio" },
      { number: "Conteúdo", label: "Estratégia Baseada em Dores Reais" },
      { number: "Engajamento", label: "Relacionamento com Decisores" },
      { number: "Consistência", label: "Calendário Editorial Rigoroso" }
    ],
    targetAudience: [
      "Empresas consolidadas que querem se distanciar da concorrência através de uma comunicação visual sofisticada.",
      "Negócios cujas redes sociais estão abandonadas ou com posts genéricos que não geram autoridade.",
      "Executivos e marcas que precisam se posicionar estrategicamente no LinkedIn e Instagram.",
      "Empresas que desejam transformar seguidores casuais em defensores de marca e clientes fidelizados."
    ],
    scope: [
      {
        title: "Diagnóstico de Branding & Tom de Voz",
        desc: "Definição do território de marca, identidade verbal e pilares temáticos que sustentam a autoridade da empresa."
      },
      {
        title: "Design Gráfico Editorial Exclusivo",
        desc: "Criação de templates de alto padrão estético para carrosséis, posts estáticos e capas de destaque."
      },
      {
        title: "Planejamento de Conteúdo Semanal",
        desc: "Calendário editorial estratégico equilibrando conteúdos de prova social, quebra de objeções, bastidores e cases de sucesso."
      },
      {
        title: "Redação de Legendas Persuasivas",
        desc: "Textos envolventes com ganchos atrativos e chamadas claras para interação e solicitação de contato no direct."
      },
      {
        title: "Diretrizes para Produção de Vídeos Curtos",
        desc: "Roteirização simplificada para que sua diretoria ou equipe grave vídeos em formato Reels com naturalidade e autoridade."
      },
      {
        title: "Monitoramento & Relatório Mensal de Crescimento",
        desc: "Acompanhamento do engajamento qualificado, crescimento de público-alvo relevante e mensagens comerciais recebidas."
      }
    ],
    process: [
      {
        step: "01",
        title: "Imersão de Marca & Identidade Visual",
        desc: "Definimos o estilo estético e a paleta de cores para transformar seu feed em uma vitrine impecável."
      },
      {
        step: "02",
        title: "Planejamento do Calendário Editorial",
        desc: "Apresentamos a programação de temas do mês com antecedência para alinhamento e aprovação da sua equipe."
      },
      {
        step: "03",
        title: "Design, Redação e Agendamento",
        desc: "Nossos criativos produzem cada peça com acabamento primoroso e programam as postagens nos melhores horários."
      },
      {
        step: "04",
        title: "Análise de Engajamento & Refinamento",
        desc: "Avaliamos os temas que mais ressoaram com o público para intensificar os formatos de maior resultado."
      }
    ],
    comparison: [
      { criterion: "Abordagem Editorial", naut: "Conteúdo estratégico pensado para gerar respeito e vendas", others: "Frases motivacionais genéricas e posts comemorativos vazios" },
      { criterion: "Identidade Visual", naut: "Design refinado desenhado sob medida para o seu público", others: "Artes recicladas do Canva com elementos amadores" },
      { criterion: "Alinhamento com Vendas", naut: "Postagens integradas com a estratégia de tráfego pago", others: "Trabalho isolado sem conexão com a área comercial" },
      { criterion: "Pontualidade", naut: "Planejamento mensal antecipado com aprovação formal", others: "Atrasos constantes e postagens improvisadas no dia" }
    ],
    faqs: [
      {
        q: "Como as redes sociais ajudam uma empresa que vende para outras empresas (B2B)?",
        a: "Antes de assinar um contrato, tomadores de decisão visitam as redes da sua empresa para verificar idoneidade, porte, clientes atendidos e qualidade. Uma presença forte transmite segurança imediata."
      },
      {
        q: "Vocês cuidam tanto do Instagram quanto do LinkedIn?",
        a: "Sim! Adequamos a linguagem para cada plataforma: no Instagram focamos em atratividade e bastidores; no LinkedIn priorizamos artigos de liderança, dados de mercado e cases corporativos."
      },
      {
        q: "Eu preciso aprovar os posts antes que eles sejam publicados?",
        a: "Sempre. Trabalhamos com cronograma antecipado para que você e sua equipe revisem e aprovem todos os textos e artes com total tranquilidade."
      },
      {
        q: "Ter muitos seguidores é importante para vender?",
        a: "Não necessariamente. Nosso foco é atrair o seguidor certo: pessoas com real potencial de contratação, gerando autoridade e oportunidades diretas de negócios."
      },
      {
        q: "As redes sociais funcionam sozinhas sem tráfego pago?",
        a: "O tráfego orgânico cria autoridade e acolhe quem chega, mas quando combinado com anúncios pagos no Meta Ads o resultado de escala se multiplica exponencialmente."
      }
    ],
    relatedSlugs: [
      "gestao-de-meta-ads-instagram-facebook",
      "gestao-de-trafego-pago-performance",
      "criacao-de-sites-profissionais"
    ]
  },

  {
    id: "automacao-de-marketing-e-funis-crm",
    slug: "automacao-de-marketing-e-funis-crm",
    pillarId: "gestao-online",
    pillarName: "Gestão Online",
    keyword: "automação de marketing e gestão de funis no crm",
    // 55 chars
    title: "Automação de Marketing e Integrações CRM | Agência Naut",
    // 132 chars
    description: "Automação de marketing digital, ações de relacionamento e integração CRM. Escale suas vendas e feche negócios junto da Agência Naut.",
    badge: "Vendas Automatizadas & CRM",
    h1: "Automação de Marketing Digital e Integração com CRM de Vendas",
    subtitle: "Construa fluxos inteligentes de nutrição de leads, reduza o tempo de resposta e transforme contatos em clientes de forma automatizada.",
    highlights: [
      { number: "24/7", label: "Nutrição Automática de Oportunidades" },
      { number: "-40%", label: "Redução no Ciclo Médio de Venda" },
      { number: "Lead Score", label: "Qualificação Automática por Interesse" },
      { number: "CRM", label: "Integração Fluida com RD, HubSpot e Pipedrive" }
    ],
    targetAudience: [
      "Empresas que geram muitos leads mas perdem oportunidades por demora no primeiro contato comercial.",
      "Times de vendas que perdem tempo conversando com curiosos em vez de focar em leads qualificados.",
      "Negócios com ciclo de venda longo que necessitam manter contato frequente com o prospect até a decisão.",
      "Gestores que não têm visibilidade do funil de vendas e das taxas de conversão de cada etapa."
    ],
    scope: [
      {
        title: "Mapeamento Completo da Jornada do Lead",
        desc: "Desenho das etapas do funil de vendas: da entrada pelo site/anúncio até o fechamento e pós-venda no CRM."
      },
      {
        title: "Criação de Réguas de Nutrição por E-mail",
        desc: "Redação e estruturação de sequências automáticas com conteúdos educativos, cases e convites para reunião."
      },
      {
        title: "Automação de Notificações e WhatsApp",
        desc: "Disparo imediato de mensagens pré-formatadas para o lead e alerta simultâneo no celular do vendedor."
      },
      {
        title: "Implementação de Lead Scoring e Lead Tracking",
        desc: "Pontuação automática do lead baseada em cliques e páginas visitadas, sinalizando o momento ideal de compra."
      },
      {
        title: "Integração Nativa de Sistemas e Formulários",
        desc: "Conexão sem falhas entre as páginas do site, ferramentas de anúncio e os principais CRMs (RD Station, HubSpot, Pipedrive, ActiveCampaign)."
      },
      {
        title: "Painel de Métricas do Funil de Vendas",
        desc: "Acompanhamento transparente das taxas de conversão em cada fase: Lead > MQL > SQL > Oportunidade > Venda."
      }
    ],
    process: [
      {
        step: "01",
        title: "Diagnóstico dos Gargalos Comerciais",
        desc: "Identificamos onde sua equipe está perdendo leads e quais tarefas manuais podem ser automatizadas."
      },
      {
        step: "02",
        title: "Estruturação Técnica do CRM & Tags",
        desc: "Criamos as etapas do pipeline de vendas, campos personalizados e gatilhos de transição de fase."
      },
      {
        step: "03",
        title: "Produção das Mensagens & Fluxos",
        desc: "Redigimos e programamos as sequências de e-mail e notificações automáticas de acompanhamento."
      },
      {
        step: "04",
        title: "Treinamento Comercial & Otimização",
        desc: "Capacitamos seu time de vendas para operar o CRM com agilidade e analisamos as taxas de conversão."
      }
    ],
    comparison: [
      { criterion: "Tempo de Resposta ao Lead", naut: "Contato inicial em menos de 1 minuto automático", others: "Horas ou dias de espera até o vendedor ligar" },
      { criterion: "Organização Comercial", naut: "Pipeline visual com histórico completo de cada cliente", others: "Planilhas de Excel confusas e anotações perdidas" },
      { criterion: "Aproveitamento de Leads", naut: "Nutrição contínua até o prospect estar pronto para comprar", others: "Descarta o lead se ele não fechar no primeiro contato" },
      { criterion: "Produtividade do Time", naut: "Vendedores focados em reuniões e fechamento", others: "Vendedores gastando horas em tarefas burocráticas manuais" }
    ],
    faqs: [
      {
        q: "Quais ferramentas de automação e CRM a Naut trabalha?",
        a: "Trabalhamos com as melhores plataformas do mercado, incluindo RD Station, HubSpot, ActiveCampaign, Pipedrive, Zoho e automações sob medida com webhooks."
      },
      {
        q: "A automação substitui o trabalho da minha equipe de vendas?",
        a: "Não, ela potencializa o trabalho humano. A automação filtra curiosos, esquenta o interesse e entrega leads qualificados e informados para seus vendedores fecharem."
      },
      {
        q: "Como o lead é qualificado automaticamente?",
        a: "Através de critérios definidos juntos: perguntas no formulário (cargo, faturamento, segmento) e comportamento (páginas visitadas e links clicados)."
      },
      {
        q: "O que acontece se um lead não comprar de imediato?",
        a: "Ele entra em uma esteira de nutrição de longo prazo, recebendo materiais e novidades periodicamente para lembrar da sua empresa no momento em que a necessidade surgir."
      },
      {
        q: "Vocês realizam o treinamento da nossa equipe?",
        a: "Sim, realizamos sessões de treinamento prático para que sua equipe domine o CRM e saiba exatamente como conduzir as negociações."
      }
    ],
    relatedSlugs: [
      "gestao-de-trafego-pago-performance",
      "criacao-de-landing-pages-alta-conversao",
      "desenvolvimento-web-sob-medida"
    ]
  }
];

// Funções auxiliares
export function getServiceBySlug(slug) {
  return servicesList.find((service) => service.slug === slug);
}

export function getAllServiceSlugs() {
  return servicesList.map((service) => service.slug);
}

export function getServicesByPillar(pillarId) {
  return servicesList.filter((service) => service.pillarId === pillarId);
}
