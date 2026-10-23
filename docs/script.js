// Estrutura padrão para cada encontro
const contentData = {
  "sobre": {
    title: "Sobre o curso",
    html: `
      <div class="content-section">
        <p>Esse curso discute os impactos da ciência de dados a partir de uma premissa:
        não existe algoritmo neutro e os dados não falam por si só. Partindo da crítica
        à suposta neutralidade dos dados e dos modelos, discutiremos ferramentas
        teóricas, como conceitos éticos de justiça e igualdade a partir de diferentes
        correntes filosóficas, e ferramentas práticas, como métricas estatísticas de
        equidade e técnicas de explicabilidade, para que vieses sejam identificados e,
        quando possível, mitigados. Durante quatro encontros, examinaremos onde o viés
        aparece no ciclo de vida dos dados, como auditar modelos opacos e quais os
        avanços recentes no debate sobre governança de dados e regulação no Brasil e no
        mundo. Ao longo dessas aulas, vamos tentar abordar de maneiras diferentes uma
        pergunta importante e pouco explorada no desenvolvimento de modelos de
        aprendizado de máquina e aprendizado profundo: quem são as pessoas interessadas
        nesses sistemas e quem são as pessoas afetadas por eles.
</p>
      </div>
    `
  },
  "encontro-1": {
    title: "Encontro 1",
    html: `
      <div class="content-section">
        <ul class="topics-list">
          <li><a href="https://exemplo.com/slides1" target="_blank" rel="noopener noreferrer" class="content-link">slides</a></li>
          <li><a href="https://exemplo.com/notebook1" target="_blank" rel="noopener noreferrer" class="content-link">notebook</a></li>
        </ul>
        
        <div class="content-block">
          <h3>Referências</h3>
          <ul>
            <li>bla</li>
            <li>bla2</li>
          </ul>
        </div>

        <div class="content-block">
          <h3>Leituras Adicionais</h3>
          <ul>
            <li>bla</li>
            <li>bla2</li>
          </ul>
        </div>
      </div>
    `
  },
  "encontro-2": {
    title: "Encontro 2",
    html: `
      <div class="content-section">
        <ul class="topics-list">
          <li><a href="https://exemplo.com/slides2" target="_blank" rel="noopener noreferrer" class="content-link">slides</a></li>
          <li><a href="https://exemplo.com/notebook2" target="_blank" rel="noopener noreferrer" class="content-link">notebook</a></li>
        </ul>
        
        <div class="content-block">
          <h3>Referências</h3>
          <ul>
            <li>bla</li>
            <li>bla2</li>
          </ul>
        </div>

        <div class="content-block">
          <h3>Leituras Adicionais</h3>
          <ul>
            <li>bla</li>
            <li>bla2</li>
          </ul>
        </div>
      </div>
    `
  },
  "encontro-3": {
    title: "Encontro 3",
    html: `
      <div class="content-section">
        <ul class="topics-list">
          <li><a href="https://exemplo.com/slides3" target="_blank" rel="noopener noreferrer" class="content-link">slides</a></li>
          <li><a href="https://exemplo.com/notebook3" target="_blank" rel="noopener noreferrer" class="content-link">notebook</a></li>
        </ul>
        
        <div class="content-block">
          <h3>Referências</h3>
          <ul>
            <li>bla</li>
            <li>bla2</li>
          </ul>
        </div>

        <div class="content-block">
          <h3>Leituras Adicionais</h3>
          <ul>
            <li>bla</li>
            <li>bla2</li>
          </ul>
        </div>
      </div>
    `
  },
  "encontro-4": {
    title: "Encontro 4",
    html: `
      <div class="content-section">
        <ul class="topics-list">
          <li><a href="https://exemplo.com/slides4" target="_blank" rel="noopener noreferrer" class="content-link">slides</a></li>
          <li><a href="https://exemplo.com/notebook4" target="_blank" rel="noopener noreferrer" class="content-link">notebook</a></li>
        </ul>
        
        <div class="content-block">
          <h3>Referências</h3>
          <ul>
            <li>bla</li>
            <li>bla2</li>
          </ul>
        </div>

        <div class="content-block">
          <h3>Leituras Adicionais</h3>
          <ul>
            <li>bla</li>
            <li>bla2</li>
          </ul>
        </div>
      </div>
    `
  }
};

const contentPanel = document.getElementById("content-panel");
const navButtons = document.querySelectorAll(".nav-item");

function renderContent(id) {
  const data = contentData[id];
  if (!data) return;

  contentPanel.innerHTML = `
    <h2>${data.title}</h2>
    ${data.html}
  `;
}

navButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    navButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    const targetId = btn.getAttribute("data-id");
    renderContent(targetId);
  });
});

// Inicializa na página do Encontro 1
renderContent("sobre");