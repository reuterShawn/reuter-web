            
/** @type {import('tailwindcss').Config} */
import { CustomColors } from './node_modules/kampsy-ui/dist/customColors/index.js'

export default {
  darkMode: 'selector',
  content: ['./src/**/*.{html,js,svelte,ts}',
    './node_modules/kampsy-ui/dist/**/*.{html,js,svelte,ts}'
  ],
  theme: {
    extend: {
      colors: {
        ...CustomColors
      }
    },
  },
  plugins: [],
}
        
    