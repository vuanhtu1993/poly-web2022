# Làm sao để chạy được source code tailwind
#### Bước 1: Clone code mới nhất về bằng câu lệnh
```javascrit
git checkout .
git pull
```

#### Bước 2: Chạy câu lệnh thực thi tailwind - Giữ nguyên terminal trong quá trình chạy
```javascript
npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch

hoặc

npm run tailwind
```

#### Bước 3: Run bằng Live server