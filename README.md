

# ------- My video game shop -------

## Durée = 3h

## Installation 

* Après avoir cloné ce dépôt, procéder à l'installation de l'ensemble des dépendances à l'aide de la commande "npm install" (toutes les dépendances sont déjà ajoutées au package.json)
* Une fois les dépendances installés, créer une branche de la forme &lt;nom_prenom&gt;
* À la fin du TP, commiter sur cette branche


## Le contexte

Vous êtes le gérant d'un magasin de jeux vidéos. 
Et comme tout bon commerçant, vous tenez régulièrement à jour vos stocks 
ainsi que votre comptabilité ... Enfin ça c'était avant que votre logiciel 
de gestion ne tombe en panne. En plus, l'entreprise qui l'a conçu a fait faillite, 
impossible d'obtenir une nouvelle version. 

Qu'à cela ne tienne, vous avez récemment suivi une super formation sur React et sans vouloir 
vous vanter, vous êtes devenu un vrai pro (il faut dire que le formateur était vraiment bon ^^). 
Vous dressez rapidement une liste de toutes les fonctionnalités nécessaires et vous vous mettez au travail. 

---------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------

## Liste des fonctionnalités 


### Créer une page "Home" (4pts)
- Cette page doit comporter un texte de présentation de votre activité - (1pt)
- Une liste de 5 jeux aléatoires doit être mise en avant (à condition que le jeu soit en stock) - (2pts)
- Il est possible de cliquer sur les jeux mis en avant afin de se rendre sur la fiche détaillée du jeu - (1pt)


### Créer une page "Catalogue" (3pts)
- Cette page doit afficher un aperçu de l'ensemble des jeux de votre magasin (nom, prix et image)   - (0.5pt)
- La liste des jeux doit être tirée du fichier "games.json" situé dans le dossier "public/data"     - (0.5pt)
- Si le stock d'un produit est inférieur ou égal à 0, alors une mention "stock épuisé" est ajouté à l'aperçu - (0.5pt)produit.
- Au click sur l'un des jeux, on est redirigé vers la fiche détaillé du jeu - (0.5pt)
- Il est possible de filtrer l'affichage des jeux par catégorie (chaque jeu possède une catégorie) - (0.5pt)
- Il est également possible d'afficher les jeux toutes catégories confondues. - (0.5pt)


### Créer une page "Detail" (4pts)
- Si le produit possède un stock inférieur ou égal à 0, alors le produit est affiché comme étant en rupture de stock et le bouton "ajouter au panier n'est pas disponible".  - (1pt)
- Cette page doit afficher l'ensemble des informations relatives à un produit - (1pt)
- Il est possible d'ajouter un produit au panier à l'aide d'un bouton "acheter" - (2pts)


### Création d'une page "Mon panier" (5pts)
- Cette page doit afficher un récapitulatif des produits ajoutés au panier.  - (1pt)
- Le total du panier est affiché en euros, HT et TTC (TTC = + 20%).  - (1pt)
- Il est possible de payer à l'aide d'un bouton "Régler mes achats".  - (1pt)
- Au click sur le bouton "ajouter au panier" le prix TTC est ajouté au CA (chiffre d'affaires) et chaque unité de chaque produit est enlevée des stocks. - (2pts)


### Création d'une page "Administration" (4pts)
- Cette page doit afficher l'ensemble des jeux du magasin sous une forme tabulaire (de tableau) avec les colonnes suivantes: id, title, img, stock et "actions". Il y a un bouton + et un bouton -  dans la colonne "actions".  - (1pt)
- Au click sur le bouton "+" on ajoute une unité au stock du jeu correspondant  - (1pt)
- Au click sur le bouton "-" on ajoute une unité au stock du jeu correspondant  - (1pt)
- Le CA (chiffre d'affaires) total du commerçant est affiché tout en haut de cette page.   - (1pt)

---------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------

## Contraintes technique

* Utilisation de Redux et de react-router **obligatoire**.
* Dans index.js, vous ne devez pas changer le &lt;Router&gt; de place.
* Dans index.js, vous ne devez pas changer le &lt;Provider&gt; de place.
* Vous **devez** absolument **respecter** les formats de routes suivants: 
    - La route pour le "Catalogue" est: **/catalog**
    - La route pour le "Detail" est: **/detail/:id**
    - La route pour la "Home" est: **/home**
    - La route pour le "Panier" est : **/cart**
    - La route pour "Administration" est : **/admin**
* Un effort sur le design serait grandement apprécié.
* La mise en place de "containers" serait grandement appréciée.



## Conseils 

- Privilégiez en priorité ce que vous savez faire.
- Privilégiez la fonctionnalité plutôt que le design.
- Dans le doute, reprenez le code vu en cours. 