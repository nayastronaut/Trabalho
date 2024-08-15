const prompt = require('prompt-sync') ();
const criarbaralho = require ('./criar');
const Criarflashcard = require ('./criarflashcard');
const Listarbaralho = require ('./listarbaralho');
const Listarflashcard = require('./listarflashcard');
const Atualizarbaralho = require ('./atualizarbaralho');
const Atualizarflashcard = require ('./atualizarflashcard')
const Deletarbaralho = require ('./deletarbaralho');
const Deletarflashcard = require ('./deletarflashcard');


function mainMenu() {
    console.log(`
     ____________________________________ 
    || 🃏 BARALHO    |   FLASHCARD ⚡    ||
    ||               |                  ||
    ||  0.Sair       |  6.Criar         ||
    ||  1.Criar      |  7.Listar        ||                                  
    ||  2.Listar     |  8.Atualizar     ||
    ||  3.Atualizar  |  9.Deletar       ||
    ||  4.Deletar    |  10.Buscar       ||
    ||               |  11.Buscar       ||
    ||               |                  ||
    ||_______________|__________________||

    `)
    
    let escolha = prompt('Escolha uma opção: ');
  
    switch(escolha) {
        case '1': 
        criarbaralho();    
        var id = prompt("Informe o id do Baralho: ")
        var titulo = prompt("Informe o titulo do Baralho: ")
        criarbaralho({id, titulo});
        console.log('Baralho criado com sucesso!🌸');
        mainMenu();
        break;

    }
}
    mainMenu();