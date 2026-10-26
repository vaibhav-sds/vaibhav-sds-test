(() => {
  const root = document.documentElement;
  const storageKey = 'va-theme-v2';
  let saved = null;
  try { saved = localStorage.getItem(storageKey); } catch (_) { /* Dark is also the CSS default. */ }
  root.dataset.theme = saved === 'light' ? 'light' : 'dark';
  const init = () => {
    const toggle = document.querySelector('.theme-toggle');
    if (!toggle) return;
    const updateLabel = () => {
      const dark = root.dataset.theme === 'dark';
      toggle.setAttribute('aria-pressed', String(dark));
      toggle.setAttribute('aria-label', dark ? 'Switch to light theme' : 'Switch to dark theme');
    };
    updateLabel();
    toggle.hidden = false;
    toggle.addEventListener('click', () => {
      root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
      updateLabel();
      try { localStorage.setItem(storageKey, root.dataset.theme); } catch (_) { /* Keep the page preference. */ }
    });
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, {once: true});
  else init();
})();
