# Guide de Contribution - OptiFlow Suite

Merci de votre intérêt pour contribuer à OptiFlow Suite ! Ce document vous guidera à travers le processus de contribution.

## 📋 Table des Matières

- [Code de Conduite](#code-de-conduite)
- [Comment Contribuer](#comment-contribuer)
- [Standards de Code](#standards-de-code)
- [Workflow Git](#workflow-git)
- [Tests](#tests)
- [Documentation](#documentation)

## 🤝 Code de Conduite

En participant à ce projet, vous vous engagez à respecter notre code de conduite :

- Soyez respectueux et professionnel
- Acceptez les critiques constructives
- Concentrez-vous sur ce qui est le mieux pour la communauté
- Faites preuve d'empathie envers les autres membres

## 💡 Comment Contribuer

### Signaler un Bug

1. Vérifiez que le bug n'a pas déjà été signalé
2. Créez une issue avec le template "Bug Report"
3. Incluez :
   - Description claire du bug
   - Étapes pour reproduire
   - Comportement attendu vs observé
   - Captures d'écran si applicable
   - Environnement (OS, navigateur, versions)

### Proposer une Fonctionnalité

1. Créez une issue avec le template "Feature Request"
2. Expliquez :
   - Le problème que cela résout
   - Comment cela devrait fonctionner
   - Des exemples d'utilisation
   - Des alternatives considérées

### Soumettre une Pull Request

1. Fork le repository
2. Créez une branche depuis `main`
3. Faites vos modifications
4. Testez vos changements
5. Soumettez une Pull Request

## 📝 Standards de Code

### TypeScript

- Utilisez TypeScript strict mode
- Typez toutes les fonctions et variables
- Évitez `any`, préférez `unknown`
- Utilisez des interfaces pour les objets

```typescript
// ✅ Bon
interface User {
  id: string;
  name: string;
  email: string;
}

function getUser(id: string): Promise<User> {
  // ...
}

// ❌ Mauvais
function getUser(id: any): any {
  // ...
}
```

### Nommage

- **Variables & Fonctions**: camelCase
- **Classes & Interfaces**: PascalCase
- **Constants**: UPPER_SNAKE_CASE
- **Fichiers**: kebab-case ou PascalCase (composants)

```typescript
// Variables et fonctions
const userName = 'John';
function calculateTotal() {}

// Classes et interfaces
class UserService {}
interface UserData {}

// Constantes
const MAX_RETRY_COUNT = 3;

// Fichiers
// user-service.ts
// UserProfile.tsx
```

### Conventions React

```tsx
// ✅ Bon - Composant fonctionnel avec TypeScript
import { FC } from 'react';

interface UserCardProps {
  user: User;
  onEdit: (id: string) => void;
}

const UserCard: FC<UserCardProps> = ({ user, onEdit }) => {
  return (
    <Card>
      <Typography>{user.name}</Typography>
      <Button onClick={() => onEdit(user.id)}>Edit</Button>
    </Card>
  );
};

export default UserCard;
```

### Clean Architecture

Respectez la séparation des couches :

```
src/
├── domain/           # Entités et règles métier (pas de dépendances)
├── application/      # Use cases (dépend du domain)
├── infrastructure/   # Implémentations techniques
└── presentation/     # Controllers, routes (dépend de l'application)
```

### Commentaires

```typescript
// ✅ Bon - Commentaires utiles
/**
 * Calcule le total d'une commande incluant les taxes et remises
 * @param items - Liste des articles
 * @param taxRate - Taux de taxe (0.0 - 1.0)
 * @returns Total calculé avec taxes
 */
function calculateOrderTotal(items: OrderItem[], taxRate: number): number {
  // Utiliser reduce pour éviter les mutations
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  return subtotal * (1 + taxRate);
}

// ❌ Mauvais - Commentaires redondants
// Cette fonction ajoute 1 à x
function addOne(x: number): number {
  return x + 1; // retourne x + 1
}
```

## 🌳 Workflow Git

### Branches

- `main` - Branche principale (production)
- `develop` - Branche de développement
- `feature/<nom>` - Nouvelles fonctionnalités
- `fix/<nom>` - Corrections de bugs
- `hotfix/<nom>` - Corrections urgentes
- `refactor/<nom>` - Refactoring
- `docs/<nom>` - Documentation

### Commits

Suivez la convention [Conventional Commits](https://www.conventionalcommits.org/) :

```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

**Types:**
- `feat`: Nouvelle fonctionnalité
- `fix`: Correction de bug
- `docs`: Documentation
- `style`: Formatage, virgules manquantes, etc.
- `refactor`: Refactoring du code
- `perf`: Amélioration de performance
- `test`: Ajout de tests
- `chore`: Maintenance, dépendances, etc.

**Exemples:**

```bash
feat(auth): add JWT authentication
fix(users): resolve duplicate email validation
docs(readme): update installation instructions
refactor(api): simplify error handling
```

### Process de Pull Request

1. **Créer une branche**
```bash
git checkout -b feature/user-profile
```

2. **Faire vos commits**
```bash
git add .
git commit -m "feat(profile): add user profile page"
```

3. **Mettre à jour avec main**
```bash
git fetch origin
git rebase origin/main
```

4. **Pousser votre branche**
```bash
git push origin feature/user-profile
```

5. **Créer une Pull Request**
- Titre clair et descriptif
- Description détaillée des changements
- Référencer les issues liées
- Ajouter des captures d'écran si UI
- Demander une review

6. **Review Process**
- Au moins 1 approbation requise
- Tous les tests doivent passer
- Code coverage maintenu
- Pas de conflits

## ✅ Tests

### Backend

```typescript
describe('UserService', () => {
  it('should create a new user', async () => {
    const userData = {
      email: 'test@example.com',
      username: 'testuser',
      password: 'password123',
    };

    const user = await userService.create(userData);

    expect(user).toBeDefined();
    expect(user.email).toBe(userData.email);
  });
});
```

### Frontend

```tsx
describe('LoginPage', () => {
  it('should display login form', () => {
    render(<LoginPage />);

    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument();
  });
});
```

### Exécuter les Tests

```bash
# Backend
cd backend
npm test
npm run test:coverage

# Frontend
cd frontend
npm test
npm run test:coverage
```

## 📖 Documentation

### Code Documentation

- Documentez les fonctions publiques avec JSDoc
- Ajoutez des commentaires pour la logique complexe
- Maintenez le README à jour

### API Documentation

- Utilisez Swagger/OpenAPI annotations
- Documentez tous les endpoints
- Incluez des exemples de requêtes/réponses

```typescript
/**
 * @swagger
 * /api/v1/users:
 *   get:
 *     summary: Get all users
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: List of users
 */
router.get('/users', getUsers);
```

## 🎨 Style Guide

### ESLint & Prettier

Le projet utilise ESLint et Prettier pour maintenir un code cohérent :

```bash
# Linter
npm run lint
npm run lint:fix

# Formatter
npm run format
```

### Configuration IDE

**VS Code** - Extensions recommandées :
- ESLint
- Prettier
- TypeScript and JavaScript Language Features
- Prisma

## 🚀 Checklist avant Pull Request

- [ ] Code suit les standards du projet
- [ ] Tests ajoutés/mis à jour
- [ ] Tests passent localement
- [ ] Documentation mise à jour
- [ ] Commits suivent la convention
- [ ] Branch à jour avec main
- [ ] Pas de console.log ou code de debug
- [ ] Variables d'environnement documentées

## 📞 Questions ?

N'hésitez pas à :
- Ouvrir une issue pour discuter
- Rejoindre notre Discord
- Contacter l'équipe : dev@optiflow-suite.com

Merci pour votre contribution ! 🎉
