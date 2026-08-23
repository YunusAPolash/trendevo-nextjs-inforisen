export const THEME_STORAGE_KEY = 'trendevo-theme';

/** Runs before paint so the stored/system theme is applied without a flash. */
export const THEME_INIT_SCRIPT = `(function(){try{var stored=localStorage.getItem('${THEME_STORAGE_KEY}');var theme=stored==='light'||stored==='dark'?stored:window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';var root=document.documentElement;root.classList.remove('light','dark');root.classList.add(theme);root.style.colorScheme=theme;}catch(e){}})();`;
