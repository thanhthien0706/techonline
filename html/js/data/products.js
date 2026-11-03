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
      { label: 'Camera Imou', href: '#' },
      { label: 'Camera Dahua', href: '#' },
      { label: 'Camera KBVision', href: '#' }
    ],
    viewAllText: 'Xem tất cả ›',
    viewAllHref: '#',
    products: [
      {
        name: 'Camera IP Dome Dahua DH-IPC-HDW1439T1-A-PRO 4MP có mic, AI-ISP',
        image: 'assets/images/product-cat1-dahua-ip.png',
        price: '1.250.000 đ',
        oldPrice: '1.780.000 đ',
        discount: '-30%',
        badge: '',
        attrs: ['4MP', 'Tích hợp mic', 'H.265+'],
        link: 'camera-ip-dahua-dh-ipc-hdw1439t1-a-pro.html'
      },
      {
        name: 'Camera Wifi Dahua DH-H5AS quay quét trong nhà 5MP, Auto Tracking',
        image: 'assets/images/product-cat1-dahua-wifi.png',
        price: '690.000 đ',
        oldPrice: '980.000 đ',
        discount: '-30%',
        badge: '',
        attrs: ['Xoay 360 độ', '5MP', 'Hồng ngoại 10m'],
        link: 'camera-wifi-dahua-dh-h5as.html'
      },
      {
        name: 'Camera Wifi Imou IPC-A82P-PRO trong nhà quay quét 8MP (4K)',
        image: 'assets/images/product-cat1-imou.png',
        price: '1.090.000 đ',
        oldPrice: '1.650.000 đ',
        discount: '-34%',
        badge: 'Mẫu mới',
        attrs: ['Xoay 360 độ', '8MP', '4 chế độ ánh sáng'],
        link: 'camera-wifi-imou-ipc-a82p-pro.html'
      },
      {
        name: 'Camera IP KBVision KX-CAiF5003N-DL-AB 5MP ánh sáng kép thông minh',
        image: 'assets/images/product-cat1-kbvision.png',
        price: '890.000 đ',
        oldPrice: '1.250.000 đ',
        discount: '-29%',
        badge: '',
        attrs: ['5MP', 'Ánh sáng kép', 'H.265+'],
        link: 'camera-ip-kbvision-kx-caif5003n-dl-ab.html'
      },
      {
        name: 'Camera Wifi Kabevision KX-5PTW-D-PMA 2 ống kính ngoài trời 5+5MP',
        image: 'assets/images/product-cat1-kabevision.png',
        price: '1.450.000 đ',
        oldPrice: '2.050.000 đ',
        discount: '-29%',
        badge: '',
        attrs: ['Xoay 360 độ', '5+5MP', '2 Mắt'],
        link: 'camera-wifi-kabevision-kx-5ptw-d-pma.html'
      }
    ]
  },
  {
    id: 'cat2',
    type: 'category',
    title: 'Thiết bị mạng',
    tabs: [
      { label: 'Router TP-Link', href: '#' },
      { label: 'Mesh Wi-Fi', href: '#' },
      { label: 'Modem – Gateway', href: '#' }
    ],
    viewAllText: 'Xem tất cả ›',
    viewAllHref: '#',
    products: [
      {
        name: 'Router Wi-Fi 7 TP-Link Archer GE230 băng tần kép BE3600',
        image: 'assets/images/product-cat2-tplink-router.png',
        price: '1.690.000 đ',
        oldPrice: '2.290.000 đ',
        discount: '-26%',
        badge: 'Mẫu mới',
        attrs: ['Wi-Fi 7', 'BE3600'],
        link: 'router-wifi-tplink-archer-ge230.html'
      },
      {
        name: 'Hệ thống Wi-Fi Mesh TP-Link Deco X50 AX3000 (1-Pack)',
        image: 'assets/images/product-cat2-tplink-mesh.png',
        price: '1.890.000 đ',
        oldPrice: '2.590.000 đ',
        discount: '-27%',
        badge: '',
        attrs: ['Wi-Fi 6', 'AX3000'],
        link: 'mesh-wifi-tplink-deco-x50.html'
      },
      {
        name: 'Router Wi-Fi 4G LTE TP-Link TL-MR6400 Chuẩn N 300Mbps',
        image: 'assets/images/product-cat2-tplink-modem.jpg',
        price: '890.000 đ',
        oldPrice: '1.190.000 đ',
        discount: '-25%',
        badge: '',
        attrs: ['4G LTE', 'Chuẩn N'],
        link: 'modem-4g-tplink-tl-mr6400.html'
      },
      {
        name: 'Bộ phát Wi-Fi di động TP-Link M7350 4G LTE pin 2000mAh',
        image: 'assets/images/product-cat2-tplink-mobile.jpg',
        price: '1.190.000 đ',
        oldPrice: '1.590.000 đ',
        discount: '-25%',
        badge: '',
        attrs: ['4G LTE', '10 thiết bị'],
        link: 'wifi-di-dong-tplink-m7350.html'
      },
      {
        name: 'Bộ mở rộng sóng Wi-Fi 7 TP-Link RE235BE băng tần kép BE3600',
        image: 'assets/images/product-cat2-tplink-extender.png',
        price: '990.000 đ',
        oldPrice: '1.350.000 đ',
        discount: '-27%',
        badge: '',
        attrs: ['Wi-Fi 7', 'MLO'],
        link: 'bo-mo-rong-wifi-tplink-re235be.html'
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
      { label: 'Kiểm soát cửa Dahua', href: '#' },
      { label: 'Kiểm soát cửa Kabevision', href: '#' },
      { label: 'Module vân tay', href: '#' }
    ],
    viewAllText: 'Xem tất cả ›',
    viewAllHref: '#',
    products: [
      {
        name: 'Máy chấm công khuôn mặt Dahua DHI-ASI3214A-W màn hình 4.3"',
        image: 'assets/images/product-cat5-access-dahua1.png',
        price: '3.690.000 đ',
        oldPrice: '5.200.000 đ',
        discount: '-29%',
        badge: '',
        attrs: ['Khuôn mặt', 'Vân tay', 'Thẻ IC'],
        link: 'may-cham-cong-khuon-mat-dahua-dhi-asi3214a-w.html'
      },
      {
        name: 'Máy chấm công khuôn mặt Dahua DHI-ASI3213A-W-E1 Camera kép 2MP',
        image: 'assets/images/product-cat5-access-dahua2.png',
        price: '3.290.000 đ',
        oldPrice: '4.600.000 đ',
        discount: '-28%',
        badge: '',
        attrs: ['Khuôn mặt', 'Thẻ IC', 'Mật khẩu'],
        link: 'may-cham-cong-khuon-mat-dahua-dhi-asi3213a-w-e1.html'
      },
      {
        name: 'Module mở rộng vân tay Dahua ASF7K-FQ (10.000 vân tay)',
        image: 'assets/images/product-cat5-access-dahua3.png',
        price: '1.450.000 đ',
        oldPrice: '1.950.000 đ',
        discount: '-26%',
        badge: '',
        attrs: ['Vân tay', 'QR Code'],
        link: 'module-van-tay-dahua-asf7k-fq.html'
      },
      {
        name: 'Máy kiểm soát ra vào Dahua DHI-ASI7213K-W màn hình 7"',
        image: 'assets/images/product-cat5-access-dahua4.png',
        price: '5.690.000 đ',
        oldPrice: '7.900.000 đ',
        discount: '-28%',
        badge: 'Mẫu mới',
        attrs: ['Khuôn mặt', 'Thẻ IC', 'QR Code'],
        link: 'may-kiem-soat-ra-vao-dahua-dhi-asi7213k-w.html'
      },
      {
        name: 'Máy kiểm soát ra vào Kabevision KX-FR04AC-FW nhận diện khuôn mặt',
        image: 'assets/images/product-cat5-access-kabevision.png',
        price: '2.690.000 đ',
        oldPrice: '3.790.000 đ',
        discount: '-29%',
        badge: '',
        attrs: ['Khuôn mặt', 'Camera kép 2MP'],
        link: 'may-kiem-soat-ra-vao-kabevision-kx-fr04ac-fw.html'
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
        name: 'SSD SanDisk SDSSDA-240G-G26 2.5" SATA 3, 240GB',
        image: 'assets/images/product-cat6-sandisk-ssd.png',
        price: '590.000 đ',
        oldPrice: '790.000 đ',
        discount: '-25%',
        badge: '',
        attrs: ['240GB', 'SATA 3', 'Bảo hành 3 năm'],
        link: 'ssd-sandisk-sdssda-240g-g26.html'
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
