/* Theme handling for the Industrial App Store Wiki.
   Values mirror styles/Themes/Theme.config.js (UI Library guide §3.2).
   Loaded in <head> after the stylesheet so the page never paints in the wrong theme. */

const IP_THEMES = {
  whiteTheme: { '--fontColour':'#4C4C4C','--primaryColour':'#ffffff','--primaryDarkColour':'#ffffff','--primaryLightColour':'#E7E6E6','--primaryMidColour':'#F7F7F7','--primaryMidDarkColour':'#eeeeee','--primaryOutlineColour':'#afabab','--successColour':'#7AC143','--titleColour':'#717073' },
  darkTheme:  { '--fontColour':'#E7E6E6','--primaryColour':'#444444','--primaryDarkColour':'#333333','--primaryLightColour':'#AFABAB','--primaryMidColour':'#717073','--primaryMidDarkColour':'#4C4C4C','--primaryOutlineColour':'#AFABAB','--successColour':'#7AC143','--titleColour':'#E7E6E6' },
  blueTheme:  { '--fontColour':'#E7E6E6','--primaryColour':'#00182f','--primaryDarkColour':'#40556a','--primaryLightColour':'#7da6cf','--primaryMidColour':'#506a85','--primaryMidDarkColour':'#002140','--primaryOutlineColour':'#7da6cf','--successColour':'#7AC143','--titleColour':'#7da6cf' }
};

function ipReadTheme() {
  try { return JSON.parse(localStorage.getItem('selectedTheme')); } catch (e) { return null; }
}

function ipApplyTheme(name) {
  let theme = name;
  if (!theme || theme === 'system default') {
    theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'darkTheme' : 'whiteTheme';
  }
  const root = document.documentElement;
  for (const [k, v] of Object.entries(IP_THEMES[theme])) root.style.setProperty(k, v);
  root.setAttribute('data-ip-theme', theme);
}

function ipSetTheme(name) {
  try { localStorage.setItem('selectedTheme', JSON.stringify(name)); } catch (e) {}
  ipApplyTheme(name);
}

const IP_THEME_LABELS = {
  'system default': 'System Default',
  whiteTheme: 'Light',
  darkTheme: 'Dark',
  blueTheme: 'Blue'
};

const ipCurrentTheme = ipReadTheme() || 'system default';
ipApplyTheme(ipCurrentTheme);

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
  const current = ipReadTheme();
  if (!current || current === 'system default') ipApplyTheme('system default');
});

// Toolbar theme menu (library dropDownMenu). The selected theme is marked in
// --successColour, like the library ThemeSelector.
document.addEventListener('DOMContentLoaded', () => {
  const trigger = document.getElementById('ipThemeTrigger');
  const list = document.getElementById('ipThemeList');
  const label = document.getElementById('ipThemeLabel');
  if (!trigger || !list) return;

  const current = ipReadTheme() || 'system default';
  const items = Array.from(list.querySelectorAll('[data-theme]'));

  if (label) label.textContent = IP_THEME_LABELS[current] || 'Theme';
  items.forEach((a) => {
    if (a.dataset.theme === current) a.classList.add('colour-success', 'bold');
  });

  function setOpen(open) {
    list.hidden = !open;
    trigger.setAttribute('aria-expanded', String(open));
  }

  function select(name) {
    ipSetTheme(name);
    if (label) label.textContent = IP_THEME_LABELS[name] || 'Theme';
    items.forEach((x) => x.classList.remove('colour-success', 'bold'));
    const chosen = items.find((x) => x.dataset.theme === name);
    if (chosen) chosen.classList.add('colour-success', 'bold');
    setOpen(false);
  }

  trigger.addEventListener('click', () => setOpen(list.hidden));
  trigger.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setOpen(list.hidden); }
  });

  items.forEach((a) => {
    a.addEventListener('click', (e) => {
      e.preventDefault();
      select(a.dataset.theme);
      trigger.focus();
    });
  });

  document.addEventListener('click', (e) => {
    if (!list.hidden && !e.target.closest('#ipThemeMenu')) setOpen(false);
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') setOpen(false);
  });
});
