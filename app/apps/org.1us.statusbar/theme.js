// theme.js
// https://stackoverflow.com/questions/56300132/how-to-override-css-prefers-color-scheme-setting

export function getPreferredColorScheme() {
    let systemScheme = 'light';
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      systemScheme = 'dark';
    }
  
    let chosenScheme = systemScheme;
  
    if (localStorage.getItem('scheme')) {
      chosenScheme = localStorage.getItem('scheme');
    }
  
    if (systemScheme === chosenScheme) {
      localStorage.removeItem('scheme');
    }
  
    return chosenScheme;
  }
  
  export function savePreferredColorScheme(scheme) {
    let systemScheme = 'light';
  
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      systemScheme = 'dark';
    }
  
    if (systemScheme === scheme) {
      localStorage.removeItem('scheme');
    } else {
      localStorage.setItem('scheme', scheme);
    }
  }
  
  export function toggleColorScheme() {
    let newScheme = 'light';
    let scheme = getPreferredColorScheme();
  
    if (scheme === 'light') {
      newScheme = 'dark';
    }
  
    applyPreferredColorScheme(newScheme);
    savePreferredColorScheme(newScheme);
  }
  
  export function applyPreferredColorScheme(scheme) {
    for (var s = 0; s < document.styleSheets.length; s++) {
      for (var i = 0; i < document.styleSheets[s].cssRules.length; i++) {
        var rule = document.styleSheets[s].cssRules[i];
  
        if (rule && rule.media && rule.media.mediaText.includes('prefers-color-scheme')) {
          switch (scheme) {
            case 'light':
              rule.media.appendMedium('original-prefers-color-scheme');
              if (rule.media.mediaText.includes('light')) rule.media.deleteMedium('(prefers-color-scheme: light)');
              if (rule.media.mediaText.includes('dark')) rule.media.deleteMedium('(prefers-color-scheme: dark)');
              break;
            case 'dark':
              rule.media.appendMedium('(prefers-color-scheme: light)');
              rule.media.appendMedium('(prefers-color-scheme: dark)');
              if (rule.media.mediaText.includes('original')) rule.media.deleteMedium('original-prefers-color-scheme');
              break;
            default:
              rule.media.appendMedium('(prefers-color-scheme: dark)');
              if (rule.media.mediaText.includes('light')) rule.media.deleteMedium('(prefers-color-scheme: light)');
              if (rule.media.mediaText.includes('original')) rule.media.deleteMedium('original-prefers-color-scheme');
              break;
          }
        }
      }
    }

  }
  