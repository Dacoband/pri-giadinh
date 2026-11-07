export enum CellStatus {
  ACTIVE = 'ACTIVE',             // Đang sử dụng bình thường
  MAINTENANCE = 'MAINTENANCE',   // Đang sửa chữa/bảo trì
  QUARANTINE = 'QUARANTINE',     // Khu cách ly
  FULL = 'FULL',                 // Đã kín chỗ
}