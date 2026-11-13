/* =============================================================
   DOCE NATAL — Interações do site
   Catálogo, neve, luzes, slideshow, sacola e formulário.
   Sem bibliotecas externas.
   ============================================================= */

(() => {
  'use strict';

  const $ = (seletor) => document.querySelector(seletor);
  const $$ = (seletor) => Array.from(document.querySelectorAll(seletor));
  const moeda = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });

  // 1. Mensagem breve de confirmação.
  let tempoToast;

  function avisar(mensagem) {
    const aviso = $('#toast');
    if (!aviso) return;

    aviso.textContent = mensagem;
    aviso.classList.add('visivel');
    clearTimeout(tempoToast);
    tempoToast = setTimeout(() => aviso.classList.remove('visivel'), 3000);
  }

  // 2. Cordão de lâmpadas: pares e ímpares alternam no CSS.
  const luzes = $('#luzes');
  const cores = ['#ed7790', '#f5c96c', '#9ccbb1', '#f5efe1'];

  if (luzes) {
    for (let indice = 0; indice < 26; indice += 1) {
      const lampada = document.createElement('span');
      lampada.className = 'lampada';
      lampada.style.setProperty('--cor', cores[indice % cores.length]);
      luzes.appendChild(lampada);
    }
  }

  // 3. Flocos com velocidade lenta e posições distribuídas.
  const neve = $('#neve');

  if (neve && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    for (let indice = 0; indice < 36; indice += 1) {
      const floco = document.createElement('i');
      floco.className = 'floco';
      floco.style.setProperty('--x', `${(indice * 37.7) % 100}%`);
      floco.style.setProperty('--t', `${3 + (indice % 4)}px`);
      floco.style.setProperty('--op', `${0.45 + ((indice % 5) * 0.08)}`);
      floco.style.setProperty('--dur', `${44 + ((indice * 11) % 27)}s`);
      floco.style.setProperty('--delay', `${-((indice * 13) % 70)}s`);
      floco.style.setProperty('--desloc', `${(indice % 2 ? 1 : -1) * (7 + indice % 18)}px`);
      neve.appendChild(floco);
    }
  }

  // 4. Menu para celular e tablet.
  const botaoMenu = $('.btn-menu');
  const menu = $('.menu');

  if (botaoMenu && menu) {
    botaoMenu.addEventListener('click', () => {
      const aberto = menu.classList.toggle('aberto');
      botaoMenu.setAttribute('aria-expanded', String(aberto));
      botaoMenu.setAttribute('aria-label', aberto ? 'Fechar menu' : 'Abrir menu');
    });
  }

  // 5. Slideshow com setas, marcadores e rotação automática.
  const slides = $$('.slide');
  const indicadores = $('#indicadores');

  if (slides.length && indicadores) {
    let atual = 0;
    let temporizador;

    function mostrarSlide(indice) {
      atual = (indice + slides.length) % slides.length;

      slides.forEach((slide, posicao) => {
        const ativo = posicao === atual;
        slide.classList.toggle('ativo', ativo);
        slide.setAttribute('aria-hidden', String(!ativo));
      });

      $$('#indicadores button').forEach((botao, posicao) => {
        botao.classList.toggle('ativo', posicao === atual);
        botao.setAttribute('aria-current', String(posicao === atual));
      });
    }

    slides.forEach((_, indice) => {
      const indicador = document.createElement('button');
      indicador.type = 'button';
      indicador.setAttribute('aria-label', `Ir para slide ${indice + 1}`);
      indicador.addEventListener('click', () => {
        mostrarSlide(indice);
        reiniciarRotacao();
      });
      indicadores.appendChild(indicador);
    });

    function reiniciarRotacao() {
      clearInterval(temporizador);
      temporizador = setInterval(() => mostrarSlide(atual + 1), 7500);
    }

    $('#anterior')?.addEventListener('click', () => {
      mostrarSlide(atual - 1);
      reiniciarRotacao();
    });

    $('#proximo')?.addEventListener('click', () => {
      mostrarSlide(atual + 1);
      reiniciarRotacao();
    });

    const carrossel = $('.carrossel');
    carrossel?.addEventListener('mouseenter', () => clearInterval(temporizador));
    carrossel?.addEventListener('mouseleave', reiniciarRotacao);

    mostrarSlide(0);
    reiniciarRotacao();
  }

  // 6. Parallax: movimentos discretos de camadas durante a rolagem.
  const camadas = $$('[data-velocidade]');
  let rolagemAgendada = false;

  if (camadas.length && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    window.addEventListener('scroll', () => {
      if (rolagemAgendada) return;
      rolagemAgendada = true;

      requestAnimationFrame(() => {
        camadas.forEach((camada) => {
          const secao = camada.closest('.hero, .parallax-doce');
          const topo = secao ? secao.getBoundingClientRect().top : 0;
          const distancia = Math.max(-500, Math.min(500, -topo));
          const velocidade = Number(camada.dataset.velocidade) || 0;
          camada.style.transform = `translateY(${distancia * velocidade}px)`;
        });
        rolagemAgendada = false;
      });
    }, { passive: true });
  }

  // 7. Cartões produzidos a partir do catálogo em produtos.js.
  function criarCard(produto) {
    return `
      <article class="card">
        <div class="card-arte card-foto">
          <img src="${produto.imagem}" alt="${produto.nome}"
               loading="eager" decoding="async" width="640" height="640">
          <span class="foto-vazia" hidden>Imagem indisponível</span>
        </div>
        <div class="card-corpo">
          <span class="card-categoria">${produto.categoria}</span>
          <h3>${produto.nome}</h3>
          <div class="card-preco">${moeda.format(produto.preco)}</div>
          <div class="card-acoes">
            <button type="button" data-adicionar="${produto.id}">Adicionar +</button>
            <button type="button" class="detalhes" data-detalhes="${produto.id}">Detalhes</button>
          </div>
        </div>
      </article>
    `;
  }

  function renderizar(seletor, lista) {
    const destino = $(seletor);
    if (!destino) return;

    destino.innerHTML = lista.length
      ? lista.map(criarCard).join('')
      : '<p>Nenhum doce encontrado para essa busca.</p>';

    destino.querySelectorAll('.card-foto img').forEach((imagem) => {
      imagem.addEventListener('error', () => {
        imagem.hidden = true;
        imagem.nextElementSibling.hidden = false;
      });
    });
  }

  const destaques = produtos.filter((produto) => produto.destaque);
  renderizar('#destaques', destaques.slice(0, 4));
  renderizar('#ofertas-lista', destaques.slice(0, 8));

  // 8. Filtro por categoria, nome e ordenação por preço.
  const listaProdutos = $('#lista-produtos');

  if (listaProdutos) {
    const campoBusca = $('#busca');
    const campoCategoria = $('#categoria');
    const campoOrdem = $('#ordem');
    const categorias = [...new Set(produtos.map((produto) => produto.categoria))];

    categorias.forEach((categoria) => {
      campoCategoria.add(new Option(categoria, categoria));
    });

    function filtrar() {
      const texto = campoBusca.value.trim().toLocaleLowerCase('pt-BR');
      const categoria = campoCategoria.value;
      const ordem = campoOrdem.value;

      const resultados = produtos.filter((produto) => {
        const nomeCorresponde = produto.nome.toLocaleLowerCase('pt-BR').includes(texto);
        const categoriaCorresponde = categoria === 'todas' || produto.categoria === categoria;
        return nomeCorresponde && categoriaCorresponde;
      });

      if (ordem === 'menor') resultados.sort((a, b) => a.preco - b.preco);
      if (ordem === 'maior') resultados.sort((a, b) => b.preco - a.preco);
      if (ordem === 'padrao') {
        resultados.sort((a, b) => Number(b.destaque) - Number(a.destaque) || a.id - b.id);
      }

      renderizar('#lista-produtos', resultados);
      $('#contador').textContent = `Mostrando ${resultados.length} de ${produtos.length} produtos`;
    }

    campoBusca.addEventListener('input', filtrar);
    campoCategoria.addEventListener('change', filtrar);
    campoOrdem.addEventListener('change', filtrar);
    filtrar();
  }

  // 9. Sacola persistente entre páginas via localStorage.
  const CHAVE_CARRINHO = 'doceNatalCarrinho';
  let carrinho = [];

  try {
    const armazenado = JSON.parse(localStorage.getItem(CHAVE_CARRINHO) || '[]');
    if (Array.isArray(armazenado)) {
      carrinho = armazenado.filter((item) =>
        produtos.some((produto) => produto.id === item.id) &&
        Number.isInteger(item.qtd) && item.qtd > 0
      );
    }
  } catch (erro) {
    carrinho = [];
  }

  function atualizarCarrinho() {
    const quantidade = carrinho.reduce((total, item) => total + item.qtd, 0);
    const contador = $('#qtd-carrinho');
    if (contador) contador.textContent = quantidade;

    const itens = $('#itens-carrinho');
    if (!itens) return;

    if (!carrinho.length) {
      itens.innerHTML = '<p>Sua sacola está vazia. Escolha doces no catálogo.</p>';
    } else {
      itens.innerHTML = carrinho.map((item) => {
        const produto = produtos.find((atual) => atual.id === item.id);
        if (!produto) return '';

        return `
          <div class="item-carrinho">
            <span>${produto.nome} × ${item.qtd}</span>
            <strong>${moeda.format(produto.preco * item.qtd)}</strong>
            <button type="button" data-remover="${produto.id}">Remover 1</button>
          </div>
        `;
      }).join('');
    }

    const total = carrinho.reduce((soma, item) => {
      const produto = produtos.find((atual) => atual.id === item.id);
      return soma + (produto?.preco || 0) * item.qtd;
    }, 0);

    $('#total-carrinho').textContent = moeda.format(total);
  }

  function salvarCarrinho() {
    try {
      localStorage.setItem(CHAVE_CARRINHO, JSON.stringify(carrinho));
    } catch (erro) {
      // Em navegação privada o armazenamento pode não estar disponível.
    }
    atualizarCarrinho();
  }

  function adicionarProduto(id) {
    const produto = produtos.find((item) => item.id === id);
    if (!produto) return;

    const existente = carrinho.find((item) => item.id === id);
    if (existente) existente.qtd += 1;
    else carrinho.push({ id, qtd: 1 });

    salvarCarrinho();
    avisar(`${produto.nome} adicionado à sacola!`);
  }

  document.addEventListener('click', (evento) => {
    const adicionar = evento.target.closest('[data-adicionar]');
    const remover = evento.target.closest('[data-remover]');
    const detalhes = evento.target.closest('[data-detalhes]');

    if (adicionar) {
      adicionarProduto(Number(adicionar.dataset.adicionar));
    }

    if (remover) {
      const id = Number(remover.dataset.remover);
      const item = carrinho.find((atual) => atual.id === id);
      if (item) {
        item.qtd -= 1;
        carrinho = carrinho.filter((atual) => atual.qtd > 0);
        salvarCarrinho();
      }
    }

    if (detalhes) {
      const produto = produtos.find((item) => item.id === Number(detalhes.dataset.detalhes));
      const modal = $('#modal-produto');

      if (produto && modal) {
        $('#modal-conteudo').innerHTML = `
          <img class="modal-foto" src="${produto.imagem}" alt="${produto.nome}">
          <span class="sobretitulo">${produto.categoria}</span>
          <h2>${produto.nome}</h2>
          <p class="card-preco">${moeda.format(produto.preco)}</p>
          <button class="botao" type="button" data-adicionar="${produto.id}">Adicionar à sacola +</button>
        `;
        modal.showModal();
      }
    }
  });

  const modal = $('#modal-produto');
  if (modal) {
    $('.fechar-modal')?.addEventListener('click', () => modal.close());
    modal.addEventListener('click', (evento) => {
      if (evento.target === modal) modal.close();
    });
  }

  atualizarCarrinho();

  // 10. Contagem regressiva para o próximo Natal.
  if ($('#contagem')) {
    function atualizarContagem() {
      const agora = new Date();
      let natal = new Date(agora.getFullYear(), 11, 25, 0, 0, 0);
      if (agora >= natal) natal = new Date(agora.getFullYear() + 1, 11, 25);

      const restante = natal - agora;
      const dias = Math.floor(restante / 86400000);
      const horas = Math.floor(restante / 3600000) % 24;
      const minutos = Math.floor(restante / 60000) % 60;
      const segundos = Math.floor(restante / 1000) % 60;
      $('#contagem').textContent = `${dias} dias • ${horas}h ${minutos}min ${segundos}s`;
    }

    atualizarContagem();
    setInterval(atualizarContagem, 1000);
  }

  // 11. Contato demonstrativo: validação sem envio ou armazenamento.
  const formulario = $('#form-contato');

  if (formulario) {
    formulario.addEventListener('submit', (evento) => {
      evento.preventDefault();

      const nome = $('#nome').value.trim();
      const email = $('#email').value.trim();
      const assunto = $('#assunto').value;
      const mensagem = $('#mensagem').value.trim();
      const status = $('#mensagem-form');

      if (nome.length < 2) status.textContent = 'Informe um nome com pelo menos duas letras.';
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) status.textContent = 'Informe um e-mail válido.';
      else if (!assunto) status.textContent = 'Escolha um assunto.';
      else if (mensagem.length < 10) status.textContent = 'Escreva pelo menos dez caracteres.';
      else {
        status.textContent = `Mensagem validada, ${nome}! Demonstração: nenhum dado foi enviado.`;
        formulario.reset();
      }
    });
  }

  // 12. Entrada gradual e atalho de retorno ao topo.
  const revelaveis = $$('.revelar');

  if ('IntersectionObserver' in window) {
    const observador = new IntersectionObserver((entradas) => {
      entradas.forEach((entrada) => {
        if (!entrada.isIntersecting) return;
        entrada.target.classList.add('visivel');
        observador.unobserve(entrada.target);
      });
    }, { threshold: 0.08 });

    revelaveis.forEach((elemento) => observador.observe(elemento));
  } else {
    revelaveis.forEach((elemento) => elemento.classList.add('visivel'));
  }

  const voltar = $('#topo');
  if (voltar) {
    window.addEventListener('scroll', () => {
      voltar.style.display = window.scrollY > 400 ? 'block' : 'none';
    }, { passive: true });

    voltar.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
})();
