const NETWORK_ICON_STRIP = [
  { label: 'Thiết bị mạng theo hãng', image: 'assets/images/thiet-bi-mang/icons/cat_big_144_1748060512.jpg' },
  { label: 'Bộ phát wifi', image: 'assets/images/thiet-bi-mang/icons/cat_big_56_1748060524.jpg' },
  { label: 'Router – Modem', image: 'assets/images/thiet-bi-mang/icons/cat_big_57_1748060640.jpg' },
  { label: 'Phụ kiện mạng', image: 'assets/images/thiet-bi-mang/icons/cat_big_60_1748060603.jpg' },
  { label: 'Mesh Wi-Fi', image: 'assets/images/thiet-bi-mang/icons/logo_logo (1).png' },
  { label: 'Quán lý AP', image: 'assets/images/thiet-bi-mang/icons/logo_logo (1).png' },
  { label: 'Gateway', image: 'assets/images/thiet-bi-mang/icons/logo_logo (1).png' },
  { label: 'Bộ kích sóng wifi', image: 'assets/images/thiet-bi-mang/icons/logo_logo (1).png' },
  { label: 'Wi-Fi Di Động', image: 'assets/images/thiet-bi-mang/icons/logo_logo (1).png' },
  { label: 'Switch – Bộ chuyển mạch', image: 'assets/images/thiet-bi-mang/icons/logo_logo (1).png' },
  { label: 'Module mạng', image: 'assets/images/thiet-bi-mang/icons/logo_logo (1).png' }
];

const NETWORK_CATEGORY_GROUPS = [
  {
    title: 'Thiết bị mạng theo hãng',
    viewAllHref: '#',
    products: [
      { name: 'Bộ chuyển đổi USB Wi-Fi Nano N150 MW150US', oldPrice: '130.000 đ', price: '95.000 đ', discount: '-27%', attrs: [], image: '250-931-mw150us.png' },
      { name: 'Bộ chuyển đổi USB Nano Bluetooth TP-Link MA530', oldPrice: '150.000 đ', price: '110.000 đ', discount: '-27%', attrs: [], image: '250-1130-ma530.png' },
      { name: 'Bộ Chuyển Đổi USB Nano Bluetooth 4.0 TP-Link UB400', oldPrice: '170.000 đ', price: '120.000 đ', discount: '-28%', attrs: [], image: '250-1131-ub400--2-.png' },
      { name: 'Switch Chia Mạng 5 Cổng Mercusys 10/100Mbps (MS105)', oldPrice: '180.000 đ', price: '130.000 đ', discount: '-28%', attrs: ['Switch Ethernet 10/100'], image: '250-1053-ms105.png' },
      { name: 'Bộ chuyển đổi USB Wi-Fi Mini N300 MW300UM', oldPrice: '190.000 đ', price: '135.000 đ', discount: '-28%', attrs: ['150 - 500 Mpps'], image: '250-927-mw300um--3-.png' },
      { name: 'Bộ Chuyển Đổi USB Nano Bluetooth 5.0 TP-Link UB500', oldPrice: '190.000 đ', price: '135.000 đ', discount: '-28%', attrs: [], image: '250-1128-ub500.png' },
      { name: 'Bluetooth Long Range USB Adapter TP-Link MA550H', oldPrice: '190.000 đ', price: '135.000 đ', discount: '-28%', attrs: [], image: '250-1129-adapter-ma550h.jpg' },
      { name: 'Switch Để Bàn LiteWave 5 Cổng 10/100 Mbps LS1005', oldPrice: '200.000 đ', price: '145.000 đ', discount: '-28%', attrs: ['Switch Ethernet 10/100'], image: '250-1007-ls1005.png' },
      { name: 'Switch Chia Mạng 8 Cổng Mercusys 10/100Mbps (MS108)', oldPrice: '220.000 đ', price: '160.000 đ', discount: '-27%', attrs: ['Switch Ethernet 10/100'], image: '250-1052-ms108.png' },
      { name: 'Switch Để Bàn 5 Cổng10/100 Mbps TL-SF1005D', oldPrice: '230.000 đ', price: '165.000 đ', discount: '-28%', attrs: ['Switch Ethernet 10/100'], image: '250-1005-tl-sf1005d.png' }
    ]
  },
  {
    title: 'Bộ phát wifi',
    viewAllHref: '#',
    products: [
      { name: 'Bộ Chuyển Đổi USB Nano Bluetooth 5.0 TP-Link UB500', oldPrice: '190.000 đ', price: '135.000 đ', discount: '-28%', attrs: [], image: '250-1128-ub500.png' },
      { name: 'Bộ Chuyển Đổi USB Wi-Fi Mini 300Mbps TL-WN823N', oldPrice: '270.000 đ', price: '190.000 đ', discount: '-30%', attrs: ['Chuẩn N', '2.4GHz', '150 - 500 Mpps'], image: '250-926-tl-wn823n.png' },
      { name: 'Bộ Mở Rộng Sóng Wi-Fi 300Mbps TL-WA850RE', oldPrice: '390.000 đ', price: '275.000 đ', discount: '-28%', attrs: ['Chuẩn N', '2.4GHz', '150 - 500 Mpps'], image: '250-902-tl-wa850re--2-.png', href: 'tplink-bo-phat-wifi-tl-wa850re.html' },
      { name: 'Hub USB Type-C 3 Cổng TP-Link UH3020C', oldPrice: '600.000 đ', price: '425.000 đ', discount: '-28%', attrs: [], image: '250-1118-uh3020c.png' },
      { name: 'Bộ Chuyển Đổi Mạng USB 3.0 Type-C sang Gigabit Ethernet với 3 Cổng USB 3.0 TP-Link UE330C', oldPrice: '650.000 đ', price: '465.000 đ', discount: '-28%', attrs: [], image: '250-1123-ue330c.png', href: 'tplink-bo-phat-wifi-ue330c.html' },
      { name: 'Bộ Mở Rộng Sóng Wi-Fi AC1200 ME30', oldPrice: '670.000 đ', price: '480.000 đ', discount: '-28%', attrs: ['Chuẩn AC', '5GHz', '2.4GHz', '1000 - 2000 Mpps'], image: '250-897-me30.png' },
      { name: 'Switch Easy Managed TP-Link Omada ES205G', oldPrice: '710.000 đ', price: '510.000 đ', discount: '-28%', attrs: ['Switch Ethernet 10/100/1000', 'Switch Ethernet POE'], image: '250-961-es205g--2-.png' },
      { name: 'Switch Để Bàn 10 Cổng 10/100M, 8 x cổng PoE+, Vỏ kim loại MS110P', oldPrice: '740.000 đ', price: '530.000 đ', discount: '-28%', attrs: ['Switch Ethernet 10/100', 'Switch Ethernet POE'], image: '250-996-switch-ms110p--4-.png' },
      { name: 'Bộ chuyển đổi USB Wi-Fi 6 Băng Tần Kép Độ Lợi Cao AX1800 Archer TX20U Plus', oldPrice: '850.000 đ', price: '610.000 đ', discount: '-28%', attrs: ['Chuẩn AX', '5GHz', '2.4GHz', '1000 - 2000 Mpps'], image: '250-908-archer-tx20u-plus.png' },
      { name: 'Access Point Gắn Trần Wi-Fi 300 Mbps EAP110', oldPrice: '860.000 đ', price: '615.000 đ', discount: '-28%', attrs: [], image: '250-1010-eap110--2-.png' }
    ]
  },
  {
    title: 'Router – Modem',
    viewAllHref: '#',
    products: [
      { name: 'Switch Để Bàn 5 Cổng 10/100/1000M, 4 x cổng PoE+ TP-Link MS105G', oldPrice: '310.000 đ', price: '220.000 đ', discount: '-28%', attrs: ['Switch Ethernet 10/100/1000'], image: '250-1045-ms105g--4-.png' },
      { name: 'Router Wi-Fi N300 TL-WR820N', oldPrice: '410.000 đ', price: '290.000 đ', discount: '-28%', attrs: ['Chuẩn N', '10 đến 20 thiết bị', '3 Cổng'], image: '250-876-tl-wr820n.png' },
      { name: 'Router Wifi chuẩn N 300 MBPS MW305R', oldPrice: '420.000 đ', price: '300.000 đ', discount: '-28%', attrs: ['Chuẩn N', '10 đến 20 thiết bị', '5 Cổng'], image: '250-878-mw305r.png' },
      { name: 'Router Wi-Fi N300 TL-WR840N', oldPrice: '460.000 đ', price: '325.000 đ', discount: '-28%', attrs: ['Chuẩn N', '10 đến 20 thiết bị', '5 Cổng'], image: '250-874-tl-wr840n--2-.png', href: 'tplink-router-modem-tl-wr840n.html' },
      { name: 'Router Wi-Fi Chuẩn N Tốc Độ 300Mbps MW325R', oldPrice: '470.000 đ', price: '335.000 đ', discount: '-28%', attrs: ['20 đến 30 thiết bị', '5 Cổng'], image: '250-877-mw325r--3-.png' },
      { name: 'Router Wi-Fi N300 TL-WR841N', oldPrice: '540.000 đ', price: '385.000 đ', discount: '-28%', attrs: ['Chuẩn N', '10 đến 20 thiết bị', '5 Cổng'], image: '250-873-tl-wr841n.png' },
      { name: 'Router Wi-Fi Băng Tần Kép AC1200 AC10', oldPrice: '580.000 đ', price: '415.000 đ', discount: '-28%', attrs: ['20 đến 30 thiết bị'], image: '250-868-ac10--2-.png' },
      { name: 'Router Wi-Fi Băng Tần Kép AC1200 Archer C54', oldPrice: '630.000 đ', price: '450.000 đ', discount: '-28%', attrs: ['20 đến 30 thiết bị', '5 Cổng'], image: '250-867-archer-c54.png', href: 'tplink-router-modem-archer-c54.html' },
      { name: 'Router Wi-Fi Băng Tần Kép AC1200 Archer C50', oldPrice: '710.000 đ', price: '510.000 đ', discount: '-28%', attrs: [], image: '250-866-archer-c50.png', href: 'tplink-router-modem-archer-c50.html' },
      { name: 'Router Wi-Fi Gigabit Băng Tần Kép AC1200 MR30G', oldPrice: '750.000 đ', price: '535.000 đ', discount: '-28%', attrs: ['Chuẩn AC', '50 đến 60 thiết bị', '3 Cổng'], image: '250-864-mr30g--2-.png' }
    ]
  },
  {
    title: 'Phụ kiện mạng',
    viewAllHref: '#',
    products: [
      { name: 'Bộ chuyển đổi USB Wi-Fi Nano N150 MW150US', oldPrice: '130.000 đ', price: '95.000 đ', discount: '-27%', attrs: [], image: '250-931-mw150us.png' },
      { name: 'Bộ chuyển đổi USB Nano Bluetooth TP-Link MA530', oldPrice: '150.000 đ', price: '110.000 đ', discount: '-27%', attrs: [], image: '250-1130-ma530.png' },
      { name: 'Bộ Chuyển Đổi USB Nano Bluetooth 4.0 TP-Link UB400', oldPrice: '170.000 đ', price: '120.000 đ', discount: '-28%', attrs: [], image: '250-1131-ub400--2-.png' },
      { name: 'Bộ Chuyển Đổi USB Nano Bluetooth 5.0 TP-Link UB500', oldPrice: '190.000 đ', price: '135.000 đ', discount: '-28%', attrs: [], image: '250-1128-ub500.png' },
      { name: 'Bluetooth Long Range USB Adapter TP-Link MA550H', oldPrice: '190.000 đ', price: '135.000 đ', discount: '-28%', attrs: [], image: '250-1129-adapter-ma550h.jpg' },
      { name: 'Bộ chuyển đổi USB tầm xa Bluetooth 5.3 TP-Link UB500 Plus', oldPrice: '240.000 đ', price: '170.000 đ', discount: '-28%', attrs: [], image: '250-1127-ub500-plus--2-.png', href: 'tplink-phu-kien-mang-ub500-plus.html' },
      { name: 'USB 2.0 to 100Mbps Ethernet Network Adapter TP-Link UE200', oldPrice: '280.000 đ', price: '200.000 đ', discount: '-28%', attrs: [], image: '250-1121-ue200.png' },
      { name: 'Bộ Chuyển Đổi Mạng USB 3.0 sang Gigabit Ethernet TP-Link UE306', oldPrice: '290.000 đ', price: '210.000 đ', discount: '-28%', attrs: [], image: '250-1126-ue306.png', href: 'tplink-phu-kien-mang-ue306.html' },
      { name: 'Hub USB 3.0 4 Cổng TP-Link UH400', oldPrice: '340.000 đ', price: '240.000 đ', discount: '-28%', attrs: [], image: '250-1120-uh400.png' },
      { name: 'Bộ Chuyển Đổi Mạng USB 3.0 Type C sang Gigabit Ethernet TP-Link UE300C', oldPrice: '360.000 đ', price: '260.000 đ', discount: '-28%', attrs: [], image: '250-1125-ue300c.png' }
    ]
  },
  {
    title: 'Mesh Wi-Fi',
    viewAllHref: '#',
    products: [
      { name: 'Switch Chia Mạng 5 Cổng Mercusys 10/100Mbps (MS105)', oldPrice: '180.000 đ', price: '130.000 đ', discount: '-28%', attrs: [], image: '250-1053-ms105.png' },
      { name: 'Bluetooth Long Range USB Adapter TP-Link MA550H', oldPrice: '190.000 đ', price: '135.000 đ', discount: '-28%', attrs: [], image: '250-1129-adapter-ma550h.jpg' },
      { name: 'Hub USB Type-C 5 Cổng TP-Link UH5020C', oldPrice: '720.000 đ', price: '515.000 đ', discount: '-28%', attrs: [], image: '250-1117-uh5020c--2-.png' },
      { name: 'Switch Để Bàn 8 Cổng Gigabit TL-SG108', oldPrice: '760.000 đ', price: '540.000 đ', discount: '-28%', attrs: ['Switch Ethernet 10/100/1000'], image: '250-1035-tl-sg108.png' },
      { name: 'Hub USB Type-C 6 Cổng TP-Link UH6120C', oldPrice: '870.000 đ', price: '620.000 đ', discount: '-28%', attrs: [], image: '250-1116-uh6120c.png' },
      { name: 'Access Point Wi-Fi Gắn Trần Chuẩn N Tốc Độ 300Mbps TP-LINK TL-EAP115', oldPrice: '900.000 đ', price: '640.000 đ', discount: '-28%', attrs: [], image: '250-1061-eap115--2-.png' },
      { name: 'Access Point Ngoài Trời Wi-Fi 300 Mbps EAP110-Outdoor', oldPrice: '1.060.000 đ', price: '760.000 đ', discount: '-28%', attrs: [], image: '250-1009-eap110-outdoor.png' },
      { name: 'Hub USB Type-C 9 Cổng TP-Link UH9120C', oldPrice: '1.110.000 đ', price: '790.000 đ', discount: '-28%', attrs: [], image: '250-1115-uh9120c--2-.png', href: 'tplink-mesh-wifi-uh9120c.html' },
      { name: 'Hệ thống Wi-Fi Mesh Cho Toàn Bộ Nhà AC1200 Deco M4(1-pack)', oldPrice: '1.360.000 đ', price: '970.000 đ', discount: '-28%', attrs: ['Chuẩn AC', 'Wifi 5', '1 Pack'], image: '250-830-deco-m4-1-pack---4-.png', href: 'tplink-mesh-wifi-deco-m4.html' },
      { name: 'Hệ thống Wi-Fi Mesh Cho Toàn Bộ Nhà AC1900 Deco S7(1-pack)', oldPrice: '1.430.000 đ', price: '1.020.000 đ', discount: '-28%', attrs: ['Chuẩn AC', 'Wifi 5', '1 Pack'], image: '250-821-deco-s7-1-pack-.png', href: 'tplink-mesh-wifi-deco-s7.html' }
    ]
  },
  {
    title: 'Quán lý AP',
    viewAllHref: '#',
    products: [
      { name: 'Thiết bị quản lý wifi Controller Huawei AC650-128AP', price: 'Liên hệ', attrs: [], image: '250-2843-ac650-128ap.jpg' },
      { name: 'Thiết bị quản lý wifi Controller Huawei AC650-256AP', price: 'Liên hệ', attrs: [], image: '250-2844-ac650-256ap.jpg' },
      { name: 'Thiết bị quản lý wifi Controller Huawei AC650-512AP', price: 'Liên hệ', attrs: [], image: '250-2845-ac650-512ap.jpg' }
    ]
  },
  {
    title: 'Gateway',
    viewAllHref: '#',
    products: [
      { name: 'UniFi Cloud Gateway Ultra (UCG-Ultra)', price: 'Liên hệ', attrs: [], image: '250-2283-gateway-ultra-ucg-ultra--2-.jpg' },
      { name: 'UniFi Next-Generation Gateway Lite (UXG Lite)', price: 'Liên hệ', attrs: [], image: '250-2281-gateway-lite-uxg-lite--2-.jpg' },
      { name: 'Ubiquiti UniFi Gateway Max UXG-Max', price: 'Liên hệ', attrs: [], image: '250-2282-gateway-max-uxg-max--3-.jpg' },
      { name: 'Unifi Security Gateway Pro USG-PRO-4', price: 'Liên hệ', attrs: [], image: '250-2294-usg-pro-4.jpg' },
      { name: 'UniFi Next-Generation Gateway Pro (UXG Pro)', price: 'Liên hệ', attrs: [], image: '250-2229-gateway-pro-uxg-pro.jpg' }
    ]
  },
  {
    title: 'Bộ kích sóng wifi',
    viewAllHref: '#',
    products: [
      { name: 'Bộ chuyển đổi USB Wi-Fi Nano N150 MW150US', oldPrice: '130.000 đ', price: '95.000 đ', discount: '-27%', attrs: [], image: '250-931-mw150us.png' },
      { name: 'Bộ chuyển đổi USB Wi-Fi Mini N300 MW300UM', oldPrice: '190.000 đ', price: '135.000 đ', discount: '-28%', attrs: [], image: '250-927-mw300um--3-.png' },
      { name: 'Switch Để Bàn LiteWave 8 Cổng 10/100 Mbps LS1008', oldPrice: '250.000 đ', price: '175.000 đ', discount: '-30%', attrs: ['Switch Ethernet 10/100'], image: '250-1006-ls1008.png' },
      { name: 'Bộ Chuyển Đổi USB Wi-Fi Mini 300Mbps TL-WN823N', oldPrice: '270.000 đ', price: '190.000 đ', discount: '-30%', attrs: [], image: '250-926-tl-wn823n.png' },
      { name: 'Switch Để Bàn 8 Cổng 10/100 Mbps TL-SF1008D', oldPrice: '270.000 đ', price: '195.000 đ', discount: '-28%', attrs: ['Switch Ethernet 10/100'], image: '250-1004-tl-sf1008d.png' },
      { name: 'Bộ Chuyển Đổi PCI Express Wi Fi 150Mbps TL-WN781ND', oldPrice: '280.000 đ', price: '200.000 đ', discount: '-28%', attrs: ['2.4GHz', '150 - 500 Mpps'], image: '250-941-tl-wn781nd--2-.png', href: 'tplink-bo-kich-song-wifi-tl-wn781nd.html' },
      { name: 'Bộ Chuyển Đổi USB Wi-Fi 300Mbps TL-WN821N', oldPrice: '290.000 đ', price: '205.000 đ', discount: '-28%', attrs: ['2.4GHz', '150 - 500 Mpps'], image: '250-925-tl-wn821n--2-.png' },
      { name: 'Bộ Chuyển Đổi USB Wi-Fi Độ Lợi Cao 150Mbps TL-WN722N', oldPrice: '290.000 đ', price: '210.000 đ', discount: '-28%', attrs: ['Chuẩn N', '2.4GHz', '150 - 500 Mpps'], image: '250-928-tl-wn722n--2-.png' },
      { name: 'Bộ Chuyển Đổi Mạng PCI Express Gigabit TG-3468', oldPrice: '300.000 đ', price: '215.000 đ', discount: '-28%', attrs: [], image: '250-944-tg-3468.png' },
      { name: 'Bộ Mở Rộng Sóng Wi-Fi 300Mbps ME10', oldPrice: '350.000 đ', price: '250.000 đ', discount: '-28%', attrs: ['2.4GHz', '150 - 500 Mpps'], image: '250-905-me10.png' }
    ]
  },
  {
    title: 'Wi-Fi Di Động',
    viewAllHref: '#',
    products: [
      { name: 'Switch Easy Smart 5 cổng Gigabit TL-SG105E', oldPrice: '660.000 đ', price: '470.000 đ', discount: '-28%', attrs: ['Switch Ethernet 10/100/1000'], image: '250-1025-tl-sg105e.png' },
      { name: 'Bộ phát Wi Fi Di Động 4G LTE 150Mbps MT110', oldPrice: '1.370.000 đ', price: '975.000 đ', discount: '-28%', attrs: ['150 - 500 Mpps'], image: '250-950-mt110--2-.png' },
      { name: 'Bộ phát Wifi di động TP-Link M7000 4G LTE 150Mbps', oldPrice: '1.600.000 đ', price: '1.140.000 đ', discount: '-28%', attrs: ['2.4GHz', '150 - 500 Mpps'], image: '250-948-m7000.png', href: 'tplink-wifi-di-dong-m7000.html' },
      { name: 'Bộ phát Wifi di động 4G LTE TP-Link M7350', oldPrice: '2.040.000 đ', price: '1.455.000 đ', discount: '-28%', attrs: ['2.4GHz', '150 - 500 Mpps'], image: '250-946-m7350.png', href: 'wifi-di-dong-tplink-m7350.html' },
      { name: 'Hệ thống Wi-Fi Mesh Cho Toàn Bộ Nhà AC1200 Deco E4(3-Pack)', oldPrice: '2.630.000 đ', price: '1.880.000 đ', discount: '-28%', attrs: ['Chuẩn AC', 'Wifi 5', '3 Pack'], image: '250-831-deco-e4-3-pack---2-.png', href: 'tplink-wifi-di-dong-deco-e4.html' },
      { name: 'Bộ Phát Wifi Di Động TP-Link 4G LTE M7450', oldPrice: '3.900.000 đ', price: '2.785.000 đ', discount: '-28%', attrs: ['5GHz', '2.4GHz', '1000 - 2000 Mpps'], image: '250-945-m7450.png' },
      { name: 'Nguồn PoE Splitter 1G TP-Link Omada POE10R', price: 'Liên hệ', attrs: [], image: '250-1067-poe10r.png' },
      { name: 'Nguồn PoE-af 1GbE TP-Link TL-POE150S', price: 'Liên hệ', attrs: [], image: '250-1066-poe150s.png' }
    ]
  },
  {
    title: 'Switch – Bộ chuyển mạch',
    viewAllHref: '#',
    products: [
      { name: 'Bộ Chuyển Đổi USB Nano Bluetooth 4.0 TP-Link UB400', oldPrice: '170.000 đ', price: '120.000 đ', discount: '-28%', attrs: [], image: '250-1131-ub400--2-.png' },
      { name: 'Switch Chia Mạng 5 Cổng Mercusys 10/100Mbps (MS105)', oldPrice: '180.000 đ', price: '130.000 đ', discount: '-28%', attrs: [], image: '250-1053-ms105.png' },
      { name: 'Switch Để Bàn LiteWave 5 Cổng 10/100 Mbps LS1005', oldPrice: '200.000 đ', price: '145.000 đ', discount: '-28%', attrs: [], image: '250-1007-ls1005.png' },
      { name: 'Switch Chia Mạng 8 Cổng Mercusys 10/100Mbps (MS108)', oldPrice: '220.000 đ', price: '160.000 đ', discount: '-27%', attrs: [], image: '250-1052-ms108.png' },
      { name: 'Switch Để Bàn 5 Cổng10/100 Mbps TL-SF1005D', oldPrice: '230.000 đ', price: '165.000 đ', discount: '-28%', attrs: [], image: '250-1005-tl-sf1005d.png' },
      { name: 'Switch Để Bàn LiteWave 8 Cổng 10/100 Mbps LS1008', oldPrice: '250.000 đ', price: '175.000 đ', discount: '-30%', attrs: [], image: '250-1006-ls1008.png' },
      { name: 'Switch Để Bàn 8 Cổng 10/100 Mbps TL-SF1008D', oldPrice: '270.000 đ', price: '195.000 đ', discount: '-28%', attrs: [], image: '250-1004-tl-sf1008d.png' },
      { name: 'Switch Để Bàn 5 Cổng 10/100/1000M, 4 x cổng PoE+ TP-Link MS105G', oldPrice: '310.000 đ', price: '220.000 đ', discount: '-28%', attrs: [], image: '250-1045-ms105g--4-.png' },
      { name: 'Switch Để Bàn LiteWave 5 Cổng Gigabit LS1005G', oldPrice: '360.000 đ', price: '255.000 đ', discount: '-28%', attrs: ['Switch Ethernet 10/100/1000'], image: '250-1003-ls1005g.png' },
      { name: 'Switch Để Bàn 5 Cổng Gigabit TL-SG1005D', oldPrice: '390.000 đ', price: '280.000 đ', discount: '-28%', attrs: ['Switch Ethernet 10/100/1000'], image: '250-1001-tl-sg1005d.jpg', href: 'tplink-switch-tl-sg1005d.html' }
    ]
  },
  {
    title: 'Module mạng',
    viewAllHref: '#',
    products: [
      { name: 'Module Quang SFP Ruijie MINI-GBIC-SX-MM850 | MM850', oldPrice: '1.040.000 đ', price: '690.000 đ', discount: '-34%', attrs: [], image: '250-1316-mini-gbic-sx-mm850--4-.png' },
      { name: 'Module Quang SFP Ruijie MINI-GBIC-LX-SM1310 | SM1310', oldPrice: '1.130.000 đ', price: '750.000 đ', discount: '-34%', attrs: [], image: '250-1317-mini-gbic-lx-sm1310--4-.png' },
      { name: 'Thiết bị Module Quang RUIJIE GE-SFP-LX20-SM1310-BIDI, đầu nối LC khoảng cách tối đa 20km', price: 'Liên hệ', attrs: [], image: '250-1321-ge-sfp-lx20-sm1310-bidi.png' },
      { name: 'Module quang SFP RUIJIE XG-SFP-SR-MM850', oldPrice: '2.000.000 đ', price: '1.335.000 đ', discount: '-33%', attrs: [], image: '250-1325-xg-sfp-sr-mm850.png' },
      { name: 'Thiết bị Module Quang RUIJIE GE-SFP-LH40-SM1310-BIDI, Bước sóng TX1310/RX1550 Khoảng cách cáp tối đa 40km, LC', price: 'Liên hệ', attrs: [], image: '250-1323-ge-sfp-lh40-sm1310-bidi.png' },
      { name: 'Module Quang RUIJIE GE-SFP-LX20-SM1550-BIDI, Bước sóng TX1550/RX1310, Khoảng cách cáp tối đa 20km, LC', price: 'Liên hệ', attrs: [], image: '250-1322-ge-sfp-lx20-sm1310-ge-sfp-lx20-sm1550-bidi.png' },
      { name: 'Module Quang RUIJIE GE-SFP-LH40-SM1550-BIDI, LC,TX1550/RX1310 nm Khoảng cách cáp tối đa 40km', price: 'Liên hệ', attrs: [], image: '250-1324-ge-sfp-lh40-sm1550-bidi.png' },
      { name: 'D-Link DEM-310GT 1-Port Mini GBIC Module for 1000BaseLX (LC Duplex)', oldPrice: '2.570.000 đ', price: '1.710.000 đ', discount: '-33%', attrs: [], image: '250-1318-mini-gbic-gt.png' },
      { name: 'Point to Point TP-Link Omada EAP115-Bridge KIT', oldPrice: '3.150.000 đ', price: '2.250.000 đ', discount: '-28%', attrs: [], image: '250-1062-eap115-bridge-kit.png' },
      { name: 'Module Quang RUIJIE MINI-GBIC-LH40-SM1310, bước sóng ngắn 1000Base-LH, khoảng cách tối đa 40km', price: 'Liên hệ', attrs: [], image: '250-1319-mini-gbic-lh40-sm1310.png' }
    ]
  }
];
