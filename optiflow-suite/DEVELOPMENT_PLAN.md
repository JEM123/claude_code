# 🎯 PLAN DE DÉVELOPPEMENT COMPLET - OptiFlow Suite
## Transformation en Outil de Qualité Internationale

---

## 📋 TABLE DES MATIÈRES

1. [Analyse des Lacunes](#analyse-des-lacunes)
2. [Architecture Technique Complète](#architecture-technique-complète)
3. [Plan de Développement par Phases](#plan-de-développement-par-phases)
4. [Module Procédure - Spécification Détaillée](#module-procédure)
5. [Composants UI Standards](#composants-ui-standards)
6. [Règles Métier et Best Practices](#règles-métier)
7. [Planning et Ressources](#planning-et-ressources)

---

## 1. ANALYSE DES LACUNES

### ✅ Ce qui est déjà implémenté
- Architecture de base (Clean Architecture + DDD)
- Schéma de base de données complet (18 modules)
- Authentification JWT + RBAC
- Frontend React + Material-UI
- Docker Compose
- Documentation

### ❌ Ce qui manque (CRITIQUE pour qualité internationale)

#### A. Composants UI Standards
- [ ] **ListView Component** - Table avec tri, filtres, pagination, export
- [ ] **SplitView Component** - Liste 30-40% + Fiche 60-70%
- [ ] **FormCard Component** - Structure standardisée de fiches
- [ ] **FilterPanel Component** - Filtres avancés déployables
- [ ] **BreadcrumbNav Component** - Fil d'Ariane
- [ ] **TabPanel Component** - Navigation par onglets
- [ ] **TreeView Component** - Arborescence hiérarchique
- [ ] **FlowDiagram Component** - Éditeur de flux graphique
- [ ] **ThreeColumnView Component** - Vue 3 colonnes (Qui/Quoi/Comment)

#### B. Fonctionnalités Transversales
- [ ] **Système de recherche globale** - Recherche multi-modules
- [ ] **Gestion des favoris** - Favoris par utilisateur
- [ ] **Historique des modifications** - Audit trail visuel
- [ ] **Système de notifications** - Notifications temps réel + email
- [ ] **Exports multi-formats** - CSV, Excel, PDF
- [ ] **Actions en masse** - Opérations bulk
- [ ] **Menu contextuel** - Clic droit personnalisé
- [ ] **Système de liens inter-modules** - Navigation contextuelle

#### C. Modules Fonctionnels (16 modules à implémenter)
1. ❌ Module Entity (avec arborescence interactive)
2. ❌ Module Person (avec hiérarchie + organigramme + trombinoscope)
3. ❌ Module Role (avec gestion permissions)
4. ❌ Module Position
5. ❌ Module Competency
6. ❌ Module Training
7. ❌ Module Document (avec versioning + validation)
8. ❌ Module Process
9. ❌ **Module Procedure** (PRIORITÉ #1 - avec Flux + 3 colonnes)
10. ❌ Module Task/TodoManager
11. ❌ Module Risk (avec matrice + évaluation)
12. ❌ Module Control
13. ❌ Module Incident
14. ❌ Module Improvement
15. ❌ Module Mission (avec statistiques)
16. ❌ Module Indicator (avec graphiques)
17. ❌ Module ProcessMap (cartes SWOT, etc.)
18. ❌ Module Business Intelligence

#### D. Fonctionnalités Avancées
- [ ] **Éditeur graphique de flux** - Pour procédures et processus
- [ ] **Moteur de workflow** - Validation, approbation
- [ ] **Système de versioning** - Pour tous les documents
- [ ] **Générateur de rapports** - Templates personnalisables
- [ ] **Dashboard configurables** - Widgets drag & drop
- [ ] **Import/Export de données** - Migration et backup
- [ ] **API REST complète** - Pour intégrations externes
- [ ] **WebSocket temps réel** - Pour collaboration

---

## 2. ARCHITECTURE TECHNIQUE COMPLÈTE

### 2.1 Architecture Frontend

```
frontend/src/
├── components/
│   ├── common/                    # Composants réutilisables
│   │   ├── ListView/             # ✨ Table avec tri, filtres, pagination
│   │   ├── SplitView/            # ✨ Vue splitée 30-40% / 60-70%
│   │   ├── FormCard/             # ✨ Carte de formulaire standardisée
│   │   ├── FilterPanel/          # ✨ Panneau de filtres avancés
│   │   ├── TabPanel/             # ✨ Onglets standardisés
│   │   ├── TreeView/             # ✨ Arborescence interactive
│   │   ├── BreadcrumbNav/        # ✨ Fil d'Ariane
│   │   ├── SearchBar/            # ✨ Barre de recherche
│   │   ├── ActionBar/            # ✨ Barre d'actions
│   │   ├── StatusChip/           # ✨ Badges de statut
│   │   ├── ContextMenu/          # ✨ Menu contextuel
│   │   ├── ExportButton/         # ✨ Export CSV/Excel/PDF
│   │   └── BulkActions/          # ✨ Actions en masse
│   │
│   ├── procedure/                 # ✨ Composants spécifiques Procédure
│   │   ├── FlowEditor/           # Éditeur de flux graphique
│   │   │   ├── FlowCanvas.tsx    # Canvas principal
│   │   │   ├── FlowNode.tsx      # Nœud de flux
│   │   │   ├── FlowEdge.tsx      # Connexion entre nœuds
│   │   │   ├── NodePalette.tsx   # Palette de nœuds
│   │   │   ├── FlowToolbar.tsx   # Barre d'outils
│   │   │   └── FlowValidator.tsx # Validation du flux
│   │   │
│   │   ├── ThreeColumnView/      # Vue 3 colonnes
│   │   │   ├── ColumnWho.tsx     # Colonne "Qui"
│   │   │   ├── ColumnWhat.tsx    # Colonne "Quoi"
│   │   │   ├── ColumnHow.tsx     # Colonne "Comment"
│   │   │   └── ColumnSync.tsx    # Synchronisation
│   │   │
│   │   └── ProcedureVersioning/  # Gestion de versions
│   │       ├── VersionList.tsx
│   │       ├── VersionCompare.tsx
│   │       └── VersionRestore.tsx
│   │
│   ├── charts/                    # Graphiques et visualisations
│   │   ├── LineChart/
│   │   ├── BarChart/
│   │   ├── PieChart/
│   │   ├── GanttChart/
│   │   ├── OrgChart/             # Organigramme
│   │   ├── RiskMatrix/           # Matrice des risques
│   │   └── ProcessMap/           # Carte des processus
│   │
│   └── forms/                     # Formulaires spécialisés
│       ├── FormBuilder/          # Constructeur de formulaires
│       ├── DynamicForm/          # Formulaires dynamiques
│       └── ValidationRules/      # Règles de validation
│
├── features/                      # Modules (Redux Slices)
│   ├── auth/                     # ✅ Authentication
│   ├── entity/                   # ❌ Entités
│   ├── person/                   # ❌ Personnes
│   ├── role/                     # ❌ Rôles
│   ├── position/                 # ❌ Postes
│   ├── competency/               # ❌ Compétences
│   ├── training/                 # ❌ Formations
│   ├── document/                 # ❌ Documents
│   ├── process/                  # ❌ Processus
│   ├── procedure/                # ❌ Procédures (PRIORITÉ)
│   ├── task/                     # ❌ Tâches
│   ├── risk/                     # ❌ Risques
│   ├── control/                  # ❌ Contrôles
│   ├── incident/                 # ❌ Incidents
│   ├── improvement/              # ❌ Améliorations
│   ├── mission/                  # ❌ Missions
│   ├── indicator/                # ❌ Indicateurs
│   ├── processMap/               # ❌ Cartes de processus
│   ├── businessIntelligence/     # ❌ Business Intelligence
│   ├── search/                   # ❌ Recherche globale
│   ├── notification/             # ❌ Notifications
│   └── links/                    # ❌ Liens inter-modules
│
├── services/
│   ├── api/                      # Services API par module
│   │   ├── entityService.ts
│   │   ├── personService.ts
│   │   ├── procedureService.ts
│   │   └── ...
│   ├── websocket/                # WebSocket temps réel
│   ├── export/                   # Service d'export
│   ├── import/                   # Service d'import
│   └── notification/             # Service de notifications
│
└── utils/
    ├── validators/               # Validations
    ├── formatters/               # Formatage
    ├── permissions/              # Gestion des permissions
    ├── workflow/                 # Moteur de workflow
    └── reports/                  # Génération de rapports
```

### 2.2 Architecture Backend

```
backend/src/
├── domain/
│   ├── entities/                 # Entités métier
│   │   ├── Entity.ts
│   │   ├── Person.ts
│   │   ├── Procedure.ts
│   │   └── ...
│   ├── value-objects/            # Value Objects
│   │   ├── Email.ts
│   │   ├── FlowNode.ts
│   │   └── ...
│   └── repositories/             # Interfaces repositories
│
├── application/
│   ├── use-cases/                # Use cases par module
│   │   ├── procedure/
│   │   │   ├── CreateProcedure.ts
│   │   │   ├── UpdateProcedureFlow.ts
│   │   │   ├── ValidateProcedure.ts
│   │   │   ├── CreateProcedureVersion.ts
│   │   │   ├── CompareProcedureVersions.ts
│   │   │   └── ExportProcedure.ts
│   │   ├── entity/
│   │   ├── person/
│   │   └── ...
│   │
│   ├── dtos/                     # Data Transfer Objects
│   │   ├── procedure/
│   │   │   ├── CreateProcedureDto.ts
│   │   │   ├── FlowDataDto.ts
│   │   │   └── ThreeColumnDto.ts
│   │   └── ...
│   │
│   └── services/                 # Application services
│       ├── WorkflowService.ts
│       ├── NotificationService.ts
│       ├── ExportService.ts
│       ├── ImportService.ts
│       ├── SearchService.ts
│       └── AuditService.ts
│
├── infrastructure/
│   ├── database/
│   │   ├── prisma/
│   │   └── repositories/         # Implémentations repositories
│   │       ├── ProcedureRepository.ts
│   │       ├── EntityRepository.ts
│   │       └── ...
│   │
│   ├── cache/
│   │   └── RedisCache.ts
│   │
│   ├── email/
│   │   └── EmailService.ts
│   │
│   ├── storage/
│   │   ├── FileStorage.ts
│   │   └── DocumentStorage.ts
│   │
│   ├── search/
│   │   └── ElasticsearchService.ts
│   │
│   └── websocket/
│       └── WebSocketServer.ts
│
└── presentation/
    ├── controllers/              # Controllers par module
    │   ├── ProcedureController.ts
    │   ├── EntityController.ts
    │   ├── PersonController.ts
    │   └── ...
    │
    ├── routes/                   # Routes API
    │   ├── procedure.routes.ts
    │   ├── entity.routes.ts
    │   └── ...
    │
    ├── validators/               # Validateurs de requêtes
    │   ├── procedureValidator.ts
    │   └── ...
    │
    └── middleware/
        ├── auth.ts              # ✅ Déjà implémenté
        ├── rbac.ts              # Role-Based Access Control
        ├── audit.ts             # Audit logging
        └── cache.ts             # Caching middleware
```

---

## 3. PLAN DE DÉVELOPPEMENT PAR PHASES

### 🎯 PHASE 1: FONDATIONS (Semaines 1-2)

#### Sprint 1.1: Composants UI Standards (5 jours)
**Objectif**: Créer la bibliothèque de composants réutilisables

**Jour 1-2: ListView Component**
```tsx
// Fonctionnalités:
- DataGrid avec Material-UI x-data-grid
- Tri multi-colonnes
- Filtres par colonne
- Recherche rapide
- Pagination configurable
- Sélection multiple (checkbox)
- Actions en masse
- Export CSV/Excel
- Colonnes personnalisables
- Responsive design

// Tests:
- Test de tri
- Test de filtrage
- Test de pagination
- Test d'export
- Test de sélection
```

**Jour 3-4: SplitView Component**
```tsx
// Fonctionnalités:
- Panneau gauche (liste) 30-40%
- Panneau droit (détails) 60-70%
- Redimensionnement par drag
- Sauvegarde de la taille (localStorage)
- Navigation clavier (↑↓)
- Mise à jour en temps réel
- Loading states
- Error boundaries

// Tests:
- Test de redimensionnement
- Test de navigation
- Test de persistance
```

**Jour 5: FormCard & FilterPanel**
```tsx
// FormCard:
- Structure d'onglets standardisée
- Actions standards (Save, Delete, Duplicate, Export)
- Métadonnées (Created, Modified, Status)
- Dirty state detection
- Confirmation avant quitter

// FilterPanel:
- Filtres déployables
- Sauvegarde des filtres
- Filtres prédéfinis
- Export des résultats filtrés
```

#### Sprint 1.2: Services Backend de Base (5 jours)

**Jour 1-2: Base Repository Pattern**
```typescript
// Créer le pattern repository générique
interface IRepository<T> {
  findAll(filter?: FilterDto): Promise<PaginatedResult<T>>;
  findById(id: string): Promise<T | null>;
  create(data: CreateDto): Promise<T>;
  update(id: string, data: UpdateDto): Promise<T>;
  delete(id: string): Promise<void>;
  count(filter?: FilterDto): Promise<number>;
}

// Implémentation avec Prisma
class BaseRepository<T> implements IRepository<T> {
  // ... implémentation générique
}
```

**Jour 3: Workflow Engine**
```typescript
// Moteur de workflow pour validations
interface WorkflowStep {
  id: string;
  name: string;
  validators: string[]; // User IDs
  status: 'pending' | 'approved' | 'rejected';
  order: number;
  requiredAll: boolean; // Tous ou un seul validateur
}

class WorkflowService {
  async createWorkflow(entityId: string, steps: WorkflowStep[]): Promise<Workflow>;
  async submitForValidation(entityId: string): Promise<void>;
  async approve(workflowId: string, userId: string): Promise<void>;
  async reject(workflowId: string, userId: string, reason: string): Promise<void>;
  async getWorkflowStatus(entityId: string): Promise<WorkflowStatus>;
}
```

**Jour 4: Notification Service**
```typescript
// Service de notifications multi-canaux
interface Notification {
  userId: string;
  type: NotificationType;
  title: string;
  message: string;
  link?: string;
  channels: ('in-app' | 'email' | 'push')[];
}

class NotificationService {
  async send(notification: Notification): Promise<void>;
  async sendBulk(notifications: Notification[]): Promise<void>;
  async markAsRead(notificationId: string): Promise<void>;
  async getUserNotifications(userId: string): Promise<Notification[]>;
}
```

**Jour 5: Search Service**
```typescript
// Service de recherche globale
class SearchService {
  async indexDocument(moduleType: string, id: string, data: any): Promise<void>;
  async search(query: string, filters?: SearchFilters): Promise<SearchResults>;
  async searchInModule(moduleType: string, query: string): Promise<SearchResults>;
  async deleteFromIndex(moduleType: string, id: string): Promise<void>;
}
```

### 🎯 PHASE 2: MODULES FONDAMENTAUX (Semaines 3-6)

#### Sprint 2.1: Module Entity avec Arborescence (5 jours)

**Jour 1: Backend Entity**
```typescript
// Use Cases
- CreateEntity
- UpdateEntity
- DeleteEntity
- GetEntityTree
- MoveEntity (dans l'arborescence)
- GetEntityPath (chemin complet)

// Controllers & Routes
GET    /api/v1/entities
GET    /api/v1/entities/tree
GET    /api/v1/entities/:id
GET    /api/v1/entities/:id/path
POST   /api/v1/entities
PUT    /api/v1/entities/:id
DELETE /api/v1/entities/:id
PUT    /api/v1/entities/:id/move
```

**Jour 2-3: Frontend Entity - Vue Arborescence**
```tsx
// Composants:
- EntityTreeView (TreeView personnalisé)
- EntityNode (nœud d'arbre)
- EntityCreateDialog
- EntityEditDialog
- EntityMoveDialog

// Fonctionnalités:
- Déploiement/repli des niveaux
- Drag & drop pour déplacer
- Recherche dans l'arbre
- Filtrage par type
- Export de la structure
- Impression
```

**Jour 4-5: Frontend Entity - Vue Liste + Fiche**
```tsx
// EntityListPage avec SplitView
- Liste hiérarchique à gauche
- Fiche détaillée à droite
- Onglet Général
- Onglet Liens (sous-entités, personnes, processus)
- Onglet Hiérarchie (visualisation)
```

#### Sprint 2.2: Module Person avec Hiérarchie (5 jours)

**Jour 1-2: Backend Person**
```typescript
// Use Cases supplémentaires
- GetPersonHierarchy (organigramme)
- GetPersonTasks
- GetPersonResponsibilities
- AssignPersonToEntity
- UpdatePersonManager

// Controllers & Routes
GET    /api/v1/persons
GET    /api/v1/persons/:id
GET    /api/v1/persons/:id/hierarchy
GET    /api/v1/persons/:id/tasks
GET    /api/v1/persons/:id/responsibilities
POST   /api/v1/persons
PUT    /api/v1/persons/:id
DELETE /api/v1/persons/:id
```

**Jour 3: Frontend Person - Vue Trombinoscope**
```tsx
// PersonGalleryView
- Grid de photos
- Filtres par département/service
- Recherche par nom
- Vue détails au clic
- Export des données
```

**Jour 4: Frontend Person - Vue Organigramme**
```tsx
// PersonOrgChart
- Visualisation hiérarchique
- Zoom et pan
- Recherche dans l'organigramme
- Export en image
- Impression
```

**Jour 5: Frontend Person - Onglets Tâches**
```tsx
// PersonTasks Component
- Onglet "Tâches Assignées"
  * Liste des tâches
  * Filtres par statut/priorité
  * Actions rapides

- Onglet "Responsabilité de Tâches"
  * Tâches dont la personne est responsable
  * Suivi d'avancement
  * Rapports
```

#### Sprint 2.3: Module Role & Permissions (3 jours)
#### Sprint 2.4: Module Position (2 jours)

### 🎯 PHASE 3: MODULE PROCÉDURE - PRIORITÉ ABSOLUE (Semaines 7-10)

#### Sprint 3.1: Backend Procedure (5 jours)

**Jour 1: Modèle de données Procedure**
```typescript
// Schéma Prisma déjà défini, créer les DTOs

interface FlowNodeDto {
  id: string;
  type: 'start' | 'task' | 'decision' | 'end' | 'subprocess';
  label: string;
  position: { x: number; y: number };
  data: {
    who?: string[];        // Acteurs
    what?: string;         // Actions
    how?: string;          // Moyens/Documents
    duration?: number;     // Durée en minutes
    controls?: string[];   // Points de contrôle
    indicators?: string[]; // Indicateurs
  };
}

interface FlowEdgeDto {
  id: string;
  source: string;
  target: string;
  label?: string;
  type: 'default' | 'conditional';
  condition?: string;
}

interface FlowDataDto {
  nodes: FlowNodeDto[];
  edges: FlowEdgeDto[];
  version: string;
}

interface ThreeColumnDataDto {
  steps: {
    order: number;
    who: string;      // Qui
    what: string;     // Quoi
    how: string;      // Comment
    documents?: string[];
    duration?: number;
  }[];
}
```

**Jour 2-3: Use Cases Procedure**
```typescript
// CreateProcedure.ts
class CreateProcedure {
  async execute(dto: CreateProcedureDto): Promise<Procedure> {
    // 1. Valider les données
    // 2. Créer la procédure
    // 3. Initialiser version 1.0
    // 4. Créer le workflow de validation
    // 5. Index pour recherche
    // 6. Notifier les parties prenantes
  }
}

// UpdateProcedureFlow.ts
class UpdateProcedureFlow {
  async execute(id: string, flowData: FlowDataDto): Promise<Procedure> {
    // 1. Valider le flux (cohérence)
    // 2. Vérifier les permissions
    // 3. Mettre à jour le flux
    // 4. Audit log
  }
}

// CreateProcedureVersion.ts
class CreateProcedureVersion {
  async execute(id: string, changes: string): Promise<ProcedureVersion> {
    // 1. Copier les données actuelles
    // 2. Créer une nouvelle version
    // 3. Incrémenter numéro de version
    // 4. Archiver l'ancienne version
    // 5. Notifier
  }
}

// ValidateProcedure.ts
class ValidateProcedure {
  async execute(id: string, validatorId: string, status: 'approved' | 'rejected', comments?: string): Promise<void> {
    // 1. Vérifier que l'utilisateur est validateur
    // 2. Mettre à jour le workflow
    // 3. Si tous ont validé, passer en "APPROVED"
    // 4. Notifier
  }
}

// CompareProcedureVersions.ts
class CompareProcedureVersions {
  async execute(id: string, version1: string, version2: string): Promise<VersionDiff> {
    // 1. Récupérer les deux versions
    // 2. Comparer field by field
    // 3. Générer diff visuel
  }
}

// ExportProcedure.ts
class ExportProcedure {
  async execute(id: string, format: 'pdf' | 'docx' | 'html'): Promise<Buffer> {
    // 1. Récupérer la procédure
    // 2. Générer le document selon le format
    // 3. Inclure le flux graphique
    // 4. Inclure les 3 colonnes
  }
}
```

**Jour 4-5: Controllers & Routes Procedure**
```typescript
// procedure.controller.ts
class ProcedureController {
  async list(req, res) { }
  async getById(req, res) { }
  async create(req, res) { }
  async update(req, res) { }
  async updateFlow(req, res) { }
  async updateThreeColumn(req, res) { }
  async createVersion(req, res) { }
  async getVersions(req, res) { }
  async compareVersions(req, res) { }
  async submitForValidation(req, res) { }
  async validate(req, res) { }
  async export(req, res) { }
  async delete(req, res) { }
}

// Routes
GET    /api/v1/procedures
GET    /api/v1/procedures/:id
GET    /api/v1/procedures/:id/versions
GET    /api/v1/procedures/:id/versions/compare?v1=1.0&v2=2.0
POST   /api/v1/procedures
PUT    /api/v1/procedures/:id
PUT    /api/v1/procedures/:id/flow
PUT    /api/v1/procedures/:id/three-column
POST   /api/v1/procedures/:id/versions
POST   /api/v1/procedures/:id/submit-validation
POST   /api/v1/procedures/:id/validate
POST   /api/v1/procedures/:id/export
DELETE /api/v1/procedures/:id
```

#### Sprint 3.2: Frontend Procedure - Éditeur de Flux (10 jours)

**Jour 1-3: FlowEditor Component - Canvas**
```tsx
// Utiliser ReactFlow (react-flow-renderer)
import ReactFlow, {
  Node,
  Edge,
  Background,
  Controls,
  MiniMap
} from 'react-flow-renderer';

// FlowCanvas.tsx
interface FlowCanvasProps {
  initialFlow?: FlowDataDto;
  readOnly?: boolean;
  onSave?: (flow: FlowDataDto) => void;
}

const FlowCanvas: FC<FlowCanvasProps> = ({ initialFlow, readOnly, onSave }) => {
  const [nodes, setNodes] = useState<Node[]>([]);
  const [edges, setEdges] = useState<Edge[]>([]);

  // Fonctionnalités:
  // - Drag & drop de nœuds depuis la palette
  // - Connexion de nœuds (edges)
  // - Édition de nœuds (double-clic)
  // - Suppression de nœuds/edges
  // - Validation de cohérence
  // - Auto-layout
  // - Zoom/Pan
  // - Minimap
  // - Export en image

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      fitView
    >
      <Background />
      <Controls />
      <MiniMap />
    </ReactFlow>
  );
};
```

**Jour 4-5: FlowNode Components**
```tsx
// StartNode.tsx - Nœud de départ
// TaskNode.tsx - Nœud de tâche
// DecisionNode.tsx - Nœud de décision
// SubprocessNode.tsx - Nœud de sous-processus
// EndNode.tsx - Nœud de fin

// Chaque nœud affiche:
- Icône selon le type
- Label
- Indicateurs (durée, acteurs, etc.)
- Points de connexion
- Menu contextuel (éditer, supprimer)

// NodeEditDialog.tsx
- Formulaire d'édition de nœud
- Champs: Label, Qui, Quoi, Comment, Durée
- Liens vers documents
- Points de contrôle
- Indicateurs
```

**Jour 6-7: NodePalette & FlowToolbar**
```tsx
// NodePalette.tsx
- Liste des types de nœuds disponibles
- Drag & drop vers le canvas
- Recherche de nœuds
- Nœuds récents

// FlowToolbar.tsx
- Bouton Sauvegarder
- Bouton Annuler
- Bouton Auto-layout
- Bouton Valider le flux
- Bouton Export (image, PDF)
- Bouton Zoom in/out
- Bouton Centrer
```

**Jour 8-9: FlowValidator**
```tsx
// FlowValidator.ts
class FlowValidator {
  validate(flow: FlowDataDto): ValidationResult {
    const errors: ValidationError[] = [];

    // 1. Vérifier qu'il y a un seul nœud de départ
    // 2. Vérifier qu'il y a au moins un nœud de fin
    // 3. Vérifier que tous les nœuds sont connectés
    // 4. Vérifier qu'il n'y a pas de boucles infinies
    // 5. Vérifier que les décisions ont au moins 2 sorties
    // 6. Vérifier que les données obligatoires sont remplies

    return { isValid: errors.length === 0, errors };
  }
}
```

**Jour 10: Integration & Tests**
```tsx
// Tests:
- Création de flux
- Édition de nœuds
- Connexion de nœuds
- Validation de flux
- Sauvegarde/Chargement
- Export
```

#### Sprint 3.3: Frontend Procedure - Vue 3 Colonnes (5 jours)

**Jour 1-3: ThreeColumnView Component**
```tsx
// ThreeColumnView.tsx
interface ThreeColumnViewProps {
  procedureId: string;
  data?: ThreeColumnDataDto;
  readOnly?: boolean;
  onSave?: (data: ThreeColumnDataDto) => void;
}

const ThreeColumnView: FC<ThreeColumnViewProps> = ({ data, readOnly, onSave }) => {
  return (
    <Box sx={{ display: 'flex', height: '100%' }}>
      {/* Colonne Qui (30%) */}
      <Box sx={{ width: '30%', borderRight: 1, borderColor: 'divider' }}>
        <ColumnHeader title="QUI ?" />
        <ColumnContent>
          {steps.map(step => (
            <ColumnWho key={step.order} step={step} onChange={handleChange} />
          ))}
        </ColumnContent>
      </Box>

      {/* Colonne Quoi (40%) */}
      <Box sx={{ width: '40%', borderRight: 1, borderColor: 'divider' }}>
        <ColumnHeader title="QUOI ?" />
        <ColumnContent>
          {steps.map(step => (
            <ColumnWhat key={step.order} step={step} onChange={handleChange} />
          ))}
        </ColumnContent>
      </Box>

      {/* Colonne Comment (30%) */}
      <Box sx={{ width: '30%' }}>
        <ColumnHeader title="COMMENT ?" />
        <ColumnContent>
          {steps.map(step => (
            <ColumnHow key={step.order} step={step} onChange={handleChange} />
          ))}
        </ColumnContent>
      </Box>
    </Box>
  );
};

// Fonctionnalités:
- Ajout/suppression d'étapes
- Réorganisation par drag & drop
- Édition inline
- Navigation synchronisée
- Liens vers documents
- Export PDF
```

**Jour 4-5: Synchronisation Flux ↔ 3 Colonnes**
```tsx
// FlowToThreeColumnConverter.ts
class FlowToThreeColumnConverter {
  convert(flowData: FlowDataDto): ThreeColumnDataDto {
    // Parcourir le flux et extraire les étapes séquentielles
    // Ignorer les décisions complexes
    // Mapper les données Qui/Quoi/Comment
  }
}

// ThreeColumnToFlowConverter.ts
class ThreeColumnToFlowConverter {
  convert(threeColumnData: ThreeColumnDataDto): FlowDataDto {
    // Créer un flux linéaire depuis les 3 colonnes
    // Générer les nœuds et edges
  }
}

// Bouton de basculement
<ToggleButtonGroup>
  <ToggleButton value="flow">Mode Flux</ToggleButton>
  <ToggleButton value="threeColumn">Mode 3 Colonnes</ToggleButton>
</ToggleButtonGroup>
```

#### Sprint 3.4: Frontend Procedure - Versioning (3 jours)

**Jour 1-2: Version Management**
```tsx
// ProcedureVersionList.tsx
- Liste des versions
- Comparaison de versions
- Restauration de version

// VersionCompareView.tsx
- Affichage côte à côte
- Highlight des différences
- Export du diff
```

**Jour 3: Validation Workflow**
```tsx
// ProcedureValidationPanel.tsx
- Liste des validateurs
- États de validation
- Boutons Approuver/Rejeter
- Commentaires
- Historique
```

#### Sprint 3.5: Frontend Procedure - Page Complète (2 jours)

**Jour 1-2: ProcedurePage Integration**
```tsx
// ProcedurePage.tsx avec tous les onglets
<TabPanel>
  <Tab label="Général">
    <ProcedureGeneralForm />
  </Tab>

  <Tab label="Flux - Mode Graphique">
    <FlowCanvas />
  </Tab>

  <Tab label="Flux - Mode 3 Colonnes">
    <ThreeColumnView />
  </Tab>

  <Tab label="Versions">
    <ProcedureVersionList />
  </Tab>

  <Tab label="Validations">
    <ProcedureValidationPanel />
  </Tab>

  <Tab label="Liens">
    <ProcedureLinksPanel />
  </Tab>
</TabPanel>
```

### 🎯 PHASE 4: AUTRES MODULES (Semaines 11-20)

Suivre le même pattern pour chaque module:

#### Semaine 11-12: Modules Document & Training
#### Semaine 13-14: Modules Task & Mission
#### Semaine 15-16: Modules Risk & Control
#### Semaine 17-18: Modules Incident & Improvement
#### Semaine 19-20: Modules Indicator & ProcessMap

Pour chaque module:
1. Backend (Use Cases, Controllers, Routes) - 2-3 jours
2. Frontend (ListView, SplitView, Forms) - 2-3 jours
3. Fonctionnalités spécifiques - 1-2 jours
4. Tests - 1 jour
5. Documentation - 0.5 jour

### 🎯 PHASE 5: FONCTIONNALITÉS TRANSVERSALES (Semaines 21-24)

#### Sprint 5.1: Recherche Globale (1 semaine)
#### Sprint 5.2: Système de Liens Inter-Modules (1 semaine)
#### Sprint 5.3: Notifications Temps Réel (1 semaine)
#### Sprint 5.4: Business Intelligence & Dashboards (1 semaine)

### 🎯 PHASE 6: OPTIMISATIONS & FINITIONS (Semaines 25-28)

#### Sprint 6.1: Performance (1 semaine)
- Optimisation des requêtes DB
- Lazy loading
- Caching intelligent
- Bundle optimization

#### Sprint 6.2: Tests (1 semaine)
- Tests unitaires backend
- Tests unitaires frontend
- Tests d'intégration
- Tests E2E

#### Sprint 6.3: Documentation (1 semaine)
- Documentation technique
- Guide utilisateur
- Vidéos tutoriels
- API documentation

#### Sprint 6.4: Déploiement (1 semaine)
- CI/CD pipelines
- Monitoring
- Backup automation
- Production deployment

---

## 4. MODULE PROCÉDURE - SPÉCIFICATION DÉTAILLÉE

### 4.1 Règles Métier

#### Workflow de Vie d'une Procédure

```
DRAFT → IN_REVIEW → APPROVED → PUBLISHED → ARCHIVED
  ↓         ↓           ↓           ↓
REJECTED  REJECTED   OBSOLETE   (fin de vie)
```

**États possibles:**
- **DRAFT**: En cours de rédaction
- **IN_REVIEW**: Soumise pour validation
- **APPROVED**: Approuvée mais pas encore publiée
- **PUBLISHED**: Active et utilisable
- **OBSOLETE**: Remplacée par une nouvelle version
- **ARCHIVED**: Archivée, consultation seulement
- **REJECTED**: Rejetée lors de la validation

#### Versioning

**Format de version**: `MAJOR.MINOR` (ex: 1.0, 1.1, 2.0)

- **MAJOR**: Changement majeur (restructuration du flux)
- **MINOR**: Changement mineur (correction, amélioration)

**Règles:**
- Impossible de modifier une procédure PUBLISHED
- Pour modifier: créer une nouvelle version
- L'ancienne version passe en OBSOLETE automatiquement
- Historique complet conservé

#### Validation

**Workflow configurable:**
- Liste de validateurs (1 à N personnes)
- Validation séquentielle OU parallèle
- Quorum configurable (ex: 2/3 validateurs minimum)
- Délai de validation (escalade automatique)

### 4.2 Interface Utilisateur - Wireframes

#### Éditeur de Flux - Mode Graphique

```
┌─────────────────────────────────────────────────────────────┐
│ Procedure: "Gestion des Achats" v2.0        [Save] [Export] │
├────────────┬────────────────────────────────────────────────┤
│ Palette    │                                                 │
│            │              CANVAS DE FLUX                     │
│ [Start]    │                                                 │
│ [Task]     │     ┌─────────┐                                │
│ [Decision] │     │ Démarr  │                                │
│ [Subprocess│     │  age    │                                │
│ [End]      │     └────┬────┘                                │
│            │          │                                       │
│ [Recent:]  │          ▼                                       │
│  - Order   │     ┌────────────┐                             │
│  - Approve │     │ Demande    │  ← Double-clic pour éditer  │
│            │     │ d'achat    │                              │
│            │     └─────┬──────┘                              │
│            │           │                                      │
│            │           ▼                                      │
│            │      ┌────────────┐                             │
│            │      │ Validation │                             │
│            │      │ Manager?   │                             │
│            │      └──┬────┬────┘                             │
│            │         │    │                                   │
│            │      Oui│    │Non                                │
│            │         ▼    ▼                                   │
│            │       ...   ...                                  │
│            │                                                  │
├────────────┴──────────────────────────────────────────────┬──┤
│ [Auto-Layout] [Validate Flow] [Export PNG]   | MiniMap  │▲▼│
└───────────────────────────────────────────────────────────┴──┘
```

#### Vue 3 Colonnes

```
┌─────────────────────────────────────────────────────────────┐
│ Procedure: "Gestion des Achats" v2.0        [Save] [Export] │
├────────────┬──────────────────┬─────────────────────────────┤
│    QUI ?   │      QUOI ?      │        COMMENT ?            │
├────────────┼──────────────────┼─────────────────────────────┤
│            │                  │                              │
│ Demandeur  │ 1. Créer une     │ - Formulaire F-ACH-001      │
│            │    demande       │ - Système ERP               │
│            │    d'achat       │ - Budg et disponible        │
│            │                  │                              │
├────────────┼──────────────────┼─────────────────────────────┤
│            │                  │                              │
│ Manager    │ 2. Valider la    │ - Vérifier budget           │
│            │    demande       │ - Contrôle conformité       │
│            │                  │ - Délai: 2 jours max        │
│            │                  │                              │
├────────────┼──────────────────┼─────────────────────────────┤
│            │                  │                              │
│ Service    │ 3. Comparer      │ - 3 devis minimum           │
│ Achats     │    les offres    │ - Grille d'évaluation       │
│            │                  │ - Document D-ACH-002        │
│            │                  │                              │
├────────────┼──────────────────┼─────────────────────────────┤
│ [+] Ajouter une étape                                       │
└─────────────────────────────────────────────────────────────┘
```

### 4.3 Fonctionnalités Avancées du Module Procédure

#### Import/Export de Modèles

```typescript
// Formats supportés:
- BPMN 2.0 (standard international)
- JSON (format interne)
- Excel (template 3 colonnes)
- PDF (export pour impression)
- DOCX (export pour Word)

// ProcedureImportService.ts
class ProcedureImportService {
  async importFromBPMN(file: File): Promise<Procedure>;
  async importFromExcel(file: File): Promise<Procedure>;
  async importFromJSON(file: File): Promise<Procedure>;
}

// ProcedureExportService.ts
class ProcedureExportService {
  async exportToBPMN(procedureId: string): Promise<Buffer>;
  async exportToPDF(procedureId: string, options?: PDFOptions): Promise<Buffer>;
  async exportToDOCX(procedureId: string): Promise<Buffer>;
  async exportToExcel(procedureId: string): Promise<Buffer>;
}
```

#### Simulation de Procédure

```typescript
// Exécuter une simulation de la procédure
interface SimulationStep {
  nodeId: string;
  timestamp: Date;
  actor: string;
  duration: number;
  decision?: string;
}

class ProcedureSimulator {
  async runSimulation(
    procedureId: string,
    inputs: SimulationInputs
  ): Promise<SimulationResult> {
    // 1. Parcourir le flux
    // 2. Calculer les durées
    // 3. Identifier les goulots d'étranglement
    // 4. Générer un rapport
  }
}
```

#### Analyse de Procédure

```typescript
// Analyser l'efficacité de la procédure
interface ProcedureAnalysis {
  totalDuration: number;         // Durée totale
  criticalPath: string[];        // Chemin critique
  bottlenecks: Bottleneck[];     // Goulots d'étranglement
  parallelizableSteps: string[]; // Étapes parallélisables
  improvements: Suggestion[];    // Suggestions d'amélioration
}

class ProcedureAnalyzer {
  async analyze(procedureId: string): Promise<ProcedureAnalysis>;
}
```

#### Conformité et Audit

```typescript
// Vérifier la conformité de la procédure
interface ComplianceCheck {
  standard: string;      // ISO 9001, ISO 27001, etc.
  status: 'compliant' | 'non-compliant' | 'partially-compliant';
  issues: ComplianceIssue[];
  recommendations: string[];
}

class ProcedureComplianceChecker {
  async checkCompliance(
    procedureId: string,
    standards: string[]
  ): Promise<ComplianceCheck[]>;
}
```

---

## 5. COMPOSANTS UI STANDARDS - SPÉCIFICATIONS DÉTAILLÉES

### 5.1 ListView Component

**Fichier**: `frontend/src/components/common/ListView/ListView.tsx`

```tsx
interface ListViewProps<T> {
  // Data
  data: T[];
  totalCount: number;

  // Columns
  columns: Column<T>[];

  // Actions
  onRowClick?: (row: T) => void;
  onSelectionChange?: (selectedIds: string[]) => void;
  bulkActions?: BulkAction[];
  rowActions?: RowAction<T>[];

  // Filtering & Sorting
  filters?: Filter[];
  defaultSort?: SortConfig;
  onFilterChange?: (filters: ActiveFilter[]) => void;
  onSortChange?: (sort: SortConfig) => void;

  // Pagination
  pagination?: PaginationConfig;
  onPageChange?: (page: number, pageSize: number) => void;

  // Export
  exportFormats?: ('csv' | 'excel' | 'pdf')[];
  onExport?: (format: string, selectedIds?: string[]) => void;

  // Search
  searchable?: boolean;
  searchPlaceholder?: string;
  onSearch?: (query: string) => void;

  // Customization
  rowHeight?: number | 'auto';
  density?: 'compact' | 'standard' | 'comfortable';
  striped?: boolean;
  hoverable?: boolean;

  // Loading & Empty states
  loading?: boolean;
  emptyMessage?: string;
  emptyAction?: React.ReactNode;
}

// Exemple d'utilisation:
<ListView
  data={procedures}
  totalCount={totalCount}
  columns={[
    { field: 'code', headerName: 'Code', width: 120, sortable: true },
    { field: 'title', headerName: 'Titre', flex: 1, sortable: true },
    { field: 'version', headerName: 'Version', width: 100 },
    {
      field: 'status',
      headerName: 'Statut',
      width: 150,
      renderCell: (params) => <StatusChip status={params.value} />
    },
    { field: 'updatedAt', headerName: 'Modifié le', width: 180, type: 'date' },
  ]}
  onRowClick={(procedure) => navigate(`/procedures/${procedure.id}`)}
  bulkActions={[
    { label: 'Exporter', icon: <ExportIcon />, onClick: handleBulkExport },
    { label: 'Supprimer', icon: <DeleteIcon />, onClick: handleBulkDelete, confirmMessage: 'Confirmer la suppression ?' },
  ]}
  rowActions={[
    { label: 'Éditer', icon: <EditIcon />, onClick: handleEdit },
    { label: 'Dupliquer', icon: <CopyIcon />, onClick: handleDuplicate },
    { label: 'Supprimer', icon: <DeleteIcon />, onClick: handleDelete, color: 'error' },
  ]}
  filters={[
    { field: 'status', label: 'Statut', type: 'select', options: statusOptions },
    { field: 'createdAt', label: 'Date de création', type: 'dateRange' },
    { field: 'responsible', label: 'Responsable', type: 'autocomplete', fetchOptions: fetchUsers },
  ]}
  exportFormats={['csv', 'excel', 'pdf']}
  searchable
  searchPlaceholder="Rechercher une procédure..."
  pagination={{ pageSize: 20, pageSizeOptions: [10, 20, 50, 100] }}
  density="standard"
  striped
  hoverable
/>
```

### 5.2 SplitView Component

**Fichier**: `frontend/src/components/common/SplitView/SplitView.tsx`

```tsx
interface SplitViewProps {
  // Left Panel (List)
  leftPanel: React.ReactNode;
  leftPanelWidth?: number | string; // Default: '35%'
  leftPanelMinWidth?: number;       // Default: 250

  // Right Panel (Details)
  rightPanel: React.ReactNode;
  rightPanelWidth?: number | string; // Default: '65%'
  rightPanelMinWidth?: number;       // Default: 400

  // Behavior
  resizable?: boolean;              // Default: true
  persistSize?: boolean;            // Save size in localStorage
  persistKey?: string;              // Key for localStorage

  // Navigation
  selectedId?: string;
  onSelectionChange?: (id: string) => void;

  // Loading states
  leftLoading?: boolean;
  rightLoading?: boolean;

  // Empty states
  emptyLeftMessage?: string;
  emptyRightMessage?: string;
}

// Exemple d'utilisation:
<SplitView
  leftPanel={
    <ListView
      data={procedures}
      columns={columns}
      onRowClick={(proc) => setSelectedProcedure(proc.id)}
      selectedRow={selectedProcedure}
    />
  }
  rightPanel={
    selectedProcedure ? (
      <ProcedureDetails procedureId={selectedProcedure} />
    ) : (
      <EmptyState message="Sélectionnez une procédure" />
    )
  }
  resizable
  persistSize
  persistKey="procedures-split-view"
  leftPanelWidth="35%"
  rightPanelWidth="65%"
/>
```

### 5.3 FormCard Component

**Fichier**: `frontend/src/components/common/FormCard/FormCard.tsx`

```tsx
interface FormCardProps {
  // Header
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
  status?: 'draft' | 'published' | 'archived';

  // Tabs
  tabs?: TabConfig[];
  defaultTab?: number;

  // Actions
  actions?: CardAction[];
  onSave?: () => Promise<void>;
  onDelete?: () => Promise<void>;
  onDuplicate?: () => Promise<void>;
  onExport?: () => void;

  // Form state
  isDirty?: boolean;
  isValid?: boolean;
  isSaving?: boolean;

  // Children
  children: React.ReactNode;

  // Metadata
  metadata?: {
    createdAt?: Date;
    createdBy?: string;
    updatedAt?: Date;
    updatedBy?: string;
  };
}

// Exemple d'utilisation:
<FormCard
  title="Procédure de Gestion des Achats"
  subtitle="Code: PROC-ACH-001 | Version: 2.0"
  icon={<DescriptionIcon />}
  status={procedure.status}
  tabs={[
    { label: 'Général', component: <GeneralTab /> },
    { label: 'Flux', component: <FlowTab /> },
    { label: 'Versions', component: <VersionsTab /> },
    { label: 'Validations', component: <ValidationsTab /> },
  ]}
  actions={[
    { label: 'Enregistrer', onClick: handleSave, primary: true, disabled: !isDirty },
    { label: 'Dupliquer', onClick: handleDuplicate },
    { label: 'Exporter PDF', onClick: handleExport },
    { label: 'Supprimer', onClick: handleDelete, color: 'error', confirmMessage: 'Êtes-vous sûr ?' },
  ]}
  metadata={{
    createdAt: procedure.createdAt,
    createdBy: procedure.createdBy.name,
    updatedAt: procedure.updatedAt,
    updatedBy: procedure.updatedBy.name,
  }}
  isDirty={isDirty}
  isValid={isValid}
  isSaving={isSaving}
>
  {/* Form content */}
</FormCard>
```

---

## 6. RÈGLES MÉTIER ET BEST PRACTICES

### 6.1 Principes Généraux

#### Validation des Données

**Frontend:**
- Validation en temps réel (Zod)
- Messages d'erreur clairs et contextuels
- Aide visuelle (tooltips, exemples)

**Backend:**
- Double validation (ne jamais faire confiance au frontend)
- Retour d'erreurs structurées
- Logging des tentatives de validation échouées

#### Gestion des Permissions

**RBAC Granulaire:**
```typescript
// Permissions par module
const permissions = {
  'procedure.create': ['admin', 'quality_manager'],
  'procedure.read': ['admin', 'quality_manager', 'user'],
  'procedure.update': ['admin', 'quality_manager', 'procedure_owner'],
  'procedure.delete': ['admin'],
  'procedure.validate': ['admin', 'validator'],
  'procedure.publish': ['admin', 'quality_manager'],
};

// Vérification de permission
async function hasPermission(userId: string, permission: string): Promise<boolean> {
  const userRoles = await getUserRoles(userId);
  const allowedRoles = permissions[permission] || [];
  return userRoles.some(role => allowedRoles.includes(role));
}
```

#### Audit Trail Complet

**Pour chaque opération critique:**
```typescript
interface AuditLog {
  id: string;
  userId: string;
  action: string;              // 'CREATE', 'UPDATE', 'DELETE', 'VALIDATE', etc.
  entityType: string;          // 'Procedure', 'Document', etc.
  entityId: string;
  changes: {
    before: any;
    after: any;
    diff: any;
  };
  ipAddress: string;
  userAgent: string;
  timestamp: Date;
}

// Logger automatiquement toutes les modifications
class AuditLogger {
  async log(auditLog: AuditLog): Promise<void> {
    await prisma.auditLog.create({ data: auditLog });
    // Optionnel: envoyer vers un système centralisé (ELK, Splunk)
  }
}
```

### 6.2 Performance & Scalabilité

#### Caching Strategy

**Niveaux de cache:**

1. **Client-side (React Query)**
```typescript
// Cache les données API côté client
const { data: procedures } = useQuery(
  ['procedures', filters],
  () => procedureService.getAll(filters),
  {
    staleTime: 5 * 60 * 1000,  // 5 minutes
    cacheTime: 30 * 60 * 1000,  // 30 minutes
  }
);
```

2. **Server-side (Redis)**
```typescript
// Cache les requêtes fréquentes
class CacheService {
  async get<T>(key: string): Promise<T | null> {
    const cached = await redis.get(key);
    return cached ? JSON.parse(cached) : null;
  }

  async set(key: string, value: any, ttl: number = 3600): Promise<void> {
    await redis.setex(key, ttl, JSON.stringify(value));
  }

  async invalidate(pattern: string): Promise<void> {
    const keys = await redis.keys(pattern);
    if (keys.length > 0) {
      await redis.del(...keys);
    }
  }
}

// Utilisation dans les repositories
class ProcedureRepository {
  async findById(id: string): Promise<Procedure> {
    const cacheKey = `procedure:${id}`;

    // Vérifier le cache
    const cached = await cacheService.get<Procedure>(cacheKey);
    if (cached) return cached;

    // Sinon, requête DB
    const procedure = await prisma.procedure.findUnique({ where: { id } });

    // Mettre en cache
    if (procedure) {
      await cacheService.set(cacheKey, procedure, 3600);
    }

    return procedure;
  }

  async update(id: string, data: UpdateDto): Promise<Procedure> {
    const procedure = await prisma.procedure.update({ where: { id }, data });

    // Invalider le cache
    await cacheService.invalidate(`procedure:${id}*`);

    return procedure;
  }
}
```

3. **Database Query Optimization**
```typescript
// Utiliser les includes judicieusement
const procedure = await prisma.procedure.findUnique({
  where: { id },
  include: {
    versions: {
      orderBy: { createdAt: 'desc' },
      take: 10, // Limiter
    },
    validations: {
      include: {
        validator: {
          select: { // Sélectionner seulement les champs nécessaires
            id: true,
            firstName: true,
            lastName: true,
            email: true,
          },
        },
      },
    },
  },
});

// Utiliser la pagination partout
const procedures = await prisma.procedure.findMany({
  where: filters,
  skip: (page - 1) * pageSize,
  take: pageSize,
  orderBy: { updatedAt: 'desc' },
});

// Compter séparément (avec cache)
const total = await prisma.procedure.count({ where: filters });
```

#### Lazy Loading & Code Splitting

```tsx
// Charger les modules à la demande
const ProcedurePage = lazy(() => import('@pages/procedure/ProcedurePage'));
const FlowEditor = lazy(() => import('@components/procedure/FlowEditor'));

// Dans les routes
<Route
  path="/procedures/:id"
  element={
    <Suspense fallback={<LoadingScreen />}>
      <ProcedurePage />
    </Suspense>
  }
/>
```

### 6.3 Sécurité

#### Input Sanitization

```typescript
// Sanitizer pour prévenir XSS
import DOMPurify from 'dompurify';

function sanitizeInput(input: string): string {
  return DOMPurify.sanitize(input, {
    ALLOWED_TAGS: ['b', 'i', 'u', 'strong', 'em', 'p', 'br'],
    ALLOWED_ATTR: [],
  });
}

// Utiliser dans les validators
const procedureSchema = z.object({
  title: z.string().min(3).max(200).transform(sanitizeInput),
  description: z.string().max(5000).transform(sanitizeInput),
  // ...
});
```

#### CSRF Protection

```typescript
// Middleware CSRF
import csrf from 'csurf';

const csrfProtection = csrf({ cookie: true });

app.use(csrfProtection);

// Dans les formulaires, inclure le token
<input type="hidden" name="_csrf" value={csrfToken} />
```

#### Rate Limiting par Utilisateur

```typescript
// Rate limit différent selon le rôle
const rateLimitByRole = async (req, res, next) => {
  const userRoles = await getUserRoles(req.user.id);

  let maxRequests = 100; // Default

  if (userRoles.includes('admin')) {
    maxRequests = 1000;
  } else if (userRoles.includes('premium')) {
    maxRequests = 500;
  }

  // Vérifier dans Redis
  const key = `ratelimit:${req.user.id}`;
  const current = await redis.incr(key);

  if (current === 1) {
    await redis.expire(key, 3600); // 1 heure
  }

  if (current > maxRequests) {
    return res.status(429).json({
      error: 'Too many requests',
      retryAfter: await redis.ttl(key)
    });
  }

  next();
};
```

### 6.4 Internationalisation (i18n)

```typescript
// Configuration i18next
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      fr: {
        translation: {
          procedure: {
            title: 'Procédure',
            create: 'Créer une procédure',
            edit: 'Modifier la procédure',
            delete: 'Supprimer la procédure',
            status: {
              draft: 'Brouillon',
              published: 'Publiée',
              archived: 'Archivée',
            },
          },
        },
      },
      en: {
        translation: {
          procedure: {
            title: 'Procedure',
            create: 'Create procedure',
            edit: 'Edit procedure',
            delete: 'Delete procedure',
            status: {
              draft: 'Draft',
              published: 'Published',
              archived: 'Archived',
            },
          },
        },
      },
    },
    lng: 'fr',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

// Utilisation
import { useTranslation } from 'react-i18next';

const ProcedurePage = () => {
  const { t } = useTranslation();

  return (
    <Typography variant="h4">
      {t('procedure.title')}
    </Typography>
  );
};
```

---

## 7. PLANNING ET RESSOURCES

### 7.1 Timeline Global

**Durée totale estimée: 28 semaines (7 mois)**

```
Mois 1: Fondations (Phases 1)
Mois 2-3: Modules Fondamentaux (Phase 2)
Mois 4-5: Module Procédure + Autres modules prioritaires (Phase 3-4 début)
Mois 6: Autres modules + Transversal (Phase 4 fin + Phase 5)
Mois 7: Optimisations, Tests, Documentation, Déploiement (Phase 6)
```

### 7.2 Ressources Nécessaires

**Équipe recommandée:**
- 1 Architecte / Tech Lead
- 2 Développeurs Backend
- 2 Développeurs Frontend
- 1 UI/UX Designer
- 1 QA Engineer
- 1 DevOps Engineer

**Technologies & Outils:**
- Node.js 20+ / React 18+
- PostgreSQL 16+ / Redis 7+
- Docker / Kubernetes
- GitHub / GitLab
- Jira / Linear pour gestion de projet
- Figma pour UI/UX

### 7.3 Livrables par Phase

**Phase 1:**
- Composants UI standards
- Services backend de base
- Documentation technique

**Phase 2:**
- Modules Entity, Person, Role, Position fonctionnels
- Tests unitaires
- Documentation utilisateur

**Phase 3:**
- Module Procédure complet (étoile)
- Éditeur de flux
- Vue 3 colonnes
- Versioning
- Tests E2E

**Phase 4:**
- Tous les autres modules
- Intégrations complètes
- Documentation complète

**Phase 5:**
- Fonctionnalités transversales
- Business Intelligence
- Recherche globale

**Phase 6:**
- Application optimisée
- Tests complets
- Documentation finale
- Déploiement production

---

## 8. CRITÈRES DE QUALITÉ INTERNATIONALE

### 8.1 Standards à Respecter

#### ISO 9001 (Qualité)
- Traçabilité complète
- Workflow de validation
- Audit trail
- Gestion documentaire

#### RGPD (Protection des données)
- Consentement utilisateurs
- Droit à l'oubli
- Portabilité des données
- Chiffrement des données sensibles

#### Accessibilité (WCAG 2.1 Level AA)
- Navigation au clavier
- Lecteurs d'écran
- Contrastes suffisants
- Textes alternatifs

#### Performance
- Lighthouse Score > 90
- First Contentful Paint < 1.5s
- Time to Interactive < 3s
- Cumulative Layout Shift < 0.1

### 8.2 Métriques de Succès

**Technique:**
- Code Coverage > 80%
- 0 bugs critiques
- 0 vulnérabilités de sécurité
- Uptime > 99.9%

**Utilisateur:**
- NPS (Net Promoter Score) > 50
- Taux d'adoption > 85%
- Temps de formation < 2 heures
- Satisfaction > 4.5/5

**Business:**
- Réduction des temps de traitement de 30%
- Amélioration de la conformité de 50%
- ROI positif en 12 mois

---

## 🎯 CONCLUSION

Ce plan de développement complet transformera OptiFlow Suite en un outil de **qualité internationale** comparable aux meilleurs systèmes du marché.

**Points forts du plan:**
✅ Architecture robuste et scalable
✅ Composants UI réutilisables et professionnels
✅ Module Procédure de niveau mondial (éditeur de flux + 3 colonnes)
✅ Tous les 18 modules implémentés
✅ Fonctionnalités transversales complètes
✅ Sécurité et performance optimales
✅ Tests et documentation exhaustifs

**Prochaine étape:**
Commencer l'implémentation en suivant ce plan phase par phase.

---

**Document créé le**: 30 Octobre 2024
**Version**: 1.0
**Statut**: Ready for Implementation

🚀 **Prêt à construire un outil exceptionnel!**
