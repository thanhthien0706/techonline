const BRAND_ICON_STRIP = [
  { label: 'Camera Wifi', image: 'https://kabegroup.vn/kabet/wp-content/uploads/2025/07/KX-5PTW-D-PMA-247x296.png' },
  { label: 'Camera IP', image: 'https://kabegroup.vn/kabet/wp-content/uploads/2026/10/KX-7009P-PMA-247x296.png' },
  { label: 'Camera Analog', image: 'https://kabegroup.vn/kabet/wp-content/uploads/2025/07/KX-AD5013-A-247x296.png' },
  { label: 'Camera PTZ', image: 'https://kabegroup.vn/kabet/wp-content/uploads/2026/09/EAi2458LZSN-247x296.png' },
  { label: 'Đầu ghi IP', image: 'https://kabegroup.vn/kabet/wp-content/uploads/2026/09/DAi4K8832N4-247x296.png' },
  { label: 'Đầu ghi Analog', image: 'https://kabegroup.vn/kabet/wp-content/uploads/2026/09/KX-7108T-247x296.png' },
  { label: 'Switch', image: 'https://kabegroup.vn/kabet/wp-content/uploads/2025/09/KX-DACS5121-8M-60-PMA-247x296.png' },
  { label: 'Access Control', image: 'https://kabegroup.vn/kabet/wp-content/uploads/2026/09/KX-FR04AC-FW-247x296.png' }
];

const BRAND_CATEGORY_GROUPS = [
  {
    title: 'Camera Wifi',
    viewAllHref: '#',
    products: [
      { name: 'Camera Wifi KabeVision KX-5PTW-D-PMA', price: 'Liên hệ', attrs: ['KabeVision'], image: 'https://kabegroup.vn/kabet/wp-content/uploads/2025/07/KX-5PTW-D-PMA-247x296.png', href: 'camera-wifi-kabevision-kx-5ptw-d-pma.html' }
    ]
  },
  {
    title: 'Camera IP',
    viewAllHref: '#',
    products: [
      { name: 'Camera IP KabeVision KX-7009P-PMA', price: 'Liên hệ', attrs: ['KabeVision'], image: 'https://kabegroup.vn/kabet/wp-content/uploads/2026/10/KX-7009P-PMA-247x296.png', href: 'camera-ip-kabevision-kx-7009p-pma.html' },
      { name: 'Camera IP KabeVision KX-8BA2-DL-HSPMA', price: 'Liên hệ', attrs: ['KabeVision'], image: 'https://kabegroup.vn/kabet/wp-content/uploads/2026/08/KX-8BA2-DL-HSPMA-247x296.png', href: 'camera-ip-kabevision-kx-8ba2-dl-hspma.html' },
      { name: 'Camera IP KabeVision KX-8D2-DL-HSPMA', price: 'Liên hệ', attrs: ['KabeVision'], image: 'https://kabegroup.vn/kabet/wp-content/uploads/2026/08/KX-8D2-DL-HSPMA-01-247x296.jpg', href: 'camera-ip-kabevision-kx-8d2-dl-hspma.html' },
      { name: 'Camera IP KabeVision KM-5BAZ5-DL-PMA', price: 'Liên hệ', attrs: ['KabeVision'], image: 'https://kabegroup.vn/kabet/wp-content/uploads/2026/08/KM-5BAZ5-DL-PMA-01.png-247x296.jpg', href: 'camera-ip-kabevision-km-5baz5-dl-pma.html' },
      { name: 'Camera IP KabeVision KX-2DAZ2-DL-PMA', price: 'Liên hệ', attrs: ['KabeVision'], image: 'https://kabegroup.vn/kabet/wp-content/uploads/2026/05/KX-2DAZ2-DL-PMA-1-247x296.png', href: 'camera-ip-kabevision-kx-2daz2-dl-pma.html' },
      { name: 'Camera IP KabeVision KX-2BAZ2-DL-PMA', price: 'Liên hệ', attrs: ['KabeVision'], image: 'https://kabegroup.vn/kabet/wp-content/uploads/2026/05/KX-2BAZ2-DL-PMA-1-247x296.png', href: 'camera-ip-kabevision-kx-2baz2-dl-pma.html' },
      { name: 'Camera IP KabeVision KX-2DV1-DL-PMA', price: 'Liên hệ', attrs: ['KabeVision'], image: 'https://kabegroup.vn/kabet/wp-content/uploads/2025/09/AD2112CN-A-247x296.png', href: 'camera-ip-kabevision-kx-2dv1-dl-pma.html' },
      { name: 'Camera IP KabeVision KX-2BD2-PMA', price: 'Liên hệ', attrs: ['KabeVision'], image: 'https://kabegroup.vn/kabet/wp-content/uploads/2025/09/DAi2204N-EAB.web_-247x296.png', href: 'camera-ip-kabevision-kx-2bd2-pma.html' },
      { name: 'Camera IP KabeVision KX-SM4P-PRO', price: 'Liên hệ', attrs: ['KabeVision'], image: 'https://kabegroup.vn/kabet/wp-content/uploads/2026/10/KX-SM4P-PRO.web_-247x296.png', href: 'camera-ip-kabevision-kx-sm4p-pro.html' },
      { name: 'Camera IP KabeVision KX-CAiF4003SN-AB', price: 'Liên hệ', attrs: ['KabeVision'], image: 'https://kabegroup.vn/kabet/wp-content/uploads/2025/06/Kabe-vision-KX-CAiF4003SN-AB-247x296.png', href: 'camera-ip-kabevision-kx-caif4003sn-ab.html' },
      { name: 'Camera IP KabeVision KX-C4007CPN-PRO', price: 'Liên hệ', attrs: ['KabeVision'], image: 'https://kabegroup.vn/kabet/wp-content/uploads/2025/06/KX-C4007CPN-PRO-247x296.png', href: 'camera-ip-kabevision-kx-c4007cpn-pro.html' },
      { name: 'Camera IP KabeVision KX-CAi4003N-PRO', price: 'Liên hệ', attrs: ['KabeVision'], image: 'https://kabegroup.vn/kabet/wp-content/uploads/2026/09/Kabe-vision-KX-CAi4003N-PRO-247x296.png', href: 'camera-ip-kabevision-kx-cai4003n-pro.html' }
    ]
  },
  {
    title: 'Camera Analog',
    viewAllHref: '#',
    products: [
      { name: 'Camera Analog KabeVision KX-AD5013-A', price: 'Liên hệ', attrs: ['KabeVision'], image: 'https://kabegroup.vn/kabet/wp-content/uploads/2025/07/KX-AD5013-A-247x296.png', href: 'camera-analog-kabevision-kx-ad5013-a.html' },
      { name: 'Camera Analog KabeVision KX-AD5112C-A-VN', price: 'Liên hệ', attrs: ['KabeVision'], image: 'https://kabegroup.vn/kabet/wp-content/uploads/2025/07/Kabe-vision-KX-AD5112C-A-510x510-1-247x296.png', href: 'camera-analog-kabevision-kx-ad5112c-a-vn.html' },
      { name: 'Camera Analog KabeVision KX-AD5112C-A', price: 'Liên hệ', attrs: ['KabeVision'], image: 'https://kabegroup.vn/kabet/wp-content/uploads/2025/07/Kabe-vision-KX-AD5112C-A-510x510-1-247x296.png', href: 'camera-analog-kabevision-kx-ad5112c-a.html' },
      { name: 'Camera Analog KabeVision KX-AD2112C-A-VN', price: 'Liên hệ', attrs: ['KabeVision'], image: 'https://kabegroup.vn/kabet/wp-content/uploads/2025/07/Kabe-vision-KX-AD5112C-A-510x510-1-247x296.png', href: 'camera-analog-kabevision-kx-ad2112c-a-vn.html' },
      { name: 'Camera Analog KabeVision KX-AD2114C-T-VN', price: 'Liên hệ', attrs: ['KabeVision'], image: 'https://kabegroup.vn/kabet/wp-content/uploads/2025/07/KX-AD2114C-T-247x296.png', href: 'camera-analog-kabevision-kx-ad2114c-t-vn.html' },
      { name: 'Camera Analog KabeVision KX-AD2114C-T', price: 'Liên hệ', attrs: ['KabeVision'], image: 'https://kabegroup.vn/kabet/wp-content/uploads/2025/07/KX-AD2114C-T-247x296.png', href: 'camera-analog-kabevision-kx-ad2114c-t.html' },
      { name: 'Camera Analog KabeVision KX-AD2004C-PRO', price: 'Liên hệ', attrs: ['KabeVision'], image: 'https://kabegroup.vn/kabet/wp-content/uploads/2025/06/KX-A2013C-PRO-1-247x296.png', href: 'camera-analog-kabevision-kx-ad2004c-pro.html' },
      { name: 'Camera Analog KabeVision KX-A2004C-PRO', price: 'Liên hệ', attrs: ['KabeVision'], image: 'https://kabegroup.vn/kabet/wp-content/uploads/2025/06/KX-A2013C-PRO-1-247x296.png', href: 'camera-analog-kabevision-kx-a2004c-pro.html' }
    ]
  },
  {
    title: 'Camera PTZ',
    viewAllHref: '#',
    products: [
      { name: 'Camera PTZ KabeVision KX-EAi2458LZSN', price: 'Liên hệ', attrs: ['KabeVision'], image: 'https://kabegroup.vn/kabet/wp-content/uploads/2026/09/EAi2458LZSN-247x296.png', href: 'camera-ptz-kabevision-kx-eai2458lzsn.html' },
      { name: 'Camera PTZ KabeVision KX-DAi4328GPN3', price: 'Liên hệ', attrs: ['KabeVision'], image: 'https://kabegroup.vn/kabet/wp-content/uploads/2026/09/DAi2258PN3-247x296.png', href: 'camera-ptz-kabevision-kx-dai4328gpn3.html' },
      { name: 'Camera PTZ KabeVision KX-DAi2258PN3', price: 'Liên hệ', attrs: ['KabeVision'], image: 'https://kabegroup.vn/kabet/wp-content/uploads/2026/09/DAi2258PN3-247x296.png', href: 'camera-ptz-kabevision-kx-dai2258pn3.html' },
      { name: 'Camera PTZ KabeVision KX-CD2257MPN', price: 'Liên hệ', attrs: ['KabeVision'], image: 'https://kabegroup.vn/kabet/wp-content/uploads/2026/09/KX-CD2257MPN-.-KX-CD4257MPN.web_-247x296.png', href: 'camera-ptz-kabevision-kx-cd2257mpn.html' },
      { name: 'Camera PTZ KabeVision KX-CAi2167ePN', price: 'Liên hệ', attrs: ['KabeVision'], image: 'https://kabegroup.vn/kabet/wp-content/uploads/2026/09/CAi2167ePN-247x296.png', href: 'camera-ptz-kabevision-kx-cai2167epn.html' },
      { name: 'Camera PTZ KabeVision KX-C2056CPN-AL', price: 'Liên hệ', attrs: ['KabeVision'], image: 'https://kabegroup.vn/kabet/wp-content/uploads/2026/09/C2056CPN-AL-247x296.png', href: 'camera-ptz-kabevision-kx-c2056cpn-al.html' },
      { name: 'Camera PTZ KabeVision KX-CAi2167PN', price: 'Liên hệ', attrs: ['KabeVision'], image: 'https://kabegroup.vn/kabet/wp-content/uploads/2026/09/CAi2167PN-247x296.png', href: 'camera-ptz-kabevision-kx-cai2167pn.html' },
      { name: 'Camera PTZ KabeVision KX-C2007IRPN3', price: 'Liên hệ', attrs: ['KabeVision'], image: 'https://kabegroup.vn/kabet/wp-content/uploads/2026/09/C2007IRPN3-247x296.png', href: 'camera-ptz-kabevision-kx-c2007irpn3.html' },
      { name: 'Camera PTZ KabeVision KX-C2007sPN3', price: 'Liên hệ', attrs: ['KabeVision'], image: 'https://kabegroup.vn/kabet/wp-content/uploads/2026/09/C2007sPN3-247x296.png', href: 'camera-ptz-kabevision-kx-c2007spn3.html' },
      { name: 'Camera PTZ KabeVision KX-S44P', price: 'Liên hệ', attrs: ['KabeVision'], image: 'https://kabegroup.vn/kabet/wp-content/uploads/2026/09/KX-S24P-.-KX-S44P-247x296.png', href: 'camera-ptz-kabevision-kx-s44p.html' },
      { name: 'Camera PTZ KabeVision KX-S24P', price: 'Liên hệ', attrs: ['KabeVision'], image: 'https://kabegroup.vn/kabet/wp-content/uploads/2026/09/KX-S24P-.-KX-S44P-247x296.png', href: 'camera-ptz-kabevision-kx-s24p.html' },
      { name: 'Camera PTZ KabeVision KX-S5P', price: 'Liên hệ', attrs: ['KabeVision'], image: 'https://kabegroup.vn/kabet/wp-content/uploads/2026/09/KX-S5P-247x296.png', href: 'camera-ptz-kabevision-kx-s5p.html' }
    ]
  },
  {
    title: 'Đầu ghi IP',
    viewAllHref: '#',
    products: [
      { name: 'Đầu ghi IP KabeVision KX-EAi4K8864N4', price: 'Liên hệ', attrs: ['KabeVision'], image: 'https://kabegroup.vn/kabet/wp-content/uploads/2026/09/DAi4K8832N4-247x296.png', href: 'dau-ghi-ip-kabevision-kx-eai4k8864n4.html' },
      { name: 'Đầu ghi IP KabeVision KX-DAi4K8864EN3-VN', price: 'Liên hệ', attrs: ['KabeVision'], image: 'https://kabegroup.vn/kabet/wp-content/uploads/2026/09/S0201B-25-001-MEI_海外中性网络硬盘录像机NVR5816-EI（主板V1.00）_渲染图_45Left-logo-247x296.png', href: 'dau-ghi-ip-kabevision-kx-dai4k8864en3-vn.html' },
      { name: 'Đầu ghi IP KabeVision KX-DAi4K8832EN3-VN', price: 'Liên hệ', attrs: ['KabeVision'], image: 'https://kabegroup.vn/kabet/wp-content/uploads/2026/09/S0201B-25-001-MEI_海外中性网络硬盘录像机NVR5816-EI（主板V1.00）_渲染图_45Left-logo-247x296.png', href: 'dau-ghi-ip-kabevision-kx-dai4k8832en3-vn.html' },
      { name: 'Đầu ghi IP KabeVision KX-328E4-NR-PMA', price: 'Liên hệ', attrs: ['KabeVision'], image: 'https://kabegroup.vn/kabet/wp-content/uploads/2026/05/KX-328E4-NR-PMA-2-247x296.png', href: 'dau-ghi-ip-kabevision-kx-328e4-nr-pma.html' },
      { name: 'Đầu ghi IP KabeVision KX-D1202H-8K-PMA', price: 'Liên hệ', attrs: ['KabeVision'], image: 'https://kabegroup.vn/kabet/wp-content/uploads/2025/09/KX-D1202H-8K-PMA-247x296.png', href: 'dau-ghi-ip-kabevision-kx-d1202h-8k-pma.html' },
      { name: 'Đầu ghi IP KabeVision KX-162E3-NR-PMA', price: 'Liên hệ', attrs: ['KabeVision'], image: 'https://kabegroup.vn/kabet/wp-content/uploads/2025/09/KX-162E3-NR-PMA-247x296.png', href: 'dau-ghi-ip-kabevision-kx-162e3-nr-pma.html' },
      { name: 'Đầu ghi IP KabeVision KX-162S3-NR-PMA', price: 'Liên hệ', attrs: ['KabeVision'], image: 'https://kabegroup.vn/kabet/wp-content/uploads/2025/09/KX-162S3-NR-PMA-247x296.png', href: 'dau-ghi-ip-kabevision-kx-162s3-nr-pma.html' },
      { name: 'Đầu ghi IP KabeVision KX-EAi4K8832N4', price: 'Liên hệ', attrs: ['KabeVision'], image: 'https://kabegroup.vn/kabet/wp-content/uploads/2026/09/DAi4K8832N4-247x296.png', href: 'dau-ghi-ip-kabevision-kx-eai4k8832n4.html' },
      { name: 'Đầu ghi IP KabeVision KX-DAi4K8864EN3', price: 'Liên hệ', attrs: ['KabeVision'], image: 'https://kabegroup.vn/kabet/wp-content/uploads/2026/09/S0201B-25-001-MEI_海外中性网络硬盘录像机NVR5816-EI（主板V1.00）_渲染图_45Left-logo-247x296.png', href: 'dau-ghi-ip-kabevision-kx-dai4k8864en3.html' },
      { name: 'Đầu ghi IP KabeVision KX-DAi4K8832EN3', price: 'Liên hệ', attrs: ['KabeVision'], image: 'https://kabegroup.vn/kabet/wp-content/uploads/2026/09/S0201B-25-001-MEI_海外中性网络硬盘录像机NVR5816-EI（主板V1.00）_渲染图_45Left-logo-247x296.png', href: 'dau-ghi-ip-kabevision-kx-dai4k8832en3.html' },
      { name: 'Đầu ghi IP KabeVision KX-DAi4K8816EN3', price: 'Liên hệ', attrs: ['KabeVision'], image: 'https://kabegroup.vn/kabet/wp-content/uploads/2026/09/S0201B-25-001-MEI_海外中性网络硬盘录像机NVR5816-EI（主板V1.00）_渲染图_45Left-logo-247x296.png', href: 'dau-ghi-ip-kabevision-kx-dai4k8816en3.html' },
      { name: 'Đầu ghi IP KabeVision KX-DAi4K8432EN3', price: 'Liên hệ', attrs: ['KabeVision'], image: 'https://kabegroup.vn/kabet/wp-content/uploads/2026/09/S0201B-25-001-MEI_海外中性网络硬盘录像机NVR5816-EI（主板V1.00）_渲染图_45Left-logo-247x296.png', href: 'dau-ghi-ip-kabevision-kx-dai4k8432en3.html' }
    ]
  },
  {
    title: 'Đầu ghi Analog',
    viewAllHref: '#',
    products: [
      { name: 'Đầu ghi Analog KabeVision KX-7108T-VN', price: 'Liên hệ', attrs: ['KabeVision'], image: 'https://kabegroup.vn/kabet/wp-content/uploads/2026/09/KX-7108T-247x296.png', href: 'dau-ghi-analog-kabevision-kx-7108t-vn.html' },
      { name: 'Đầu ghi Analog KabeVision KX-C4K8432SN3', price: 'Liên hệ', attrs: ['KabeVision'], image: 'https://kabegroup.vn/kabet/wp-content/uploads/2026/09/4-o-247x296.png', href: 'dau-ghi-analog-kabevision-kx-c4k8432sn3.html' }
    ]
  },
  {
    title: 'Switch',
    viewAllHref: '#',
    products: [
      { name: 'Switch KabeVision KX-DACS5121-8M-60-PMA', price: 'Liên hệ', attrs: ['KabeVision'], image: 'https://kabegroup.vn/kabet/wp-content/uploads/2025/09/KX-DACS5121-8M-60-PMA-247x296.png', href: 'switch-kabevision-kx-dacs5121-8m-60-pma.html' },
      { name: 'Switch KabeVision KX-DACS5337-16M-135-PMA', price: 'Liên hệ', attrs: ['KabeVision'], image: 'https://kabegroup.vn/kabet/wp-content/uploads/2025/09/KX-DACS5337-16M-135-PMA-247x296.png', href: 'switch-kabevision-kx-dacs5337-16m-135-pma.html' },
      { name: 'Switch KabeVision KX-SW810-60', price: 'Liên hệ', attrs: ['KabeVision'], image: 'https://kabegroup.vn/kabet/wp-content/uploads/2026/09/SW810-60-247x296.png', href: 'switch-kabevision-kx-sw810-60.html' },
      { name: 'Switch KabeVision KX-SW406-36', price: 'Liên hệ', attrs: ['KabeVision'], image: 'https://kabegroup.vn/kabet/wp-content/uploads/2026/09/SW406-36-2-247x296.png', href: 'switch-kabevision-kx-sw406-36.html' }
    ]
  },
  {
    title: 'Access Control',
    viewAllHref: '#',
    products: [
      { name: 'Access Control KabeVision KX-FR04AC-FW', price: 'Liên hệ', attrs: ['KabeVision'], image: 'https://kabegroup.vn/kabet/wp-content/uploads/2026/09/KX-FR04AC-FW-247x296.png', href: 'kiem-soat-ra-vao-kabevision-kx-fr04ac-fw.html' },
      { name: 'Access Control KabeVision KX-FR04AC-W', price: 'Liên hệ', attrs: ['KabeVision'], image: 'https://kabegroup.vn/kabet/wp-content/uploads/2026/09/KX-FR04AC-W-247x296.png', href: 'kiem-soat-ra-vao-kabevision-kx-fr04ac-w.html' }
    ]
  }
];
