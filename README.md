# Maintenance Server

Server Node.js đơn giản để hiển thị trang bảo trì cho nhiều port.

## 🚀 Cài đặt

```bash
npm install
```

## ⚙️ Cấu hình

1. Copy file `.env.example` thành `.env`:
```bash
cp .env.example .env
```

2. Chỉnh sửa file `.env` và thêm các port cần bảo trì:
```env
MAINTENANCE_PORTS=3000,4001,5005
```

## 📦 Chạy server

### Development mode (với nodemon):
```bash
npm run dev
```

### Production mode:
```bash
npm start
```

## 📝 Cách sử dụng

1. Thêm các port cần bảo trì vào file `.env` (cách nhau bởi dấu phẩy)
2. Chạy server bằng lệnh `npm start`
3. Truy cập vào các port đã cấu hình để xem trang bảo trì

Ví dụ:
- http://localhost:3000
- http://localhost:4001
- http://localhost:5005

## 🎨 Tính năng

- ✅ Đọc danh sách port từ file `.env`
- ✅ Tự động khởi động server cho mỗi port
- ✅ Giao diện bảo trì đẹp mắt và responsive
- ✅ Xử lý lỗi khi port đã được sử dụng
- ✅ Log thông tin chi tiết khi khởi động

## 📂 Cấu trúc thư mục

```
maintenance-server/
├── server.js           # File chính
├── package.json        # Dependencies
├── .env               # Cấu hình port (không commit)
├── .env.example       # Mẫu cấu hình
├── .gitignore         # Git ignore
└── README.md          # Hướng dẫn
```

## 🛠️ Công nghệ sử dụng

- Node.js
- Express.js
- dotenv

## 📋 Yêu cầu hệ thống

- Node.js >= 14.x
- npm hoặc yarn
