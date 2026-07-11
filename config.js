/* ============================================================
   MATRIZ PERSONAL TRAINER — ARQUIVO DE CONFIGURAÇÃO
   Cliente: LUCAS LIRA (dados reais do projeto original)
   ------------------------------------------------------------
   Para um novo cliente, edite APENAS este arquivo.
   ============================================================ */

const CONFIG = {

  /* ---------- IDENTIDADE ---------- */
  nome: "Lucas Lira",
  nomeCompleto: "Lucas Lira",
  cref: "CREF-GO 15995",
  cidade: "Goianira",
  regiao: "Goianira · Região Metropolitana",
  titulo: "Personal Trainer",

  /* ---------- CONTATO ---------- */
  whatsapp: "5562985077621",
  whatsappMsg: "Olá, Lucas! Vi seu site e quero saber mais sobre o acompanhamento.",
  email: "contato@lucaslirapersonal.com.br",   // PROVISÓRIO — confirmar e-mail real com o Lucas
  telefoneExibicao: "(62) 98507-7621",
  instagram: "lucaslira_personal",
  formspreeId: "SEU_ID_FORMSPREE",             // criar form no formspree.io e colar o ID

  /* ---------- CORES (paleta do logo: marinho → royal + âmbar) ---------- */
  cores: {
    fundoEscuro: "#0A1628",
    fundoCard:   "#12233D",
    fundoClaro:  "#F3F1EC",
    destaque:    "#F0A63C",
    destaqueHover: "#D68F26",
    textoClaro:  "#EFF1F4",
    textoEscuro: "#101B2C"
  },

  /* ---------- CARD CIDADE/HORA/TEMPO (ativo:false para ocultar) ---------- */
  clima: {
    ativo: true,
    cidade: "Goianira",
    lat: -16.6869,
    lon: -49.2648,
    fuso: "America/Sao_Paulo"
  },

  /* ---------- LOGO (deixe "" para usar o nome em texto) ---------- */
  logo: {
    nav: "img/logo-white.png",      // versão clara p/ fundo escuro da navegação
    destaque: "img/logo-color.png"  // versão colorida p/ o badge branco do hero
  },

  /* ---------- IMAGENS ---------- */
  imagens: {
    /* fundos do hero: 3 fotos que se revezam com zoom lento */
    heroSlides: ["img/slide1.jpg", "img/slide2.jpg", "img/slide3.jpg"],
    sobre: "img/sobre.jpg",
    final: "img/final.jpg"
  },

  /* ---------- HERO ---------- */
  hero: {
    headline: "Te ajudo a perder 10kg em 12 semanas.",
    sub: "Acompanhamento on-line individualizado — treino feito para o seu corpo, sua rotina e seu objetivo, com suporte de perto do início ao resultado. Mais de 190 pessoas já passaram por esse processo.",
    ctaPrimario:   { texto: "Quero emagrecer",     tipo: "whatsapp" },
    ctaSecundario: { texto: "Consultoria Online",  tipo: "whatsapp" }
  },

  /* ---------- DIFERENCIAIS ---------- */
  diferenciais: [
    {
      titulo: "+190 alunos transformados",
      texto: "Mais de 190 pessoas já emagreceram com acompanhamento individualizado — processo testado e refinado na prática, não em teoria."
    },
    {
      titulo: "Acompanhamento de verdade",
      texto: "Suporte direto no WhatsApp, análise de execução por vídeo e ajustes constantes. On-line, mas nunca sozinho."
    },
    {
      titulo: "Treino que respeita seu corpo",
      texto: "Protocolos específicos para quem tem dores no joelho, ombro ou lombar — treinar forte sem agravar o que já incomoda."
    }
  ],

  /* ---------- SOBRE ---------- */
  sobre: {
    titulo: "Sobre mim",
    paragrafos: [
      "Sou <strong>Lucas Lira</strong>, profissional de Educação Física registrado no CREF-GO 15995. Já ajudei <strong>mais de 190 pessoas a emagrecer</strong> com acompanhamento individualizado.",
      "Meu trabalho é focado em <strong>emagrecimento com acompanhamento on-line individualizado</strong>: cada aluno recebe um plano exclusivo, com progressão estruturada e suporte constante — nada de ficha genérica de aplicativo.",
      "Também desenvolvo <strong>protocolos específicos para quem convive com dores</strong> no joelho, no ombro ou na lombar, adaptando o treino para evoluir com segurança."
    ],
    credenciais: [
      "CREF-GO 15995",
      "+190 alunos transformados",
      "Emagrecimento",
      "Consultoria on-line",
      "Protocolos joelho · ombro · lombar"
    ]
  },

  /* ---------- METODOLOGIA (Método Waze — texto oficial pendente c/ Lucas) ---------- */
  metodologia: {
    titulo: "O Método Waze",
    intro: "Como um GPS, o método recalcula a rota sempre que a vida sai do planejado — o destino continua o mesmo: seu resultado. Funciona assim:",
    passos: [
      { titulo: "Ponto de partida",  texto: "Avaliação completa do seu momento atual: histórico, rotina, limitações e objetivo." },
      { titulo: "Rota traçada",      texto: "Plano de treino exclusivo, montado para caber na sua vida real — não numa vida ideal." },
      { titulo: "Recálculo constante", texto: "Semana difícil? Viagem? Dor? O plano se ajusta, o acompanhamento continua e você não sai da rota." },
      { titulo: "Chegada e além",    texto: "Reavaliações medem o progresso e definem o próximo destino — o resultado vira estilo de vida." }
    ],
    ctaTexto: "Começar minha jornada"
  },

  /* ---------- SERVIÇOS ---------- */
  servicos: [
    { titulo: "Consultoria On-line",     texto: "Acompanhamento individualizado a distância: treino exclusivo, vídeos de execução e suporte direto no WhatsApp." },
    { titulo: "Emagrecimento",           texto: "Estratégia focada em perda de gordura com rotina sustentável — o processo que já transformou mais de 190 alunos." },
    { titulo: "Personal Presencial",     texto: "Aulas individuais em Goianira com atenção total à execução e à progressão. Valores sob consulta." },
    { titulo: "Protocolo Joelho",        texto: "Treino adaptado para quem sente dores no joelho: fortalecer e evoluir sem agravar o desconforto." },
    { titulo: "Protocolo Ombro",         texto: "Progressão segura para quem tem limitações ou dores no ombro, com foco em mobilidade e estabilidade." },
    { titulo: "Protocolo Lombar",        texto: "Fortalecimento do core e reeducação de movimento para treinar forte convivendo com dor lombar." }
  ],
  servicosCta: "Saber qual programa é para mim",

  /* ---------- ESTATÍSTICAS ANIMADAS (contam de 0 até o número) ---------- */
  estatisticas: {
    ativo: true,
    itens: [
      { numero: 190, sufixo: "+", label: "alunos transformados" },
      { numero: 12,  sufixo: "",  label: "semanas de programa" },
      { numero: 3,   sufixo: "",  label: "protocolos de dor (joelho · ombro · lombar)" }
    ]
  },

  /* ---------- RESULTADOS ANTES/DEPOIS (slider arrastável) ---------- */
  resultados: {
    ativo: false,  /* reativar quando o Lucas enviar as fotos originais */
    titulo: "Transformações reais",
    intro: "Arraste para comparar. Casos reais de alunos acompanhados de perto.",
    casos: [
      { antes: "img/caso1-antes.jpg", depois: "img/caso1-depois.jpg", legenda: "Método Waze — acompanhamento online" },
      { antes: "img/caso2-antes.jpg", depois: "img/caso2-depois.jpg", legenda: "Método Waze — acompanhamento online" }
    ]
  },

  /* ---------- DEPOIMENTOS (PLACEHOLDER — trocar por depoimentos reais do Lucas) ---------- */
  depoimentos: [
    {
      nome: "Rafael Pereira",
      texto: "Cheguei com bastante dificuldade de mobilidade e insegurança pra fazer os movimentos. O Lucas montou um treino totalmente no meu ritmo, respeitando meus limites e evoluindo aos poucos. Hoje me movimento com muito mais facilidade e faço coisas do dia a dia que antes eram difíceis pra mim. Sou muito grato.",
      resultado: "Ganho de mobilidade e autonomia",
      foto: "img/depo-rafael.jpg"
    },
    {
      nome: "Cláudio Paula — ciclista (mountain bike)",
      texto: "Convivia com dores nas costas, nos ombros, no tríceps e nos membros inferiores, e ainda assim praticava mountain bike sentindo tudo isso. O maior desejo dele era parar de sentir dor. Com treinos específicos, as dores foram ficando cada vez menores — e depois usamos a musculação para melhorar o desempenho no esporte. O resultado veio na prática: na mesma prova do ano anterior, ele foi 9 minutos mais rápido, numa modalidade em que baixar 2 minutos já é muito.",
      resultado: "Fim das dores + ganho de performance",
      foto: "img/depo-ciclista.jpg"
    },
    {
      nome: "Em breve",
      texto: "Novo depoimento em breve.",
      resultado: "Aguardando publicação"
    }
  ],

  /* ---------- FAQ ---------- */
  faq: [
    {
      pergunta: "Como funciona o acompanhamento on-line?",
      resposta: "Você recebe um treino exclusivo, montado para o seu objetivo e estrutura disponível, com vídeos de execução. O suporte é direto no WhatsApp, com análise dos seus vídeos e ajustes constantes."
    },
    {
      pergunta: "Tenho dores no joelho/ombro/lombar. Posso treinar?",
      resposta: "Na maioria dos casos, sim — com o treino certo. Trabalho com protocolos específicos para essas regiões, adaptando exercícios para você evoluir sem agravar o desconforto. Casos clínicos são sempre alinhados com liberação médica."
    },
    {
      pergunta: "Nunca treinei. Consigo acompanhar?",
      resposta: "Consegue. O plano parte do seu nível atual, com progressão gradual e prioridade em técnica. Ninguém precisa 'chegar pronto'."
    },
    {
      pergunta: "Em quanto tempo vejo resultados?",
      resposta: "Depende do ponto de partida, da constância e de fatores individuais como alimentação e sono. Os resultados variam de pessoa para pessoa — meu papel é encurtar o caminho com método e acompanhamento."
    },
    {
      pergunta: "Quanto custa?",
      resposta: "Os valores dos planos são passados sob consulta, porque dependem do formato (on-line ou presencial) e do nível de acompanhamento. É só chamar no WhatsApp que te explico as opções."
    },
    {
      pergunta: "Como começo?",
      resposta: "Chama no WhatsApp. Faremos uma conversa inicial sobre seu objetivo e rotina, e a partir dela você recebe a proposta de acompanhamento ideal."
    }
  ],

  /* ---------- CAPTURA DE E-MAIL (reativar quando o e-book estiver pronto) ---------- */
  captura: {
    ativo: false,
    titulo: "Guia gratuito: por onde começar a emagrecer",
    texto: "Deixe seu e-mail para receber um guia prático com os primeiros passos para emagrecer treinando com segurança e constância.",
    botao: "Quero receber"
  },

  /* ---------- CTA FINAL ---------- */
  ctaFinal: {
    titulo: "Pronto para começar sua transformação?",
    texto: "Acompanhamento individualizado, on-line ou presencial em Goianira. Mais de 190 pessoas já fizeram esse caminho — a próxima pode ser você.",
    botao: "Chamar o Lucas no WhatsApp"
  },

  /* ---------- COMPLIANCE (CONFEF / CREF14-GO Res. 087/2020) ---------- */
  disclaimer: "Os resultados variam de pessoa para pessoa e dependem de fatores individuais como frequência, alimentação, sono e histórico de saúde. Nenhum resultado específico é garantido. Prescrição de dieta é atribuição do nutricionista e não faz parte deste serviço.",

  /* ---------- COOKIES / PRIVACIDADE (LGPD) ---------- */
  cookies: {
    ativo: true,
    texto: "Este site usa cookies e recursos externos (como fontes e mapas) para funcionar e melhorar sua experiência. Ao continuar navegando, você concorda com nossa Política de Privacidade.",
    botao: "Aceitar",
    linkTexto: "Política de Privacidade",
    linkUrl: "privacidade.html"
  },

  /* ---------- RODAPÉ ---------- */
  anoInicio: 2026
};
