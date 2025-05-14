const musics = [
    {
        title: "Rap da Ladybug e Cat Noir (Miraculous) - EQUILÍBRIO PERFEITO",
        artist: "IRON MASTER",
        img: "https://via.placeholder.com/50x50?text=Ladybug",
        lyrics: "Chamado em Shibuya pra resolver um caso..."
    },
    {
        title: "Rap de Cat Noir e Ladybug (Miraculous: O Filme) - A FORÇA DO AMOR",
        artist: "Venum Beats",
        img: "https://via.placeholder.com/50x50?text=CatNoir",
        lyrics: "Chamado em Shibuya pra resolver um caso..."
    },
    {
        title: "Satoru Gojo | O Mais Forte",
        artist: "AniRap",
        img: "https://via.placeholder.com/50x50?text=Gojo",
        lyrics: `
Chamado em Shibuya pra resolver um caso
Olha quem tá aqui e trouxe a gangue junto
Eu tô com pressa, tá de brincadeira?
Vocês não se tocam? Ou será que são burros?
Primeiro você! Primeiro você vai morrer esmagada...
        `
    }
];

const musicList = document.getElementById('music-list');
const nowPlaying = document.getElementById('now-playing');
const playerScreen = document.getElementById('player-screen');
const backArrow = document.getElementById('back-arrow');
const playerImage = document.getElementById('player-image');
const playerTitle = document.getElementById('player-title');
const playerArtist = document.getElementById('player-artist');
const musicDescription = document.getElementById('music-description');

musics.forEach((music, index) => {
    const div = document.createElement('div');
    div.className = 'music-item';
    div.innerHTML = `
        <img src="${music.img}" alt="imagem">
        <div class="music-details">
            <span>${music.title}</span>
            <small>${music.artist}</small>
        </div>
    `;
    div.onclick = () => openPlayer(music);
    musicList.appendChild(div);
});

// Pega o primeiro para tocar embaixo
const firstMusic = musics[0];
nowPlaying.innerHTML = `
    <img src="${firstMusic.img}" alt="imagem">
    <div class="music-details">
        <span>${firstMusic.title}</span>
        <small>${firstMusic.artist}</small>
    </div>
`;

function openPlayer(music) {
    playerScreen.classList.remove('hidden');
    playerImage.src = music.img;
    playerTitle.textContent = music.title;
    playerArtist.textContent = music.artist;
    musicDescription.innerText = music.lyrics;
}

backArrow.onclick = () => {
    playerScreen.classList.add('hidden');
};
