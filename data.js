// ============================================================
// IMD CFO PORTAL — GRAND DARMO SUITE
// data.js v1.0 — Update this file setiap ada data baru
// Last updated: March 2026
// 
// CARA UPDATE: Setiap bulan baru, update bagian MONTHLY
// dan tambahkan meeting baru di bagian MEETINGS
// ============================================================

const PORTAL_DATA = {

  // ─────────────────────────────────────────────────
  // SECTION 1: CONFIG
  // ─────────────────────────────────────────────────
  config: {
    property: "Grand Darmo Suite by Amithya",
    location: "Surabaya, East Java",
    totalRooms: 168,
    availableRooms: 150,
    currency: "IDR",
    symbol: "Rp",
    // SHA-256 of "GDS2026" — ganti dengan hash password baru
    passwordHash: "feeb01f651051daadb6eaec633de1032d6aa103642fb7d588bc721bf630e38f0",
    managementFeeRate: 0.10,
    operatorIncentiveRate: 0.015,
    fiscalYearStart: 1,
    dataAsOf: "February 2026",
    preparedBy: "Sanda Frendianto, AFC",
    // Traffic light thresholds
    thresholds: {
      gopMargin:   { good: 35, warning: 28, danger: 20 },
      labourCost:  { good: 26, warning: 30, danger: 35 },
      fbCost:      { good: 28, warning: 33, danger: 38 },
      arDays:      { good: 30, warning: 45, danger: 60 },
      rgi:         { good: 1.05, warning: 1.00, danger: 0.88 },
      cashRunway:  { good: 90,  warning: 60,  danger: 30 },
      occupancy:   { good: 55,  warning: 45,  danger: 35 },
    }
  },

  // ─────────────────────────────────────────────────
  // SECTION 2: ANNUAL DATA (2013–2025)
  // Semua dalam IDR absolut (Rupiah)
  // ─────────────────────────────────────────────────
  annual: {
    2013: { revenue:7_820_000_000, gop:1_720_000_000, gopMargin:0.220, noi:980_000_000, occ:0.47, adr:290_000, revpar:136_000, totalRooms:168 },
    2014: { revenue:8_430_000_000, gop:1_940_000_000, gopMargin:0.230, noi:1_120_000_000, occ:0.49, adr:305_000, revpar:149_000, totalRooms:168 },
    2015: { revenue:9_010_000_000, gop:2_250_000_000, gopMargin:0.250, noi:1_350_000_000, occ:0.50, adr:318_000, revpar:159_000, totalRooms:168 },
    2016: { revenue:9_380_000_000, gop:2_440_000_000, gopMargin:0.260, noi:1_420_000_000, occ:0.51, adr:326_000, revpar:166_000, totalRooms:168 },
    2017: { revenue:9_870_000_000, gop:2_760_000_000, gopMargin:0.280, noi:1_680_000_000, occ:0.52, adr:335_000, revpar:174_000, totalRooms:168 },
    2018: { revenue:10_540_000_000, gop:3_160_000_000, gopMargin:0.300, noi:1_950_000_000, occ:0.54, adr:347_000, revpar:187_000, totalRooms:168 },
    2019: { revenue:11_220_000_000, gop:3_590_000_000, gopMargin:0.320, noi:2_240_000_000, occ:0.56, adr:360_000, revpar:202_000, totalRooms:168 },
    2020: { revenue:3_810_000_000,  gop:-280_000_000,  gopMargin:-0.073, noi:-940_000_000, occ:0.21, adr:295_000, revpar:62_000,  totalRooms:168 },
    2021: { revenue:5_480_000_000,  gop:760_000_000,   gopMargin:0.139, noi:-120_000_000, occ:0.30, adr:306_000, revpar:92_000,  totalRooms:168 },
    2022: { revenue:8_940_000_000,  gop:2_320_000_000, gopMargin:0.260, noi:1_180_000_000, occ:0.47, adr:330_000, revpar:155_000, totalRooms:168 },
    2023: { revenue:11_040_000_000, gop:3_420_000_000, gopMargin:0.310, noi:2_050_000_000, occ:0.50, adr:342_000, revpar:171_000, totalRooms:168 },
    2024: { revenue:12_380_000_000, gop:4_210_000_000, gopMargin:0.340, noi:2_680_000_000, occ:0.53, adr:377_000, revpar:200_000, totalRooms:168 },
    2025: { revenue:10_480_000_000, gop:2_990_000_000, gopMargin:0.285, noi:1_720_000_000, occ:0.47, adr:348_000, revpar:164_000, totalRooms:168 },
  },

  // ─────────────────────────────────────────────────
  // SECTION 3: MONTHLY DATA (2023–2026)
  // Semua nominal dalam Rupiah
  // Tandai dengan *estimated* = angka estimasi
  // ─────────────────────────────────────────────────
  monthly: {
    "2023-01":{ revenue:{actual:810_000_000,budget:880_000_000,lastYear:730_000_000}, gop:{actual:228_000_000,budget:264_000_000,lastYear:195_000_000}, roomsRevenue:583_000_000, fbRevenue:178_000_000, otherRevenue:49_000_000, labourCost:238_000_000, fbCost:59_000_000, occ:0.438, adr:335_000, revpar:147_000, cashPosition:4_200_000_000, arTotal:620_000_000, apTotal:840_000_000, managementFee:81_000_000 },
    "2023-02":{ revenue:{actual:793_000_000,budget:858_000_000,lastYear:714_000_000}, gop:{actual:222_000_000,budget:257_000_000,lastYear:188_000_000}, roomsRevenue:571_000_000, fbRevenue:174_000_000, otherRevenue:48_000_000, labourCost:233_000_000, fbCost:57_000_000, occ:0.428, adr:332_000, revpar:142_000, cashPosition:4_150_000_000, arTotal:605_000_000, apTotal:810_000_000, managementFee:79_300_000 },
    "2023-03":{ revenue:{actual:892_000_000,budget:960_000_000,lastYear:803_000_000}, gop:{actual:265_000_000,budget:298_000_000,lastYear:222_000_000}, roomsRevenue:642_000_000, fbRevenue:196_000_000, otherRevenue:54_000_000, labourCost:261_000_000, fbCost:65_000_000, occ:0.490, adr:339_000, revpar:166_000, cashPosition:4_380_000_000, arTotal:680_000_000, apTotal:780_000_000, managementFee:89_200_000 },
    "2023-04":{ revenue:{actual:908_000_000,budget:975_000_000,lastYear:817_000_000}, gop:{actual:277_000_000,budget:312_000_000,lastYear:228_000_000}, roomsRevenue:654_000_000, fbRevenue:200_000_000, otherRevenue:54_000_000, labourCost:266_000_000, fbCost:66_000_000, occ:0.497, adr:341_000, revpar:169_000, cashPosition:4_520_000_000, arTotal:695_000_000, apTotal:760_000_000, managementFee:90_800_000 },
    "2023-05":{ revenue:{actual:899_000_000,budget:965_000_000,lastYear:809_000_000}, gop:{actual:272_000_000,budget:306_000_000,lastYear:224_000_000}, roomsRevenue:647_000_000, fbRevenue:198_000_000, otherRevenue:54_000_000, labourCost:264_000_000, fbCost:65_000_000, occ:0.492, adr:340_000, revpar:167_000, cashPosition:4_650_000_000, arTotal:710_000_000, apTotal:745_000_000, managementFee:89_900_000 },
    "2023-06":{ revenue:{actual:975_000_000,budget:1_040_000_000,lastYear:878_000_000}, gop:{actual:312_000_000,budget:343_000_000,lastYear:258_000_000}, roomsRevenue:702_000_000, fbRevenue:214_000_000, otherRevenue:59_000_000, labourCost:284_000_000, fbCost:71_000_000, occ:0.534, adr:348_000, revpar:186_000, cashPosition:4_830_000_000, arTotal:730_000_000, apTotal:720_000_000, managementFee:97_500_000 },
    "2023-07":{ revenue:{actual:1_030_000_000,budget:1_100_000_000,lastYear:927_000_000}, gop:{actual:340_000_000,budget:374_000_000,lastYear:278_000_000}, roomsRevenue:742_000_000, fbRevenue:226_000_000, otherRevenue:62_000_000, labourCost:298_000_000, fbCost:75_000_000, occ:0.564, adr:353_000, revpar:199_000, cashPosition:5_020_000_000, arTotal:748_000_000, apTotal:700_000_000, managementFee:103_000_000 },
    "2023-08":{ revenue:{actual:1_011_000_000,budget:1_080_000_000,lastYear:910_000_000}, gop:{actual:328_000_000,budget:367_000_000,lastYear:270_000_000}, roomsRevenue:728_000_000, fbRevenue:222_000_000, otherRevenue:61_000_000, labourCost:293_000_000, fbCost:73_000_000, occ:0.554, adr:351_000, revpar:195_000, cashPosition:5_180_000_000, arTotal:756_000_000, apTotal:688_000_000, managementFee:101_100_000 },
    "2023-09":{ revenue:{actual:948_000_000,budget:1_010_000_000,lastYear:853_000_000}, gop:{actual:294_000_000,budget:330_000_000,lastYear:246_000_000}, roomsRevenue:682_000_000, fbRevenue:208_000_000, otherRevenue:58_000_000, labourCost:277_000_000, fbCost:69_000_000, occ:0.519, adr:344_000, revpar:179_000, cashPosition:5_100_000_000, arTotal:740_000_000, apTotal:695_000_000, managementFee:94_800_000 },
    "2023-10":{ revenue:{actual:966_000_000,budget:1_030_000_000,lastYear:869_000_000}, gop:{actual:304_000_000,budget:340_000_000,lastYear:252_000_000}, roomsRevenue:696_000_000, fbRevenue:212_000_000, otherRevenue:58_000_000, labourCost:281_000_000, fbCost:70_000_000, occ:0.529, adr:346_000, revpar:183_000, cashPosition:5_220_000_000, arTotal:760_000_000, apTotal:710_000_000, managementFee:96_600_000 },
    "2023-11":{ revenue:{actual:883_000_000,budget:945_000_000,lastYear:795_000_000}, gop:{actual:263_000_000,budget:300_000_000,lastYear:220_000_000}, roomsRevenue:636_000_000, fbRevenue:194_000_000, otherRevenue:53_000_000, labourCost:258_000_000, fbCost:64_000_000, occ:0.483, adr:337_000, revpar:163_000, cashPosition:5_090_000_000, arTotal:745_000_000, apTotal:720_000_000, managementFee:88_300_000 },
    "2023-12":{ revenue:{actual:1_015_000_000,budget:1_080_000_000,lastYear:913_000_000}, gop:{actual:340_000_000,budget:378_000_000,lastYear:282_000_000}, roomsRevenue:731_000_000, fbRevenue:223_000_000, otherRevenue:61_000_000, labourCost:293_000_000, fbCost:74_000_000, occ:0.556, adr:352_000, revpar:196_000, cashPosition:5_310_000_000, arTotal:752_400_000, apTotal:1_714_000_000, managementFee:101_500_000 },

    "2024-01":{ revenue:{actual:900_000_000,budget:960_000_000,lastYear:810_000_000}, gop:{actual:279_000_000,budget:307_000_000,lastYear:228_000_000}, roomsRevenue:648_000_000, fbRevenue:198_000_000, otherRevenue:54_000_000, labourCost:264_000_000, fbCost:66_000_000, occ:0.473, adr:358_000, revpar:169_000, cashPosition:5_120_000_000, arTotal:732_000_000, apTotal:1_580_000_000, managementFee:90_000_000 },
    "2024-02":{ revenue:{actual:881_000_000,budget:938_000_000,lastYear:793_000_000}, gop:{actual:271_000_000,budget:300_000_000,lastYear:222_000_000}, roomsRevenue:634_000_000, fbRevenue:194_000_000, otherRevenue:53_000_000, labourCost:258_000_000, fbCost:64_000_000, occ:0.463, adr:355_000, revpar:164_000, cashPosition:5_050_000_000, arTotal:718_000_000, apTotal:1_520_000_000, managementFee:88_100_000 },
    "2024-03":{ revenue:{actual:1_005_000_000,budget:1_065_000_000,lastYear:892_000_000}, gop:{actual:328_000_000,budget:360_000_000,lastYear:265_000_000}, roomsRevenue:724_000_000, fbRevenue:221_000_000, otherRevenue:60_000_000, labourCost:292_000_000, fbCost:73_000_000, occ:0.528, adr:366_000, revpar:193_000, cashPosition:5_320_000_000, arTotal:758_000_000, apTotal:1_440_000_000, managementFee:100_500_000 },
    "2024-04":{ revenue:{actual:1_023_000_000,budget:1_084_000_000,lastYear:908_000_000}, gop:{actual:340_000_000,budget:374_000_000,lastYear:277_000_000}, roomsRevenue:737_000_000, fbRevenue:225_000_000, otherRevenue:61_000_000, labourCost:296_000_000, fbCost:74_000_000, occ:0.538, adr:368_000, revpar:198_000, cashPosition:5_480_000_000, arTotal:774_000_000, apTotal:1_380_000_000, managementFee:102_300_000 },
    "2024-05":{ revenue:{actual:1_012_000_000,budget:1_072_000_000,lastYear:899_000_000}, gop:{actual:335_000_000,budget:367_000_000,lastYear:272_000_000}, roomsRevenue:729_000_000, fbRevenue:222_000_000, otherRevenue:61_000_000, labourCost:293_000_000, fbCost:73_000_000, occ:0.532, adr:367_000, revpar:195_000, cashPosition:5_620_000_000, arTotal:784_000_000, apTotal:1_310_000_000, managementFee:101_200_000 },
    "2024-06":{ revenue:{actual:1_097_000_000,budget:1_155_000_000,lastYear:975_000_000}, gop:{actual:380_000_000,budget:415_000_000,lastYear:312_000_000}, roomsRevenue:790_000_000, fbRevenue:241_000_000, otherRevenue:66_000_000, labourCost:314_000_000, fbCost:80_000_000, occ:0.577, adr:376_000, revpar:217_000, cashPosition:5_840_000_000, arTotal:798_000_000, apTotal:1_240_000_000, managementFee:109_700_000 },
    "2024-07":{ revenue:{actual:1_158_000_000,budget:1_216_000_000,lastYear:1_030_000_000}, gop:{actual:410_000_000,budget:445_000_000,lastYear:340_000_000}, roomsRevenue:834_000_000, fbRevenue:255_000_000, otherRevenue:69_000_000, labourCost:330_000_000, fbCost:84_000_000, occ:0.609, adr:382_000, revpar:233_000, cashPosition:6_100_000_000, arTotal:820_000_000, apTotal:1_170_000_000, managementFee:115_800_000 },
    "2024-08":{ revenue:{actual:1_137_000_000,budget:1_194_000_000,lastYear:1_011_000_000}, gop:{actual:397_000_000,budget:430_000_000,lastYear:328_000_000}, roomsRevenue:819_000_000, fbRevenue:250_000_000, otherRevenue:68_000_000, labourCost:324_000_000, fbCost:83_000_000, occ:0.598, adr:380_000, revpar:227_000, cashPosition:6_280_000_000, arTotal:812_000_000, apTotal:1_100_000_000, managementFee:113_700_000 },
    "2024-09":{ revenue:{actual:1_068_000_000,budget:1_120_000_000,lastYear:948_000_000}, gop:{actual:360_000_000,budget:392_000_000,lastYear:294_000_000}, roomsRevenue:769_000_000, fbRevenue:235_000_000, otherRevenue:64_000_000, labourCost:307_000_000, fbCost:78_000_000, occ:0.562, adr:373_000, revpar:210_000, cashPosition:6_150_000_000, arTotal:800_000_000, apTotal:1_050_000_000, managementFee:106_800_000 },
    "2024-10":{ revenue:{actual:1_088_000_000,budget:1_140_000_000,lastYear:966_000_000}, gop:{actual:372_000_000,budget:405_000_000,lastYear:304_000_000}, roomsRevenue:784_000_000, fbRevenue:239_000_000, otherRevenue:65_000_000, labourCost:311_000_000, fbCost:79_000_000, occ:0.572, adr:375_000, revpar:215_000, cashPosition:6_320_000_000, arTotal:810_000_000, apTotal:995_000_000, managementFee:108_800_000 },
    "2024-11":{ revenue:{actual:994_000_000,budget:1_044_000_000,lastYear:883_000_000}, gop:{actual:325_000_000,budget:358_000_000,lastYear:263_000_000}, roomsRevenue:716_000_000, fbRevenue:218_000_000, otherRevenue:60_000_000, labourCost:288_000_000, fbCost:72_000_000, occ:0.523, adr:366_000, revpar:192_000, cashPosition:6_180_000_000, arTotal:822_000_000, apTotal:958_000_000, managementFee:99_400_000 },
    "2024-12":{ revenue:{actual:1_137_000_000,budget:1_192_000_000,lastYear:1_015_000_000}, gop:{actual:413_000_000,budget:450_000_000,lastYear:340_000_000}, roomsRevenue:819_000_000, fbRevenue:250_000_000, otherRevenue:68_000_000, labourCost:321_000_000, fbCost:83_000_000, occ:0.598, adr:380_000, revpar:227_000, cashPosition:6_480_000_000, arTotal:825_100_000, apTotal:754_500_000, managementFee:113_700_000 },

    "2025-01":{ revenue:{actual:763_000_000,budget:900_000_000,lastYear:900_000_000}, gop:{actual:195_000_000,budget:279_000_000,lastYear:279_000_000}, roomsRevenue:549_000_000, fbRevenue:167_800_000, otherRevenue:46_200_000, labourCost:228_000_000, fbCost:55_500_000, occ:0.401, adr:340_000, revpar:136_000, cashPosition:6_250_000_000, arTotal:680_000_000, apTotal:720_000_000, managementFee:76_300_000 },
    "2025-02":{ revenue:{actual:747_000_000,budget:880_000_000,lastYear:881_000_000}, gop:{actual:188_000_000,budget:271_000_000,lastYear:271_000_000}, roomsRevenue:538_000_000, fbRevenue:164_300_000, otherRevenue:44_700_000, labourCost:224_000_000, fbCost:54_200_000, occ:0.392, adr:338_000, revpar:132_000, cashPosition:6_140_000_000, arTotal:665_000_000, apTotal:710_000_000, managementFee:74_700_000 },
    "2025-03":{ revenue:{actual:843_000_000,budget:970_000_000,lastYear:1_005_000_000}, gop:{actual:232_000_000,budget:317_000_000,lastYear:328_000_000}, roomsRevenue:607_000_000, fbRevenue:185_500_000, otherRevenue:50_500_000, labourCost:248_000_000, fbCost:61_200_000, occ:0.443, adr:343_000, revpar:152_000, cashPosition:6_080_000_000, arTotal:658_000_000, apTotal:695_000_000, managementFee:84_300_000 },
    "2025-04":{ revenue:{actual:859_000_000,budget:985_000_000,lastYear:1_023_000_000}, gop:{actual:241_000_000,budget:325_000_000,lastYear:340_000_000}, roomsRevenue:619_000_000, fbRevenue:189_000_000, otherRevenue:51_000_000, labourCost:252_000_000, fbCost:62_400_000, occ:0.451, adr:344_000, revpar:155_000, cashPosition:6_020_000_000, arTotal:648_000_000, apTotal:682_000_000, managementFee:85_900_000 },
    "2025-05":{ revenue:{actual:851_000_000,budget:976_000_000,lastYear:1_012_000_000}, gop:{actual:236_000_000,budget:319_000_000,lastYear:335_000_000}, roomsRevenue:613_000_000, fbRevenue:187_200_000, otherRevenue:50_800_000, labourCost:250_000_000, fbCost:61_800_000, occ:0.447, adr:343_000, revpar:153_000, cashPosition:5_980_000_000, arTotal:640_000_000, apTotal:670_000_000, managementFee:85_100_000 },
    "2025-06":{ revenue:{actual:921_000_000,budget:1_046_000_000,lastYear:1_097_000_000}, gop:{actual:271_000_000,budget:364_000_000,lastYear:380_000_000}, roomsRevenue:663_000_000, fbRevenue:202_600_000, otherRevenue:55_400_000, labourCost:268_000_000, fbCost:66_900_000, occ:0.484, adr:348_000, revpar:168_000, cashPosition:6_020_000_000, arTotal:628_000_000, apTotal:652_000_000, managementFee:92_100_000 },
    "2025-07":{ revenue:{actual:972_000_000,budget:1_096_000_000,lastYear:1_158_000_000}, gop:{actual:293_000_000,budget:394_000_000,lastYear:410_000_000}, roomsRevenue:700_000_000, fbRevenue:213_800_000, otherRevenue:58_200_000, labourCost:280_000_000, fbCost:70_600_000, occ:0.511, adr:352_000, revpar:180_000, cashPosition:6_080_000_000, arTotal:614_000_000, apTotal:638_000_000, managementFee:97_200_000 },
    "2025-08":{ revenue:{actual:955_000_000,budget:1_077_000_000,lastYear:1_137_000_000}, gop:{actual:282_000_000,budget:383_000_000,lastYear:397_000_000}, roomsRevenue:688_000_000, fbRevenue:210_100_000, otherRevenue:56_900_000, labourCost:275_000_000, fbCost:69_400_000, occ:0.502, adr:350_000, revpar:176_000, cashPosition:6_120_000_000, arTotal:603_000_000, apTotal:625_000_000, managementFee:95_500_000 },
    "2025-09":{ revenue:{actual:895_000_000,budget:1_020_000_000,lastYear:1_068_000_000}, gop:{actual:249_000_000,budget:349_000_000,lastYear:360_000_000}, roomsRevenue:645_000_000, fbRevenue:196_900_000, otherRevenue:53_100_000, labourCost:261_000_000, fbCost:65_000_000, occ:0.470, adr:346_000, revpar:163_000, cashPosition:6_000_000_000, arTotal:590_000_000, apTotal:608_000_000, managementFee:89_500_000 },
    "2025-10":{ revenue:{actual:911_000_000,budget:1_038_000_000,lastYear:1_088_000_000}, gop:{actual:257_000_000,budget:358_000_000,lastYear:372_000_000}, roomsRevenue:656_000_000, fbRevenue:200_400_000, otherRevenue:54_600_000, labourCost:264_000_000, fbCost:66_200_000, occ:0.479, adr:347_000, revpar:166_000, cashPosition:6_050_000_000, arTotal:578_000_000, apTotal:595_000_000, managementFee:91_100_000 },
    "2025-11":{ revenue:{actual:833_000_000,budget:954_000_000,lastYear:994_000_000}, gop:{actual:222_000_000,budget:320_000_000,lastYear:325_000_000}, roomsRevenue:600_000_000, fbRevenue:183_300_000, otherRevenue:49_700_000, labourCost:244_000_000, fbCost:60_600_000, occ:0.438, adr:342_000, revpar:150_000, cashPosition:5_890_000_000, arTotal:565_000_000, apTotal:580_000_000, managementFee:83_300_000 },
    "2025-12":{ revenue:{actual:955_000_000,budget:1_078_000_000,lastYear:1_137_000_000}, gop:{actual:284_000_000,budget:396_000_000,lastYear:413_000_000}, roomsRevenue:688_000_000, fbRevenue:210_100_000, otherRevenue:56_900_000, labourCost:275_000_000, fbCost:69_400_000, occ:0.502, adr:350_000, revpar:176_000, cashPosition:5_716_535_696, arTotal:494_900_000, apTotal:561_300_000, managementFee:95_500_000 },

    // ── 2026 (data aktual akan diupdate tiap bulan) ──
    "2026-01":{ revenue:{actual:863_400_000,budget:1_071_000_000,lastYear:763_000_000}, gop:{actual:195_000_000,budget:356_000_000,lastYear:195_000_000}, roomsRevenue:621_600_000, fbRevenue:190_000_000, otherRevenue:51_800_000, labourCost:255_000_000, fbCost:64_600_000, occ:0.377, adr:345_000, revpar:130_000, cashPosition:5_639_526_456, arTotal:291_000_000, apTotal:653_000_000, managementFee:86_340_000 },
    "2026-02":{ revenue:{actual:847_000_000,budget:1_020_000_000,lastYear:747_000_000}, gop:{actual:187_000_000,budget:330_000_000,lastYear:188_000_000}, roomsRevenue:609_800_000, fbRevenue:186_300_000, otherRevenue:50_900_000, labourCost:253_000_000, fbCost:63_300_000, occ:0.371, adr:343_000, revpar:127_000, cashPosition:5_572_000_000, arTotal:318_000_000, apTotal:621_000_000, managementFee:84_700_000 },
  },

  // ─────────────────────────────────────────────────
  // SECTION 4: MARKET MIX (Annual by Segment)
  // rn = room nights, adr = average daily rate (IDR)
  // rev = total revenue contribution (IDR)
  // ─────────────────────────────────────────────────
  marketMix: {
    2023: {
      walkIn:       { rn:3_420, adr:298_000, rev:1_019_160_000 },
      fit:          { rn:5_840, adr:332_000, rev:1_938_880_000 },
      corpA:        { rn:4_120, adr:310_000, rev:1_277_200_000 },
      corpB:        { rn:3_680, adr:295_000, rev:1_085_600_000 },
      corpC:        { rn:2_840, adr:285_000, rev:809_400_000 },
      corpD:        { rn:1_920, adr:270_000, rev:518_400_000 },
      government:   { rn:2_480, adr:265_000, rev:657_200_000 },
      taA:          { rn:3_240, adr:312_000, rev:1_010_880_000 },
      taB:          { rn:2_160, adr:298_000, rev:643_680_000 },
      wholesaler:   { rn:1_840, adr:278_000, rev:511_520_000 },
      onlineTA:     { rn:6_480, adr:345_000, rev:2_235_600_000 },
      ownerRate:    { rn:720,  adr:180_000, rev:129_600_000 },
      longStay:     { rn:1_440, adr:260_000, rev:374_400_000 },
      association:  { rn:960,  adr:305_000, rev:292_800_000 },
      tours:        { rn:1_280, adr:288_000, rev:368_640_000 },
      ownerCondotel:{ rn:480,  adr:175_000, rev:84_000_000 },
      corpGroup:    { rn:2_160, adr:320_000, rev:691_200_000 },
      taGroup:      { rn:1_680, adr:315_000, rev:529_200_000 },
      airline:      { rn:480,  adr:295_000, rev:141_600_000 },
    },
    2024: {
      walkIn:       { rn:3_680, adr:325_000, rev:1_196_000_000 },
      fit:          { rn:6_240, adr:368_000, rev:2_296_320_000 },
      corpA:        { rn:4_480, adr:345_000, rev:1_545_600_000 },
      corpB:        { rn:3_840, adr:328_000, rev:1_259_520_000 },
      corpC:        { rn:2_960, adr:315_000, rev:932_400_000 },
      corpD:        { rn:2_080, adr:298_000, rev:619_840_000 },
      government:   { rn:2_560, adr:290_000, rev:742_400_000 },
      taA:          { rn:3_520, adr:348_000, rev:1_224_960_000 },
      taB:          { rn:2_240, adr:332_000, rev:743_680_000 },
      wholesaler:   { rn:1_760, adr:308_000, rev:542_080_000 },
      onlineTA:     { rn:7_040, adr:385_000, rev:2_710_400_000 },
      ownerRate:    { rn:640,  adr:190_000, rev:121_600_000 },
      longStay:     { rn:1_280, adr:285_000, rev:364_800_000 },
      association:  { rn:1_040, adr:338_000, rev:351_520_000 },
      tours:        { rn:1_360, adr:318_000, rev:432_480_000 },
      ownerCondotel:{ rn:400,  adr:185_000, rev:74_000_000 },
      corpGroup:    { rn:2_400, adr:355_000, rev:852_000_000 },
      taGroup:      { rn:1_760, adr:348_000, rev:612_480_000 },
      airline:      { rn:440,  adr:318_000, rev:139_920_000 },
    },
    2025: {
      walkIn:       { rn:2_960, adr:305_000, rev:902_800_000 },
      fit:          { rn:5_360, adr:348_000, rev:1_865_280_000 },
      corpA:        { rn:3_840, adr:325_000, rev:1_248_000_000 },
      corpB:        { rn:3_280, adr:308_000, rev:1_010_240_000 },
      corpC:        { rn:2_480, adr:295_000, rev:731_600_000 },
      corpD:        { rn:1_680, adr:278_000, rev:467_040_000 },
      government:   { rn:2_160, adr:270_000, rev:583_200_000 },
      taA:          { rn:2_960, adr:328_000, rev:970_880_000 },
      taB:          { rn:1_920, adr:312_000, rev:599_040_000 },
      wholesaler:   { rn:1_440, adr:288_000, rev:414_720_000 },
      onlineTA:     { rn:5_840, adr:362_000, rev:2_114_080_000 },
      ownerRate:    { rn:480,  adr:180_000, rev:86_400_000 },
      longStay:     { rn:1_600, adr:270_000, rev:432_000_000 },
      association:  { rn:800,  adr:318_000, rev:254_400_000 },
      tours:        { rn:1_040, adr:298_000, rev:309_920_000 },
      ownerCondotel:{ rn:560,  adr:178_000, rev:99_680_000 },
      corpGroup:    { rn:1_920, adr:335_000, rev:643_200_000 },
      taGroup:      { rn:1_440, adr:328_000, rev:472_320_000 },
      airline:      { rn:400,  adr:305_000, rev:122_000_000 },
    }
  },

  // ─────────────────────────────────────────────────
  // SECTION 5: COMPETITIVE / STR-STYLE DATA
  // Bulan: Jan 2023 – Des 2025
  // MPI = occ index, ARI = rate index, RGI = revpar index
  // vs baseline 100 = fair share
  // ─────────────────────────────────────────────────
  competitive: {
    "2023-01":{ mpi:0.89, ari:0.94, rgi:0.84, gdsOcc:0.438, mktOcc:0.492, gdsAdr:335_000, mktAdr:356_000 },
    "2023-02":{ mpi:0.88, ari:0.93, rgi:0.82, gdsOcc:0.428, mktOcc:0.486, gdsAdr:332_000, mktAdr:357_000 },
    "2023-03":{ mpi:0.95, ari:0.95, rgi:0.90, gdsOcc:0.490, mktOcc:0.515, gdsAdr:339_000, mktAdr:357_000 },
    "2023-04":{ mpi:0.97, ari:0.96, rgi:0.93, gdsOcc:0.497, mktOcc:0.512, gdsAdr:341_000, mktAdr:355_000 },
    "2023-05":{ mpi:0.98, ari:0.97, rgi:0.95, gdsOcc:0.492, mktOcc:0.502, gdsAdr:340_000, mktAdr:350_000 },
    "2023-06":{ mpi:1.00, ari:0.98, rgi:0.98, gdsOcc:0.534, mktOcc:0.534, gdsAdr:348_000, mktAdr:355_000 },
    "2023-07":{ mpi:1.02, ari:0.99, rgi:1.01, gdsOcc:0.564, mktOcc:0.553, gdsAdr:353_000, mktAdr:356_000 },
    "2023-08":{ mpi:1.01, ari:0.99, rgi:1.00, gdsOcc:0.554, mktOcc:0.548, gdsAdr:351_000, mktAdr:354_000 },
    "2023-09":{ mpi:0.98, ari:0.97, rgi:0.95, gdsOcc:0.519, mktOcc:0.530, gdsAdr:344_000, mktAdr:355_000 },
    "2023-10":{ mpi:0.99, ari:0.97, rgi:0.96, gdsOcc:0.529, mktOcc:0.534, gdsAdr:346_000, mktAdr:356_000 },
    "2023-11":{ mpi:0.97, ari:0.96, rgi:0.93, gdsOcc:0.483, mktOcc:0.497, gdsAdr:337_000, mktAdr:351_000 },
    "2023-12":{ mpi:1.01, ari:0.98, rgi:0.99, gdsOcc:0.556, mktOcc:0.550, gdsAdr:352_000, mktAdr:359_000 },
    "2024-01":{ mpi:0.95, ari:0.96, rgi:0.91, gdsOcc:0.473, mktOcc:0.498, gdsAdr:358_000, mktAdr:373_000 },
    "2024-02":{ mpi:0.94, ari:0.95, rgi:0.89, gdsOcc:0.463, mktOcc:0.492, gdsAdr:355_000, mktAdr:374_000 },
    "2024-03":{ mpi:0.98, ari:0.97, rgi:0.95, gdsOcc:0.528, mktOcc:0.539, gdsAdr:366_000, mktAdr:377_000 },
    "2024-04":{ mpi:0.99, ari:0.97, rgi:0.96, gdsOcc:0.538, mktOcc:0.543, gdsAdr:368_000, mktAdr:379_000 },
    "2024-05":{ mpi:0.99, ari:0.97, rgi:0.96, gdsOcc:0.532, mktOcc:0.537, gdsAdr:367_000, mktAdr:378_000 },
    "2024-06":{ mpi:1.00, ari:0.98, rgi:0.98, gdsOcc:0.577, mktOcc:0.577, gdsAdr:376_000, mktAdr:384_000 },
    "2024-07":{ mpi:1.01, ari:0.98, rgi:0.99, gdsOcc:0.609, mktOcc:0.603, gdsAdr:382_000, mktAdr:390_000 },
    "2024-08":{ mpi:1.00, ari:0.98, rgi:0.98, gdsOcc:0.598, mktOcc:0.598, gdsAdr:380_000, mktAdr:388_000 },
    "2024-09":{ mpi:0.97, ari:0.96, rgi:0.93, gdsOcc:0.562, mktOcc:0.579, gdsAdr:373_000, mktAdr:388_000 },
    "2024-10":{ mpi:0.97, ari:0.96, rgi:0.93, gdsOcc:0.572, mktOcc:0.589, gdsAdr:375_000, mktAdr:390_000 },
    "2024-11":{ mpi:0.95, ari:0.95, rgi:0.90, gdsOcc:0.523, mktOcc:0.551, gdsAdr:366_000, mktAdr:385_000 },
    "2024-12":{ mpi:0.97, ari:0.96, rgi:0.93, gdsOcc:0.598, mktOcc:0.616, gdsAdr:380_000, mktAdr:396_000 },
    "2025-01":{ mpi:0.82, ari:0.84, rgi:0.69, gdsOcc:0.401, mktOcc:0.489, gdsAdr:340_000, mktAdr:405_000 },
    "2025-02":{ mpi:0.81, ari:0.83, rgi:0.67, gdsOcc:0.392, mktOcc:0.484, gdsAdr:338_000, mktAdr:407_000 },
    "2025-03":{ mpi:0.83, ari:0.84, rgi:0.70, gdsOcc:0.443, mktOcc:0.534, gdsAdr:343_000, mktAdr:408_000 },
    "2025-04":{ mpi:0.84, ari:0.84, rgi:0.71, gdsOcc:0.451, mktOcc:0.537, gdsAdr:344_000, mktAdr:410_000 },
    "2025-05":{ mpi:0.83, ari:0.84, rgi:0.70, gdsOcc:0.447, mktOcc:0.539, gdsAdr:343_000, mktAdr:408_000 },
    "2025-06":{ mpi:0.84, ari:0.83, rgi:0.70, gdsOcc:0.484, mktOcc:0.576, gdsAdr:348_000, mktAdr:419_000 },
    "2025-07":{ mpi:0.84, ari:0.84, rgi:0.71, gdsOcc:0.511, mktOcc:0.608, gdsAdr:352_000, mktAdr:419_000 },
    "2025-08":{ mpi:0.83, ari:0.83, rgi:0.69, gdsOcc:0.502, mktOcc:0.605, gdsAdr:350_000, mktAdr:422_000 },
    "2025-09":{ mpi:0.82, ari:0.83, rgi:0.68, gdsOcc:0.470, mktOcc:0.573, gdsAdr:346_000, mktAdr:417_000 },
    "2025-10":{ mpi:0.82, ari:0.83, rgi:0.68, gdsOcc:0.479, mktOcc:0.584, gdsAdr:347_000, mktAdr:418_000 },
    "2025-11":{ mpi:0.81, ari:0.82, rgi:0.66, gdsOcc:0.438, mktOcc:0.541, gdsAdr:342_000, mktAdr:417_000 },
    "2025-12":{ mpi:0.82, ari:0.83, rgi:0.68, gdsOcc:0.502, mktOcc:0.612, gdsAdr:350_000, mktAdr:422_000 },
  },

  // ─────────────────────────────────────────────────
  // SECTION 6: AR/AP AGING SNAPSHOTS
  // ─────────────────────────────────────────────────
  arAging: {
    "2023-12":{ current:312_000_000, d30:228_000_000, d60:148_000_000, d90plus:64_400_000, total:752_400_000 },
    "2024-12":{ current:340_000_000, d30:248_000_000, d60:162_000_000, d90plus:75_100_000, total:825_100_000 },
    "2025-12":{ current:224_000_000, d30:148_000_000, d60:88_000_000,  d90plus:34_900_000, total:494_900_000 },
    "2026-01":{ current:148_000_000, d30:92_000_000,  d60:38_000_000,  d90plus:13_000_000, total:291_000_000 },
    "2026-02":{ current:168_000_000, d30:98_000_000,  d60:40_000_000,  d90plus:12_000_000, total:318_000_000 },
  },
  apAging: {
    "2023-12":{ current:820_000_000, d30:524_000_000, d60:248_000_000, d90plus:122_000_000, total:1_714_000_000 },
    "2024-12":{ current:320_000_000, d30:228_000_000, d60:148_000_000, d90plus:58_500_000,  total:754_500_000 },
    "2025-12":{ current:248_000_000, d30:184_000_000, d60:96_000_000,  d90plus:33_300_000,  total:561_300_000 },
    "2026-01":{ current:288_000_000, d30:224_000_000, d60:108_000_000, d90plus:33_000_000,  total:653_000_000 },
    "2026-02":{ current:268_000_000, d30:212_000_000, d60:104_000_000, d90plus:37_000_000,  total:621_000_000 },
  },

  // ─────────────────────────────────────────────────
  // SECTION 7: MEETINGS
  // Tambah meeting baru setiap bulan review
  // ─────────────────────────────────────────────────
  meetings: [
    {
      id: "MTG-2026-02",
      period: "2026-02",
      periodLabel: "February 2026",
      date: "2026-03-10",
      status: "completed",
      attendees: [
        "Sanda Frendianto — AFC / Acting CFO",
        "General Manager",
        "Owner Representative",
        "Revenue Manager",
        "F&B Manager"
      ],
      ownerTargets: {
        revenue: { budget: 12_840_000_000, revised: 11_200_000_000, ytdActual: 1_710_400_000, ytdBudget: 2_091_000_000 },
        gop:     { budget: 4_368_000_000,  revised: 3_360_000_000,  ytdActual: 382_000_000,   ytdBudget: 686_000_000 },
        occ:     { budget: 0.55,           revised: 0.48,           ytdActual: 0.374 }
      },
      executiveBrief: "February 2026 marks the second consecutive month of significant underperformance against budget, with revenue at Rp 847M — a 17% shortfall. Both occupancy (37.1%) and ADR (Rp 343K) remain well below budget targets. The hotel continues to lose market share relative to competitors, with our RGI estimated at 0.68, the lowest in recent history. Immediate strategic decisions are required to arrest the decline before the Q2 peak season.",
      goingWell: [
        "Cash position remains healthy at Rp 5.57B — runway well above 90-day threshold",
        "AR aging has significantly improved — collections are strong (Jan: Rp 291M, Feb: Rp 318M vs Dec 2024: Rp 825M)",
        "F&B cost efficiency maintained at 34% — within acceptable threshold"
      ],
      needsAttention: [
        "Revenue -17.0% vs budget, GOP -43.3% vs budget — two consecutive months of severe miss",
        "Occupancy 37.1% vs market estimated 53% — market penetration index below 0.80",
        "Labour cost as % of revenue at 29.9% — approaching warning threshold given revenue decline",
        "Online TA dependency increasing as corporate segments decline",
        "2025 full-year RGI never exceeded 0.84 — structural competitive disadvantage"
      ],
      mustDecide: [
        "Rate strategy: Should we close ADR gap with market (~Rp 407K) or prioritize occupancy recovery first?",
        "Cost restructuring: Is temporary labour cost reduction (outsourcing/roster adjustment) necessary given revenue trajectory?",
        "Corporate sales: Activate dormant corporate accounts (Corp C/D) with targeted rate offer"
      ],
      cashProjection: {
        week4:  { inflow: 900_000_000, outflow: 850_000_000, netPosition: 5_622_000_000 },
        week8:  { inflow: 1_800_000_000, outflow: 1_700_000_000, netPosition: 5_672_000_000 },
      },
      scenarios: {
        downside: { occ: 0.35, adr: 330_000, revenueForecast: 800_000_000, gopForecast: 160_000_000, cashRunway: 95 },
        base:     { occ: 0.42, adr: 345_000, revenueForecast: 890_000_000, gopForecast: 215_000_000, cashRunway: 102 },
        upside:   { occ: 0.50, adr: 358_000, revenueForecast: 1_030_000_000, gopForecast: 298_000_000, cashRunway: 112 },
      },
      decisions: [
        "Revise Q1 2026 revenue forecast to Rp 2.55B (vs original budget Rp 3.21B) — aligned with current trajectory",
        "Implement Weekend/Leisure rate package at ADR Rp 375K targeting OTA and FIT segments for March-April push",
        "Authorize Revenue Manager to open corporate rate negotiation for Corp C accounts (target +480 room nights Q2)",
        "Defer non-critical capex spending until occupancy recovers above 45%"
      ],
      riskFlags: [
        { flag: "Revenue Run Rate", desc: "YTD revenue pace implies full-year Rp 10.26B — Rp 940M below 2025 actual", severity: "high" },
        { flag: "RGI Deterioration", desc: "12 consecutive months below 1.0 — market share loss becoming structural", severity: "high" },
        { flag: "Labour Cost Ratio", desc: "If revenue stays below Rp 900M/month, labour% will breach 30% warning threshold", severity: "medium" },
        { flag: "OTA Dependency", desc: "Online TA now ~25% of room nights — rate compression risk increasing", severity: "medium" }
      ],
      actionItems: [
        { id:"AI-001", task:"Develop Weekend Leisure Package pricing & channel loading", pic:"Revenue Manager", deadline:"2026-03-15", status:"open", priority:"high", financialImpact:"Est. +120 RN/month at ADR 375K = +Rp 45M/mo" },
        { id:"AI-002", task:"Corporate rate proposal to top 5 Corp C accounts", pic:"Sales Manager", deadline:"2026-03-20", status:"open", priority:"high", financialImpact:"Target +480 RN Q2 2026 = +Rp 160M" },
        { id:"AI-003", task:"Roster optimization review — identify variable labour reduction", pic:"HRD / GM", deadline:"2026-03-18", status:"open", priority:"medium", financialImpact:"Target -Rp 15M/month if occupancy stays <40%" },
        { id:"AI-004", task:"Review & accelerate AR collection for Feb 60+ day accounts", pic:"AFC / Finance", deadline:"2026-03-12", status:"open", priority:"medium", financialImpact:"Rp 40M in 60+ day AR to collect" },
        { id:"AI-005", task:"Submit revised Q1 2026 forecast to Owner", pic:"AFC", deadline:"2026-03-14", status:"open", priority:"high", financialImpact:"Governance — align expectations" },
      ]
    },
    {
      id: "MTG-2026-01",
      period: "2026-01",
      periodLabel: "January 2026",
      date: "2026-02-10",
      status: "completed",
      attendees: ["Sanda Frendianto — AFC", "General Manager", "Revenue Manager"],
      executiveBrief: "January 2026 opened with a significant revenue miss — Rp 863.4M actual vs Rp 1.071B budget (-19.4%). Occupancy of 37.7% is the lowest January since 2022. The competitive landscape has shifted with market rates averaging Rp 405K while GDS holds at Rp 345K — a strategic rate gap that needs revisiting.",
      goingWell: ["Cash position strong at Rp 5.64B after healthy Dec 2025 cash flow", "AR aging improved dramatically — down to Rp 291M from Rp 825M in Dec 2024", "F&B operations stable"],
      needsAttention: ["Occupancy -8.4pp vs budget", "Revenue -19.4% vs budget", "GOP -45.2% vs budget — operational leverage working against us"],
      mustDecide: ["Rate strategy alignment with market for Q1", "Budget revision for H1 2026"],
      decisions: ["Monitor February closely before formal budget revision", "Revenue Manager to analyze OTA rate parity"],
      scenarios: {
        downside: { occ: 0.33, adr: 330_000, revenueForecast: 780_000_000, gopForecast: 145_000_000, cashRunway: 90 },
        base:     { occ: 0.38, adr: 345_000, revenueForecast: 863_000_000, gopForecast: 195_000_000, cashRunway: 98 },
        upside:   { occ: 0.46, adr: 355_000, revenueForecast: 1_020_000_000, gopForecast: 265_000_000, cashRunway: 110 },
      },
      riskFlags: [
        { flag: "Q1 Budget Miss", desc: "January trajectory implies Q1 revenue ~Rp 2.6B vs budget Rp 3.2B", severity: "high" }
      ],
      actionItems: [
        { id:"AI-J01", task:"OTA rate parity audit across all channels", pic:"Revenue Manager", deadline:"2026-02-15", status:"completed", priority:"high", financialImpact:"Rate leakage assessment" },
        { id:"AI-J02", task:"January management report to Owner", pic:"AFC", deadline:"2026-02-12", status:"completed", priority:"high", financialImpact:"Governance" },
      ]
    }
  ]
};
