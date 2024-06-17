const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");


const perguntas = [
    {
        enunciado: "Você está nas ruas de Los Santos à noite. À sua esquerda, um beco escuro com vozes sussurrantes; à direita, um carro esportivo estacionado com as chaves no contato. das árvores; à direita, um caminho estreito e íngreme que leva para baixo.",
        alternativas: [
            {
                texto: "Escolha a esquerda",
                afirmacao: "Investiga o beco e descobre uma reunião de gangues rivais planejando um grande assalto."
            },
            {
                texto: "Escolha a direita:",
                afirmacao: "Pega o carro esportivo e segue em alta velocidade pelas ruas de Los Santos, atraindo a atenção da polícia."
            }
        ]
    },
    {
        enunciado: "Durante uma festa na Grove Street, você recebe uma ligação suspeita no seu celular. À frente, um grupo de homens armados se aproximando; atrás de você, um pacote de drogas esquecido em cima da mesa.",
        alternativas: [
            {
                texto: "Escolha a frente",
                afirmacao: "Prepara-se para o confronto com os homens armados, defendendo seu território na Grove Street."
            },
            {
                texto: "Escolha atrás",
                afirmacao: "Ignora o pacote de drogas e foca em escapar pelos telhados, evitando um confronto direto."
            }
        ]
    },
    {
        enunciado: "Enquanto dirige pelo deserto de Bone County, seu carro quebra no meio do nada. À esquerda, um posto de gasolina abandonado; à direita, uma trilha estreita levando a um acampamento cigano.",
        alternativas: [
            {
                texto: "Escolha a esquerda",
                afirmacao: "Explora o posto de gasolina e encontra uma arma escondida no escritório do gerente."
            },
            {
                texto: "Escolha a direita",
                afirmacao: "Segue a trilha até o acampamento cigano e recebe informações valiosas sobre um carregamento de armas que está chegando à cidade."
            }
        ]
    },
    {
        enunciado: "Você é abordado por um membro da Ballas que exige um pagamento pela passagem. À esquerda, confronta-o diretamente com suas habilidades de luta; à direita, tenta negociar com ele oferecendo um negócio vantajoso",
        alternativas: [
            {
                texto: "Escolha a esquerda",
                afirmacao: "Entra em um confronto intenso com o membro da Ballas, mostrando quem manda nas ruas de Los Santos."
            },
            {
                texto: "Escolha a direita",
                afirmacao: "Negocia com o membro da Ballas, estabelecendo um acordo que beneficia ambos os lados sem derramar sangue."
            }
        ]
    },
    {
        enunciado: "Você chega a uma encruzilhada na estrada, onde uma gangue rival bloqueia o caminho. À esquerda, uma rua estreita que leva a um esconderijo abandonado; à direita, um atalho perigoso através de um campo de minas.",
        alternativas: [
            {
                texto: "Escolha a esquerda",
                afirmacao: "Navega pela rua estreita até o esconderijo, onde encontra suprimentos roubados que podem ser úteis para sua próxima missão."
            },
            {
                texto: "Escolha a direita",
                afirmacao: "Arrisca o atalho pelo campo de minas, escapando da gangue rival com habilidade e coragem."
            }
        ]
    },
];




let atual = 0;
let perguntaAtual;
let historiaFinal = "";


function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}


function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}


function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}


function mostraResultado() {
    caixaPerguntas.textContent = "Apos suas decisões de caminho você...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}


mostraPergunta();