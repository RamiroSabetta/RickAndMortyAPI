function getCharacters(done) {
    
    let results = fetch("https://rickandmortyapi.com/api/character");

    results
        .then(response => response.json())
        .then(data => {
        done(data)
    });
}


getCharacters(data => {

    data.results.forEach(personaje => {

        const article = document.createRange().createContextualFragment(/*HTML*/`
        <article>

            <div class="image-container">

                <img src="${personaje.image}" alt="img">

            </div>

            <h2 class="nombre">${personaje.name}</h2>

            <span class="estado">${personaje.status}</span>

        </article>
        `);

        const main = document.querySelector("main");

        main.append(article);
        
    });
});