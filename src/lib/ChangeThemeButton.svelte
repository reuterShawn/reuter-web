<script lang="ts">
    const themes = [
      { name: 'Green', value: 'var(--green)' },
      { name: 'Sky', value: 'var(--sky)' },
      { name: 'Lavender', value: 'var(--lav)' },
      { name: 'Sun', value: 'var(--sun)' }
    ];
  
    let currentThemeIndex = $state(0);
    let currentTheme = $derived(themes[currentThemeIndex]);
  
    function nextTheme() {
      currentThemeIndex = (currentThemeIndex + 1) % themes.length;
    }
  
    function prevTheme() {
      currentThemeIndex = (currentThemeIndex - 1 + themes.length) % themes.length;
    }
  </script>
  
  <header class="theme-stepper">
    <button onclick={prevTheme} aria-label="Previous theme">&lt;</button>
    <div class="theme-info">
      <div class="color-square" style:background-color={currentTheme.value}></div>
      <span class="theme-name">{currentTheme.name}</span>
    </div>
    <button onclick={nextTheme} aria-label="Next theme">&gt;</button>
  </header>
  
  <style>
    :root {
      --green: #49D763;
      --sky: #A0C4E8;
      --lav: #CEA4CC;
      --sun: #F5AB54;
    }
  
    .theme-stepper {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 20px;
      padding: 10px;
      background-color: #333; /* Dark background for contrast */
      color: white;
    }
  
    button {
      background: none;
      border: none;
      color: white;
      font-size: 24px;
      cursor: pointer;
      padding: 5px 10px;
    }
  
    .theme-info {
      display: flex;
      align-items: center;
      gap: 10px;
    }
  
    .color-square {
      width: 30px;
      height: 30px;
      border: 2px solid white;
    }
  
    .theme-name {
      font-size: 18px;
      font-weight: bold;
    }
  </style>