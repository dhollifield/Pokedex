function renderPokemon(container, pokemon) {
    container.innerHTML = '';

    const ul = document.createElement('ul');

    pokemon.forEach(pokemon => {
        const listItem = document.createElement('li');
        listItem.textContent = pokemon;
        ul.appendChild(listItem);
    });

    container.appendChild(ul);
};