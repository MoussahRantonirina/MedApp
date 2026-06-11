
export default function App() {
  return (
    <div className="min-h-screen bg-bg text-text flex items-center justify-center p-6 transition-colors duration-300">
      <div className="max-w-3xl w-full bg-surface border border-border rounded-2xl p-8 shadow-2xl space-y-8 backdrop-blur-md">

        {/* En-tête de l'application */}
        <div className="flex items-center justify-between border-b border-border pb-6">
          <div className="flex items-center space-x-4">
            {/* Logo temporaire stylisé en pur CSS Tailwind */}
            <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent font-bold text-xl shadow-inner shadow-accent/20">
              M+
            </div>
            <div>
              <h1 className="text-2xl font-bold tracking-tight">MedApp</h1>
              <p className="text-sm text-text-muted">Système de gestion de cabinet médical</p>
            </div>
          </div>

          {/* Badge de statut animé */}
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Socle Technique Opérationnel
          </span>
        </div>

        {/* Grille de vérification des technos (Démonstration des grilles et hovers v4) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          {/* Carte 1 : Architecture */}
          <div className="p-5 bg-bg/40 border border-border rounded-xl hover:border-accent/50 transition-all duration-300 group cursor-default">
            <div className="text-accent font-medium text-sm mb-2 group-hover:translate-x-1 transition-transform">⚡ Noyau</div>
            <div className="text-lg font-semibold mb-1">Electron & Vite</div>
            <div className="text-xs text-text-muted">Processus isolés et sécurisés configurés.</div>
          </div>

          {/* Carte 2 : Tailwind v4 */}
          <div className="p-5 bg-bg/40 border border-border rounded-xl hover:border-accent/50 transition-all duration-300 group cursor-default">
            <div className="text-accent font-medium text-sm mb-2 group-hover:translate-x-1 transition-transform">🎨 Style & Design</div>
            <div className="text-lg font-semibold mb-1">Tailwind v4.3</div>
            <div className="text-xs text-text-muted">Tokens graphiques injectés via @theme.</div>
          </div>

          {/* Carte 3 : SQLite */}
          <div className="p-5 bg-bg/40 border border-border rounded-xl hover:border-accent/50 transition-all duration-300 group cursor-default">
            <div className="text-accent font-medium text-sm mb-2 group-hover:translate-x-1 transition-transform">💾 Base locale</div>
            <div className="text-lg font-semibold mb-1">SQLite Actif</div>
            <div className="text-xs text-text-muted">Driver natif performant prêt pour le disque.</div>
          </div>

        </div>

        {/* Section d'action de test */}
        <div className="bg-accent/5 border border-accent/20 rounded-xl p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h3 className="font-semibold text-accent text-base">Prêt pour le premier module métier</h3>
            <p className="text-sm text-text-muted">Le rechargement à chaud (HMR) fonctionne. Modifie ce texte pour tester !</p>
          </div>
          <button className="px-5 py-2.5 bg-accent hover:bg-accent/90 text-bg font-semibold rounded-lg transition-all active:scale-95 cursor-pointer shadow-lg shadow-accent/20 text-sm">
            Valider le socle
          </button>
        </div>

      </div>
    </div>
  )
}