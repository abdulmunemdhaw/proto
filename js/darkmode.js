const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const root = document.documentElement;
function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    root.style.setProperty("--bg","#333");
    root.style.setProperty("--font-bg","white");
    root.style.setProperty("--body-background","#333");
    root.style.setProperty("--about-me-card-bg","black");
    root.style.setProperty("--font-sp-bg","white");
    root.style.setProperty("--btn","#333");
    root.style.setProperty("--btn2","white");
    root.style.setProperty("--btn-bg","white");
    root.style.setProperty("--btn2-bg","#333");
    root.style.setProperty("--btn-bg-hv","#333");
    root.style.setProperty("--btn2-bg-hv","white");
    root.style.setProperty("--btn-hv","#white");
    root.style.setProperty("--btn2-hv","#333");
  } else {
    root.style.setProperty("--bg","azure");
    root.style.setProperty("--btn2","white");
    root.style.setProperty("--btn","white");
    root.style.setProperty("--font-bg","#333");
    root.style.setProperty("--body-background","azure");
    root.style.setProperty("--about-me-card-bg","white");
    root.style.setProperty("--font-sp-bg","#213555");
    root.style.setProperty("--btn","white");
    root.style.setProperty("--btn2","#333");
    root.style.setProperty("--btn-bg","#333");
    root.style.setProperty("--btn2-bg","white");
    root.style.setProperty("--btn-bg-hv","white");
    root.style.setProperty("--btn2-bg-hv","#333");
    root.style.setProperty("--btn-hv","#333");
    root.style.setProperty("--btn2-hv","white");
    document.documentElement.setAttribute('data-theme', 'light');
  }
}
toggleSwitch.addEventListener('change', switchTheme, false);