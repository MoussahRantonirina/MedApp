# medapp

An Electron application with React and TypeScript

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) + [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

## Project Setup

### Install

```bash
$ npm install
```

### Development

```bash
$ npm run dev
```

### Build

```bash
# For windows
$ npm run build:win

# For macOS
$ npm run build:mac

# For Linux
$ npm run build:linux
```

## Base de données (SQLite)

L'application utilise `better-sqlite3` pour la persistance des données. Les tables sont automatiquement créées ou mises à jour au démarrage du projet via un script de migration automatique.

### Emplacement du fichier en développement

Après avoir lancé `npm run dev`, le fichier de la base de données est généré localement dans le dossier `userData` d'Electron :

- **Windows :** `%appdata%/medapp/cabinet_medical.db`
- **macOS :** `~/Library/Application Support/medapp/cabinet_medical.db`
- **Linux :** `~/.config/medapp/cabinet_medical.db`

### Outils recommandés

Pour visualiser et modifier les données manuellement durant le développement, vous pouvez installer [DB Browser for SQLite](https://sqlitebrowser.org/) et y ouvrir le fichier `.db`.
