// Boucle qui parcourt les éléments des cartes, de 1 à 5
for (let i = 1; i <= 5; i++) {
  // Récupère le bouton spécifique à la carte en fonction de l'index i
  const button = document.getElementById(`card_content_btn_${i}`);
  // Récupère le menu des activités spécifique à la carte en fonction de l'index i
  const menuActivity = document.getElementById(`menu_activity_${i}`);

  // Ajoute un écouteur d'événement sur le bouton : lorsqu'il est cliqué
  button.addEventListener("click", () => {
    // Changer le texte du bouton dynamiquement selon son état actuel
    // Si le texte du bouton est "Voir Activités", il devient "Fermer"
    if (button.textContent.trim() === "Voir Activités") {
      button.textContent = "Fermer";
    } else {
      // Si le texte est déjà "Fermer", il revient à "Voir Activités"
      button.textContent = "Voir Activités";
    }

    // Basculer l'affichage du menu des activités
    // La classe "active" est ajoutée ou supprimée pour afficher/masquer le menu
    menuActivity.classList.toggle("active");
  });
}