// Catálogo da Doce Natal: 50 produtos, 5 categorias e fotos individuais.
// Os preços são fictícios para a atividade escolar.

const produtos = [
  {
    "id": 1,
    "nome": "Panetone Artesanal de Frutas",
    "categoria": "Panetones e bolos",
    "preco": 49.9,
    "imagem": "img/produtos/panetone-artesanal-de-frutas.webp",
    "descricao": "",
    "destaque": true
  },
  {
    "id": 2,
    "nome": "Chocotone com Ganache",
    "categoria": "Panetones e bolos",
    "preco": 56.9,
    "imagem": "img/produtos/chocotone-com-ganache.webp",
    "descricao": "",
    "destaque": true
  },
  {
    "id": 3,
    "nome": "Bolo Red Velvet",
    "categoria": "Panetones e bolos",
    "preco": 69.9,
    "imagem": "img/produtos/bolo-red-velvet.webp",
    "descricao": "",
    "destaque": false
  },
  {
    "id": 4,
    "nome": "Bolo de Chocolate",
    "categoria": "Panetones e bolos",
    "preco": 58.9,
    "imagem": "img/produtos/bolo-de-chocolate.webp",
    "descricao": "",
    "destaque": false
  },
  {
    "id": 5,
    "nome": "Bolo de Baunilha com Glacê",
    "categoria": "Panetones e bolos",
    "preco": 55.9,
    "imagem": "img/produtos/bolo-de-baunilha-com-glace.webp",
    "descricao": "",
    "destaque": false
  },
  {
    "id": 6,
    "nome": "Bolo de Nozes",
    "categoria": "Panetones e bolos",
    "preco": 62.9,
    "imagem": "img/produtos/bolo-de-nozes.webp",
    "descricao": "",
    "destaque": false
  },
  {
    "id": 7,
    "nome": "Rocambole de Chocolate",
    "categoria": "Panetones e bolos",
    "preco": 59.9,
    "imagem": "img/produtos/rocambole-de-chocolate.webp",
    "descricao": "",
    "destaque": false
  },
  {
    "id": 8,
    "nome": "Pavê de Chocolate",
    "categoria": "Panetones e bolos",
    "preco": 32.9,
    "imagem": "img/produtos/pave-de-chocolate.webp",
    "descricao": "",
    "destaque": false
  },
  {
    "id": 9,
    "nome": "Mousse de Morango",
    "categoria": "Panetones e bolos",
    "preco": 18.9,
    "imagem": "img/produtos/mousse-de-morango.webp",
    "descricao": "",
    "destaque": false
  },
  {
    "id": 10,
    "nome": "Panetone Tradicional",
    "categoria": "Panetones e bolos",
    "preco": 46.9,
    "imagem": "img/produtos/panetone-tradicional.webp",
    "descricao": "",
    "destaque": false
  },
  {
    "id": 11,
    "nome": "Crème Brûlée",
    "categoria": "Biscoitos e docinhos",
    "preco": 19.9,
    "imagem": "img/produtos/creme-brulee.webp",
    "descricao": "",
    "destaque": false
  },
  {
    "id": 12,
    "nome": "Pudim de Caramelo",
    "categoria": "Biscoitos e docinhos",
    "preco": 17.9,
    "imagem": "img/produtos/pudim-de-caramelo.webp",
    "descricao": "",
    "destaque": false
  },
  {
    "id": 13,
    "nome": "Brownie de Nozes",
    "categoria": "Biscoitos e docinhos",
    "preco": 15.9,
    "imagem": "img/produtos/brownie-de-nozes.webp",
    "descricao": "",
    "destaque": false
  },
  {
    "id": 14,
    "nome": "Cookies de Chocolate",
    "categoria": "Biscoitos e docinhos",
    "preco": 14.9,
    "imagem": "img/produtos/cookies-de-chocolate.webp",
    "descricao": "",
    "destaque": false
  },
  {
    "id": 15,
    "nome": "Biscoito de Gengibre",
    "categoria": "Biscoitos e docinhos",
    "preco": 12.9,
    "imagem": "img/produtos/biscoito-de-gengibre.webp",
    "descricao": "",
    "destaque": true
  },
  {
    "id": 16,
    "nome": "Biscoito Floco de Neve",
    "categoria": "Biscoitos e docinhos",
    "preco": 11.9,
    "imagem": "img/produtos/biscoito-floco-de-neve.webp",
    "descricao": "",
    "destaque": false
  },
  {
    "id": 17,
    "nome": "Biscoito Árvore de Natal",
    "categoria": "Biscoitos e docinhos",
    "preco": 11.9,
    "imagem": "img/produtos/biscoito-arvore-de-natal.webp",
    "descricao": "",
    "destaque": false
  },
  {
    "id": 18,
    "nome": "Biscoito Papai Noel",
    "categoria": "Biscoitos e docinhos",
    "preco": 13.9,
    "imagem": "img/produtos/biscoito-papai-noel.webp",
    "descricao": "",
    "destaque": false
  },
  {
    "id": 19,
    "nome": "Brigadeiros Gourmet",
    "categoria": "Biscoitos e docinhos",
    "preco": 21.9,
    "imagem": "img/produtos/brigadeiros-gourmet.webp",
    "descricao": "",
    "destaque": false
  },
  {
    "id": 20,
    "nome": "Beijinhos de Coco",
    "categoria": "Biscoitos e docinhos",
    "preco": 18.9,
    "imagem": "img/produtos/beijinhos-de-coco.webp",
    "descricao": "",
    "destaque": false
  },
  {
    "id": 21,
    "nome": "Macarons Sortidos",
    "categoria": "Tortas e sobremesas",
    "preco": 29.9,
    "imagem": "img/produtos/macarons-sortidos.webp",
    "descricao": "",
    "destaque": false
  },
  {
    "id": 22,
    "nome": "Profiteroles de Chocolate",
    "categoria": "Tortas e sobremesas",
    "preco": 25.9,
    "imagem": "img/produtos/profiteroles-de-chocolate.webp",
    "descricao": "",
    "destaque": false
  },
  {
    "id": 23,
    "nome": "Sonho com Creme",
    "categoria": "Tortas e sobremesas",
    "preco": 16.9,
    "imagem": "img/produtos/sonho-com-creme.webp",
    "descricao": "",
    "destaque": false
  },
  {
    "id": 24,
    "nome": "Mil-folhas de Morango",
    "categoria": "Tortas e sobremesas",
    "preco": 26.9,
    "imagem": "img/produtos/mil-folhas-de-morango.webp",
    "descricao": "",
    "destaque": false
  },
  {
    "id": 25,
    "nome": "Cheesecake de Cereja",
    "categoria": "Tortas e sobremesas",
    "preco": 28.9,
    "imagem": "img/produtos/cheesecake-de-cereja.webp",
    "descricao": "",
    "destaque": false
  },
  {
    "id": 26,
    "nome": "Cheesecake de Limão",
    "categoria": "Tortas e sobremesas",
    "preco": 26.9,
    "imagem": "img/produtos/cheesecake-de-limao.webp",
    "descricao": "",
    "destaque": false
  },
  {
    "id": 27,
    "nome": "Tortinha de Chocolate",
    "categoria": "Tortas e sobremesas",
    "preco": 24.9,
    "imagem": "img/produtos/tortinha-de-chocolate.webp",
    "descricao": "",
    "destaque": false
  },
  {
    "id": 28,
    "nome": "Tortinha de Frutas Vermelhas",
    "categoria": "Tortas e sobremesas",
    "preco": 26.9,
    "imagem": "img/produtos/tortinha-de-frutas-vermelhas.webp",
    "descricao": "",
    "destaque": true
  },
  {
    "id": 29,
    "nome": "Torta de Maçã",
    "categoria": "Tortas e sobremesas",
    "preco": 29.9,
    "imagem": "img/produtos/torta-de-maca.webp",
    "descricao": "",
    "destaque": false
  },
  {
    "id": 30,
    "nome": "Torta de Nozes",
    "categoria": "Tortas e sobremesas",
    "preco": 32.9,
    "imagem": "img/produtos/torta-de-nozes.webp",
    "descricao": "",
    "destaque": false
  },
  {
    "id": 31,
    "nome": "Cupcake Árvore de Natal",
    "categoria": "Cupcakes e confeitos",
    "preco": 15.9,
    "imagem": "img/produtos/cupcake-arvore-de-natal.webp",
    "descricao": "",
    "destaque": true
  },
  {
    "id": 32,
    "nome": "Cupcake de Rena",
    "categoria": "Cupcakes e confeitos",
    "preco": 15.9,
    "imagem": "img/produtos/cupcake-de-rena.webp",
    "descricao": "",
    "destaque": false
  },
  {
    "id": 33,
    "nome": "Cupcake Papai Noel",
    "categoria": "Cupcakes e confeitos",
    "preco": 15.9,
    "imagem": "img/produtos/cupcake-papai-noel.webp",
    "descricao": "",
    "destaque": false
  },
  {
    "id": 34,
    "nome": "Cupcake Boneco de Neve",
    "categoria": "Cupcakes e confeitos",
    "preco": 15.9,
    "imagem": "img/produtos/cupcake-boneco-de-neve.webp",
    "descricao": "",
    "destaque": false
  },
  {
    "id": 35,
    "nome": "Cupcake Presente",
    "categoria": "Cupcakes e confeitos",
    "preco": 15.9,
    "imagem": "img/produtos/cupcake-presente.webp",
    "descricao": "",
    "destaque": false
  },
  {
    "id": 36,
    "nome": "Donut Natalino",
    "categoria": "Cupcakes e confeitos",
    "preco": 12.9,
    "imagem": "img/produtos/donut-natalino.webp",
    "descricao": "",
    "destaque": false
  },
  {
    "id": 37,
    "nome": "Donut de Chocolate",
    "categoria": "Cupcakes e confeitos",
    "preco": 12.9,
    "imagem": "img/produtos/donut-de-chocolate.webp",
    "descricao": "",
    "destaque": false
  },
  {
    "id": 38,
    "nome": "Donut Glacê de Morango",
    "categoria": "Cupcakes e confeitos",
    "preco": 12.9,
    "imagem": "img/produtos/donut-glace-de-morango.webp",
    "descricao": "",
    "destaque": false
  },
  {
    "id": 39,
    "nome": "Cake Pops Coloridos",
    "categoria": "Cupcakes e confeitos",
    "preco": 24.9,
    "imagem": "img/produtos/cake-pops-coloridos.webp",
    "descricao": "",
    "destaque": true
  },
  {
    "id": 40,
    "nome": "Cake Pops de Chocolate",
    "categoria": "Cupcakes e confeitos",
    "preco": 24.9,
    "imagem": "img/produtos/cake-pops-de-chocolate.webp",
    "descricao": "",
    "destaque": false
  },
  {
    "id": 41,
    "nome": "Morangos com Chocolate",
    "categoria": "Presentes e especiais",
    "preco": 29.9,
    "imagem": "img/produtos/morangos-com-chocolate.webp",
    "descricao": "",
    "destaque": false
  },
  {
    "id": 42,
    "nome": "Croissant de Chocolate",
    "categoria": "Presentes e especiais",
    "preco": 18.9,
    "imagem": "img/produtos/croissant-de-chocolate.webp",
    "descricao": "",
    "destaque": false
  },
  {
    "id": 43,
    "nome": "Palmier de Canela",
    "categoria": "Presentes e especiais",
    "preco": 14.9,
    "imagem": "img/produtos/palmier-de-canela.webp",
    "descricao": "",
    "destaque": false
  },
  {
    "id": 44,
    "nome": "Cannoli Recheado",
    "categoria": "Presentes e especiais",
    "preco": 22.9,
    "imagem": "img/produtos/cannoli-recheado.webp",
    "descricao": "",
    "destaque": false
  },
  {
    "id": 45,
    "nome": "Torrone Artesanal",
    "categoria": "Presentes e especiais",
    "preco": 24.9,
    "imagem": "img/produtos/torrone-artesanal.webp",
    "descricao": "",
    "destaque": false
  },
  {
    "id": 46,
    "nome": "Bolo de Frutas de Natal",
    "categoria": "Presentes e especiais",
    "preco": 42.9,
    "imagem": "img/produtos/bolo-de-frutas-de-natal.webp",
    "descricao": "",
    "destaque": false
  },
  {
    "id": 47,
    "nome": "Stollen Natalino",
    "categoria": "Presentes e especiais",
    "preco": 44.9,
    "imagem": "img/produtos/stollen-natalino.webp",
    "descricao": "",
    "destaque": false
  },
  {
    "id": 48,
    "nome": "Guirlanda Doce",
    "categoria": "Presentes e especiais",
    "preco": 39.9,
    "imagem": "img/produtos/guirlanda-doce.webp",
    "descricao": "",
    "destaque": false
  },
  {
    "id": 49,
    "nome": "Casinha de Gengibre",
    "categoria": "Presentes e especiais",
    "preco": 64.9,
    "imagem": "img/produtos/casinha-de-gengibre.webp",
    "descricao": "",
    "destaque": true
  },
  {
    "id": 50,
    "nome": "Tronco de Natal",
    "categoria": "Presentes e especiais",
    "preco": 59.9,
    "imagem": "img/produtos/tronco-de-natal.webp",
    "descricao": "",
    "destaque": true
  }
];
