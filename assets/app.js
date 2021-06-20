//--- NAVBAR SCRIPT

let menuToggle = document.querySelector('.menu-toggle');
let navMenu = document.querySelector('.navigation');
menuToggle.onclick = function() {
    menuToggle.classList.toggle('open');
    navMenu.classList.toggle('open');
}

//-- GET RANDOM QUOTES
const quotes = [
    {
        quote: "To know sorrow is not terrifying. What is terrifying is to know you can't go back to happiness you could have.",
        author: '-Rangiku (Bleach)'
    },
    {
        quote: "We are all like fireworks: we climb, we shine and always go our separate ways and become further apart. But even when that time comes, let's not disappear like a firework and continue to shine.. forever.",
        author: '-Toshiro (Bleach)'
    },
    {
        quote: "Those who stand at the top determine what's wrong and what's right! This very place is neutral ground! Justice will prevail, you say? But of course it will! Whoever wins this war becomes justice!",
        author: '-Doflamingo (One Piece)'
    },
    {
        quote: "Fear is not evil. It tells you what weakness is. And once you know your weakness, you can become stronger as well as kinder.",
        author: '-Gildarts Clive (Fairy Tail)'
    },
    {
        quote: "My time has come.",
        author: '-Master Oogway'
    },
    {
        quote: "Yesterday is history, tomorrow is a mystery, and today is a gift...that's why they call it present",
        author: '-Master Oogway'
    },
    {
        quote: "There are no coincidence.",
        author: '-Master Oogway'
    },
    {
        quote: "Fear is freedom! Subjugation is liberation! Contradiction is truth! Those are the facts of this world! And you will all surrender to them, you pigs in human clothing!",
        author: '-Kiryuuin (Kill la Kill)' 
    },
    {
        quote: "People, who can’t throw something important away, can never hope to change anything.",
        author: '-Armin Arlert (Attack On Titan)'
    },
    {
        quote: "I want you to be happy. I want you to laugh a lot. I don’t know what exactly I'll be able to do for you, but I'll always be by your side.",
        author: '-Kagome (InuYasha)'
    },
    {
        quote: "Thinking you’re not good and worthless is the worst thing you can do",
        author: '-Nobita (Doraemon)'
    },
    {
        quote: "Don’t give up, there’s no shame in falling down! True shame is to not stand up again!",
        author: '-Midorima (Kuroko No Basket)'
    },
    {
        quote: "Meat.",
        author: '-Monkey D. Luffy (One Piece)'
    },
    {
        quote: "People’s Dreams... Have No Ends",
        author: '-Blackbeard (One Piece)'
    },
    {
        quote: "Stop Counting Only Those Things You Have Lost! What Is Gone, Is Gone! So Ask Yourself This. What Is There... That Still Remains To You?!",
        author: '-Jinbei (One Piece)'
    },
    {
        quote: "If you don’t share someone’s pain, you can never understand them.",
        author: '-Nagato (Naruto)'
    },
    {
        quote: "When a man learns to love, he must bear the risk of hatred.",
        author: '-Madara Uchiha (Naruto)'
    },
    {
        quote: "Never give up without even trying. Do what you can, no matter how small the effect it may have!",
        author: '-Onoki (Naruto)'
    },
    {
        quote: "ORA ORA ORA ORA ORA ORA ORA ORA ORA ORA ORA ORA ORA ORA ORA ORA",
        author: '-Jotaro Kujo (JoJo)'
    },
    {
        quote: "MUDA MUDA MUDA MUDA MUDA MUDA MUDA MUDA MUDA MUDA MUDA",
        author: '-Dio Brando (JoJo)'
    },
    {
        quote: "GOMU GOMU NOOOOOOOO",
        author: '-Monkey D. Luffy (One Piece)'
    },
    {
        quote: "Men who can't wipe away the tears from a women's eyes, aren't real men.",
        author: '-Vinsmoke Sanji (One Piece)'
    },
    {
        quote: "It’s okay to lose your way… just don’t lose sight of what you have decided.",
        author: '-Roronoa Zoro (One Piece)'
    },
    {
        quote: "People can really change. When they’re far away from each other, their hearts will change. It’s so cruel that the only thing I can do is wait.",
        author: '-Ran Mouri (Detective Conan)'
    },
    {
        quote: "Justice isn't something that you can just proclaim. It's a feeling you should keep near your heart.",
        author: '-Miwako Sato (Detective Conan)'
    },
    {
        quote: "I would rather be a brainless monkey than a heartless monster.",
        author: '-Goku (Dragon Ball)'
    },
    {
        quote: "You'll laugh at your fears when you find out who you are.",
        author: '-Piccolo (Dragon Ball)'
    },
    {
        quote: "Don't live your life making up excuses. The one making your choices is yourself!",
        author: '-Mugen (Samurai Champloo)'
    },
    {
        quote: "Being alone is better than being with the wrong person.",
        author: '-L Lawliet (Death Note)'
    },
    {
        quote: "If your life can change once, your life can change again.",
        author: '-Sanae Furukawa (Clannad)'
    }
]

const quoteBtn = document.getElementById('quote-btn');
const quote = document.querySelector('.quotes');
const author = document.querySelector('.author');

quoteBtn.addEventListener('click', () => {
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerHTML = quotes[random].quote;
    author.innerHTML = quotes[random].author;
})

//DARK-LIGHT THEME 
const themeButton = document.getElementById('change-theme');
themeButton.onclick = function(){
    document.body.classList.toggle('dark-theme');
    if (document.body.classList.contains('dark-theme')) {
        themeButton.classList.remove('bxs-moon');
        themeButton.classList.toggle('bxs-sun');
    } else {
        themeButton.classList.toggle('bxs-moon');
        themeButton.classList.remove('bxs-sun');
    }
}
