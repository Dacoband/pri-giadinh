export enum Gender {
    MALE = 'MALE',
    FEMALE = 'FEMALE',
    OTHER = 'OTHER',
}

export enum PrisonerStatus {
  INACTIVE = 'INACTIVE',       // Chưa có án
  ACTIVE = 'ACTIVE',           // Đang thụ án
  RELEASED = 'RELEASED',       // Đã mãn hạn/Được thả
  ESCAPED = 'ESCAPED',         // Vượt ngục
  TRANSFERRED = 'TRANSFERRED', // Chuyển trại khác
  DECEASED = 'DECEASED',       // Đã mất
}