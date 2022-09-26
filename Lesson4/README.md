## Các bước cài đặt tailwind

### 1. Install Tailwind CSS
```json
npm install -D tailwindcss
yarn add tailwindcss

npx tailwindcss init
```
### 2. Configure your template paths
```json
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
### 3. Add the Tailwind directives to your CSS -> src/tailwind.css
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```
### 4. Start the Tailwind CLI build process
Add script to package.json