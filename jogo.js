//grupo de palavras

const escola = [
    'livros','alunos','professores'
];

const física = [
    'óptica','Newton','entropia'
];

const direito = [
    'tribunal','advogado','réu','constituição'
];

const saúde = [
    'hospital','médico','maca'
];

const tecnologia = [
    'computador', 'internet', 'software', 'hardware', 'programação'
];

const música = [
    'violão', 'piano', 'bateria', 'orquestra', 'sinfonia'
];

const esportes = [
    'futebol', 'basquete', 'natação', 'atletismo', 'tênis'
];

const cozinha = [
    'fogão', 'panela', 'ingredientes', 'receita', 'chef'
];

const geografia = [
    'montanha', 'rio', 'deserto', 'oceano', 'continente'
];

const literatura = [
    'romance', 'poesia', 'conto', 'biografia', 'ficção'
];

const cinema = [
    'filme', 'diretor', 'roteiro', 'ator', 'trilha sonora'
];

const arte = [
    'pintura', 'escultura', 'museu', 'galeria', 'exposição'
];

const ciência = [
    'biologia', 'química', 'física', 'astronomia', 'genética'
];

const história = [
    'revolução', 'império', 'guerra', 'civilização', 'dinastia'
];

const matemática = [
    'álgebra', 'geometria', 'cálculo', 'estatística', 'trigonometria'
];

const política = [
    'eleição', 'partido', 'governo', 'democracia', 'legislação'
];

const economia = [
    'mercado', 'inflação', 'PIB', 'recessão', 'investimento'
];

const natureza = [
    'floresta', 'praia', 'montanha', 'deserto', 'vulcão'
];

const viagem = [
    'avião', 'hotel', 'turismo', 'mapa', 'passaporte'
];

const moda = [
    'roupa', 'desfile', 'estilo', 'coleção', 'design'
];

const alimentação = [
    'fruta', 'vegetal', 'carne', 'grãos', 'bebida'
];

const animais = [
    'mamífero', 'réptil', 'ave', 'peixe', 'anfíbio'
];

const transporte = [
    'carro', 'moto', 'bicicleta', 'ônibus', 'trem'
];

const astronomia = [
    'estrela', 'planeta', 'galáxia', 'cometa', 'telescópio'
];

const psicologia = [
    'comportamento', 'emoção', 'personalidade', 'terapia', 'cérebro'
];
const grupos = {
    escola, física, direito, saúde, tecnologia, música, esportes, cozinha,
    literatura, cinema, arte, ciência, história, matemática, política, economia,
    natureza, viagem, moda, alimentação, animais, transporte, astronomia, psicologia
};

let grupoAtual;
let pontos = [0, 0]; 
let jogadorAtual = 0; 

function mostrarLista() {
    const jogolistaDiv = document.getElementById('jogo-lista');
    jogolistaDiv.innerHTML = '';

    const ul = document.createElement('ul');
    ul.style.listStyleType = 'none';

    const nomesGrupos = Object.keys(grupos);
    const grupoAleatorio = nomesGrupos[Math.floor(Math.random() * nomesGrupos.length)];
    grupoAtual = grupoAleatorio;

    console.log(grupoAtual);

    grupos[grupoAleatorio].forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        ul.appendChild(listItem);
    });

    jogolistaDiv.appendChild(ul);

    vezJogador();
}

function vezJogador(){

    
    document.getElementById('jogador-atual').textContent = ` ${jogadorAtual + 1}`;

    document.getElementById('pontuacao1').textContent = `${pontos[0]}`;
   
    document.getElementById('pontuacao2').textContent = `${pontos[1]} `;

}


function adivinharTema() {

   

    const inputTema = document.getElementById('input-tema').value.toLowerCase();
    let respostaEnviada = false;

    if (grupoAtual === inputTema) {
        respostaEnviada = true;
    }

    if (respostaEnviada) {
        alert('Resposta correta!');

        pontos[jogadorAtual] += 2;

    } else {
        alert('Resposta incorreta. Tente novamente.');
        pontos[jogadorAtual]--;
    }

    if (pontos[jogadorAtual] === -5) {
        alert(`Fim de jogo! Jogador ${jogadorAtual + 1} perdeu`);
        pontos[jogadorAtual] = 0; 
    }

    if(pontos[jogadorAtual] == 10){
        alert("Você venceu!")
        pontos[0] = 0; 
        pontos[1] = 0; 

    }

   

    jogadorAtual = 1 - jogadorAtual; // Alternar jogador
    setTimeout(mostrarLista, 0);



}

