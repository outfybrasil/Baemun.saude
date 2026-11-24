// =============================================================================
// BAEMUN — CONFIGURAÇÃO CENTRAL & ESTRUTURA DE DADOS MODULAR
// =============================================================================

const WHATSAPP_NUMBER = "5541999999999"; // TODO: substituir pelo número comercial da Rachel
const WHATSAPP_DEFAULT_MESSAGE =
  "Olá! Gostaria de receber informações sobre o acompanhamento biomédico da BAEMUN.";

function buildWhatsAppUrl(customMessage) {
  const cleanNumber = WHATSAPP_NUMBER.replace(/\D/g, "");
  const text = customMessage || WHATSAPP_DEFAULT_MESSAGE;
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(text)}`;
}

// =============================================================================
// CONDIÇÕES ACOMPANHADAS (ordem obrigatória: Doença Celíaca em 1º lugar)
// Dica: altere `active: false` em qualquer item para ocultá-lo da Home sem
// precisar editar o HTML manualmente (ex.: Artrite Reumatoide).
// =============================================================================
const CONDITIONS_DATA = [
  {
    id: "doenca-celiaca",
    slug: "doenca-celiaca",
    name: "Doença Celíaca",
    tag: "Autoimune Sistêmica",
    shortDesc:
      "Condição autoimune desencadeada pelo glúten que exige atenção à rotina, contaminação cruzada e acompanhamento evolutivo de marcadores laboratoriais.",
    active: true
  },
  {
    id: "tireoidite-de-hashimoto",
    slug: "tireoidite-de-hashimoto",
    name: "Tireoidite de Hashimoto",
    tag: "Autoimune da Tireoide",
    shortDesc:
      "Condição autoimune da tireoide que pode cursar com cansaço e sintomas persistentes, beneficiando-se da leitura evolutiva de exames e educação em saúde.",
    active: true
  },
  {
    id: "doenca-de-crohn",
    slug: "doenca-de-crohn",
    name: "Doença de Crohn",
    tag: "Inflamatória Intestinal",
    shortDesc:
      "Doença inflamatória intestinal crônica que pode acometer diferentes segmentos do trato digestivo e demanda vigilância contínua de exames e hábitos.",
    active: true
  },
  {
    id: "retocolite-ulcerativa",
    slug: "retocolite-ulcerativa",
    name: "Retocolite Ulcerativa",
    tag: "Inflamatória Intestinal",
    shortDesc:
      "Inflamação crônica da mucosa do intestino grosso (cólon e reto), em que o monitoramento laboratorial e o cuidado complementar apoiam a qualidade de vida.",
    active: true
  },
  {
    id: "artrite-reumatoide",
    slug: "artrite-reumatoide",
    name: "Artrite Reumatoide",
    tag: "Autoimune Articular",
    shortDesc:
      "Condição autoimune inflamatória das articulações que responde positivamente à organização da rotina, acompanhamento de provas inflamatórias e educação em saúde.",
    active: true
  }
];

// =============================================================================
// CONTEÚDOS EDUCATIVOS (estrutura modular para novos artigos e futuros parceiros)
// =============================================================================
const ARTICLES_DATA = [
  {
    id: "doenca-celiaca-contaminacao-cruzada",
    slug: "doenca-celiaca-contaminacao-cruzada",
    category: "Doença Celíaca",
    title: "Doença celíaca: por que a contaminação cruzada merece tanta atenção?",
    excerpt:
      "Entenda por que evitar o glúten como ingrediente não basta e como pequenos resíduos em utensílios e superfícies podem desencadear resposta imunológica.",
    readTime: "4 min de leitura",
    author: "Rachel Valente Gomes · CRBM-6 nº 9916",
    icon: "shield",
    active: true
  },
  {
    id: "hashimoto-tsh-t4-livre-anti-tpo",
    slug: "hashimoto-tsh-t4-livre-anti-tpo",
    category: "Tireoidite de Hashimoto",
    title: "Hashimoto: o que significam TSH, T4 livre e anti-TPO?",
    excerpt:
      "Saiba qual informação cada um desses três exames fornece e por que eles precisam ser interpretados em conjunto com o histórico clínico.",
    readTime: "4 min de leitura",
    author: "Rachel Valente Gomes · CRBM-6 nº 9916",
    icon: "lab",
    active: true
  },
  {
    id: "doenca-de-crohn-e-retocolite-ulcerativa-diferencas",
    slug: "doenca-de-crohn-e-retocolite-ulcerativa-diferencas",
    category: "Doenças Inflamatórias Intestinais",
    title: "Doença de Crohn e retocolite ulcerativa: quais são as diferenças?",
    excerpt:
      "Conheça as características que diferenciam as duas principais doenças inflamatórias intestinais e a importância do acompanhamento contínuo.",
    readTime: "4 min de leitura",
    author: "Rachel Valente Gomes · CRBM-6 nº 9916",
    icon: "layers",
    active: true
  },
  {
    id: "alimentacao-pode-influenciar-doencas-autoimunes",
    slug: "alimentacao-pode-influenciar-doencas-autoimunes",
    category: "Alimentação e Saúde",
    title: "A alimentação pode influenciar as doenças autoimunes?",
    excerpt:
      "Veja o que a ciência aponta sobre alimentação nas diferentes condições autoimunes e por que restrições sem indicação podem trazer riscos.",
    readTime: "4 min de leitura",
    author: "Rachel Valente Gomes · CRBM-6 nº 9916",
    icon: "leaf",
    active: true
  }
];

function getArticleIconSvg(iconName) {
  const icons = {
    shield:
      '<svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.6" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3l7 3v5c0 5-3.2 8.7-7 10-3.8-1.3-7-5-7-10V6l7-3z"/><path stroke-linecap="round" stroke-linejoin="round" d="M9.5 12.25l1.75 1.75 3.5-3.75"/></svg>',
    lab:
      '<svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.6" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 3h6m-5 0v5.5L5.5 17a2.5 2.5 0 002.15 3.75h8.7A2.5 2.5 0 0018.5 17L14 8.5V3"/><path stroke-linecap="round" stroke-linejoin="round" d="M7.5 15h9"/></svg>',
    layers:
      '<svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.6" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3l8 4.5-8 4.5-8-4.5L12 3z"/><path stroke-linecap="round" stroke-linejoin="round" d="M4 12l8 4.5 8-4.5"/><path stroke-linecap="round" stroke-linejoin="round" d="M4 16.5L12 21l8-4.5"/></svg>',
    leaf:
      '<svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.6" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 19c2-7 8-12 14-14-1 8-5 13-12 14H5z"/><path stroke-linecap="round" stroke-linejoin="round" d="M5 19l6-6"/></svg>'
  };
  return icons[iconName] || icons.shield;
}

// =============================================================================
// INICIALIZAÇÃO COMPARTILHADA (WhatsApp, Menu Mobile, Grids Modulares e FAQ)
// =============================================================================
document.addEventListener("DOMContentLoaded", () => {
  // 1. Aplica URL do WhatsApp em todos os links [data-whatsapp]
  document.querySelectorAll("[data-whatsapp]").forEach((el) => {
    const customMsg = el.getAttribute("data-whatsapp-msg");
    el.setAttribute("href", buildWhatsAppUrl(customMsg));
    el.setAttribute("target", "_blank");
    el.setAttribute("rel", "noopener noreferrer");
  });

  // 2. Menu Mobile Toggle
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const iconOpen = document.getElementById("menu-icon-open");
  const iconClose = document.getElementById("menu-icon-close");

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener("click", () => {
      const isHidden = mobileMenu.classList.contains("hidden");
      mobileMenu.classList.toggle("hidden", !isHidden);
      if (iconOpen && iconClose) {
        iconOpen.classList.toggle("hidden", isHidden);
        iconClose.classList.toggle("hidden", !isHidden);
      }
    });

    document.querySelectorAll(".mobile-nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
        if (iconOpen && iconClose) {
          iconOpen.classList.remove("hidden");
          iconClose.classList.add("hidden");
        }
      });
    });
  }

  // 3. Renderização Modular da Grade de Condições na Home (respeitando `active`)
  const conditionsGrid = document.getElementById("conditions-grid");
  if (conditionsGrid) {
    const activeConditions = CONDITIONS_DATA.filter((c) => c.active);
    conditionsGrid.innerHTML = activeConditions
      .map(
        (cond, idx) => `
      <article class="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 border-t-4 ${
        idx === 0 ? "border-t-baemun-navy" : "border-t-baemun-teal"
      } shadow-sm hover:shadow-md transition-all flex flex-col justify-between dna-watermark">
        <div class="dna-content space-y-3">
          <div class="flex items-center justify-between gap-2">
            <span class="inline-block text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-baemun-soft text-baemun-teal">
              ${cond.tag}
            </span>
            <span class="text-xs font-cinzel font-bold text-baemun-navy/40">0${idx + 1}</span>
          </div>
          <h3 class="font-cinzel text-lg sm:text-xl font-bold text-baemun-navy leading-snug">
            ${cond.name}
          </h3>
          <p class="text-sm text-slate-600 leading-relaxed">
            ${cond.shortDesc}
          </p>
        </div>
        <div class="dna-content pt-5 mt-5 border-t border-slate-100">
          <a href="condicoes/${cond.slug}/" class="inline-flex items-center gap-2 text-sm font-bold text-baemun-teal hover:text-baemun-navy transition-colors group">
            <span>Saiba mais</span>
            <svg class="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
          </a>
        </div>
      </article>`
      )
      .join("");
  }

  // 4. Renderização Modular da Grade de Conteúdos na Home
  const articlesGrid = document.getElementById("articles-grid");
  if (articlesGrid) {
    const activeArticles = ARTICLES_DATA.filter((a) => a.active);
    articlesGrid.innerHTML = activeArticles
      .map(
        (art, idx) => `
      <article class="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
        <div>
          <div class="${
            idx % 2 === 0 ? "bg-baemun-soft" : "bg-baemun-navy text-white"
          } px-6 py-4 flex items-center justify-between gap-3 border-b ${
          idx % 2 === 0 ? "border-baemun-teal/15" : "border-white/10"
        }">
            <span class="text-[11px] font-bold uppercase tracking-wider ${
              idx % 2 === 0 ? "text-baemun-teal" : "text-teal-200"
            }">
              ${art.category}
            </span>
            <span class="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
              idx % 2 === 0
                ? "bg-white text-baemun-teal border border-baemun-teal/20"
                : "bg-white/10 text-teal-200 border border-white/15"
            }">
              ${getArticleIconSvg(art.icon)}
            </span>
          </div>
          <div class="p-6 space-y-3">
            <h3 class="font-cinzel text-lg font-bold text-baemun-navy leading-snug">
              <a href="conteudos/${art.slug}/" class="hover:text-baemun-teal transition-colors">
                ${art.title}
              </a>
            </h3>
            <p class="text-sm text-slate-600 leading-relaxed">
              ${art.excerpt}
            </p>
          </div>
        </div>
        <div class="px-6 pb-6 pt-3 flex items-center justify-between border-t border-slate-100 mt-auto">
          <span class="text-xs text-slate-400 font-medium">${art.readTime}</span>
          <a href="conteudos/${art.slug}/" class="inline-flex items-center gap-1.5 text-sm font-bold text-baemun-teal hover:text-baemun-navy transition-colors group">
            <span>Ler artigo</span>
            <svg class="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
          </a>
        </div>
      </article>`
      )
      .join("");
  }

  // 5. Renderização de "Outros Artigos" nas páginas individuais de artigo
  const relatedArticlesContainer = document.getElementById("related-articles");
  if (relatedArticlesContainer) {
    const currentSlug = relatedArticlesContainer.getAttribute("data-current-slug");
    const others = ARTICLES_DATA.filter((a) => a.active && a.slug !== currentSlug);
    relatedArticlesContainer.innerHTML = others
      .map(
        (art) => `
      <a href="../${art.slug}/" class="block bg-white rounded-2xl p-5 border border-slate-200 border-t-4 border-t-baemun-teal hover:shadow-md transition-all group">
        <span class="text-[11px] font-bold uppercase tracking-wider text-baemun-teal block mb-1.5">${art.category}</span>
        <h4 class="font-cinzel text-sm sm:text-base font-bold text-baemun-navy group-hover:text-baemun-teal transition-colors leading-snug">
          ${art.title}
        </h4>
        <span class="inline-flex items-center gap-1 text-xs font-bold text-baemun-teal mt-3">
          Ler artigo →
        </span>
      </a>`
      )
      .join("");
  }

  // 6. Accordion de Dúvidas Frequentes (FAQ)
  document.querySelectorAll(".faq-toggle").forEach((btn) => {
    btn.addEventListener("click", () => {
      const content = btn.nextElementSibling;
      const icon = btn.querySelector(".faq-icon");
      const isExpanded = btn.getAttribute("aria-expanded") === "true";

      btn.setAttribute("aria-expanded", String(!isExpanded));
      content.classList.toggle("hidden", isExpanded);
      if (icon) {
        icon.textContent = isExpanded ? "+" : "−";
      }
    });
  });
});
