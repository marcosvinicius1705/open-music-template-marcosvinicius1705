// const albumList = [
//   {
//     title: "Acabou o Chorare",
//     genre: "MPB",
//     band: "Novos Baianos",
//     price: "137.91",
//     img: "assets/icon/imgs/cover-1.jpg",
//   },
//   {
//     title: "The Wall",
//     genre: "Rock",
//     band: "Pink Floyd",
//     price: "123.56",
//     img: "assets/icon/imgs/cover-2.jpg",
//   },
//   {
//     title: "To Pimp a Butterfly",
//     genre: "Rap",
//     band: "Kendrick Lamar",
//     price: "102.66",
//     img: "assets/icon/imgs/cover-3.jpg",
//   },
//   {
//     title: "Thriller",
//     genre: "Pop",
//     band: "Michael Jackson",
//     price: "142.32",
//     img: "assets/icon/imgs/cover-4.jpg",
//   },
//   {
//     title: "All Eyez on Me",
//     genre: "Hip-Hop",
//     band: "2Pac",
//     price: "50.13",
//     img: "assets/icon/imgs/cover-5.jpg",
//   },
//   {
//     title: "Dom de Sambar",
//     genre: "Samba",
//     band: "Turma do Pagode",
//     price: "51.67",
//     img: "assets/icon/imgs/cover-6.jpg",
//   },
// ];

// async function fetchMusics() {
//     const response = await fetch(" https://openmusic-fake-api.onrender.com/api/musics")
//     const data = await response.json();

//     console.log(data);
//     return data;
// }
// // async function getMusics() {
// //     const musics = await fetchMusics();  // Espera o resultado de fetchMusics()
// //     console.log(musics);  // Aqui você pode usar a variável musics
// //     return musics;
// // }

// const albumsContainer = document.querySelector(".albumsContainer");


// function createCard({img, title, genre, band, price}) {

//   const card = document.createElement("div");
//   card.classList.add("card");

 
//   const image = document.createElement("img");
//   image.src = album.img;
//   image.alt = `Capa do álbum ${album.title}`;
//   card.appendChild(img);

//   const cardContent = document.createElement("div");
//   cardContent.classList.add("card-content");

//   const title = document.createElement("h3");
//   title.classList.add("title");
//   title.textContent = album.title;
//   cardContent.appendChild(title);

//   const paragraph1 = document.createElement("div");
//   paragraph1.classList.add("card-paragraph");
//   const band = document.createElement("p");
//   band.classList.add("artist");
//   band.textContent = album.band;
//   const genre = document.createElement("p");
//   genre.classList.add("genre");
//   genre.textContent = album.genre;
//   paragraph1.appendChild(artist);
//   paragraph1.appendChild(genre);
//   cardContent.appendChild(paragraph1);

//   const paragraph2 = document.createElement("div");
//   paragraph2.classList.add("card-paragraph");
//   const price = document.createElement("p");
//   price.classList.add("price");
//   price.innerHTML = `<strong>R$ ${album.price}</strong>`;
//   const button = document.createElement("button");
//   button.classList.add("buy-button");
//   button.textContent = "Comprar";
//   paragraph2.appendChild(price);
//   paragraph2.appendChild(button);
//   cardContent.appendChild(paragraph2);

//   card.appendChild(cardContent);

//   return card;
// }

// // Adiciona todos os álbuns da lista ao container
// const selectedAlbums = musics;
// selectedAlbums.forEach(album => {
//   const card = createCard(album);
//   albumsContainer.appendChild(card);
// });


async function fetchMusics() {
    const response = await fetch("https://openmusic-fake-api.onrender.com/api/musics");
    const data = await response.json();
    console.log(data);
    return data;
}

const albumsContainer = document.querySelector(".albumsContainer");

function createCard({ img, title, genre, band, price }) {
    // Criação do card
    const card = document.createElement("div");
    card.classList.add("card");

    // Adiciona a imagem
    const image = document.createElement("img");
    image.src = img; // Usa o parâmetro correto
    image.alt = `Capa do álbum ${title}`;
    card.appendChild(image);

    // Conteúdo do card
    const cardContent = document.createElement("div");
    cardContent.classList.add("card-content");

    // Título do álbum
    const titleElement = document.createElement("h3");
    titleElement.classList.add("title");
    titleElement.textContent = title;
    cardContent.appendChild(titleElement);

    // Banda e gênero
    const paragraph1 = document.createElement("div");
    paragraph1.classList.add("card-paragraph");

    const bandElement = document.createElement("p");
    bandElement.classList.add("artist");
    bandElement.textContent = band;

    const genreElement = document.createElement("p");
    genreElement.classList.add("genre");
    genreElement.textContent = genre;

    paragraph1.appendChild(bandElement);
    paragraph1.appendChild(genreElement);
    cardContent.appendChild(paragraph1);

    // Preço e botão
    const paragraph2 = document.createElement("div");
    paragraph2.classList.add("card-paragraph");

    const priceElement = document.createElement("p");
    priceElement.classList.add("price");
    priceElement.innerHTML = `<strong>R$ ${price}</strong>`;

    const button = document.createElement("button");
    button.classList.add("buy-button");
    button.textContent = "Comprar";

    paragraph2.appendChild(priceElement);
    paragraph2.appendChild(button);
    cardContent.appendChild(paragraph2);

    card.appendChild(cardContent);

    return card;
}

async function renderAlbums() {
    const musics = await fetchMusics(); // Busca os dados da API

    musics.forEach(album => {
        const card = createCard(album); // Cria um card para cada álbum
        albumsContainer.appendChild(card); // Adiciona o card ao container
    });
}

renderAlbums(); // Renderiza os álbuns na tela
