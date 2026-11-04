const CAMERA_ICON_STRIP = [
  { label: 'Camera IP Dahua', image: 'assets/images/camera-giam-sat/outbox/camera-ip-dahua-dh-ipc-hdw1439t1-a-pro.png' },
  { label: 'Camera Wifi Dahua', image: 'assets/images/camera-giam-sat/outbox/camera-wifi-dahua-dh-h5as.png' },
  { label: 'Camera Analog Dahua', image: 'assets/images/camera-giam-sat/outbox/camera-analog-dahua-dh-hac-hdw1200tqp-il-t-vn.png' },
  { label: 'Camera PTZ Dahua', image: 'assets/images/camera-giam-sat/outbox/camera-ptz-dahua-dh-sd4a225db-hny.png' },
  { label: 'Đầu ghi IP Dahua', image: 'assets/images/camera-giam-sat/outbox/dau-ghi-ip-dahua-dhi-nvr5864-ei2.png' },
  { label: 'Đầu ghi Analog Dahua', image: 'assets/images/camera-giam-sat/outbox/dau-ghi-analog-dahua-dh-xvr4116hs-i-t.png' },
  { label: 'Kiểm soát ra vào Dahua', image: 'assets/images/camera-giam-sat/outbox/kiem-soat-ra-vao-dahua-dhi-asi3214a-w.png' },
  { label: 'Chuông cửa màn hình Dahua', image: 'assets/images/camera-giam-sat/outbox/chuong-cua-man-hinh-dahua-dhi-vto2201f-p-s2.png' },
  { label: 'Switch Dahua', image: 'assets/images/camera-giam-sat/outbox/switch-dahua-dh-cs4010-8et2gt-60.png' },
  { label: 'Phụ kiện Dahua', image: 'assets/images/camera-giam-sat/outbox/phu-kien-dahua-dhi-lm22-b220n.png' },
  { label: 'Sản phẩm dự án Dahua', image: 'assets/images/camera-giam-sat/outbox/san-pham-du-an-dahua-itc431-rw1f-l.png' },
  { label: 'Camera Imou', image: 'assets/images/camera-giam-sat/outbox/camera-wifi-imou-ipc-a82p-pro.png' },
  { label: 'Đầu ghi Imou', image: 'assets/images/camera-giam-sat/outbox/dau-ghi-imou-nvr-n110w-8a0e.png' },
  { label: 'Sản phẩm khác Imou', image: 'assets/images/camera-giam-sat/outbox/san-pham-khac-imou-sf110p.png' },
  { label: 'Camera IP KBVision', image: 'assets/images/camera-giam-sat/outbox/camera-ip-kbvision-kx-caif5003n-dl-ab.png' },
  { label: 'Camera Analog KBVision', image: 'assets/images/camera-giam-sat/outbox/camera-analog-kbvision-kx-af5004s-dl-a.png' },
  { label: 'Sản phẩm KBVision', image: 'assets/images/camera-giam-sat/outbox/san-pham-kbvision-provms.jpg' },
  { label: 'Camera Wifi KabeVision', image: 'assets/images/camera-giam-sat/outbox/camera-wifi-kabevision-kx-5ptw-d-pma.png' },
  { label: 'Camera Analog KabeVision', image: 'assets/images/camera-giam-sat/outbox/camera-analog-kabevision-kx-ad5013-a.png' },
  { label: 'Camera PTZ KabeVision', image: 'assets/images/camera-giam-sat/outbox/camera-ptz-kabevision-kx-eai2458lzsn.png' },
  { label: 'Đầu ghi IP KabeVision', image: 'assets/images/camera-giam-sat/outbox/dau-ghi-ip-kabevision-kx-eai4k8864n4.png' },
  { label: 'Đầu ghi Analog KabeVision', image: 'assets/images/camera-giam-sat/outbox/dau-ghi-analog-kabevision-kx-7108t-vn.png' },
  { label: 'Kiểm soát ra vào KabeVision', image: 'assets/images/camera-giam-sat/outbox/kiem-soat-ra-vao-kabevision-kx-fr04ac-fw.png' },
  { label: 'Switch KabeVision', image: 'assets/images/camera-giam-sat/outbox/switch-kabevision-kx-dacs5121-8m-60-pma.png' }
];

const CAMERA_CATEGORY_GROUPS = [
  {
    title: 'Camera IP Dahua',
    viewAllHref: '#',
    products: [
      { name: 'Camera IP Dahua DH-IPC-HDW1439T1-A-PRO', price: 'Liên hệ', attrs: ['Dahua'], image: 'assets/images/camera-giam-sat/outbox/camera-ip-dahua-dh-ipc-hdw1439t1-a-pro.png', href: 'camera-ip-dahua-dh-ipc-hdw1439t1-a-pro.html' },
      { name: 'Camera IP Dahua DH-IPC-HDW1239T1-A-PRO', price: 'Liên hệ', attrs: ['Dahua'], image: 'assets/images/camera-giam-sat/outbox/camera-ip-dahua-dh-ipc-hdw1239t1-a-pro.png', href: 'camera-ip-dahua-dh-ipc-hdw1239t1-a-pro.html' },
      { name: 'Camera IP Dahua DH-IPC-HFW1439TC1-A-PRO', price: 'Liên hệ', attrs: ['Dahua'], image: 'assets/images/camera-giam-sat/outbox/camera-ip-dahua-dh-ipc-hfw1439tc1-a-pro.png', href: 'camera-ip-dahua-dh-ipc-hfw1439tc1-a-pro.html' },
      { name: 'Camera IP Dahua DH-IPC-HFW1439M1-A-B-PRO', price: 'Liên hệ', attrs: ['Dahua'], image: 'assets/images/camera-giam-sat/outbox/camera-ip-dahua-dh-ipc-hfw1439m1-a-b-pro.png', href: 'camera-ip-dahua-dh-ipc-hfw1439m1-a-b-pro.html' },
      { name: 'Camera IP Dahua DH-IPC-HFW1239M1-A-B-PRO', price: 'Liên hệ', attrs: ['Dahua'], image: 'assets/images/camera-giam-sat/outbox/camera-ip-dahua-dh-ipc-hfw1239m1-a-b-pro.png', href: 'camera-ip-dahua-dh-ipc-hfw1239m1-a-b-pro.html' },
      { name: 'Camera IP Dahua DAT-N9449DZI', price: 'Liên hệ', attrs: ['Dahua'], image: 'assets/images/camera-giam-sat/outbox/camera-ip-dahua-dat-n9449dzi.png', href: 'camera-ip-dahua-dat-n9449dzi.html' },
      { name: 'Camera IP Dahua DHI-HY-FT121LDP', price: 'Liên hệ', attrs: ['2MP', 'Dahua'], image: 'assets/images/camera-giam-sat/outbox/camera-ip-dahua-dhi-hy-ft121ldp.png', href: 'camera-ip-dahua-dhi-hy-ft121ldp.html' },
      { name: 'Camera IP Dahua DAT-9649ZAS-IL', price: 'Liên hệ', attrs: ['6MP', 'Dahua'], image: 'assets/images/camera-giam-sat/outbox/camera-ip-dahua-dat-9649zas-il.png', href: 'camera-ip-dahua-dat-9649zas-il.html' },
      { name: 'Camera IP Dahua DAT-N9449D', price: 'Liên hệ', attrs: ['4MP', 'Dahua'], image: 'assets/images/camera-giam-sat/outbox/camera-ip-dahua-dat-n9449d.png', href: 'camera-ip-dahua-dat-n9449d.html' },
      { name: 'Camera IP Dahua DH-N42DRZ-PMA', price: 'Liên hệ', attrs: ['4MP', 'Dahua'], image: 'assets/images/camera-giam-sat/outbox/camera-ip-dahua-dh-n42drz-pma.png', href: 'camera-ip-dahua-dh-n42drz-pma.html' }
    ]
  },
  {
    title: 'Camera Wifi Dahua',
    viewAllHref: '#',
    products: [
      { name: 'Camera Wifi Dahua DH-H5AS', price: 'Liên hệ', attrs: ['Dahua'], image: 'assets/images/camera-giam-sat/outbox/camera-wifi-dahua-dh-h5as.png', href: 'camera-wifi-dahua-dh-h5as.html' },
      { name: 'Camera Wifi Dahua DH-H3AS', price: 'Liên hệ', attrs: ['Dahua'], image: 'assets/images/camera-giam-sat/outbox/camera-wifi-dahua-dh-h3as.png', href: 'camera-wifi-dahua-dh-h3as.html' },
      { name: 'Camera Wifi Dahua DH-H3AE-L', price: 'Liên hệ', attrs: ['3MP', 'Dahua'], image: 'assets/images/camera-giam-sat/outbox/camera-wifi-dahua-dh-h3ae-l.png', href: 'camera-wifi-dahua-dh-h3ae-l.html' },
      { name: 'Camera Wifi Dahua DH-P5I-PV', price: 'Liên hệ', attrs: ['5MP', 'Dahua'], image: 'assets/images/camera-giam-sat/outbox/camera-wifi-dahua-dh-p5i-pv.png', href: 'camera-wifi-dahua-dh-p5i-pv.html' },
      { name: 'Camera Wifi Dahua DH-P3I-PV', price: 'Liên hệ', attrs: ['3MP', 'Dahua'], image: 'assets/images/camera-giam-sat/outbox/camera-wifi-dahua-dh-p3i-pv.png', href: 'camera-wifi-dahua-dh-p3i-pv.html' },
      { name: 'Camera Wifi Dahua DH-P3D-3F-PV-P', price: 'Liên hệ', attrs: ['6MP', 'Dahua'], image: 'assets/images/camera-giam-sat/outbox/camera-wifi-dahua-dh-p3d-3f-pv-p.png', href: 'camera-wifi-dahua-dh-p3d-3f-pv-p.html' },
      { name: 'Camera Wifi Dahua DH-P8F-PV', price: 'Liên hệ', attrs: ['8MP', 'Dahua'], image: 'assets/images/camera-giam-sat/outbox/camera-wifi-dahua-dh-p8f-pv.png', href: 'camera-wifi-dahua-dh-p8f-pv.html' },
      { name: 'Camera Wifi Dahua DH-P5F-PV', price: 'Liên hệ', attrs: ['5MP', 'Dahua'], image: 'assets/images/camera-giam-sat/outbox/camera-wifi-dahua-dh-p5f-pv.png', href: 'camera-wifi-dahua-dh-p5f-pv.html' },
      { name: 'Camera Wifi Dahua DH-P3F-PV', price: 'Liên hệ', attrs: ['3MP', 'Dahua'], image: 'assets/images/camera-giam-sat/outbox/camera-wifi-dahua-dh-p3f-pv.png', href: 'camera-wifi-dahua-dh-p3f-pv.html' },
      { name: 'Camera Wifi Dahua DH-IPC-HDW1539DA-SAW-IL', price: 'Liên hệ', attrs: ['5MP', 'Dahua'], image: 'assets/images/camera-giam-sat/outbox/camera-wifi-dahua-dh-ipc-hdw1539da-saw-il.png', href: 'camera-wifi-dahua-dh-ipc-hdw1539da-saw-il.html' }
    ]
  },
  {
    title: 'Camera Analog Dahua',
    viewAllHref: '#',
    products: [
      { name: 'Camera Analog Dahua DH-HAC-HDW1200TQP-IL-T-VN', price: 'Liên hệ', attrs: ['2MP', 'Dahua'], image: 'assets/images/camera-giam-sat/outbox/camera-analog-dahua-dh-hac-hdw1200tqp-il-t-vn.png', href: 'camera-analog-dahua-dh-hac-hdw1200tqp-il-t-vn.html' },
      { name: 'Camera Analog Dahua DH-HAC-HDW1500TQP-IL-T', price: 'Liên hệ', attrs: ['5MP', 'Dahua'], image: 'assets/images/camera-giam-sat/outbox/camera-analog-dahua-dh-hac-hdw1500tqp-il-t.png', href: 'camera-analog-dahua-dh-hac-hdw1500tqp-il-t.html' },
      { name: 'Camera Analog Dahua DH-HAC-HFW1500RLP-IL-T', price: 'Liên hệ', attrs: ['5MP', 'Dahua'], image: 'assets/images/camera-giam-sat/outbox/camera-analog-dahua-dh-hac-hfw1500rlp-il-t.png', href: 'camera-analog-dahua-dh-hac-hfw1500rlp-il-t.html' },
      { name: 'Camera Analog Dahua DH-HAC-HFW1500TLMP-IL-T', price: 'Liên hệ', attrs: ['5MP', 'Dahua'], image: 'assets/images/camera-giam-sat/outbox/camera-analog-dahua-dh-hac-hfw1500tlmp-il-t.png', href: 'camera-analog-dahua-dh-hac-hfw1500tlmp-il-t.html' },
      { name: 'Camera Analog Dahua DH-HAC-T2A21P-U-IL-A', price: 'Liên hệ', attrs: ['2MP', 'Dahua'], image: 'assets/images/camera-giam-sat/outbox/camera-analog-dahua-dh-hac-t2a21p-u-il-a.png', href: 'camera-analog-dahua-dh-hac-t2a21p-u-il-a.html' },
      { name: 'Camera Analog Dahua DH-HAC-HFW1500THP-IL-A', price: 'Liên hệ', attrs: ['5MP', 'Dahua'], image: 'assets/images/camera-giam-sat/outbox/camera-analog-dahua-dh-hac-hfw1500thp-il-a.png', href: 'camera-analog-dahua-dh-hac-hfw1500thp-il-a.html' },
      { name: 'Camera Analog Dahua DH-HAC-B2A51P-U-IL-A', price: 'Liên hệ', attrs: ['5MP', 'Dahua'], image: 'assets/images/camera-giam-sat/outbox/camera-analog-dahua-dh-hac-b2a51p-u-il-a.png', href: 'camera-analog-dahua-dh-hac-b2a51p-u-il-a.html' },
      { name: 'Camera Analog Dahua DH-HAC-B2A21P-U-IL-A', price: 'Liên hệ', attrs: ['2MP', 'Dahua'], image: 'assets/images/camera-giam-sat/outbox/camera-analog-dahua-dh-hac-b2a21p-u-il-a.png', href: 'camera-analog-dahua-dh-hac-b2a21p-u-il-a.html' },
      { name: 'Camera Analog Dahua DH-HAC-HFW1249X-IL-A-PRO-VN', price: 'Liên hệ', attrs: ['2MP', 'Dahua'], image: 'assets/images/camera-giam-sat/outbox/camera-analog-dahua-dh-hac-hfw1249x-il-a-pro-vn.png', href: 'camera-analog-dahua-dh-hac-hfw1249x-il-a-pro-vn.html' },
      { name: 'Camera Analog Dahua DH-HAC-HFW1249X-IL-A-PRO', price: 'Liên hệ', attrs: ['2MP', 'Dahua'], image: 'assets/images/camera-giam-sat/outbox/camera-analog-dahua-dh-hac-hfw1249x-il-a-pro.png', href: 'camera-analog-dahua-dh-hac-hfw1249x-il-a-pro.html' }
    ]
  },
  {
    title: 'Camera PTZ Dahua',
    viewAllHref: '#',
    products: [
      { name: 'Camera PTZ Dahua DH-SD4A225DB-HNY', price: 'Liên hệ', attrs: ['Dahua'], image: 'assets/images/camera-giam-sat/outbox/camera-ptz-dahua-dh-sd4a225db-hny.png', href: 'camera-ptz-dahua-dh-sd4a225db-hny.html' },
      { name: 'Camera PTZ Dahua DH-SDT2A200-2F-NB-A-PV', price: 'Liên hệ', attrs: ['2MP', 'Dahua'], image: 'assets/images/camera-giam-sat/outbox/camera-ptz-dahua-dh-sdt2a200-2f-nb-a-pv.png', href: 'camera-ptz-dahua-dh-sdt2a200-2f-nb-a-pv.html' },
      { name: 'Camera PTZ Dahua DH-SD4D225MB-HNR', price: 'Liên hệ', attrs: ['2MP', 'Dahua'], image: 'assets/images/camera-giam-sat/outbox/camera-ptz-dahua-dh-sd4d225mb-hnr.png', href: 'camera-ptz-dahua-dh-sd4d225mb-hnr.html' },
      { name: 'Camera PTZ Dahua DH-SD4D425MB-HNR', price: 'Liên hệ', attrs: ['4MP', 'Dahua'], image: 'assets/images/camera-giam-sat/outbox/camera-ptz-dahua-dh-sd4d425mb-hnr.png', href: 'camera-ptz-dahua-dh-sd4d425mb-hnr.html' },
      { name: 'Camera PTZ Dahua DH-SD4D225DB-HNY', price: 'Liên hệ', attrs: ['2MP', 'Dahua'], image: 'assets/images/camera-giam-sat/outbox/camera-ptz-dahua-dh-sd4d225db-hny.png', href: 'camera-ptz-dahua-dh-sd4d225db-hny.html' },
      { name: 'Camera PTZ Dahua DH-SD5A432GB-HNR', price: 'Liên hệ', attrs: ['4MP', 'Dahua'], image: 'assets/images/camera-giam-sat/outbox/camera-ptz-dahua-dh-sd5a432gb-hnr.png', href: 'camera-ptz-dahua-dh-sd5a432gb-hnr.html' },
      { name: 'Camera PTZ Dahua DH-SD6C3432GB-HNR-AGQ-PV1-LA', price: 'Liên hệ', attrs: ['4MP', 'Dahua'], image: 'assets/images/camera-giam-sat/outbox/camera-ptz-dahua-dh-sd6c3432gb-hnr-agq-pv1-la.png', href: 'camera-ptz-dahua-dh-sd6c3432gb-hnr-agq-pv1-la.html' },
      { name: 'Camera PTZ Dahua DH-SD5A232GB-HNR', price: 'Liên hệ', attrs: ['2MP', 'Dahua'], image: 'assets/images/camera-giam-sat/outbox/camera-ptz-dahua-dh-sd5a232gb-hnr.png', href: 'camera-ptz-dahua-dh-sd5a232gb-hnr.html' },
      { name: 'Camera PTZ Dahua DH-SD6AL245GB-HNV', price: 'Liên hệ', attrs: ['2MP', 'Dahua'], image: 'assets/images/camera-giam-sat/outbox/camera-ptz-dahua-dh-sd6al245gb-hnv.png', href: 'camera-ptz-dahua-dh-sd6al245gb-hnv.html' },
      { name: 'Camera PTZ Dahua DH-SD29404DB-GNY-W', price: 'Liên hệ', attrs: ['4MP', 'Dahua'], image: 'assets/images/camera-giam-sat/outbox/camera-ptz-dahua-dh-sd29404db-gny-w.png', href: 'camera-ptz-dahua-dh-sd29404db-gny-w.html' }
    ]
  },
  {
    title: 'Đầu ghi IP Dahua',
    viewAllHref: '#',
    products: [
      { name: 'Đầu ghi IP Dahua DHI-NVR5864-EI2', price: 'Liên hệ', attrs: ['Dahua'], image: 'assets/images/camera-giam-sat/outbox/dau-ghi-ip-dahua-dhi-nvr5864-ei2.png', href: 'dau-ghi-ip-dahua-dhi-nvr5864-ei2.html' },
      { name: 'Đầu ghi IP Dahua DHI-NVR5832-EI2', price: 'Liên hệ', attrs: ['Dahua'], image: 'assets/images/camera-giam-sat/outbox/dau-ghi-ip-dahua-dhi-nvr5832-ei2.png', href: 'dau-ghi-ip-dahua-dhi-nvr5832-ei2.html' },
      { name: 'Đầu ghi IP Dahua DHI-NVR5816-EI2', price: 'Liên hệ', attrs: ['Dahua'], image: 'assets/images/camera-giam-sat/outbox/dau-ghi-ip-dahua-dhi-nvr5816-ei2.png', href: 'dau-ghi-ip-dahua-dhi-nvr5816-ei2.html' },
      { name: 'Đầu ghi IP Dahua DHI-NVR5432-EI2', price: 'Liên hệ', attrs: ['Dahua'], image: 'assets/images/camera-giam-sat/outbox/dau-ghi-ip-dahua-dhi-nvr5432-ei2.png', href: 'dau-ghi-ip-dahua-dhi-nvr5432-ei2.html' },
      { name: 'Đầu ghi IP Dahua DHI-NVR5464-EI2', price: 'Liên hệ', attrs: ['Dahua'], image: 'assets/images/camera-giam-sat/outbox/dau-ghi-ip-dahua-dhi-nvr5464-ei2.png', href: 'dau-ghi-ip-dahua-dhi-nvr5464-ei2.html' },
      { name: 'Đầu ghi IP Dahua DHI-NVR4432-4KS3', price: 'Liên hệ', attrs: ['Dahua'], image: 'assets/images/camera-giam-sat/outbox/dau-ghi-ip-dahua-dhi-nvr4432-4ks3.png', href: 'dau-ghi-ip-dahua-dhi-nvr4432-4ks3.html' },
      { name: 'Đầu ghi IP Dahua DHI-NVR5416-EI2', price: 'Liên hệ', attrs: ['Dahua'], image: 'assets/images/camera-giam-sat/outbox/dau-ghi-ip-dahua-dhi-nvr5416-ei2.png', href: 'dau-ghi-ip-dahua-dhi-nvr5416-ei2.html' },
      { name: 'Đầu ghi IP Dahua DHI-NVR5232-EI2', price: 'Liên hệ', attrs: ['Dahua'], image: 'assets/images/camera-giam-sat/outbox/dau-ghi-ip-dahua-dhi-nvr5232-ei2.png', href: 'dau-ghi-ip-dahua-dhi-nvr5232-ei2.html' }
    ]
  },
  {
    title: 'Đầu ghi Analog Dahua',
    viewAllHref: '#',
    products: [
      { name: 'Đầu ghi Analog Dahua DH-XVR4116HS-I/T', price: 'Liên hệ', attrs: ['Dahua'], image: 'assets/images/camera-giam-sat/outbox/dau-ghi-analog-dahua-dh-xvr4116hs-i-t.png', href: 'dau-ghi-analog-dahua-dh-xvr4116hs-i-t.html' },
      { name: 'Đầu ghi Analog Dahua DH-XVR5216AN-5M-I3/T', price: 'Liên hệ', attrs: ['Dahua'], image: 'assets/images/camera-giam-sat/outbox/dau-ghi-analog-dahua-dh-xvr5216an-5m-i3-t.png', href: 'dau-ghi-analog-dahua-dh-xvr5216an-5m-i3-t.html' },
      { name: 'Đầu ghi Analog Dahua XVR5232AN-5M-I3/T', price: 'Liên hệ', attrs: ['Dahua'], image: 'assets/images/camera-giam-sat/outbox/dau-ghi-analog-dahua-xvr5232an-5m-i3-t.png', href: 'dau-ghi-analog-dahua-xvr5232an-5m-i3-t.html' },
      { name: 'Đầu ghi Analog Dahua DH-XVR5116HS-5M-I3/T', price: 'Liên hệ', attrs: ['Dahua'], image: 'assets/images/camera-giam-sat/outbox/dau-ghi-analog-dahua-dh-xvr5116hs-5m-i3-t.png', href: 'dau-ghi-analog-dahua-dh-xvr5116hs-5m-i3-t.html' },
      { name: 'Đầu ghi Analog Dahua DH-XVR5108HS-5M-I3/T', price: 'Liên hệ', attrs: ['Dahua'], image: 'assets/images/camera-giam-sat/outbox/dau-ghi-analog-dahua-dh-xvr5108hs-5m-i3-t.png', href: 'dau-ghi-analog-dahua-dh-xvr5108hs-5m-i3-t.html' },
      { name: 'Đầu ghi Analog Dahua DH-XVR5104HS-5M-I3/T', price: 'Liên hệ', attrs: ['Dahua'], image: 'assets/images/camera-giam-sat/outbox/dau-ghi-analog-dahua-dh-xvr5104hs-5m-i3-t.png', href: 'dau-ghi-analog-dahua-dh-xvr5104hs-5m-i3-t.html' },
      { name: 'Đầu ghi Analog Dahua DH-XVR5216AN-5M-I3', price: 'Liên hệ', attrs: ['Dahua'], image: 'assets/images/camera-giam-sat/outbox/dau-ghi-analog-dahua-dh-xvr5216an-5m-i3.png', href: 'dau-ghi-analog-dahua-dh-xvr5216an-5m-i3.html' },
      { name: 'Đầu ghi Analog Dahua DH-XVR1B08-I/T-VN', price: 'Liên hệ', attrs: ['Dahua'], image: 'assets/images/camera-giam-sat/outbox/dau-ghi-analog-dahua-dh-xvr1b08-i-t-vn.png', href: 'dau-ghi-analog-dahua-dh-xvr1b08-i-t-vn.html' },
      { name: 'Đầu ghi Analog Dahua DH-XVR1B08-I/T', price: 'Liên hệ', attrs: ['Dahua'], image: 'assets/images/camera-giam-sat/outbox/dau-ghi-analog-dahua-dh-xvr1b08-i-t.png', href: 'dau-ghi-analog-dahua-dh-xvr1b08-i-t.html' },
      { name: 'Đầu ghi Analog Dahua DH-XVR1B04-I/T-VN', price: 'Liên hệ', attrs: ['Dahua'], image: 'assets/images/camera-giam-sat/outbox/dau-ghi-analog-dahua-dh-xvr1b04-i-t-vn.png', href: 'dau-ghi-analog-dahua-dh-xvr1b04-i-t-vn.html' }
    ]
  },
  {
    title: 'Kiểm soát ra vào Dahua',
    viewAllHref: '#',
    products: [
      { name: 'Kiểm soát ra vào Dahua DHI-ASI3214A-W', price: 'Liên hệ', attrs: ['Dahua'], image: 'assets/images/camera-giam-sat/outbox/kiem-soat-ra-vao-dahua-dhi-asi3214a-w.png', href: 'kiem-soat-ra-vao-dahua-dhi-asi3214a-w.html' },
      { name: 'Kiểm soát ra vào Dahua DHI-ASI3213A-W-E1', price: 'Liên hệ', attrs: ['Dahua'], image: 'assets/images/camera-giam-sat/outbox/kiem-soat-ra-vao-dahua-dhi-asi3213a-w-e1.png', href: 'kiem-soat-ra-vao-dahua-dhi-asi3213a-w-e1.html' },
      { name: 'Kiểm soát ra vào Dahua ASF7K-FQ', price: 'Liên hệ', attrs: ['Dahua'], image: 'assets/images/camera-giam-sat/outbox/kiem-soat-ra-vao-dahua-asf7k-fq.png', href: 'kiem-soat-ra-vao-dahua-asf7k-fq.html' },
      { name: 'Kiểm soát ra vào Dahua DHI-ASI7213K-W', price: 'Liên hệ', attrs: ['Dahua'], image: 'assets/images/camera-giam-sat/outbox/kiem-soat-ra-vao-dahua-dhi-asi7213k-w.png', href: 'kiem-soat-ra-vao-dahua-dhi-asi7213k-w.html' },
      { name: 'Kiểm soát ra vào Dahua DHI-ASI6213S-D', price: 'Liên hệ', attrs: ['Dahua'], image: 'assets/images/camera-giam-sat/outbox/kiem-soat-ra-vao-dahua-dhi-asi6213s-d.png', href: 'kiem-soat-ra-vao-dahua-dhi-asi6213s-d.html' },
      { name: 'Kiểm soát ra vào Dahua DHI-ASI6213S-PW', price: 'Liên hệ', attrs: ['Dahua'], image: 'assets/images/camera-giam-sat/outbox/kiem-soat-ra-vao-dahua-dhi-asi6213s-pw.png', href: 'kiem-soat-ra-vao-dahua-dhi-asi6213s-pw.html' },
      { name: 'Kiểm soát ra vào Dahua DHI-ASI6213J-MW-V1', price: 'Liên hệ', attrs: ['Dahua'], image: 'assets/images/camera-giam-sat/outbox/kiem-soat-ra-vao-dahua-dhi-asi6213j-mw-v1.png', href: 'kiem-soat-ra-vao-dahua-dhi-asi6213j-mw-v1.html' },
      { name: 'Kiểm soát ra vào Dahua DHI-ASI6214S', price: 'Liên hệ', attrs: ['Dahua'], image: 'assets/images/camera-giam-sat/outbox/kiem-soat-ra-vao-dahua-dhi-asi6214s.png', href: 'kiem-soat-ra-vao-dahua-dhi-asi6214s.html' },
      { name: 'Kiểm soát ra vào Dahua DHI-ASI6213S', price: 'Liên hệ', attrs: ['Dahua'], image: 'assets/images/camera-giam-sat/outbox/kiem-soat-ra-vao-dahua-dhi-asi6213s.png', href: 'kiem-soat-ra-vao-dahua-dhi-asi6213s.html' },
      { name: 'Kiểm soát ra vào Dahua DHI-ASI6214J-MFW-V1', price: 'Liên hệ', attrs: ['Dahua'], image: 'assets/images/camera-giam-sat/outbox/kiem-soat-ra-vao-dahua-dhi-asi6214j-mfw-v1.png', href: 'kiem-soat-ra-vao-dahua-dhi-asi6214j-mfw-v1.html' }
    ]
  },
  {
    title: 'Chuông cửa màn hình Dahua',
    viewAllHref: '#',
    products: [
      { name: 'Chuông cửa màn hình Dahua DHI-VTO2201F-P-S2', price: 'Liên hệ', attrs: ['2MP', 'Dahua'], image: 'assets/images/camera-giam-sat/outbox/chuong-cua-man-hinh-dahua-dhi-vto2201f-p-s2.png', href: 'chuong-cua-man-hinh-dahua-dhi-vto2201f-p-s2.html' },
      { name: 'Chuông cửa màn hình Dahua DHI-VTH2421FW-P', price: 'Liên hệ', attrs: ['Dahua'], image: 'assets/images/camera-giam-sat/outbox/chuong-cua-man-hinh-dahua-dhi-vth2421fw-p.png', href: 'chuong-cua-man-hinh-dahua-dhi-vth2421fw-p.html' },
      { name: 'Chuông cửa màn hình Dahua DHI-VTH2621GW-WP', price: 'Liên hệ', attrs: ['Dahua'], image: 'assets/images/camera-giam-sat/outbox/chuong-cua-man-hinh-dahua-dhi-vth2621gw-wp.png', href: 'chuong-cua-man-hinh-dahua-dhi-vth2621gw-wp.html' },
      { name: 'Chuông cửa màn hình Dahua VTM09R', price: 'Liên hệ', attrs: ['Dahua'], image: 'assets/images/camera-giam-sat/outbox/chuong-cua-man-hinh-dahua-vtm09r.png', href: 'chuong-cua-man-hinh-dahua-vtm09r.html' },
      { name: 'Chuông cửa màn hình Dahua DHI-VTO2311R-WP', price: 'Liên hệ', attrs: ['2MP', 'Dahua'], image: 'assets/images/camera-giam-sat/outbox/chuong-cua-man-hinh-dahua-dhi-vto2311r-wp.png', href: 'chuong-cua-man-hinh-dahua-dhi-vto2311r-wp.html' },
      { name: 'Chuông cửa màn hình Dahua VTM05R', price: 'Liên hệ', attrs: ['Dahua'], image: 'assets/images/camera-giam-sat/outbox/chuong-cua-man-hinh-dahua-vtm05r.png', href: 'chuong-cua-man-hinh-dahua-vtm05r.html' },
      { name: 'Chuông cửa màn hình Dahua DHI-VTH5441G', price: 'Liên hệ', attrs: ['Dahua'], image: 'assets/images/camera-giam-sat/outbox/chuong-cua-man-hinh-dahua-dhi-vth5441g.png', href: 'chuong-cua-man-hinh-dahua-dhi-vth5441g.html' },
      { name: 'Chuông cửa màn hình Dahua DHI-VTH5221DW-S2', price: 'Liên hệ', attrs: ['Dahua'], image: 'assets/images/camera-giam-sat/outbox/chuong-cua-man-hinh-dahua-dhi-vth5221dw-s2.png', href: 'chuong-cua-man-hinh-dahua-dhi-vth5221dw-s2.html' },
      { name: 'Chuông cửa màn hình Dahua DHI-VTH5221D-S2', price: 'Liên hệ', attrs: ['Dahua'], image: 'assets/images/camera-giam-sat/outbox/chuong-cua-man-hinh-dahua-dhi-vth5221d-s2.png', href: 'chuong-cua-man-hinh-dahua-dhi-vth5221d-s2.html' },
      { name: 'Chuông cửa màn hình Dahua DHI-VTO2211G-WP', price: 'Liên hệ', attrs: ['2MP', 'Dahua'], image: 'assets/images/camera-giam-sat/outbox/chuong-cua-man-hinh-dahua-dhi-vto2211g-wp.png', href: 'chuong-cua-man-hinh-dahua-dhi-vto2211g-wp.html' }
    ]
  },
  {
    title: 'Switch Dahua',
    viewAllHref: '#',
    products: [
      { name: 'Switch Dahua DH-CS4010-8ET2GT-60', price: 'Liên hệ', attrs: ['Dahua'], image: 'assets/images/camera-giam-sat/outbox/switch-dahua-dh-cs4010-8et2gt-60.png', href: 'switch-dahua-dh-cs4010-8et2gt-60.html' },
      { name: 'Switch Dahua DH-CS4228-24GT-240', price: 'Liên hệ', attrs: ['Dahua'], image: 'assets/images/camera-giam-sat/outbox/switch-dahua-dh-cs4228-24gt-240.png', href: 'switch-dahua-dh-cs4228-24gt-240.html' },
      { name: 'Switch Dahua DH-CS4220-16GT-135', price: 'Liên hệ', attrs: ['Dahua'], image: 'assets/images/camera-giam-sat/outbox/switch-dahua-dh-cs4220-16gt-135.png', href: 'switch-dahua-dh-cs4220-16gt-135.html' },
      { name: 'Switch Dahua DH-CS4010-8GT-60', price: 'Liên hệ', attrs: ['Dahua'], image: 'assets/images/camera-giam-sat/outbox/switch-dahua-dh-cs4010-8gt-60.png', href: 'switch-dahua-dh-cs4010-8gt-60.html' },
      { name: 'Switch Dahua DH-S3010-8ET2ET-60', price: 'Liên hệ', attrs: ['Dahua'], image: 'assets/images/camera-giam-sat/outbox/switch-dahua-dh-s3010-8et2et-60.png', href: 'switch-dahua-dh-s3010-8et2et-60.html' },
      { name: 'Switch Dahua DH-S3006-4ET-36', price: 'Liên hệ', attrs: ['Dahua'], image: 'assets/images/camera-giam-sat/outbox/switch-dahua-dh-s3006-4et-36.png', href: 'switch-dahua-dh-s3006-4et-36.html' },
      { name: 'Switch Dahua DH-CS4006-4ET2ET-60', price: 'Liên hệ', attrs: ['Dahua'], image: 'assets/images/camera-giam-sat/outbox/switch-dahua-dh-cs4006-4et2et-60.png', href: 'switch-dahua-dh-cs4006-4et2et-60.html' },
      { name: 'Switch Dahua DH-CS4006-4GT-60', price: 'Liên hệ', attrs: ['Dahua'], image: 'assets/images/camera-giam-sat/outbox/switch-dahua-dh-cs4006-4gt-60.png', href: 'switch-dahua-dh-cs4006-4gt-60.html' },
      { name: 'Switch Dahua DH-SF1005L', price: 'Liên hệ', attrs: ['Dahua'], image: 'assets/images/camera-giam-sat/outbox/switch-dahua-dh-sf1005l.png', href: 'switch-dahua-dh-sf1005l.html' },
      { name: 'Switch Dahua DH-SF1008L', price: 'Liên hệ', attrs: ['Dahua'], image: 'assets/images/camera-giam-sat/outbox/switch-dahua-dh-sf1008l.png', href: 'switch-dahua-dh-sf1008l.html' }
    ]
  },
  {
    title: 'Phụ kiện Dahua',
    viewAllHref: '#',
    products: [
      { name: 'Phụ kiện Dahua DHI-LM22-B220N', price: 'Liên hệ', attrs: ['Dahua'], image: 'assets/images/camera-giam-sat/outbox/phu-kien-dahua-dhi-lm22-b220n.png', href: 'phu-kien-dahua-dhi-lm22-b220n.html' },
      { name: 'Phụ kiện Dahua DHI-LM24-B221S', price: 'Liên hệ', attrs: ['Dahua'], image: 'assets/images/camera-giam-sat/outbox/phu-kien-dahua-dhi-lm24-b221s.png', href: 'phu-kien-dahua-dhi-lm24-b221s.html' },
      { name: 'Phụ kiện Dahua DHI-LPH75-ST470-L', price: 'Liên hệ', attrs: ['Dahua'], image: 'assets/images/camera-giam-sat/outbox/phu-kien-dahua-dhi-lph75-st470-l.png', href: 'phu-kien-dahua-dhi-lph75-st470-l.html' },
      { name: 'Phụ kiện Dahua DHI-LPH65-ST470-L', price: 'Liên hệ', attrs: ['Dahua'], image: 'assets/images/camera-giam-sat/outbox/phu-kien-dahua-dhi-lph65-st470-l.png', href: 'phu-kien-dahua-dhi-lph65-st470-l.html' },
      { name: 'Phụ kiện Dahua DH-PFM920I-5EUN', price: 'Liên hệ', attrs: ['Dahua'], image: 'assets/images/camera-giam-sat/outbox/phu-kien-dahua-dh-pfm920i-5eun.png', href: 'phu-kien-dahua-dh-pfm920i-5eun.html' },
      { name: 'Phụ kiện Dahua DH-PFM920I-6UN1-N (CAT6 – 305m)', price: 'Liên hệ', attrs: ['Dahua'], image: 'assets/images/camera-giam-sat/outbox/phu-kien-dahua-dh-pfm920i-6un1-n-cat6-305m.png', href: 'phu-kien-dahua-dh-pfm920i-6un1-n-cat6-305m.html' },
      { name: 'Phụ kiện Dahua DHI-LPH65-MC470-P-S2', price: 'Liên hệ', attrs: ['Dahua'], image: 'assets/images/camera-giam-sat/outbox/phu-kien-dahua-dhi-lph65-mc470-p-s2.png', href: 'phu-kien-dahua-dhi-lph65-mc470-p-s2.html' },
      { name: 'Phụ kiện Dahua DHI-LPH75-MC470-P-S2', price: 'Liên hệ', attrs: ['Dahua'], image: 'assets/images/camera-giam-sat/outbox/phu-kien-dahua-dhi-lph75-mc470-p-s2.png', href: 'phu-kien-dahua-dhi-lph75-mc470-p-s2.html' },
      { name: 'Phụ kiện Dahua DH-PFM320-020EN', price: 'Liên hệ', attrs: ['Dahua'], image: 'assets/images/camera-giam-sat/outbox/phu-kien-dahua-dh-pfm320-020en.png', href: 'phu-kien-dahua-dh-pfm320-020en.html' },
      { name: 'Phụ kiện Dahua DH-PFM920I-6UN1-C (CAT6 đồng – 305m)', price: 'Liên hệ', attrs: ['Dahua'], image: 'assets/images/camera-giam-sat/outbox/phu-kien-dahua-dh-pfm920i-6un1-c-cat6-ong-305m.png', href: 'phu-kien-dahua-dh-pfm920i-6un1-c-cat6-ong-305m.html' }
    ]
  },
  {
    title: 'Sản phẩm dự án Dahua',
    viewAllHref: '#',
    products: [
      { name: 'Sản phẩm dự án Dahua ITC431-RW1F-L', price: 'Liên hệ', attrs: ['4MP', 'Dahua'], image: 'assets/images/camera-giam-sat/outbox/san-pham-du-an-dahua-itc431-rw1f-l.png', href: 'san-pham-du-an-dahua-itc431-rw1f-l.html' },
      { name: 'Sản phẩm dự án Dahua EN-ITC852', price: 'Liên hệ', attrs: ['Dahua'], image: 'assets/images/camera-giam-sat/outbox/san-pham-du-an-dahua-en-itc852.png', href: 'san-pham-du-an-dahua-en-itc852.html' },
      { name: 'Sản phẩm dự án Dahua DH-PFA150', price: 'Liên hệ', attrs: ['Dahua'], image: 'assets/images/camera-giam-sat/outbox/san-pham-du-an-dahua-dh-pfa150.png', href: 'san-pham-du-an-dahua-dh-pfa150.html' },
      { name: 'Sản phẩm dự án Dahua DHI-ITALE-160BA-IR8-P', price: 'Liên hệ', attrs: ['Dahua'], image: 'assets/images/camera-giam-sat/outbox/san-pham-du-an-dahua-dhi-itale-160ba-ir8-p.png', href: 'san-pham-du-an-dahua-dhi-itale-160ba-ir8-p.html' },
      { name: 'Sản phẩm dự án Dahua 8019', price: 'Liên hệ', attrs: ['Dahua'], image: 'assets/images/camera-giam-sat/outbox/san-pham-du-an-dahua-8019.png', href: 'san-pham-du-an-dahua-8019.html' },
      { name: 'Sản phẩm dự án Dahua EN-ST965', price: 'Liên hệ', attrs: ['Dahua'], image: 'assets/images/camera-giam-sat/outbox/san-pham-du-an-dahua-en-st965.png', href: 'san-pham-du-an-dahua-en-st965.html' },
      { name: 'Sản phẩm dự án Dahua DH-CS4218-16ET-190', price: 'Liên hệ', attrs: ['Dahua'], image: 'assets/images/camera-giam-sat/outbox/san-pham-du-an-dahua-dh-cs4218-16et-190.png', href: 'san-pham-du-an-dahua-dh-cs4218-16et-190.html' },
      { name: 'Sản phẩm dự án Dahua DH-PFS3006-4ET-36', price: 'Liên hệ', attrs: ['Dahua'], image: 'assets/images/camera-giam-sat/outbox/san-pham-du-an-dahua-dh-pfs3006-4et-36.png', href: 'san-pham-du-an-dahua-dh-pfs3006-4et-36.html' },
      { name: 'Sản phẩm dự án Dahua DH-S4100-8ET2GT-96-C', price: 'Liên hệ', attrs: ['Dahua'], image: 'assets/images/camera-giam-sat/outbox/san-pham-du-an-dahua-dh-s4100-8et2gt-96-c.png', href: 'san-pham-du-an-dahua-dh-s4100-8et2gt-96-c.html' },
      { name: 'Sản phẩm dự án Dahua EN-NVR708AI', price: 'Liên hệ', attrs: ['Dahua'], image: 'assets/images/camera-giam-sat/outbox/san-pham-du-an-dahua-en-nvr708ai.png', href: 'san-pham-du-an-dahua-en-nvr708ai.html' }
    ]
  },
  {
    title: 'Camera Imou',
    viewAllHref: '#',
    products: [
      { name: 'Camera Imou IPC-A82P-PRO', price: 'Liên hệ', attrs: ['8MP', 'Imou'], image: 'assets/images/camera-giam-sat/outbox/camera-wifi-imou-ipc-a82p-pro.png', href: 'camera-wifi-imou-ipc-a82p-pro.html' },
      { name: 'Camera Imou IPC-UA7E-5M0T2-EU/FSP14', price: 'Liên hệ', attrs: ['5MP', 'Imou'], image: 'assets/images/camera-giam-sat/outbox/camera-wifi-imou-ipc-ua7e-5m0t2-eu-fsp14.png', href: 'camera-wifi-imou-ipc-ua7e-5m0t2-eu-fsp14.html' },
      { name: 'Camera Imou IPC-SA70F-10M0T2-EU', price: 'Liên hệ', attrs: ['Imou'], image: 'assets/images/camera-giam-sat/outbox/camera-wifi-imou-ipc-sa70f-10m0t2-eu.png', href: 'camera-wifi-imou-ipc-sa70f-10m0t2-eu.html' },
      { name: 'Camera Imou IPC-K7F-5M1T-X', price: 'Liên hệ', attrs: ['5MP', 'Imou'], image: 'assets/images/camera-giam-sat/outbox/camera-wifi-imou-ipc-k7f-5m1t-x.png', href: 'camera-wifi-imou-ipc-k7f-5m1t-x.html' },
      { name: 'Camera Imou IPC-K7F-3M1T-X', price: 'Liên hệ', attrs: ['3MP', 'Imou'], image: 'assets/images/camera-giam-sat/outbox/camera-wifi-imou-ipc-k7f-3m1t-x.png', href: 'camera-wifi-imou-ipc-k7f-3m1t-x.html' },
      { name: 'Camera Imou IPC-S76DP-13M0N', price: 'Liên hệ', attrs: ['Imou'], image: 'assets/images/camera-giam-sat/outbox/camera-wifi-imou-ipc-s76dp-13m0n.png', href: 'camera-wifi-imou-ipc-s76dp-13m0n.html' },
      { name: 'Camera Imou IPC-PS8E-5V0', price: 'Liên hệ', attrs: ['5MP', 'Imou'], image: 'assets/images/camera-giam-sat/outbox/camera-wifi-imou-ipc-ps8e-5v0.png', href: 'camera-wifi-imou-ipc-ps8e-5v0.html' },
      { name: 'Camera Imou IPC-PS8EP-3V0', price: 'Liên hệ', attrs: ['3MP', 'Imou'], image: 'assets/images/camera-giam-sat/outbox/camera-wifi-imou-ipc-ps8ep-3v0.png', href: 'camera-wifi-imou-ipc-ps8ep-3v0.html' },
      { name: 'Camera Imou IPC-S3EP-5M0WE-PRO', price: 'Liên hệ', attrs: ['5MP', 'Imou'], image: 'assets/images/camera-giam-sat/outbox/camera-wifi-imou-ipc-s3ep-5m0we-pro.png', href: 'camera-wifi-imou-ipc-s3ep-5m0we-pro.html' },
      { name: 'Camera Imou IPC-S3EP-3M0WE-PRO', price: 'Liên hệ', attrs: ['3MP', 'Imou'], image: 'assets/images/camera-giam-sat/outbox/camera-wifi-imou-ipc-s3ep-3m0we-pro.png', href: 'camera-wifi-imou-ipc-s3ep-3m0we-pro.html' }
    ]
  },
  {
    title: 'Đầu ghi Imou',
    viewAllHref: '#',
    products: [
      { name: 'Đầu ghi Imou NVR-N110W-8A0E', price: 'Liên hệ', attrs: ['Imou'], image: 'assets/images/camera-giam-sat/outbox/dau-ghi-imou-nvr-n110w-8a0e.png', href: 'dau-ghi-imou-nvr-n110w-8a0e.html' },
      { name: 'Đầu ghi Imou NVR-N118W-8A0E', price: 'Liên hệ', attrs: ['Imou'], image: 'assets/images/camera-giam-sat/outbox/dau-ghi-imou-nvr-n118w-8a0e.png', href: 'dau-ghi-imou-nvr-n118w-8a0e.html' },
      { name: 'Đầu ghi Imou NVR-N110-8A0E', price: 'Liên hệ', attrs: ['Imou'], image: 'assets/images/camera-giam-sat/outbox/dau-ghi-imou-nvr-n110-8a0e.png', href: 'dau-ghi-imou-nvr-n110-8a0e.html' },
      { name: 'Đầu ghi Imou NVR-N118-8A0E', price: 'Liên hệ', attrs: ['Imou'], image: 'assets/images/camera-giam-sat/outbox/dau-ghi-imou-nvr-n118-8a0e.png', href: 'dau-ghi-imou-nvr-n118-8a0e.html' },
      { name: 'Đầu ghi Imou NVR1108HS-W-S2', price: 'Liên hệ', attrs: ['Imou'], image: 'assets/images/camera-giam-sat/outbox/dau-ghi-imou-nvr1108hs-w-s2.png', href: 'dau-ghi-imou-nvr1108hs-w-s2.html' },
      { name: 'Đầu ghi Imou NVR1104HS-W-S2', price: 'Liên hệ', attrs: ['Imou'], image: 'assets/images/camera-giam-sat/outbox/dau-ghi-imou-nvr1104hs-w-s2.png', href: 'dau-ghi-imou-nvr1104hs-w-s2.html' }
    ]
  },
  {
    title: 'Sản phẩm khác Imou',
    viewAllHref: '#',
    products: [
      { name: 'Sản phẩm khác Imou SF110P', price: 'Liên hệ', attrs: ['Imou'], image: 'assets/images/camera-giam-sat/outbox/san-pham-khac-imou-sf110p.png', href: 'san-pham-khac-imou-sf110p.html' },
      { name: 'Sản phẩm khác Imou SF106P', price: 'Liên hệ', attrs: ['Imou'], image: 'assets/images/camera-giam-sat/outbox/san-pham-khac-imou-sf106p.png', href: 'san-pham-khac-imou-sf106p.html' },
      { name: 'Sản phẩm khác Imou Thẻ nhớ Imou', price: 'Liên hệ', attrs: ['Imou'], image: 'assets/images/camera-giam-sat/outbox/san-pham-khac-imou-the-nho-imou.png', href: 'san-pham-khac-imou-the-nho-imou.html' },
      { name: 'Sản phẩm khác Imou RV-L11-A', price: 'Liên hệ', attrs: ['Imou'], image: 'assets/images/camera-giam-sat/outbox/san-pham-khac-imou-rv-l11-a.png', href: 'san-pham-khac-imou-rv-l11-a.html' },
      { name: 'Sản phẩm khác Imou K2C', price: 'Liên hệ', attrs: ['Imou'], image: 'assets/images/camera-giam-sat/outbox/san-pham-khac-imou-k2c.png', href: 'san-pham-khac-imou-k2c.html' },
      { name: 'Sản phẩm khác Imou CL1B-5-E27', price: 'Liên hệ', attrs: ['Imou'], image: 'assets/images/camera-giam-sat/outbox/san-pham-khac-imou-cl1b-5-e27.png', href: 'san-pham-khac-imou-cl1b-5-e27.html' }
    ]
  },
  {
    title: 'Camera IP KBVision',
    viewAllHref: '#',
    products: [
      { name: 'Camera IP KBVision KX-CAiF5003N-DL-AB', price: 'Liên hệ', attrs: ['5MP', 'KBVision'], image: 'assets/images/camera-giam-sat/outbox/camera-ip-kbvision-kx-caif5003n-dl-ab.png', href: 'camera-ip-kbvision-kx-caif5003n-dl-ab.html' },
      { name: 'Camera IP KBVision KX-AF2111N3-VN', price: 'Liên hệ', attrs: ['2MP', 'KBVision'], image: 'assets/images/camera-giam-sat/outbox/camera-ip-kbvision-kx-af2111n3-vn.png', href: 'camera-ip-kbvision-kx-af2111n3-vn.html' },
      { name: 'Camera IP KBVision KX-A2012TN3-VN', price: 'Liên hệ', attrs: ['2MP', 'KBVision'], image: 'assets/images/camera-giam-sat/outbox/camera-ip-kbvision-kx-a2012tn3-vn.png', href: 'camera-ip-kbvision-kx-a2012tn3-vn.html' },
      { name: 'Camera IP KBVision KX-DAi5005MN-EAB', price: 'Liên hệ', attrs: ['5MP', 'KBVision'], image: 'assets/images/camera-giam-sat/outbox/camera-ip-kbvision-kx-dai5005mn-eab.png', href: 'camera-ip-kbvision-kx-dai5005mn-eab.html' }
    ]
  },
  {
    title: 'Camera Analog KBVision',
    viewAllHref: '#',
    products: [
      { name: 'Camera Analog KBVision KX-AF5004S-DL-A', price: 'Liên hệ', attrs: ['5MP', 'KBVision'], image: 'assets/images/camera-giam-sat/outbox/camera-analog-kbvision-kx-af5004s-dl-a.png', href: 'camera-analog-kbvision-kx-af5004s-dl-a.html' }
    ]
  },
  {
    title: 'Sản phẩm KBVision',
    viewAllHref: '#',
    products: [
      { name: 'Sản phẩm KBVision PROVMS', price: 'Liên hệ', attrs: ['KBVision'], image: 'assets/images/camera-giam-sat/outbox/san-pham-kbvision-provms.jpg', href: 'san-pham-kbvision-provms.html' },
      { name: 'Sản phẩm KBVision KX-VDP02HWN', price: 'Liên hệ', attrs: ['KBVision'], image: 'assets/images/camera-giam-sat/outbox/chuong-cua-man-hinh-kbvision-kx-vdp02hwn.png', href: 'chuong-cua-man-hinh-kbvision-kx-vdp02hwn.html' },
      { name: 'Sản phẩm KBVision KX-VDP11GWN', price: 'Liên hệ', attrs: ['2MP', 'KBVision'], image: 'assets/images/camera-giam-sat/outbox/chuong-cua-man-hinh-kbvision-kx-vdp11gwn.png', href: 'chuong-cua-man-hinh-kbvision-kx-vdp11gwn.html' },
      { name: 'Sản phẩm KBVision KX-A8124N2-VN', price: 'Liên hệ', attrs: ['KBVision'], image: 'assets/images/camera-giam-sat/outbox/dau-ghi-ip-kbvision-kx-a8124n2-vn.png', href: 'dau-ghi-ip-kbvision-kx-a8124n2-vn.html' },
      { name: 'Sản phẩm KBVision KX-A4K8114N2', price: 'Liên hệ', attrs: ['KBVision'], image: 'assets/images/camera-giam-sat/outbox/dau-ghi-ip-kbvision-kx-a4k8114n2.png', href: 'dau-ghi-ip-kbvision-kx-a4k8114n2.html' }
    ]
  },
  {
    title: 'Camera Wifi KabeVision',
    viewAllHref: '#',
    products: [
      { name: 'Camera Wifi KabeVision KX-5PTW-D-PMA', price: 'Liên hệ', attrs: ['KabeVision'], image: 'assets/images/camera-giam-sat/outbox/camera-wifi-kabevision-kx-5ptw-d-pma.png', href: 'camera-wifi-kabevision-kx-5ptw-d-pma.html' }
    ]
  },
  {
    title: 'Camera Analog KabeVision',
    viewAllHref: '#',
    products: [
      { name: 'Camera Analog KabeVision KX-AD5013-A', price: 'Liên hệ', attrs: ['5MP', 'KabeVision'], image: 'assets/images/camera-giam-sat/outbox/camera-analog-kabevision-kx-ad5013-a.png', href: 'camera-analog-kabevision-kx-ad5013-a.html' },
      { name: 'Camera Analog KabeVision KX-AD5112C-A-VN', price: 'Liên hệ', attrs: ['5MP', 'KabeVision'], image: 'assets/images/camera-giam-sat/outbox/camera-analog-kabevision-kx-ad5112c-a-vn.png', href: 'camera-analog-kabevision-kx-ad5112c-a-vn.html' },
      { name: 'Camera Analog KabeVision KX-AD5112C-A', price: 'Liên hệ', attrs: ['5MP', 'KabeVision'], image: 'assets/images/camera-giam-sat/outbox/camera-analog-kabevision-kx-ad5112c-a.png', href: 'camera-analog-kabevision-kx-ad5112c-a.html' },
      { name: 'Camera Analog KabeVision KX-AD2112C-A-VN', price: 'Liên hệ', attrs: ['2MP', 'KabeVision'], image: 'assets/images/camera-giam-sat/outbox/camera-analog-kabevision-kx-ad2112c-a-vn.png', href: 'camera-analog-kabevision-kx-ad2112c-a-vn.html' },
      { name: 'Camera Analog KabeVision KX-AD2114C-T-VN', price: 'Liên hệ', attrs: ['2MP', 'KabeVision'], image: 'assets/images/camera-giam-sat/outbox/camera-analog-kabevision-kx-ad2114c-t-vn.png', href: 'camera-analog-kabevision-kx-ad2114c-t-vn.html' },
      { name: 'Camera Analog KabeVision KX-AD2114C-T', price: 'Liên hệ', attrs: ['2MP', 'KabeVision'], image: 'assets/images/camera-giam-sat/outbox/camera-analog-kabevision-kx-ad2114c-t.png', href: 'camera-analog-kabevision-kx-ad2114c-t.html' },
      { name: 'Camera Analog KabeVision KX-AD2004C-PRO', price: 'Liên hệ', attrs: ['2MP', 'KabeVision'], image: 'assets/images/camera-giam-sat/outbox/camera-analog-kabevision-kx-ad2004c-pro.png', href: 'camera-analog-kabevision-kx-ad2004c-pro.html' },
      { name: 'Camera Analog KabeVision KX-A2004C-PRO', price: 'Liên hệ', attrs: ['2MP', 'KabeVision'], image: 'assets/images/camera-giam-sat/outbox/camera-analog-kabevision-kx-a2004c-pro.png', href: 'camera-analog-kabevision-kx-a2004c-pro.html' }
    ]
  },
  {
    title: 'Camera PTZ KabeVision',
    viewAllHref: '#',
    products: [
      { name: 'Camera PTZ KabeVision KX-EAi2458LZSN', price: 'Liên hệ', attrs: ['KabeVision'], image: 'assets/images/camera-giam-sat/outbox/camera-ptz-kabevision-kx-eai2458lzsn.png', href: 'camera-ptz-kabevision-kx-eai2458lzsn.html' },
      { name: 'Camera PTZ KabeVision KX-DAi4328GPN3', price: 'Liên hệ', attrs: ['KabeVision'], image: 'assets/images/camera-giam-sat/outbox/camera-ptz-kabevision-kx-dai4328gpn3.png', href: 'camera-ptz-kabevision-kx-dai4328gpn3.html' },
      { name: 'Camera PTZ KabeVision KX-DAi2258PN3', price: 'Liên hệ', attrs: ['KabeVision'], image: 'assets/images/camera-giam-sat/outbox/camera-ptz-kabevision-kx-dai2258pn3.png', href: 'camera-ptz-kabevision-kx-dai2258pn3.html' },
      { name: 'Camera PTZ KabeVision KX-CD2257MPN', price: 'Liên hệ', attrs: ['KabeVision'], image: 'assets/images/camera-giam-sat/outbox/camera-ptz-kabevision-kx-cd2257mpn.png', href: 'camera-ptz-kabevision-kx-cd2257mpn.html' },
      { name: 'Camera PTZ KabeVision KX-CAi2167ePN', price: 'Liên hệ', attrs: ['KabeVision'], image: 'assets/images/camera-giam-sat/outbox/camera-ptz-kabevision-kx-cai2167epn.png', href: 'camera-ptz-kabevision-kx-cai2167epn.html' },
      { name: 'Camera PTZ KabeVision KX-C2056CPN-AL', price: 'Liên hệ', attrs: ['KabeVision'], image: 'assets/images/camera-giam-sat/outbox/camera-ptz-kabevision-kx-c2056cpn-al.png', href: 'camera-ptz-kabevision-kx-c2056cpn-al.html' },
      { name: 'Camera PTZ KabeVision KX-CAi2167PN', price: 'Liên hệ', attrs: ['KabeVision'], image: 'assets/images/camera-giam-sat/outbox/camera-ptz-kabevision-kx-cai2167pn.png', href: 'camera-ptz-kabevision-kx-cai2167pn.html' },
      { name: 'Camera PTZ KabeVision KX-C2007IRPN3', price: 'Liên hệ', attrs: ['KabeVision'], image: 'assets/images/camera-giam-sat/outbox/camera-ptz-kabevision-kx-c2007irpn3.png', href: 'camera-ptz-kabevision-kx-c2007irpn3.html' },
      { name: 'Camera PTZ KabeVision KX-C2007sPN3', price: 'Liên hệ', attrs: ['KabeVision'], image: 'assets/images/camera-giam-sat/outbox/camera-ptz-kabevision-kx-c2007spn3.png', href: 'camera-ptz-kabevision-kx-c2007spn3.html' },
      { name: 'Camera PTZ KabeVision KX-S44P', price: 'Liên hệ', attrs: ['KabeVision'], image: 'assets/images/camera-giam-sat/outbox/camera-ptz-kabevision-kx-s44p.png', href: 'camera-ptz-kabevision-kx-s44p.html' }
    ]
  },
  {
    title: 'Đầu ghi IP KabeVision',
    viewAllHref: '#',
    products: [
      { name: 'Đầu ghi IP KabeVision KX-EAi4K8864N4', price: 'Liên hệ', attrs: ['KabeVision'], image: 'assets/images/camera-giam-sat/outbox/dau-ghi-ip-kabevision-kx-eai4k8864n4.png', href: 'dau-ghi-ip-kabevision-kx-eai4k8864n4.html' },
      { name: 'Đầu ghi IP KabeVision KX-DAi4K8864EN3-VN', price: 'Liên hệ', attrs: ['KabeVision'], image: 'assets/images/camera-giam-sat/outbox/dau-ghi-ip-kabevision-kx-dai4k8864en3-vn.png', href: 'dau-ghi-ip-kabevision-kx-dai4k8864en3-vn.html' },
      { name: 'Đầu ghi IP KabeVision KX-DAi4K8832EN3-VN', price: 'Liên hệ', attrs: ['KabeVision'], image: 'assets/images/camera-giam-sat/outbox/dau-ghi-ip-kabevision-kx-dai4k8832en3-vn.png', href: 'dau-ghi-ip-kabevision-kx-dai4k8832en3-vn.html' },
      { name: 'Đầu ghi IP KabeVision KX-328E4-NR-PMA', price: 'Liên hệ', attrs: ['KabeVision'], image: 'assets/images/camera-giam-sat/outbox/dau-ghi-ip-kabevision-kx-328e4-nr-pma.png', href: 'dau-ghi-ip-kabevision-kx-328e4-nr-pma.html' },
      { name: 'Đầu ghi IP KabeVision KX-D1202H-8K-PMA', price: 'Liên hệ', attrs: ['KabeVision'], image: 'assets/images/camera-giam-sat/outbox/dau-ghi-ip-kabevision-kx-d1202h-8k-pma.png', href: 'dau-ghi-ip-kabevision-kx-d1202h-8k-pma.html' },
      { name: 'Đầu ghi IP KabeVision KX-162E3-NR-PMA', price: 'Liên hệ', attrs: ['KabeVision'], image: 'assets/images/camera-giam-sat/outbox/dau-ghi-ip-kabevision-kx-162e3-nr-pma.png', href: 'dau-ghi-ip-kabevision-kx-162e3-nr-pma.html' },
      { name: 'Đầu ghi IP KabeVision KX-162S3-NR-PMA', price: 'Liên hệ', attrs: ['KabeVision'], image: 'assets/images/camera-giam-sat/outbox/dau-ghi-ip-kabevision-kx-162s3-nr-pma.png', href: 'dau-ghi-ip-kabevision-kx-162s3-nr-pma.html' },
      { name: 'Đầu ghi IP KabeVision KX-EAi4K8832N4', price: 'Liên hệ', attrs: ['KabeVision'], image: 'assets/images/camera-giam-sat/outbox/dau-ghi-ip-kabevision-kx-eai4k8832n4.png', href: 'dau-ghi-ip-kabevision-kx-eai4k8832n4.html' },
      { name: 'Đầu ghi IP KabeVision KX-DAi4K8864EN3', price: 'Liên hệ', attrs: ['KabeVision'], image: 'assets/images/camera-giam-sat/outbox/dau-ghi-ip-kabevision-kx-dai4k8864en3.png', href: 'dau-ghi-ip-kabevision-kx-dai4k8864en3.html' },
      { name: 'Đầu ghi IP KabeVision KX-DAi4K8832EN3', price: 'Liên hệ', attrs: ['KabeVision'], image: 'assets/images/camera-giam-sat/outbox/dau-ghi-ip-kabevision-kx-dai4k8832en3.png', href: 'dau-ghi-ip-kabevision-kx-dai4k8832en3.html' }
    ]
  },
  {
    title: 'Đầu ghi Analog KabeVision',
    viewAllHref: '#',
    products: [
      { name: 'Đầu ghi Analog KabeVision KX-7108T-VN', price: 'Liên hệ', attrs: ['KabeVision'], image: 'assets/images/camera-giam-sat/outbox/dau-ghi-analog-kabevision-kx-7108t-vn.png', href: 'dau-ghi-analog-kabevision-kx-7108t-vn.html' },
      { name: 'Đầu ghi Analog KabeVision KX-C4K8432SN3', price: 'Liên hệ', attrs: ['KabeVision'], image: 'assets/images/camera-giam-sat/outbox/dau-ghi-analog-kabevision-kx-c4k8432sn3.png', href: 'dau-ghi-analog-kabevision-kx-c4k8432sn3.html' }
    ]
  },
  {
    title: 'Kiểm soát ra vào KabeVision',
    viewAllHref: '#',
    products: [
      { name: 'Kiểm soát ra vào KabeVision KX-FR04AC-FW', price: 'Liên hệ', attrs: ['KabeVision'], image: 'assets/images/camera-giam-sat/outbox/kiem-soat-ra-vao-kabevision-kx-fr04ac-fw.png', href: 'kiem-soat-ra-vao-kabevision-kx-fr04ac-fw.html' },
      { name: 'Kiểm soát ra vào KabeVision KX-FR04AC-W', price: 'Liên hệ', attrs: ['KabeVision'], image: 'assets/images/camera-giam-sat/outbox/kiem-soat-ra-vao-kabevision-kx-fr04ac-w.png', href: 'kiem-soat-ra-vao-kabevision-kx-fr04ac-w.html' }
    ]
  },
  {
    title: 'Switch KabeVision',
    viewAllHref: '#',
    products: [
      { name: 'Switch KabeVision KX-DACS5121-8M-60-PMA', price: 'Liên hệ', attrs: ['KabeVision'], image: 'assets/images/camera-giam-sat/outbox/switch-kabevision-kx-dacs5121-8m-60-pma.png', href: 'switch-kabevision-kx-dacs5121-8m-60-pma.html' },
      { name: 'Switch KabeVision KX-DACS5337-16M-135-PMA', price: 'Liên hệ', attrs: ['KabeVision'], image: 'assets/images/camera-giam-sat/outbox/switch-kabevision-kx-dacs5337-16m-135-pma.png', href: 'switch-kabevision-kx-dacs5337-16m-135-pma.html' },
      { name: 'Switch KabeVision KX-SW810-60', price: 'Liên hệ', attrs: ['KabeVision'], image: 'assets/images/camera-giam-sat/outbox/switch-kabevision-kx-sw810-60.png', href: 'switch-kabevision-kx-sw810-60.html' },
      { name: 'Switch KabeVision KX-SW406-36', price: 'Liên hệ', attrs: ['KabeVision'], image: 'assets/images/camera-giam-sat/outbox/switch-kabevision-kx-sw406-36.png', href: 'switch-kabevision-kx-sw406-36.html' }
    ]
  }
];
