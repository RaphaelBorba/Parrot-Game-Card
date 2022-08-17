let totalCards=0;
let cards=[];
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
    createCards();
    cards.sort(comparador);
    for(i in cards){
        pack.innerHTML = pack.innerHTML+cards[i]
    }
    console.log(cards);
    
    
        
}
function createCards(){
    cards=[];
    let counter =0;
    while(totalCards>counter){
        if(counter ===0 || counter ===1){
            cards.push(`<div class="card">
            <div class="front">
                <img src="imagens/front.png" alt="parrot">
            </div>
            <div class="back">
                <img src="imagens/bobrossparrot.gif" alt="">
            </div>
        </div>`)
        }else if(counter ===2 || counter ===3){
            cards.push(`<div class="card">
            <div class="front">
                <img src="imagens/front.png" alt="parrot">
            </div>
            <div class="back">
                <img src="imagens/explodyparrot.gif" alt="">
            </div>
        </div>`)
        }else if(counter ===4 || counter ===5){
            cards.push(`<div class="card">
            <div class="front">
                <img src="imagens/front.png" alt="parrot">
            </div>
            <div class="back">
                <img src="imagens/fiestaparrot.gif" alt="">
            </div>
        </div>`)
        }else if(counter ===6 || counter ===7){
            cards.push(`<div class="card">
            <div class="front">
                <img src="imagens/front.png" alt="parrot">
            </div>
            <div class="back">
                <img src="imagens/metalparrot.gif" alt="">
            </div>
        </div>`)
        }else if(counter ===8 || counter ===9){
            cards.push(`<div class="card">
            <div class="front">
                <img src="imagens/front.png" alt="parrot">
            </div>
            <div class="back">
                <img src="imagens/revertitparrot.gif" alt="">
            </div>
        </div>`)
        }else if(counter ===10 || counter ===11){
            cards.push(`<div class="card">
            <div class="front">
                <img src="imagens/front.png" alt="parrot">
            </div>
            <div class="back">
                <img src="imagens/tripletsparrot.gif" alt="">
            </div>
        </div>`)
        }else if(counter ===12 || counter ===13){
            cards.push(`<div class="card">
            <div class="front">
                <img src="imagens/front.png" alt="parrot">
            </div>
            <div class="back">
                <img src="imagens/unicornparrot.gif" alt="">
            </div>
        </div>`)
        }
        counter++;
    }
    
}
function comparador() { 
	return Math.random() - 0.5; 
}
startGame()
