/* Renderiza o site a partir do CONFIG. Não é preciso editar este arquivo. */
(function () {
  const C = CONFIG;
  const $ = (id) => document.getElementById(id);
  const waLink = `https://wa.me/${C.whatsapp}?text=${encodeURIComponent(C.whatsappMsg)}`;
  const igLink = `https://www.instagram.com/${C.instagram}/`;

  /* ---- Cores do cliente aplicadas como variáveis CSS ---- */
  const r = document.documentElement.style;
  r.setProperty("--ink", C.cores.fundoEscuro);
  r.setProperty("--card", C.cores.fundoCard);
  r.setProperty("--paper", C.cores.fundoClaro);
  r.setProperty("--accent", C.cores.destaque);
  r.setProperty("--accent-h", C.cores.destaqueHover);
  r.setProperty("--txt-light", C.cores.textoClaro);
  r.setProperty("--txt-dark", C.cores.textoEscuro);

  /* ---- Título da aba ---- */
  document.title = `${C.nome} | ${C.titulo} em ${C.cidade}`;

  /* ---- Logo (se configurada, substitui o nome em texto) ---- */
  if (C.logo && C.logo.nav) {
    $("brand-logo").src = C.logo.nav;
    $("brand-logo").alt = C.nome;
    $("brand-logo").hidden = false;
    document.querySelector(".brand-txt").hidden = true;
  }
  if (C.logo && C.logo.nav) {
    $("hero-logo").src = C.logo.nav;   /* logo branca centralizada sobre as fotos */
    $("hero-logo").alt = C.nome;
    $("hero-logo").hidden = false;
  }

  /* ---- Nav ---- */
  $("brand-nome").textContent = C.nome;
  $("brand-titulo").textContent = C.titulo;

  /* ---- Hero ---- */
  $("hero-eyebrow").textContent = `${C.nome} · ${C.titulo} · ${C.cidade}`;
  $("hero-headline").textContent = C.hero.headline;
  $("hero-sub").textContent = C.hero.sub;
  $("hero-cta1").textContent = C.hero.ctaPrimario.texto;  $("hero-cta1").href = waLink;
  $("hero-cta2").textContent = C.hero.ctaSecundario.texto; $("hero-cta2").href = waLink;
  $("hero-cred").textContent = `${C.nomeCompleto} · ${C.cref}`;

  /* ---- Slideshow do hero (3 fundos, troca a cada 6s com zoom lento) ---- */
  const slidesEl = $("hero-slides");
  const slides = (C.imagens.heroSlides || []).map((src, i) => {
    const d = document.createElement("div");
    d.className = "hero-slide" + (i === 0 ? " active" : "");
    d.style.backgroundImage = `url('${src}')`;
    slidesEl.appendChild(d);
    return d;
  });
  const reducedHero = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (slides.length > 1 && !reducedHero) {
    let cur = 0;
    setInterval(() => {
      slides[cur].classList.remove("active");
      cur = (cur + 1) % slides.length;
      slides[cur].classList.add("active");
    }, 6000);
  }

  /* ---- Diferenciais ---- */
  $("difs-grid").innerHTML = C.diferenciais.map((d, i) => `
    <div class="dif-card">
      <span class="dif-n">${String(i + 1).padStart(2, "0")}</span>
      <h3>${d.titulo}</h3><p>${d.texto}</p>
    </div>`).join("");

  /* ---- Sobre ---- */
  $("sobre-titulo").textContent = C.sobre.titulo;
  $("sobre-paragrafos").innerHTML = C.sobre.paragrafos.map(p => `<p>${p}</p>`).join("");
  $("sobre-chips").innerHTML = C.sobre.credenciais.map(c => `<span class="chip">${c}</span>`).join("");
  $("img-sobre").src = C.imagens.sobre;

  /* ---- Metodologia ---- */
  $("metodo-titulo").textContent = C.metodologia.titulo;
  $("metodo-intro").textContent = C.metodologia.intro;
  $("metodo-grid").innerHTML = C.metodologia.passos.map((p, i) => `
    <div class="passo">
      <span class="passo-n">${i + 1}</span>
      <h3>${p.titulo}</h3><p>${p.texto}</p>
    </div>`).join("");
  $("metodo-cta").textContent = C.metodologia.ctaTexto; $("metodo-cta").href = waLink;

  /* ---- Serviços ---- */
  $("serv-grid").innerHTML = C.servicos.map(s => `
    <div class="serv-card"><h3>${s.titulo}</h3><p>${s.texto}</p></div>`).join("");
  $("serv-cta").textContent = C.servicosCta; $("serv-cta").href = waLink;

  /* ---- Depoimentos ---- */
  $("depo-grid").innerHTML = C.depoimentos.map(d => `
    <figure class="depo-card">
      ${d.foto ? `<img class="depo-foto" src="${d.foto}" alt="Foto do aluno" loading="lazy">` : ""}
      <blockquote>“${d.texto}”</blockquote>
      <figcaption><strong>${d.nome}</strong><span>${d.resultado}</span></figcaption>
    </figure>`).join("");
  $("depo-disclaimer").textContent = C.disclaimer;

  /* ---- FAQ ---- */
  $("faq-list").innerHTML = C.faq.map(f => `
    <details class="faq-item">
      <summary>${f.pergunta}</summary>
      <p>${f.resposta}</p>
    </details>`).join("");

  /* ---- Captura (só aparece se ativa) ---- */
  if (C.captura && C.captura.ativo) {
    $("cap-titulo").textContent = C.captura.titulo;
    $("cap-texto").textContent = C.captura.texto;
    $("cap-botao").textContent = C.captura.botao;
    $("cap-form").action = `https://formspree.io/f/${C.formspreeId}`;
  } else {
    $("captura-sec").hidden = true;
  }

  /* ---- CTA final ---- */
  $("final-titulo").textContent = C.ctaFinal.titulo;
  $("final-texto").textContent = C.ctaFinal.texto;
  $("final-cta").textContent = C.ctaFinal.botao; $("final-cta").href = waLink;
  $("img-final").src = C.imagens.final;

  /* ---- Rodapé ---- */
  $("ft-nome").textContent = C.nomeCompleto;
  $("ft-cref").textContent = C.cref;
  $("ft-regiao").textContent = `Atendimento presencial em ${C.regiao} e consultoria online.`;
  $("ft-tel").textContent = C.telefoneExibicao;
  $("ft-email").textContent = C.email;
  $("ft-wa").href = waLink; $("ft-ig").href = igLink;
  $("ft-disclaimer").textContent = C.disclaimer;
  $("ft-copy").textContent = `© ${C.anoInicio} ${C.nomeCompleto} · ${C.cref} · Todos os direitos reservados.`;

  /* ---- Scroll reveal (textos entram ao rolar a página) ---- */
  const revealTargets = [
    ".hero-in > *",
    ".stat", ".dif-card", ".sobre-img", ".sobre-txt > *",
    ".metodo .tag", ".metodo h2", ".metodo-intro", ".passo", ".metodo .center",
    ".servicos .tag", ".servicos h2", ".serv-card", ".servicos .center",
    ".resultados .tag", ".resultados h2", ".res-intro", ".ba-wrap",
    ".depo .tag", ".depo h2", ".depo-card", ".depo .disclaimer",
    ".faq-in > div:first-child > *", ".faq-item",
    ".captura-in > *", ".final-txt > *", ".final-img"
  ];
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!reduced && "IntersectionObserver" in window) {
    const els = document.querySelectorAll(revealTargets.join(","));
    els.forEach(el => el.classList.add("reveal"));
    /* escalonar irmãos dentro do mesmo pai (efeito cascata) */
    const groups = new Map();
    els.forEach(el => {
      const k = el.parentElement;
      groups.set(k, (groups.get(k) || 0));
      el.style.transitionDelay = `${Math.min(groups.get(k) * 90, 450)}ms`;
      groups.set(k, groups.get(k) + 1);
    });
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    els.forEach(el => io.observe(el));
  }

  /* ---- Estatísticas com contagem animada ---- */
  if (C.estatisticas && C.estatisticas.ativo) {
    $("stats-sec").hidden = false;
    $("stats-grid").innerHTML = C.estatisticas.itens.map(s => `
      <div class="stat">
        <span class="stat-n" data-alvo="${s.numero}" data-sufixo="${s.sufixo}">0${s.sufixo}</span>
        <span class="stat-l">${s.label}</span>
      </div>`).join("");
    const reduzido = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const contar = (el) => {
      const alvo = +el.dataset.alvo, suf = el.dataset.sufixo, dur = 1400, t0 = performance.now();
      const passo = (t) => {
        const p = Math.min((t - t0) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(alvo * eased) + suf;
        if (p < 1) requestAnimationFrame(passo);
      };
      requestAnimationFrame(passo);
    };
    const nums = document.querySelectorAll(".stat-n");
    if (reduzido) nums.forEach(el => el.textContent = el.dataset.alvo + el.dataset.sufixo);
    else {
      const ioStats = new IntersectionObserver(es => es.forEach(e => {
        if (e.isIntersecting) { contar(e.target); ioStats.unobserve(e.target); }
      }), { threshold: 0.6 });
      nums.forEach(el => ioStats.observe(el));
    }
  }

  /* ---- Resultados: sliders antes/depois ---- */
  if (C.resultados && C.resultados.ativo) {
    $("resultados-sec").hidden = false;
    $("res-titulo").textContent = C.resultados.titulo;
    $("res-intro").textContent = C.resultados.intro;
    $("res-disclaimer").textContent = C.disclaimer;
    $("res-grid").innerHTML = C.resultados.casos.map((c, i) => `
      <figure class="ba-wrap">
        <div class="ba" id="ba-${i}">
          <img class="ba-img" src="${c.antes}" alt="Antes" draggable="false">
          <div class="ba-depois" style="clip-path:inset(0 0 0 50%)"><img class="ba-img" src="${c.depois}" alt="Depois" draggable="false"></div>
          <div class="ba-linha" style="left:50%"><span class="ba-alca">◂ ▸</span></div>
          <span class="ba-tag ba-esq">Antes</span><span class="ba-tag ba-dir">Depois</span>
          <input type="range" class="ba-range" min="0" max="100" value="50" aria-label="Comparar antes e depois">
        </div>
        <figcaption>${c.legenda}</figcaption>
      </figure>`).join("");
    document.querySelectorAll(".ba").forEach(ba => {
      const range = ba.querySelector(".ba-range");
      const depois = ba.querySelector(".ba-depois");
      const linha = ba.querySelector(".ba-linha");
      range.addEventListener("input", () => {
        depois.style.clipPath = `inset(0 0 0 ${range.value}%)`;
        linha.style.left = `${range.value}%`;
      });
    });
  }

  /* ---- Card cidade / hora / tempo ---- */
  if (C.clima && C.clima.ativo) {
    $("clima-card").hidden = false;
    $("clima-cidade").textContent = C.clima.cidade;
    const tick = () => {
      $("clima-hora").textContent = new Date().toLocaleTimeString("pt-BR",
        { hour: "2-digit", minute: "2-digit", timeZone: C.clima.fuso });
    };
    tick(); setInterval(tick, 15000);
    /* temperatura via Open-Meteo (sem chave). Se falhar, o card segue só com cidade+hora */
    const icones = {0:"☀️",1:"🌤️",2:"⛅",3:"☁️",45:"🌫️",48:"🌫️",51:"🌦️",53:"🌦️",55:"🌦️",
      61:"🌧️",63:"🌧️",65:"🌧️",80:"🌧️",81:"🌧️",82:"⛈️",95:"⛈️",96:"⛈️",99:"⛈️"};
    fetch(`https://api.open-meteo.com/v1/forecast?latitude=${C.clima.lat}&longitude=${C.clima.lon}&current=temperature_2m,weather_code&timezone=${encodeURIComponent(C.clima.fuso)}`)
      .then(r => r.json())
      .then(d => {
        const t = Math.round(d.current.temperature_2m);
        const ic = icones[d.current.weather_code] || "🌡️";
        $("clima-tempo").textContent = `${ic} ${t}°C`;
      })
      .catch(() => { /* sem internet ou API fora: card fica com cidade+hora */ });
  }

  /* ---- Botão flutuante WhatsApp ---- */
  $("wa-float").href = waLink;

  /* ---- Banner de cookies (LGPD) ---- */
  if (C.cookies && C.cookies.ativo) {
    let aceito = false;
    try { aceito = localStorage.getItem("cookiesAceitos") === "1"; } catch (e) {}
    if (!aceito) {
      const banner = $("cookie-banner");
      $("cookie-text").textContent = C.cookies.texto;
      const link = $("cookie-link");
      link.textContent = C.cookies.linkTexto;
      link.href = C.cookies.linkUrl;
      const btn = $("cookie-accept");
      btn.textContent = C.cookies.botao;
      banner.hidden = false;
      btn.addEventListener("click", () => {
        try { localStorage.setItem("cookiesAceitos", "1"); } catch (e) {}
        banner.hidden = true;
      });
    }
  }

  /* ---- Menu mobile ---- */
  const burger = $("burger"), menu = $("menu");
  burger.addEventListener("click", () => menu.classList.toggle("open"));
  menu.querySelectorAll("a").forEach(a => a.addEventListener("click", () => menu.classList.remove("open")));
})();
