import Database from 'better-sqlite3';
import path from 'path';
import { app } from 'electron';

// Définition du chemin où sera stocké le fichier de la base de données
const cheminBdd = path.join(app.getPath('userData'), 'cabinet_medical.db');

// Initialisation de la base de données
const bdd = new Database(cheminBdd) as any;

// Configuration de SQLite : Mode WAL pour de meilleures performances
// et activation obligatoire des clés étrangères (désactivées par défaut sur SQLite)
bdd.pragma('journal_mode = WAL');
bdd.pragma('foreign_keys = ON');

export default bdd;
