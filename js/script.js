// 1. Додаємо картинки та опис у масив
const games = [
    { title: 'Каркасон', minPlayers: 2, maxPlayers: 5, img: 'assets/img/carcassonne.jpg', desc: 'Класична гра на вибудовування міст та доріг.' },
    { title: 'Манчкін', minPlayers: 3, maxPlayers: 6, img: 'assets/img/munchkin.jpg', desc: 'Весела карткова гра про зачистку підземель.' },
    { title: 'Діксіт', minPlayers: 3, maxPlayers: 8, img: 'assets/img/dixit.jpg', desc: 'Гра на асоціації з неймовірними ілюстраціями.' }
];

function fitsPlayers(game, players) {
    return players >= game.minPlayers && players <= game.maxPlayers;
}

const listContainer = document.querySelector('#games-list');
const gamesCount = document.querySelector('#games-count');

// Очищаємо статичні картки-заглушки при старті
if (listContainer) listContainer.innerHTML = '';

function renderGames(gamesArray) {
    listContainer.innerHTML = ''; 

    gamesArray.forEach(game => {
        const card = document.createElement('article');
        card.classList.add('card'); // Твій клас із CSS

        const title = document.createElement('h3');
        title.textContent = game.title;

        // Відновлюємо жовтий бейдж
        const badge = document.createElement('span');
        badge.classList.add('badge');
        badge.textContent = `${game.minPlayers}–${game.maxPlayers} гравців`;

        // Відновлюємо картинку
        const image = document.createElement('img');
        image.src = game.img;
        image.alt = `Обкладинка гри ${game.title}`;
        // Додай сюди клас картинки, якщо він був у твоєму CSS (наприклад, .card-img)
        // image.classList.add('card-img'); 

        // Відновлюємо опис
        const desc = document.createElement('p');
        desc.textContent = game.desc;

        // Атрибут та клас за умовами 7-ї лаби
        card.dataset.players = `${game.minPlayers}-${game.maxPlayers}`;
        if (fitsPlayers(game, 4)) {
            card.classList.add('fits');
        }

        // Вкладаємо всі елементи в картку в потрібному порядку
        card.append(title, badge, image, desc);
        listContainer.append(card);
    });

    if (gamesCount) gamesCount.textContent = gamesArray.length;
}

renderGames(games);