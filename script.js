
// VARIAVEIS DO ESCOPO GLOBAL

let totalCards=0;
let cards=[];
let card1='';
let card2='';
let hits=0;
let plays=0;
let idInterval;
let time =0;

//FUNÇÃO QUE COMEÇA O JOGO E MONTA O TABULEIRO

function startGame(){
    const pack = document.querySelector('.pack')
    while(true){
        let askTotalCards = prompt('Com quantas cartas deseja jogar?')
        if((askTotalCards%2)===0 && askTotalCards<=14 && askTotalCards>1){
            totalCards = askTotalCards;
            break
        }else{
            alert('Digite apenas números pares e menores que 15!')
        }
    }
    pack.innerHTML='';
    createCards();
    cards.sort(comparador);
    for(i in cards){
        pack.innerHTML = pack.innerHTML+cards[i]
    }       
}

//FUNÇÃO QUE VAI CRIAR AS CARTAS DO TABULEIRO

function createCards(){
    cards=[];
    let counter =0;
    while(totalCards>counter){
        if(counter ===0 || counter ===1){
            cards.push(`<div class="card" onclick="flipCard(this)">
            <div class="face front">
                <img src="imagens/front.png" alt="parrot">
            </div>
            <div class="face back">
                <img src="imagens/bobrossparrot.gif" alt="">
            </div>
        </div>`)
        }else if(counter ===2 || counter ===3){
            cards.push(`<div class="card" onclick="flipCard(this)">
            <div class="face front">
                <img src="imagens/front.png" alt="parrot">
            </div>
            <div class="face back">
                <img src="imagens/explodyparrot.gif" alt="">
            </div>
        </div>`)
        }else if(counter ===4 || counter ===5){
            cards.push(`<div class="card" onclick="flipCard(this)">
            <div class="face front">
                <img src="imagens/front.png" alt="parrot">
            </div>
            <div class="face back">
                <img src="imagens/fiestaparrot.gif" alt="">
            </div>
        </div>`)
        }else if(counter ===6 || counter ===7){
            cards.push(`<div class="card" onclick="flipCard(this)">
            <div class="face front">
                <img src="imagens/front.png" alt="parrot">
            </div>
            <div class="face back">
                <img src="imagens/metalparrot.gif" alt="">
            </div>
        </div>`)
        }else if(counter ===8 || counter ===9){
            cards.push(`<div class="card" onclick="flipCard(this)">
            <div class="face front">
                <img src="imagens/front.png" alt="parrot">
            </div>
            <div class="face back">
                <img src="imagens/revertitparrot.gif" alt="">
            </div>
        </div>`)
        }else if(counter ===10 || counter ===11){
            cards.push(`<div class="card" onclick="flipCard(this)">
            <div class="face front">
                <img src="imagens/front.png" alt="parrot">
            </div>
            <div class="face back">
                <img src="imagens/tripletsparrot.gif" alt="">
            </div>
        </div>`)
        }else if(counter ===12 || counter ===13){
            cards.push(`<div class="card" onclick="flipCard(this)">
            <div class="face front">
                <img src="imagens/front.png" alt="parrot">
            </div>
            <div class="face back">
                <img src="imagens/unicornparrot.gif" alt="">
            </div>
        </div>`)
        }
        counter++;
    }
}

//FUNÇÃO QUE VEREFICA AS JOGADAS E REINICIA O JOGO CASO O JOGADOR QUEIRA

function checkPlay(){
    let firstCard = card1.innerHTML;
    let secondcard = card2.innerHTML;
    
    if(firstCard===secondcard){
        hits++;
        card1='';
        card2='';
        if(hits*2 == totalCards){
            clearInterval(idInterval);
            setTimeout(()=>{alert('Você ganhou! Você fez ao total '+plays+ ' jogadas em '+(time-1)+' segundos.');
            while(true){
                let s_n=prompt("Deseja jogar de novo? ('sim' ou 'não')");
                if(s_n ==='sim'){
                    hits=0;
                    plays=0;
                    time=0
                    startGame();
                    startCounter()
                    break;
                }else if(s_n==='não'){
                    break;
                }else{
                    alert('Digite apenas sim e não')
                }
            }},1000); 
        }
    }else if(card1!=='' && card2!==''){
        setTimeout(()=>{
            card1.classList.remove('flip')
            card2.classList.remove('flip')
            card1='';
            card2='';
        },1000)
        
    }
}

//FUNÇÃO PARA COMEÇAR A CONTAGEM DO CONTADOR

function startCounter(){
    time=0;
    idInterval = setInterval(updateCounter,1000)
}

//FUNÇÃO PARA ATUALIZAR O CONTADOR

function updateCounter(){
    let count = document.querySelector('.count');
    count.innerHTML= time++;

}

// FUNÇÃO IMPLEMENTA A CLASSE FLIP NA CARTA PARA PODER GIRAR ELA

function flipCard(card){
    if(card.className.includes('flip')){
        return;
    }

    if(card1===''){
        card.classList.add('flip');
        card1=card;
        plays++;
    } else if(card2===''){
        card.classList.add('flip');
        card2=card
        plays++;
        checkPlay()
    }
    
}

// FUNÇÃO PARA MISTURAR A LISTA DE CARDS

function comparador() { 
	return Math.random() - 0.5; 
}

// COMEÇO DO JOGO

startGame()
startCounter()
