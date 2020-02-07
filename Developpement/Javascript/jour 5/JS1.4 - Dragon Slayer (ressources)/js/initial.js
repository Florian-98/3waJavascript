const html = `
<main>
<div class="game-state">
    <figure class="game-state_player">
        <img src="images/knight.png" alt="Chevalier">
        <figcaption>${chevalier.pointDevie} PV</figcaption>
    </figure>
    <figure class="game-state_player">
        <img src="images/dragon.png" alt="Dragon">
        <figcaption>${dragon.pointDevie}PV</figcaption>
    </figure>
</div>
<h3>Tour n°1</h3>
<figure class="game-round">
    <img src="images/knight-winner.png" alt="Chevalier vainqueur">
    <figcaption>Vous êtes le plus rapide, vous attaquez le dragon et lui infligez 30 points de dommage !</figcaption>
</figure>
</main>
`;

document.write(html);
