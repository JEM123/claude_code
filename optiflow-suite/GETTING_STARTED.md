# Guide de Démarrage Rapide - OptiFlow Suite

Ce guide vous aidera à démarrer rapidement avec OptiFlow Suite.

## 📋 Prérequis

Assurez-vous d'avoir installé les éléments suivants :

- **Node.js** 20+ ([télécharger](https://nodejs.org/))
- **Docker** & **Docker Compose** ([télécharger](https://www.docker.com/))
- **Git** ([télécharger](https://git-scm.com/))

## 🚀 Installation avec Docker (Recommandé)

### 1. Cloner le repository

```bash
git clone <repository-url>
cd optiflow-suite
```

### 2. Configurer les variables d'environnement

**Backend:**
```bash
cd backend
cp .env.example .env
# Éditer .env avec vos valeurs
cd ..
```

**Frontend:**
```bash
cd frontend
cp .env.example .env
# Éditer .env avec vos valeurs
cd ..
```

### 3. Lancer l'application avec Docker Compose

```bash
docker-compose up -d
```

Cette commande va :
- Démarrer PostgreSQL sur le port 5432
- Démarrer Redis sur le port 6379
- Démarrer le backend sur le port 4000
- Démarrer le frontend sur le port 3000
- Démarrer Adminer (GUI base de données) sur le port 8080

### 4. Initialiser la base de données

```bash
# Dans un nouveau terminal
docker-compose exec backend npx prisma migrate dev --name init
docker-compose exec backend npx prisma db seed
```

### 5. Accéder à l'application

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:4000
- **API Documentation**: http://localhost:4000/api-docs
- **Adminer**: http://localhost:8080
  - Serveur: postgres
  - Utilisateur: optiflow
  - Mot de passe: optiflow
  - Base de données: optiflow_db

## 🛠️ Installation Manuelle (Sans Docker)

### 1. Installer PostgreSQL

Téléchargez et installez PostgreSQL 16 depuis [postgresql.org](https://www.postgresql.org/download/)

Créez une base de données :
```sql
CREATE DATABASE optiflow_db;
CREATE USER optiflow WITH PASSWORD 'optiflow';
GRANT ALL PRIVILEGES ON DATABASE optiflow_db TO optiflow;
```

### 2. Installer Redis

**macOS:**
```bash
brew install redis
brew services start redis
```

**Ubuntu/Debian:**
```bash
sudo apt-get install redis-server
sudo systemctl start redis
```

**Windows:**
Téléchargez depuis [redis.io](https://redis.io/download)

### 3. Configurer et lancer le Backend

```bash
cd backend
npm install
cp .env.example .env
# Éditer .env avec vos valeurs

# Générer le client Prisma
npx prisma generate

# Exécuter les migrations
npx prisma migrate dev --name init

# Seed la base de données
npx prisma db seed

# Lancer le serveur en mode dev
npm run dev
```

Le backend sera disponible sur http://localhost:4000

### 4. Configurer et lancer le Frontend

```bash
# Dans un nouveau terminal
cd frontend
npm install
cp .env.example .env
# Éditer .env avec vos valeurs

# Lancer l'application en mode dev
npm start
```

Le frontend sera disponible sur http://localhost:3000

## 📚 Commandes Utiles

### Docker Compose

```bash
# Démarrer tous les services
docker-compose up -d

# Arrêter tous les services
docker-compose down

# Voir les logs
docker-compose logs -f

# Voir les logs d'un service spécifique
docker-compose logs -f backend

# Reconstruire les images
docker-compose build

# Accéder au shell d'un conteneur
docker-compose exec backend sh
docker-compose exec frontend sh
```

### Prisma (Database)

```bash
# Générer le client Prisma
npx prisma generate

# Créer une migration
npx prisma migrate dev --name <migration_name>

# Appliquer les migrations en production
npx prisma migrate deploy

# Ouvrir Prisma Studio (GUI)
npx prisma studio

# Reset la base de données
npx prisma migrate reset
```

### Backend

```bash
# Mode développement
npm run dev

# Build
npm run build

# Production
npm start

# Tests
npm test

# Tests avec coverage
npm run test:coverage

# Linter
npm run lint
npm run lint:fix

# Formatter
npm run format
```

### Frontend

```bash
# Mode développement
npm start

# Build pour production
npm run build

# Tests
npm test

# Tests avec coverage
npm run test:coverage

# Linter
npm run lint
npm run lint:fix

# Formatter
npm run format
```

## 🎯 Première Utilisation

### Créer un compte administrateur

1. Accédez à http://localhost:3000
2. Cliquez sur "S'inscrire"
3. Remplissez le formulaire
4. Vous serez automatiquement connecté

### Explorer l'API

1. Accédez à http://localhost:4000/api-docs
2. Explorez la documentation Swagger
3. Testez les endpoints directement depuis l'interface

## 🔧 Configuration Avancée

### Variables d'environnement Backend

```env
# Application
NODE_ENV=development
PORT=4000

# Database
DATABASE_URL=postgresql://optiflow:optiflow@localhost:5432/optiflow_db

# JWT
JWT_SECRET=your-secret-key
JWT_REFRESH_SECRET=your-refresh-secret
JWT_EXPIRES_IN=15m
JWT_REFRESH_EXPIRES_IN=7d

# Redis
REDIS_HOST=localhost
REDIS_PORT=6379

# Email (optionnel)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
```

### Variables d'environnement Frontend

```env
REACT_APP_API_URL=http://localhost:4000/api/v1
REACT_APP_WS_URL=ws://localhost:4000
REACT_APP_ENV=development
```

## 🐛 Dépannage

### Le backend ne démarre pas

1. Vérifiez que PostgreSQL est démarré
2. Vérifiez les variables d'environnement dans `.env`
3. Vérifiez que le port 4000 n'est pas déjà utilisé

### Le frontend ne peut pas se connecter au backend

1. Vérifiez que le backend est démarré
2. Vérifiez `REACT_APP_API_URL` dans `.env`
3. Vérifiez les CORS dans le backend

### Erreur de migration Prisma

```bash
# Reset la base de données
npx prisma migrate reset

# Recréer les migrations
npx prisma migrate dev --name init
```

### Docker Compose ne démarre pas

```bash
# Arrêter tous les conteneurs
docker-compose down

# Supprimer les volumes
docker-compose down -v

# Reconstruire et redémarrer
docker-compose up -d --build
```

## 📖 Documentation Supplémentaire

- [Architecture](./docs/architecture.md) - Architecture du système
- [API Documentation](http://localhost:4000/api-docs) - Documentation Swagger
- [Developer Guide](./docs/developer-guide.md) - Guide développeur
- [Contributing](./CONTRIBUTING.md) - Guide de contribution

## 🆘 Support

Si vous rencontrez des problèmes :

1. Consultez la documentation
2. Vérifiez les [issues GitHub](https://github.com/your-org/optiflow-suite/issues)
3. Créez une nouvelle issue si nécessaire
4. Contactez l'équipe : support@optiflow-suite.com

## 🎉 Prochaines Étapes

Maintenant que votre environnement est configuré :

1. Explorez le code source
2. Lisez la documentation
3. Créez votre première entité
4. Personnalisez le thème
5. Ajoutez vos premiers modules

Bon développement ! 🚀
