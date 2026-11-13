/* =============================================================
   DOCE NATAL — Música natal_av2_web.mp3
   O HTML contém a tag <audio>, o CSS cuida do botão e
   este arquivo controla iniciar/pausar após o clique.
   ============================================================= */

(() => {
  'use strict';

  const botao = document.getElementById('btn-musica');
  const audio = document.getElementById('musica-natal');
  if (!botao || !audio) return;

  audio.volume = 0.25;
  audio.loop = true;

  function atualizarBotao() {
    const tocando = !audio.paused;
    botao.textContent = tocando ? '♫ Desligar música' : '♫ Ligar música';
    botao.setAttribute('aria-pressed', String(tocando));
    botao.classList.toggle('tocando', tocando);
  }

  botao.addEventListener('click', async () => {
    if (!audio.paused) {
      audio.pause();
      return;
    }

    try {
      await audio.play();
    } catch (erro) {
      botao.textContent = '♫ Áudio indisponível';
      botao.title = 'Confira o arquivo audio/natal_av2_web.mp3';
      console.error('Não foi possível iniciar a música:', erro);
    }
  });

  audio.addEventListener('play', atualizarBotao);
  audio.addEventListener('pause', atualizarBotao);
  audio.addEventListener('ended', atualizarBotao);
  atualizarBotao();
})();
