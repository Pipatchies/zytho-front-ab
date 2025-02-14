# 🍻 Zythologue - L'application des amateurs de bières !  

Zythologue est une application web développée avec **React.js**, **TypeScript** et **TailwindCSS**. Elle permet aux utilisateurs d'explorer une large collection de bières artisanales et de découvrir les brasseries qui les produisent.  

## 📌 Contexte du projet  

Cette application est le front-end d'un projet visant à recenser et à fournir des informations détaillées sur les bières artisanales et leurs brasseries. Elle consomme une **API REST** permettant d'afficher les différentes bières, leurs caractéristiques et leurs brasseries associées.  

L'application offre :  
- ✅ Une **page listant toutes les bières** avec une recherche avancée et des filtres.  
- ✅ Une **page dédiée aux brasseries**, permettant d'afficher leurs informations.  
- ✅ Une **fiche détaillée pour chaque brasserie** affichant les bières qu'elle produit
- ✅ Une **fiche détaillée pour chaque bière** avec ses caractéristiques principales.  
- ✅ Une **navigation fluide et responsive**, respectant les standards **RGAA** pour l'accessibilité.  

---

## 🚀 Fonctionnalités principales  

### 🔎 **Catalogue de bières**  
- Affichage sous forme de grille.  
- Recherche dynamique et filtres (nom, ABV, prix).  
- Accès aux fiches détaillées de chaque bière.  

### 🏭 **Répertoire des brasseries**  
- Liste des brasseries avec leurs informations principales.  
- Consultation des bières produites par chaque brasserie.  

### 📑 **Fiches détaillées**  
- Informations complètes sur chaque bière : photo, description, taux d’alcool, prix, ingrédients.
- Informations complètes sur chaque brasserie : description, adresse, bières qu'elle produit. 

### 🎨 **Responsive Design & Accessibilité**  
- Interface adaptée aux écrans mobiles et tablettes.  
- Conforme aux normes **RGAA** pour assurer une bonne accessibilité.  

---

## 🛠️ Technologies utilisées  

- ⚛ **React.js** + **TypeScript**  
- 🎨 **TailwindCSS** (pour un design épuré et responsive)  
- 🌍 **React Router** (gestion de la navigation)  
- 🔗 **Axios API** (consommation de l'API REST)  

---

## 📂 Installation et Configuration  

### 1️⃣ **Cloner le projet**  

```bash
git clone https://github.com/2024-devops-alt-dist zythologue-front-ab.git

cd zythologue-front-ab
```
### 2️⃣ Installer les dépendances

```bash
npm install
```

### 3️⃣ Configurer les variables d’environnement

Créer un fichier .env à la racine du projet et y ajouter :

```bash
VITE_API_URL=http://localhost:3000/api/v1
```

### 4️⃣ Lancer l’application avec Vite

Vite est utilisé pour le développement rapide de l'application. Lancer le serveur local avec la commande suivante :

```bash
npm run dev
```

Puis ouvrir http://localhost:5173 dans le navigateur.

## 📌 Bonnes pratiques respectées

✔️ Code structuré : Composants bien organisés et typés avec TypeScript.

✔️ Pratiques Git : Commits atomiques et conventionnels.

✔️ Responsive & Mobile First.

✔️ Normes d’accessibilité (RGAA).

## 🚀 Déploiement

L'application peut être hébergée sur Vercel, Netlify ou toute autre plateforme compatible avec React + Vite.

## 🤝 Contribuer au projet
Les contributions sont les bienvenues ! 🚀

1. Forkez le dépôt.

2. Créez une branche pour votre fonctionnalité :

```bash
git checkout -b feature/ma-fonctionnalité
```

3. Effectuez vos modifications et validez-les :

```bash
git commit -am '✨ Ajoute ma nouvelle fonctionnalité'
```

4. Poussez vos modifications :

```bash
git push origin feature/ma-fonctionnalité
```
5. Ouvrez une Pull Request.

## 📄 Licence
Ce projet a été réalisé dans un cadre pédagogique et peut être utilisé librement.
