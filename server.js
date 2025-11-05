require('dotenv').config();
const express = require('express');

// Đọc danh sách port từ .env
const maintenancePorts = process.env.MAINTENANCE_PORTS
  ? process.env.MAINTENANCE_PORTS.split(',').map(port => parseInt(port.trim()))
  : [];

if (maintenancePorts.length === 0) {
  console.error('❌ Không tìm thấy MAINTENANCE_PORTS trong file .env');
  console.log('💡 Vui lòng thêm MAINTENANCE_PORTS vào file .env (ví dụ: MAINTENANCE_PORTS=3000,4001,5005)');
  process.exit(1);
}

console.log('🔧 Danh sách port bảo trì:', maintenancePorts);

// Hàm khởi tạo server cho từng port
function startServer(port) {
  const app = express();

  app.get('*', (req, res) => {
    res.send(`
      <!DOCTYPE html>
      <html lang="vi">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Bảo trì hệ thống</title>
          <style>
            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }
            body {
              font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
              background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
              min-height: 100vh;
              display: flex;
              align-items: center;
              justify-content: center;
              padding: 20px;
            }
            .container {
              background: white;
              border-radius: 20px;
              box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
              padding: 60px 40px;
              max-width: 600px;
              text-align: center;
              animation: slideIn 0.5s ease-out;
            }
            @keyframes slideIn {
              from {
                opacity: 0;
                transform: translateY(-30px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
            .icon {
              font-size: 80px;
              margin-bottom: 20px;
              animation: bounce 2s infinite;
            }
            @keyframes bounce {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-10px); }
            }
            h1 {
              color: #d9534f;
              font-size: 32px;
              margin-bottom: 20px;
              font-weight: 700;
            }
            p {
              color: #555;
              font-size: 18px;
              line-height: 1.6;
              margin-bottom: 15px;
            }
            .contact {
              background: #f8f9fa;
              border-left: 4px solid #d9534f;
              padding: 20px;
              margin-top: 30px;
              border-radius: 8px;
            }
            .contact p {
              font-weight: 600;
              color: #333;
            }
            .port-info {
              background: #e3f2fd;
              padding: 10px;
              border-radius: 5px;
              margin-top: 20px;
              font-size: 14px;
              color: #1976d2;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="icon">🔧</div>
            <h1>Hệ thống đang bảo trì</h1>
            <p>Chúng tôi đang thực hiện bảo trì hệ thống để mang đến trải nghiệm tốt hơn cho bạn.</p>
            <p>Vui lòng quay lại sau hoặc liên hệ với chúng tôi nếu cần hỗ trợ khẩn cấp.</p>
            
            <div class="contact">
              <p>📞 Vui lòng liên hệ bộ phận Kỹ thuật để biết thêm chi tiết</p>
            </div>
            
          </div>
        </body>
      </html>
    `);
  });

  app.listen(port, () => {
    console.log(`✅ Server bảo trì đang chạy tại http://localhost:${port}`);
  }).on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.error(`❌ Port ${port} đã được sử dụng bởi process khác`);
    } else {
      console.error(`❌ Lỗi khi khởi động server tại port ${port}:`, err.message);
    }
  });
}

// Khởi động server cho từng port
console.log('🚀 Đang khởi động server bảo trì...\n');
maintenancePorts.forEach(startServer);
