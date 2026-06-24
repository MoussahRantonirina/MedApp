import bdd from './connexion';

export function executerMigrations(): void {
  bdd.exec(`
    -- 1. TABLE MEDECIN
    CREATE TABLE IF NOT EXISTS medecin (
      idMedecin INTEGER PRIMARY KEY AUTOINCREMENT,
      nom TEXT NOT NULL,
      prenom TEXT NOT NULL,
      specialite TEXT,
      adresseCabinet TEXT,
      telephone TEXT,
      email TEXT,
      numeroOrdre TEXT,
      motDePasse TEXT NOT NULL
    );

    -- 2. TABLE PATIENT
    CREATE TABLE IF NOT EXISTS patient (
      idPatient INTEGER PRIMARY KEY AUTOINCREMENT,
      idMedecin INTEGER NOT NULL,
      nom TEXT NOT NULL,
      prenom TEXT NOT NULL,
      sexe TEXT,
      dateNaissance TEXT,
      adresse TEXT,
      telephone TEXT,
      antecedents TEXT,
      allergies TEXT,
      observations TEXT,
      FOREIGN KEY (idMedecin) REFERENCES medecin(idMedecin) ON DELETE CASCADE
    );

    -- 3. TABLE CONSULTATION
    CREATE TABLE IF NOT EXISTS consultation (
      idConsultation INTEGER PRIMARY KEY AUTOINCREMENT,
      idPatient INTEGER NOT NULL,
      idMedecin INTEGER NOT NULL,
      dateConsultation TEXT NOT NULL,
      motif TEXT,
      symptomes TEXT,
      diagnostic TEXT,
      FOREIGN KEY (idPatient) REFERENCES patient(idPatient) ON DELETE CASCADE,
      FOREIGN KEY (idMedecin) REFERENCES medecin(idMedecin) ON DELETE CASCADE
    );

    -- 4. TABLE PARAMETRE_MEDICAL
    CREATE TABLE IF NOT EXISTS parametre_medical (
      idParametre INTEGER PRIMARY KEY AUTOINCREMENT,
      idConsultation INTEGER NOT NULL,
      nomParametre TEXT NOT NULL,
      valeur TEXT,
      unite TEXT,
      FOREIGN KEY (idConsultation) REFERENCES consultation(idConsultation) ON DELETE CASCADE
    );

    -- 5. TABLE ORDONNANCE
    CREATE TABLE IF NOT EXISTS ordonnance (
      idOrdonnance INTEGER PRIMARY KEY AUTOINCREMENT,
      idConsultation INTEGER NOT NULL,
      dateOrdonnance TEXT NOT NULL,
      conseils TEXT,
      FOREIGN KEY (idConsultation) REFERENCES consultation(idConsultation) ON DELETE CASCADE
    );

    -- 6. TABLE MEDICAMENT
    CREATE TABLE IF NOT EXISTS medicament (
      idMedicament INTEGER PRIMARY KEY AUTOINCREMENT,
      nomCommercial TEXT NOT NULL,
      nomGenerique TEXT,
      forme TEXT,
      dosageDisponible TEXT,
      classeTherapeutique TEXT
    );

    -- 7. TABLE LIGNE_ORDONNANCE
    CREATE TABLE IF NOT EXISTS ligne_ordonnance (
      idLigne INTEGER PRIMARY KEY AUTOINCREMENT,
      idOrdonnance INTEGER NOT NULL,
      idMedicament INTEGER NOT NULL,
      dosage TEXT,
      frequence TEXT,
      duree TEXT,
      FOREIGN KEY (idOrdonnance) REFERENCES ordonnance(idOrdonnance) ON DELETE CASCADE,
      FOREIGN KEY (idMedicament) REFERENCES medicament(idMedicament) ON DELETE RESTRICT
    );

    -- 8. TABLE DOCUMENT_MEDICAL
    CREATE TABLE IF NOT EXISTS document_medical (
      idDocument INTEGER PRIMARY KEY AUTOINCREMENT,
      idConsultation INTEGER NOT NULL,
      typeDocument TEXT NOT NULL,
      dateGeneration TEXT NOT NULL,
      contenu TEXT,
      FOREIGN KEY (idConsultation) REFERENCES consultation(idConsultation) ON DELETE CASCADE
    );

    -- 9. TABLE RENDEZ_VOUS
    CREATE TABLE IF NOT EXISTS rendez_vous (
      idRdv INTEGER PRIMARY KEY AUTOINCREMENT,
      idPatient INTEGER NOT NULL,
      idMedecin INTEGER NOT NULL,
      dateRdv TEXT NOT NULL,
      heure TEXT NOT NULL,
      motif TEXT,
      statut TEXT NOT NULL,
      FOREIGN KEY (idPatient) REFERENCES patient(idPatient) ON DELETE CASCADE,
      FOREIGN KEY (idMedecin) REFERENCES medecin(idMedecin) ON DELETE CASCADE
    );

    -- 10. TABLE PAIEMENT
    CREATE TABLE IF NOT EXISTS paiement (
      idPaiement INTEGER PRIMARY KEY AUTOINCREMENT,
      idConsultation INTEGER NOT NULL,
      datePaiement TEXT NOT NULL,
      montant REAL NOT NULL,
      statut TEXT NOT NULL,
      modePaiement TEXT,
      FOREIGN KEY (idConsultation) REFERENCES consultation(idConsultation) ON DELETE CASCADE
    );
  `);
  console.log("Les migrations ont été exécutées avec succès.");
}
