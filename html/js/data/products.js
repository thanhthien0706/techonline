const PRODUCT_SECTIONS = [
  {
    id: 'flashsale',
    type: 'flashsale',
    title: 'TOP SẢN PHẨM BÁN CHẠY',
    tabs: [
      { label: 'Sản phẩm giá sốc', sub: 'Giá luôn rẻ nhất', icon: 'flame' },
      { label: 'Camera ưu đãi', sub: 'Chuẩn hàng chính hãng', icon: 'camera' },
      { label: 'Cửa vân tay sale sốc', sub: 'TOP 1 bán chạy 2024', icon: 'fingerprint' },
      { label: 'WIFI CHÍNH HÃNG', sub: 'Phủ sóng mọi nơi', icon: 'wifi' }
    ],
    viewAllText: 'XEM THÊM',
    viewAllHref: '#',
    products: [
      {
        name: 'Khóa cửa vân tay điện tử Ezviz DL05',
        image: 'assets/images/product-flashsale-1.jpg',
        price: '3.550.000 đ',
        oldPrice: '8.000.000 đ',
        discount: '-56%',
        badge: 'Mẫu mới',
        attrs: ['Cửa gỗ', 'App', 'Mã số', 'Thẻ từ', 'Vân tay'],
        link: '#'
      },
      {
        name: 'Khóa cửa nhôm thông minh EZVIZ DL06',
        image: 'assets/images/product-flashsale-2.jpg',
        price: '3.700.000 đ',
        oldPrice: '5.200.000 đ',
        discount: '-28%',
        badge: 'Mẫu mới',
        attrs: ['Cửa nhôm', 'App', 'Mã số', 'Thẻ từ', 'Vân tay'],
        link: '#'
      },
      {
        name: 'Khóa cửa vân tay Philips DDL603E-5HWS',
        image: 'assets/images/product-flashsale-3.jpg',
        price: '6.600.000 đ',
        oldPrice: '8.250.000 đ',
        discount: '-20%',
        badge: '',
        attrs: ['Cửa gỗ', 'App', 'Mã số', 'Thẻ từ', 'Vân tay'],
        link: '#'
      },
      {
        name: 'Khóa cửa thông minh DDL609-5HS tích hợp Vân tay, Mật khẩu, Thẻ từ',
        image: 'assets/images/product-flashsale-4.jpg',
        price: '4.600.000 đ',
        oldPrice: '5.750.000 đ',
        discount: '-20%',
        badge: '',
        specialPromo: true,
        attrs: ['Cửa gỗ', 'Mã số', 'Thẻ từ', 'Vân tay'],
        link: '#'
      },
      {
        name: 'Khóa cửa thông minh Philips DDL610-5HBS, Tích hợp vân tay, Mật mã, thẻ từ, Wifi, Bluetoolth',
        image: 'assets/images/product-flashsale-5.jpg',
        price: '7.700.000 đ',
        oldPrice: '9.620.000 đ',
        discount: '-20%',
        badge: '',
        specialPromo: true,
        attrs: ['Cửa gỗ', 'Mã số', 'Thẻ từ', 'Vân tay'],
        link: '#'
      }
    ]
  },
  {
    id: 'cat1',
    type: 'category',
    title: 'Camera giám sát',
    tabs: [
      { label: 'Camera Wifi Imou', href: '#' },
      { label: 'Camera Wifi Ezviz', href: '#' },
      { label: 'Camera Dahua', href: '#' }
    ],
    viewAllText: 'Xem tất cả ›',
    viewAllHref: '#',
    products: [
      {
        name: 'Camera IP 2MP bán cầu HIKVISION DS-2CD1121G0-I',
        image: 'assets/images/product-cat1-1.jpg',
        price: '750.000 đ',
        oldPrice: '1.130.000 đ',
        discount: '-34%',
        badge: '',
        attrs: ['Góc cố đinh', '2MP'],
        link: '#'
      },
      {
        name: 'Camera Ezviz 4G HB8C tấm pin năng lượng mặt trời 4MP',
        image: 'assets/images/product-cat1-2.jpg',
        price: '2.250.000 đ',
        oldPrice: '2.500.000 đ',
        discount: '-10%',
        badge: '',
        attrs: ['Xoay 360 độ', '4MP'],
        link: '#'
      },
      {
        name: 'Camera wifi 2 mắt ngoài trời Dahua DH-P5D-5F-PV 10MP',
        image: 'assets/images/product-cat1-3.jpg',
        price: '1.300.000 đ',
        oldPrice: '3.470.000 đ',
        discount: '-63%',
        badge: '',
        attrs: ['Màu ban đêm', '10MP', '2 Mắt'],
        link: '#'
      },
      {
        name: 'Camera Wifi trong nhà Imou IPC-A52P (Ranger 2 5MP) xoay 360, đàm thoại 2 chiều, phát hiện chuyển động, màu ban đêm',
        image: 'assets/images/product-cat1-4.jpg',
        price: '580.000 đ',
        oldPrice: '1.450.000 đ',
        discount: '-60%',
        badge: '',
        attrs: ['Xoay 360 độ', '5MP'],
        link: '#'
      },
      {
        name: 'Camera Wifi trong nhà Ezviz H1c 2MP',
        image: 'assets/images/product-cat1-5.png',
        price: '450.000 đ',
        oldPrice: '800.000 đ',
        discount: '-44%',
        badge: '',
        attrs: ['Góc cố đinh', '2MP'],
        link: '#'
      }
    ]
  },
  {
    id: 'cat2',
    type: 'category',
    title: 'Thiết bị mạng',
    tabs: [
      { label: 'Thiết bị mạng theo hãng', href: '#' },
      { label: 'Bộ phát wifi', href: '#' },
      { label: 'Router – Modem', href: '#' }
    ],
    viewAllText: 'Xem tất cả ›',
    viewAllHref: '#',
    products: [
      {
        name: 'Router 4G WiFi TP-Link TL-MR100-Outdoor',
        image: 'assets/images/product-cat2-1.png',
        price: '970.000 đ',
        oldPrice: '1.360.000 đ',
        discount: '-28%',
        badge: '',
        attrs: ['Chuẩn N', '10 đến 20 thiết bị'],
        link: '#'
      },
      {
        name: 'Bộ phát WiFi Ruijie RG-EW300 PRO Chuẩn N tốc độ 300Mbps',
        image: 'assets/images/product-cat2-2.png',
        price: '440.000 đ',
        oldPrice: '660.000 đ',
        discount: '-33%',
        badge: '',
        attrs: [],
        link: '#'
      },
      {
        name: 'Bộ phát WiFi Ruijie RG-EW1200 Chuẩn AC tốc độ 1167Mbps Cổng 100M',
        image: 'assets/images/product-cat2-3.png',
        price: '550.000 đ',
        oldPrice: '830.000 đ',
        discount: '-34%',
        badge: '',
        attrs: [],
        link: '#'
      },
      {
        name: 'Bộ phát WiFi Ruijie Reyee RG-EW300R',
        image: 'assets/images/product-cat2-4.png',
        price: 'Liên hệ',
        oldPrice: '',
        discount: '',
        badge: '',
        attrs: [],
        link: '#'
      },
      {
        name: 'Hệ thống Wi-Fi Mesh Cho Toàn Bộ Nhà AC1200 Deco E4(2-Pack)',
        image: 'assets/images/product-cat2-5.png',
        price: '1.300.000 đ',
        oldPrice: '1.820.000 đ',
        discount: '-28%',
        badge: '',
        attrs: ['Chuẩn AC', 'Wifi 5', '2 Pack'],
        link: '#'
      }
    ]
  },
  {
    id: 'cat3',
    type: 'category',
    title: 'Khoá cửa vân tay',
    tabs: [
      { label: 'Khóa cửa Ezviz', href: '#' },
      { label: 'Khóa vân tay Bosch', href: '#' },
      { label: 'Khóa cửa Hafele', href: '#' }
    ],
    viewAllText: 'Xem tất cả ›',
    viewAllHref: '#',
    products: [
      {
        name: 'Khóa cửa vân tay Philips DDL603E-5HWS',
        image: 'assets/images/product-cat3-1.jpg',
        price: '6.600.000 đ',
        oldPrice: '8.250.000 đ',
        discount: '-20%',
        badge: '',
        attrs: [],
        link: '#'
      },
      {
        name: 'Khóa cửa vân tay Philips 7300-5',
        image: 'assets/images/product-cat3-2.jpg',
        price: '9.100.000 đ',
        oldPrice: '11.370.000 đ',
        discount: '-20%',
        badge: '',
        attrs: ['Cửa gỗ', 'App', 'Mã số', 'Thẻ từ', 'Vân tay'],
        link: '#'
      },
      {
        name: 'Khóa cửa vân tay Philips Alpha-5',
        image: 'assets/images/product-cat3-3.png',
        price: '10.400.000 đ',
        oldPrice: '13.000.000 đ',
        discount: '-20%',
        badge: '',
        attrs: ['Cửa gỗ', 'App', 'Mã số', 'Thẻ từ', 'Vân tay'],
        link: '#'
      },
      {
        name: 'Khóa cửa vân tay Kaadas M5',
        image: 'assets/images/product-cat3-4.png',
        price: '3.490.000 đ',
        oldPrice: '4.600.000 đ',
        discount: '-24%',
        badge: '',
        attrs: ['Cửa gỗ', 'Mã số', 'Thẻ từ', 'Vân tay'],
        link: '#'
      },
      {
        name: 'Khóa cửa vân tay Kaadas L8-5',
        image: 'assets/images/product-cat3-5.jpg',
        price: '4.900.000 đ',
        oldPrice: '6.500.000 đ',
        discount: '-25%',
        badge: '',
        attrs: ['Cửa gỗ', 'Mã số', 'Thẻ từ', 'Vân tay'],
        link: '#'
      }
    ]
  },
  {
    id: 'cat4',
    type: 'category',
    title: 'Nhà thông minh',
    tabs: [
      { label: 'Nhà thông minh theo hãng', href: '#' },
      { label: 'Chuông cửa', href: '#' },
      { label: 'Nhà thông minh theo tính năng', href: '#' }
    ],
    viewAllText: 'Xem tất cả ›',
    viewAllHref: '#',
    products: [
      {
        name: 'Công tắc cảm ứng Datic 1 nút',
        image: 'assets/images/product-cat4-1.png',
        price: '330.000 đ',
        oldPrice: '500.000 đ',
        discount: '-34%',
        badge: '',
        attrs: [],
        link: '#'
      },
      {
        name: 'Công tắc cảm ứng WiFi Hunonic 1 Nút, Hình Chữ Nhật',
        image: 'assets/images/product-cat4-2.png',
        price: '730.000 đ',
        oldPrice: '1.070.000 đ',
        discount: '-32%',
        badge: '',
        attrs: [],
        link: '#'
      },
      {
        name: 'Công tắc cảm ứng WiFi Hunonic 2 Nút, Hình Chữ Nhật',
        image: 'assets/images/product-cat4-3.png',
        price: '750.000 đ',
        oldPrice: '1.090.000 đ',
        discount: '-31%',
        badge: '',
        attrs: [],
        link: '#'
      },
      {
        name: 'Công tắc cảm ứng WiFi Hunonic 3 Nút, Hình Chữ Nhật',
        image: 'assets/images/product-cat4-4.png',
        price: '770.000 đ',
        oldPrice: '1.120.000 đ',
        discount: '-31%',
        badge: '',
        attrs: [],
        link: '#'
      },
      {
        name: 'Công tắc cảm ứng WiFi Hunonic 4 Nút, Hình Chữ Nhật',
        image: 'assets/images/product-cat4-5.png',
        price: '810.000 đ',
        oldPrice: '1.150.000 đ',
        discount: '-30%',
        badge: '',
        attrs: [],
        link: '#'
      }
    ]
  },
  {
    id: 'cat5',
    type: 'category',
    title: 'Chấm công - Kiểm soát cửa',
    tabs: [
      { label: 'Máy chấm công', href: '#' },
      { label: 'Thiết bị kiểm soát cửa', href: '#' },
      { label: 'Thiết bị kiểm soát cổng', href: '#' }
    ],
    viewAllText: 'Xem tất cả ›',
    viewAllHref: '#',
    products: [
      {
        name: 'Máy chấm công vân tay Ronald Jack 3800Pro',
        image: 'assets/images/product-cat5-1.jpg',
        price: '1.600.000 đ',
        oldPrice: '2.900.000 đ',
        discount: '-45%',
        badge: '',
        attrs: [],
        link: '#'
      },
      {
        name: 'Máy chấm công vân tay ZKTeco K20',
        image: 'assets/images/product-cat5-2.jpg',
        price: 'Liên hệ',
        oldPrice: '',
        discount: '',
        badge: '',
        attrs: [],
        link: '#'
      },
      {
        name: 'Máy chấm công vân tay ZKTeco K45 Pro',
        image: 'assets/images/product-cat5-3.jpg',
        price: 'Liên hệ',
        oldPrice: '',
        discount: '',
        badge: '',
        attrs: [],
        link: '#'
      },
      {
        name: 'Máy chấm công vân tay ZKTeco K40',
        image: 'assets/images/product-cat5-4.jpg',
        price: 'Liên hệ',
        oldPrice: '',
        discount: '',
        badge: '',
        attrs: [],
        link: '#'
      },
      {
        name: 'Máy chấm công vân tay ZKTeco DG600ID',
        image: 'assets/images/product-cat5-5.jpg',
        price: 'Liên hệ',
        oldPrice: '',
        discount: '',
        badge: '',
        attrs: [],
        link: '#'
      }
    ]
  },
  {
    id: 'cat6',
    type: 'category',
    title: 'Thiết bị lưu trữ',
    tabs: [
      { label: 'Ổ cứng', href: '#' },
      { label: 'Thẻ nhớ', href: '#' },
      { label: 'Ổ SSD', href: '#' }
    ],
    viewAllText: 'Xem tất cả ›',
    viewAllHref: '#',
    products: [
      {
        name: 'Thẻ nhớ SanDisk Ultra microSD 512GB',
        image: 'assets/images/product-cat6-1.png',
        price: '2.700.000 đ',
        oldPrice: '3.000.000 đ',
        discount: '-10%',
        badge: '',
        attrs: [],
        link: '#'
      },
      {
        name: 'Thẻ nhớ SanDisk Ultra microSD 256GB',
        image: 'assets/images/product-cat6-2.png',
        price: '1.500.000 đ',
        oldPrice: '1.700.000 đ',
        discount: '-12%',
        badge: '',
        attrs: [],
        link: '#'
      },
      {
        name: 'Thẻ nhớ SanDisk Ultra microSD 128GB',
        image: 'assets/images/product-cat6-3.png',
        price: '700.000 đ',
        oldPrice: '800.000 đ',
        discount: '-13%',
        badge: '',
        attrs: [],
        link: '#'
      },
      {
        name: 'Thẻ nhớ SanDisk Ultra microSD 64GB',
        image: 'assets/images/product-cat6-4.png',
        price: '450.000 đ',
        oldPrice: '800.000 đ',
        discount: '-44%',
        badge: '',
        attrs: [],
        link: '#'
      },
      {
        name: 'Thẻ nhớ SanDisk Ultra microSD 32GB',
        image: 'assets/images/product-cat6-5.png',
        price: '350.000 đ',
        oldPrice: '450.000 đ',
        discount: '-22%',
        badge: '',
        attrs: [],
        link: '#'
      }
    ]
  }
];

PRODUCT_SECTIONS.forEach((section) => {
  if (section.type === 'category') {
    section.products = section.products.concat(section.products);
  }
});
