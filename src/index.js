document.addEventListener('DOMContentLoaded', () => {
    // card options
    const cardArray = [
        {
            name: 'one',
            img: 'src/images/1.png'
        },
        {
            name: 'two',
            img: 'src/images/2.png'
        },
        {
            name: 'three',
            img: 'src/images/3.png'
        },
        {
            name: 'four',
            img: 'src/images/4.png'
        },
        {
            name: 'five',
            img: 'src/images/5.png'
        },
        {
            name: 'six',
            img: 'src/images/6.png'
        },
        {
            name: 'one',
            img: 'src/images/1.png'
        },
        {
            name: 'two',
            img: 'src/images/2.png'
        },
        {
            name: 'three',
            img: 'src/images/3.png'
        },
        {
            name: 'four',
            img: 'src/images/4.png'
        },
        {
            name: 'five',
            img: 'src/images/5.png'
        },
        {
            name: 'six',
            img: 'src/images/6.png'
        }
    ]


    cardArray.sort(() => Math.random() - 0.5)
    console.log(cardArray)

    const grid = document.querySelector('.grid')
    const result = document.querySelector('#result')
    let chosenCards = []
    let chosenCardIds = []
    let matchedCards = []
    let score = 0

    result.innerHTML = score


    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            const card = document.createElement('img')
            card.setAttribute('src', 'src/images/memory-game.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }

    function flipCard() {
        let cardId = this.getAttribute('data-id')
        chosenCardIds.push(cardId)
        chosenCards.push(cardArray[cardId].name)
        this.setAttribute('src', cardArray[cardId].img)
        if (chosenCards.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    }

    function checkForMatch() {
        const cards = document.querySelectorAll('img')
        const card1 = chosenCardIds[0]
        const card2 = chosenCardIds[1]
        console.log(cards[card1])
        console.log(cards[card2])

        if (card1 === card2) {
            console.log('You have clicked the same image')
            cards[card1].setAttribute('src', 'src/images/memory-game.png')
            cards[card2].setAttribute('src', 'src/images/memory-game.png')
        } else if (chosenCards[0] === chosenCards[1]) {
            console.log('matched')
            cards[card1].setAttribute('src', 'src/images/blank.png')
            cards[card2].setAttribute('src', 'src/images/blank.png')
            cards[card1].removeEventListener('click', flipCard)
            cards[card2].removeEventListener('click', flipCard)
            matchedCards.push(chosenCards)
            score += 20
            result.innerHTML = score
            if (matchedCards.length === cardArray.length / 2) {
                grid.innerHTML = 'Congratulations.\n You Won!'
            }

        } else {
            console.log('not match')
            cards[card1].setAttribute('src', 'src/images/memory-game.png')
            cards[card2].setAttribute('src', 'src/images/memory-game.png')

        }
        chosenCards.length = 0
        chosenCardIds.length = 0


    }





    createBoard()
})