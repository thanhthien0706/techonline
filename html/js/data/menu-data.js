const menuData = [
  {
    id: "camera",
    title: "Camera giám sát",
    icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M23 7l-7 5 7 5V7z"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>`,
    columns: [
      [
        { title: "Camera Wifi Imou", items: ["Camera Imou trong nhà", "Camera Imou ngoài trời", "Bộ KIT camera Imou", "Đầu ghi hình Imou"] },
        { title: "Camera Tapo - TP-Link", items: ["Camera Tapo Trong Nhà", "Camera Tapo ngoài trời", "Đầu ghi hình TP-Link"] }
      ],
      [
        { title: "Camera Wifi Ezviz", items: ["Camera Wifi Ezviz ngoài trời", "Camera Wifi Ezviz trong nhà", "Camera Pin sạc Ezviz", "Đầu ghi hình Ezviz"] },
        { title: "Camera trọn bộ", items: ["Trọn bộ 2 camera", "Trọn bộ 3 camera", "Trọn bộ 4 camera", "Trọn bộ 5 camera", "Trọn bộ 6 camera", "Trọn bộ 7 camera", "Trọn bộ 8 camera"] }
      ],
      [
        { title: "Camera Dahua", items: ["Camera Wifi Dahua", "Camera IP Dahua", "Camera HDCVI Dahua", "Camera PTZ Dahua", "Đầu ghi hình Dahua", "Phụ kiện Dahua"] },
        { title: "Phụ kiện camera", items: ["Ổ cứng lưu trữ camera", "Thẻ nhớ lưu trữ camera", "Nguồn camera", "Bàn điều khiển camera PTZ", "Phụ kiện camera khác"] }
      ],
      [
        { title: "Camera Hikvision", items: ["Camera Wifi Hikvision", "Camera IP Hikvision", "Camera HDTVI Hikvision", "Camera PTZ Hikvision", "Đầu ghi hình Hikvision", "Phụ kiện Hikvision"] },
        { title: "Camera 4G", items: [] },
        { title: "Camera năng lượng mặt trời", items: [] },
        { title: "Camera hành trình", items: [] }
      ]
    ]
  },
  {
    id: "network",
    title: "Thiết bị mạng",
    icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>`,
    columns: [
      [
        { title: "Thiết bị mạng theo hãng", items: ["Thiết bị mạng Huawei", "Thiết bị mạng TP-Link", "Thiết bị mạng Ruijie", "Thiết bị mạng Unifi", "Thiết bị mạng Grandstream", "Thiết bị mạng Aruba", "Thiết bị mạng Mikrotik", "Thiết bị mạng Hikvision", "Thiết bị mạng Engenius"] },
        { title: "Wi-Fi Di Động", items: ["Wifi 3G di động", "Wifi 4G di động", "Wifi 5G di động"] }
      ],
      [
        { title: "Bộ phát wifi", items: ["Bộ phát Wifi dân dụng", "Bộ thu phát wifi Point to Point", "Bộ phát Wi-Fi ngoài trời", "Bộ phát Wi-Fi chuyên dụng", "Giải pháp mạng văn phòng", "Giải pháp mạng doanh nghiệp"] },
        { title: "Quản lý AP", items: [] },
        { title: "Switch – Bộ chuyển mạch", items: ["Switch mạng POE", "Switch cổng Quang", "Switch có quản lý", "Switch không quản lý"] }
      ],
      [
        { title: "Router – Modem", items: ["Router Wi-Fi 7", "Router Wi-Fi 6", "Router Wi-Fi 5", "Router Wi-Fi 4", "Router 5G/4G", "Router Gaming", "Router / Modem"] },
        { title: "Gateway", items: ["Router & Modem DSL"] },
        { title: "Module mạng", items: [] }
      ],
      [
        { title: "Phụ kiện mạng", items: ["USB-C Hub & Converter", "USB-A Hub & Converter", "Thiết Bị Giải Trí", "Cáp mạng"] },
        { title: "Mesh Wi-Fi", items: ["Wi-Fi 7 Mesh", "Wi-Fi 6 Mesh", "Wi-Fi 5 Mesh"] },
        { title: "Bộ kích sóng wifi", items: ["Bộ Mở Rộng Sóng WiFi", "Bộ Chuyển Đổi Mạng Qua Dây Điện"] }
      ]
    ]
  },
  {
    id: "smartlock",
    title: "Khoá cửa vân tay",
    icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a5 5 0 0 0-5 5v3H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-1V7a5 5 0 0 0-5-5zM9 7a3 3 0 0 1 6 0v3H9V7z"/></svg>`,
    columns: [
      [
        { title: "Khóa cửa Ezviz", items: ["Khóa cửa gỗ Ezviz", "Khóa cửa nhôm - Xingfa Ezviz"] },
        { title: "Khóa cửa Kaadas", items: ["Khóa cửa gỗ Kaadas", "Khóa cửa nhôm - Xingfa Kaadas", "Khóa cửa đại sảnh Tân cổ điển Kaadas", "Khóa cửa kính cường lực Kaadas"] },
        { title: "Khóa cửa Solity", items: ["Khóa cửa gỗ Solity", "Khóa cửa sắt Solity", "Khóa cửa kính cường lực Sotify"] }
      ],
      [
        { title: "Khóa vân tay Bosch", items: ["Khóa cửa gỗ Bosch"] },
        { title: "Khóa cửa Hyundai", items: ["Khóa cửa gỗ Hyundai", "Khóa cửa nhôm - Xingfa Hyundai", "Khóa cửa sắt Huyndai", "Khóa cửa đại sảnh Tân cổ điển", "Khóa cửa khách sạn Hyundai", "Khóa cửa cổng Hyundai"] },
        { title: "Khóa cửa Hubert", items: ["Khóa cửa gỗ", "Khóa cửa nhôm - Xingfa Hubert", "Khóa cửa sắt Hubert", "Khóa cửa kính Hubert", "Khóa cửa đại sảnh Tân cổ điển Hubert", "Khóa khách sạn Hubert", "Khóa cửa cổng Hubert"] }
      ],
      [
        { title: "Khóa cửa Hafele", items: ["Khóa cửa gỗ Hafele", "Khóa cửa nhôm - Xingfa Hafele"] },
        { title: "Khóa cửa Kawa", items: ["Khóa cửa gỗ Kawa", "Khóa cửa nhôm - Xingfa Kawa", "Khóa cửa sắt Kawa", "Khóa cửa kính cường lực Kawa", "Khóa cửa khách sạn Kawa"] },
        { title: "Khóa vân tay Kitos", items: ["Khóa cửa gỗ Kitos", "Khóa cửa nhôm Kitos", "Khóa cửa cường lực Kitos", "Khóa đại sảnh Kitos", "Khóa cửa cổng Kitos"] }
      ],
      [
        { title: "Khóa cửa Philips", items: ["Khóa cửa gỗ Philips", "Khóa cửa nhôm - Xingfa Philips", "Khóa cửa kính cường lực Philips"] },
        { title: "Khóa cửa Kassler", items: ["Khóa cửa gỗ Kassler", "Khóa cửa nhôm - Xingfa Kassler", "Khóa cửa sắt Kassler", "Khóa cửa kính cường lực Kassler", "Khóa cửa đại sảnh Tân cổ điển Kassler", "Khóa cửa khách sạn Kassler", "Khóa cửa cổng Kassler"] },
        { title: "Phụ kiện khóa vân tay", items: ["Phụ kiện khác"] },
        { title: "Khóa vân tay theo loại cửa", items: ["Khóa cửa gỗ", "Khóa cửa sắt", "Khóa cửa nhôm - Xingfa", "Khóa cửa kính cường lực", "Khóa đại sảnh", "Khóa thẻ từ khách sạn"] }
      ]
    ]
  },
  {
    id: "smarthome",
    title: "Nhà thông minh",
    icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
    columns: [
      [
        { title: "Nhà thông minh theo hãng", items: ["Nhà thông minh Hunonic", "Nhà thông minh Lumi", "Nhà thông minh Philips"] },
        { title: "Thiết bị năng lượng mặt trời", items: ["Đèn năng lượng mặt trời", "Quạt năng lượng mặt trời"] }
      ],
      [
        { title: "Chuông cửa", items: ["Chuông hình Panasonic", "Chuông cửa có hình Dahua", "Chuông cửa có hình Hikvision", "Chuông cửa có hình Ezviz", "Chuông cửa có hình Akuvox"] }
      ],
      [
        { title: "Nhà thông minh theo tính năng", items: ["Cảm biến thông minh", "Công tắc thông minh", "Ổ cắm thông minh", "Thiết bị hẹn giờ", "Bóng đèn thông minh", "Bộ điều khiển trung tâm", "Aptomat thông minh"] }
      ],
      [
        { title: "Robot hút bụi thông minh", items: ["Robot hút bụi TP-Link", "Robot hút bụi Xiaomi"] },
        { title: "Máy lọc không khí", items: ["Máy lọc không khí Xiaomi"] },
        { title: "Giàn phơi thông minh", items: [] },
        { title: "Két sắt thông minh", items: [] }
      ]
    ]
  },
  {
    id: "timekeeping",
    title: "Chấm công - Kiểm soát cửa",
    icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>`,
    columns: [
      [
        { title: "Máy chấm công", items: ["Máy chấm công vân tay", "Máy chấm công khuôn mặt", "Máy chấm công thẻ từ", "Phụ kiện máy chấm công"] }
      ],
      [
        { title: "Thiết bị kiểm soát cửa", items: ["Kiểm soát cửa vân tay", "Kiểm soát cửa bằng thẻ", "Kiểm soát cửa bằng khuôn mặt", "Bộ điều khiển trung tâm kiểm soát cửa", "Phụ kiện kiểm soát cửa"] }
      ],
      [
        { title: "Thiết bị kiểm soát cổng", items: ["Barrier tự động", "Tripod barrier", "Flap barrier", "Swing barrier"] }
      ],
      [
        { title: "Access control", items: [] }
      ]
    ]
  },
  {
    id: "storage",
    title: "Thiết bị lưu trữ",
    icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>`,
    columns: [
      [
        { title: "Ổ cứng", items: ["Ổ cứng Western", "Ổ cứng Toshiba", "Ổ cứng Seagate", "Ổ cứng Hikvision"] }
      ],
      [
        { title: "Thẻ nhớ", items: ["Thẻ nhớ Sandisk", "Thẻ nhớ Dahua", "Thẻ nhớ Imou", "Thẻ nhớ Hikvision", "Thẻ nhớ Lexar"] }
      ],
      [
        { title: "Ổ SSD", items: [] }
      ],
      []
    ]
  },
  {
    id: "audio",
    title: "Âm thanh",
    icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>`,
    columns: [
      [
        { title: "Âm thanh thông báo", items: ["Âm thanh thông báo TOA", "Âm thanh thông báo Bosch", "Âm thanh thông báo ITC", "Âm thanh thông báo Hikvision"] }
      ],
      [
        { title: "Hệ thống âm thanh PA", items: ["Loa Array", "Loa cầm tay MegaPhone", "Loa hộp", "Loa cột", "Loa gắn trần", "Loa nén", "Loa sân vườn", "Micro thông báo PA", "Âm ly phân vùng", "Âm ly PA + Cục đẩy công suất", "Thiết bị hệ thống PA thông báo"] }
      ],
      [
        { title: "Loa kéo", items: [] }
      ],
      []
    ]
  },
  {
    id: "alarm",
    title: "Thiết bị báo động- báo cháy",
    icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>`,
    columns: [
      [
        { title: "Hệ thống báo động", items: ["Bộ KIT báo động không dây", "Bộ KIT báo động có dây", "Tủ báo động", "Cảm biến báo động", "Phụ kiện báo động"] }
      ],
      [
        { title: "Thiết bị báo cháy", items: [] }
      ],
      [],
      []
    ]
  },
  {
    id: "tv-display",
    title: "Tivi - Màn hình máy tính",
    icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,
    columns: [
      [
        { title: "Smart Tivi - Google Tivi", items: ["Tivi Xiaomi", "Tivi Coocaa", "Tivi Hier"] }
      ],
      [
        { title: "Màn hình máy tính", items: ["Màn hình Skyworth", "Màn hình FeuVision"] }
      ],
      [],
      []
    ]
  }
];
