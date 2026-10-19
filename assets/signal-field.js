(() => {
  "use strict";

  const rawCodexUsage = [
    { date: "2025-08-30", tokens: 92706560 },
    { date: "2025-08-31", tokens: 39189573 },
    { date: "2025-09-01", tokens: 1272864 },
    { date: "2025-09-02", tokens: 17376522 },
    { date: "2025-09-03", tokens: 3031777 },
    { date: "2025-09-04", tokens: 46161162 },
    { date: "2025-09-05", tokens: 53218259 },
    { date: "2025-09-06", tokens: 91803672 },
    { date: "2025-09-07", tokens: 34871003 },
    { date: "2025-09-08", tokens: 52311085 },
    { date: "2025-09-09", tokens: 6929142 },
    { date: "2025-09-10", tokens: 34231572 },
    { date: "2025-09-11", tokens: 51809462 },
    { date: "2025-09-12", tokens: 12639304 },
    { date: "2025-09-13", tokens: 51397292 },
    { date: "2025-09-14", tokens: 116213397 },
    { date: "2025-09-15", tokens: 23740507 },
    { date: "2025-09-16", tokens: 81911076 },
    { date: "2025-09-17", tokens: 96011352 },
    { date: "2025-09-18", tokens: 127951134 },
    { date: "2025-09-19", tokens: 89856512 },
    { date: "2025-09-20", tokens: 94337248 },
    { date: "2025-09-21", tokens: 15413318 },
    { date: "2025-09-22", tokens: 44984739 },
    { date: "2025-09-23", tokens: 20049215 },
    { date: "2025-09-24", tokens: 57607259 },
    { date: "2025-09-25", tokens: 102856300 },
    { date: "2025-09-26", tokens: 153179795 },
    { date: "2025-09-27", tokens: 7751254 },
    { date: "2025-09-28", tokens: 74921357 },
    { date: "2025-09-29", tokens: 96159931 },
    { date: "2025-09-30", tokens: 240416 },
    { date: "2025-10-01", tokens: 0, designatedZero: true },
    { date: "2025-10-02", tokens: 0, designatedZero: true },
    { date: "2025-10-03", tokens: 262434365 },
    { date: "2025-10-04", tokens: 23947594 },
    { date: "2025-10-05", tokens: 84111510 },
    { date: "2025-10-06", tokens: 101432965 },
    { date: "2025-10-07", tokens: 55662638 },
    { date: "2025-10-08", tokens: 71244323 },
    { date: "2025-10-09", tokens: 43624555 },
    { date: "2025-10-10", tokens: 91935558 },
    { date: "2025-10-11", tokens: 127596628 },
    { date: "2025-10-12", tokens: 32423564 },
    { date: "2025-10-13", tokens: 74057881 },
    { date: "2025-10-14", tokens: 62449306 },
    { date: "2025-10-15", tokens: 41941048 },
    { date: "2025-10-16", tokens: 125854999 },
    { date: "2025-10-17", tokens: 98192886 },
    { date: "2025-10-18", tokens: 65400459 },
    { date: "2025-10-19", tokens: 66237235 },
    { date: "2025-10-20", tokens: 137609583 },
    { date: "2025-10-21", tokens: 153264248 },
    { date: "2025-10-22", tokens: 60918837 },
    { date: "2025-10-23", tokens: 97622682 },
    { date: "2025-10-24", tokens: 109296055 },
    { date: "2025-10-25", tokens: 79703175 },
    { date: "2025-10-26", tokens: 45267605 },
    { date: "2025-10-27", tokens: 184011365 },
    { date: "2025-10-28", tokens: 267872874 },
    { date: "2025-10-29", tokens: 88419355 },
    { date: "2025-10-30", tokens: 31100839 },
    { date: "2025-10-31", tokens: 56325434 },
    { date: "2025-11-01", tokens: 64167713 },
    { date: "2025-11-02", tokens: 45729400 },
    { date: "2025-11-03", tokens: 119274962 },
    { date: "2025-11-04", tokens: 244897704 },
    { date: "2025-11-05", tokens: 250109298 },
    { date: "2025-11-06", tokens: 94897576 },
    { date: "2025-11-07", tokens: 126176460 },
    { date: "2025-11-08", tokens: 197354447 },
    { date: "2025-11-09", tokens: 159339208 },
    { date: "2025-11-10", tokens: 104253318 },
    { date: "2025-11-11", tokens: 296717764 },
    { date: "2025-11-12", tokens: 112975543 },
    { date: "2025-11-13", tokens: 305787345 },
    { date: "2025-11-14", tokens: 211015235 },
    { date: "2025-11-15", tokens: 210148606 },
    { date: "2025-11-16", tokens: 180160321 },
    { date: "2025-11-17", tokens: 171604448 },
    { date: "2025-11-18", tokens: 268162304 },
    { date: "2025-11-19", tokens: 86023011 },
    { date: "2025-11-20", tokens: 95079241 },
    { date: "2025-11-21", tokens: 88220524 },
    { date: "2025-11-22", tokens: 22689075 },
    { date: "2025-11-23", tokens: 44014409 },
    { date: "2025-11-24", tokens: 134418244 },
    { date: "2025-11-25", tokens: 103410292 },
    { date: "2025-11-26", tokens: 58116794 },
    { date: "2025-11-27", tokens: 140606088 },
    { date: "2025-11-28", tokens: 152058779 },
    { date: "2025-11-29", tokens: 113365219 },
    { date: "2025-11-30", tokens: 63199885 },
    { date: "2025-12-01", tokens: 130799288 },
    { date: "2025-12-02", tokens: 160453277 },
    { date: "2025-12-03", tokens: 36744677 },
    { date: "2025-12-04", tokens: 87387530 },
    { date: "2025-12-05", tokens: 70374729 },
    { date: "2025-12-06", tokens: 29449103 },
    { date: "2025-12-07", tokens: 57273439 },
    { date: "2025-12-08", tokens: 92528900 },
    { date: "2025-12-09", tokens: 100396907 },
    { date: "2025-12-10", tokens: 91216811 },
    { date: "2025-12-11", tokens: 111279712 },
    { date: "2025-12-12", tokens: 106270274 },
    { date: "2025-12-13", tokens: 143963262 },
    { date: "2025-12-14", tokens: 104422499 },
    { date: "2025-12-15", tokens: 125158914 },
    { date: "2025-12-16", tokens: 98197390 },
    { date: "2025-12-17", tokens: 63626807 },
    { date: "2025-12-18", tokens: 90893845 },
    { date: "2025-12-19", tokens: 111389930 },
    { date: "2025-12-20", tokens: 119062420 },
    { date: "2025-12-21", tokens: 73441885 },
    { date: "2025-12-22", tokens: 82923700 },
    { date: "2025-12-23", tokens: 98720886 },
    { date: "2025-12-24", tokens: 49739043 },
    { date: "2025-12-25", tokens: 74638106 },
    { date: "2025-12-26", tokens: 113044505 },
    { date: "2025-12-27", tokens: 51889807 },
    { date: "2025-12-28", tokens: 13722553 },
    { date: "2025-12-29", tokens: 102315975 },
    { date: "2025-12-30", tokens: 82600835 },
    { date: "2025-12-31", tokens: 37765309 },
    { date: "2026-01-01", tokens: 135657987 },
    { date: "2026-01-02", tokens: 30155594 },
    { date: "2026-01-03", tokens: 132412900 },
    { date: "2026-01-04", tokens: 72997061 },
    { date: "2026-01-05", tokens: 20995260 },
    { date: "2026-01-06", tokens: 57678599 },
    { date: "2026-01-07", tokens: 15746591 },
    { date: "2026-01-08", tokens: 52772623 },
    { date: "2026-01-09", tokens: 102182608 },
    { date: "2026-01-10", tokens: 61790005 },
    { date: "2026-01-11", tokens: 107484366 },
    { date: "2026-01-12", tokens: 76029044 },
    { date: "2026-01-13", tokens: 32127722 },
    { date: "2026-01-14", tokens: 114217043 },
    { date: "2026-01-15", tokens: 54408961 },
    { date: "2026-01-16", tokens: 25567126 },
    { date: "2026-01-17", tokens: 71942953 },
    { date: "2026-01-18", tokens: 75513009 },
    { date: "2026-01-19", tokens: 21328841 },
    { date: "2026-01-20", tokens: 35172693 },
    { date: "2026-01-21", tokens: 28332741 },
    { date: "2026-01-22", tokens: 25774836 },
    { date: "2026-01-23", tokens: 106436050 },
    { date: "2026-01-24", tokens: 65178802 },
    { date: "2026-01-25", tokens: 62518846 },
    { date: "2026-01-26", tokens: 64888018 },
    { date: "2026-01-27", tokens: 95022921 },
    { date: "2026-01-28", tokens: 45941214 },
    { date: "2026-01-29", tokens: 50519298 },
    { date: "2026-01-30", tokens: 94717936 },
    { date: "2026-01-31", tokens: 42765323 },
    { date: "2026-02-01", tokens: 32531671 },
    { date: "2026-02-02", tokens: 146155928 },
    { date: "2026-02-03", tokens: 39655714 },
    { date: "2026-02-04", tokens: 0, designatedZero: true },
    { date: "2026-02-05", tokens: 19376286 },
    { date: "2026-02-06", tokens: 49561635 },
    { date: "2026-02-07", tokens: 86092190 },
    { date: "2026-02-08", tokens: 9658610 },
    { date: "2026-02-09", tokens: 81023878 },
    { date: "2026-02-10", tokens: 47557102 },
    { date: "2026-02-11", tokens: 46984154 },
    { date: "2026-02-12", tokens: 66957198 },
    { date: "2026-02-13", tokens: 197304730 },
    { date: "2026-02-14", tokens: 100191326 },
    { date: "2026-02-15", tokens: 68379805 },
    { date: "2026-02-16", tokens: 130407564 },
    { date: "2026-02-17", tokens: 101600400 },
    { date: "2026-02-18", tokens: 59764861 },
    { date: "2026-02-19", tokens: 218154984 },
    { date: "2026-02-20", tokens: 36736588 },
    { date: "2026-02-21", tokens: 23733546 },
    { date: "2026-02-22", tokens: 71794348 },
    { date: "2026-02-23", tokens: 0, designatedZero: true },
    { date: "2026-02-24", tokens: 97659506 },
    { date: "2026-02-25", tokens: 39638232 },
    { date: "2026-02-26", tokens: 40020195 },
    { date: "2026-02-27", tokens: 12234285 },
    { date: "2026-02-28", tokens: 44694410 },
    { date: "2026-03-01", tokens: 41581501 },
    { date: "2026-03-02", tokens: 109481761 },
    { date: "2026-03-03", tokens: 115801098 },
    { date: "2026-03-04", tokens: 43842755 },
    { date: "2026-03-05", tokens: 15821374 },
    { date: "2026-03-06", tokens: 27904949 },
    { date: "2026-03-07", tokens: 5750132 },
    { date: "2026-03-08", tokens: 15201276 },
    { date: "2026-03-09", tokens: 46790681 },
    { date: "2026-03-10", tokens: 47532485 },
    { date: "2026-03-11", tokens: 112407495 },
    { date: "2026-03-12", tokens: 25606007 },
    { date: "2026-03-13", tokens: 39767183 },
    { date: "2026-03-14", tokens: 30393532 },
    { date: "2026-03-15", tokens: 73054864 },
    { date: "2026-03-16", tokens: 71702681 },
    { date: "2026-03-17", tokens: 101354447 },
    { date: "2026-03-18", tokens: 66481787 },
    { date: "2026-03-19", tokens: 44800720 },
    { date: "2026-03-20", tokens: 183921184 },
    { date: "2026-03-21", tokens: 33240490 },
    { date: "2026-03-22", tokens: 31875219 },
    { date: "2026-03-23", tokens: 95569790 },
    { date: "2026-03-24", tokens: 0, designatedZero: true },
    { date: "2026-03-25", tokens: 62099352 },
    { date: "2026-03-26", tokens: 181777347 },
    { date: "2026-03-27", tokens: 73179032 },
    { date: "2026-03-28", tokens: 171558995 },
    { date: "2026-03-29", tokens: 62819345 },
    { date: "2026-03-30", tokens: 14950463 },
    { date: "2026-03-31", tokens: 326535 },
    { date: "2026-04-01", tokens: 910362 },
    { date: "2026-04-02", tokens: 84833230 },
    { date: "2026-04-03", tokens: 100392993 },
    { date: "2026-04-04", tokens: 40815208 },
    { date: "2026-04-05", tokens: 105012308 },
    { date: "2026-04-06", tokens: 101161235 },
    { date: "2026-04-07", tokens: 172092763 },
    { date: "2026-04-08", tokens: 74393830 },
    { date: "2026-04-09", tokens: 93539798 },
    { date: "2026-04-10", tokens: 149410625 },
    { date: "2026-04-11", tokens: 76519538 },
    { date: "2026-04-12", tokens: 106098972 },
    { date: "2026-04-13", tokens: 13904515 },
    { date: "2026-04-14", tokens: 144697479 },
    { date: "2026-04-15", tokens: 59186881 },
    { date: "2026-04-16", tokens: 38076403 },
    { date: "2026-04-17", tokens: 97598979 },
    { date: "2026-04-18", tokens: 14290005 },
    { date: "2026-04-19", tokens: 0, designatedZero: true },
    { date: "2026-04-20", tokens: 0, designatedZero: true },
    { date: "2026-04-21", tokens: 0, designatedZero: true },
    { date: "2026-04-22", tokens: 0, designatedZero: true },
    { date: "2026-04-23", tokens: 27349917 },
    { date: "2026-04-24", tokens: 96208501 },
    { date: "2026-04-25", tokens: 29015854 },
    { date: "2026-04-26", tokens: 6017805 },
    { date: "2026-04-27", tokens: 0, designatedZero: true },
    { date: "2026-04-28", tokens: 67424465 },
    { date: "2026-04-29", tokens: 67431470 },
    { date: "2026-04-30", tokens: 18276100 },
    { date: "2026-05-01", tokens: 128508336 },
    { date: "2026-05-02", tokens: 287639602 },
    { date: "2026-05-03", tokens: 179879149 },
    { date: "2026-05-04", tokens: 218123702 },
    { date: "2026-05-05", tokens: 169707891 },
    { date: "2026-05-06", tokens: 212036543 },
    { date: "2026-05-07", tokens: 67065447 },
    { date: "2026-05-08", tokens: 5802865 },
    { date: "2026-05-09", tokens: 121626847 },
    { date: "2026-05-10", tokens: 84412527 },
    { date: "2026-05-11", tokens: 110099070 },
    { date: "2026-05-12", tokens: 7773712 },
    { date: "2026-05-13", tokens: 26188516 },
    { date: "2026-05-14", tokens: 155907789 },
    { date: "2026-05-15", tokens: 41255858 },
    { date: "2026-05-16", tokens: 86083504 },
    { date: "2026-05-17", tokens: 83387080 },
    { date: "2026-05-18", tokens: 95517556 },
    { date: "2026-05-19", tokens: 163251747 },
    { date: "2026-05-20", tokens: 171504861 },
    { date: "2026-05-21", tokens: 101961609 },
    { date: "2026-05-22", tokens: 122043423 },
    { date: "2026-05-23", tokens: 145215460 },
    { date: "2026-05-24", tokens: 90122768 },
    { date: "2026-05-25", tokens: 56521146 },
    { date: "2026-05-26", tokens: 71148619 },
    { date: "2026-05-27", tokens: 72337446 },
    { date: "2026-05-28", tokens: 57286472 },
    { date: "2026-05-29", tokens: 133625102 },
    { date: "2026-05-30", tokens: 103748998 },
    { date: "2026-05-31", tokens: 132284726 },
    { date: "2026-06-01", tokens: 139192313 },
    { date: "2026-06-02", tokens: 28022391 },
    { date: "2026-06-03", tokens: 82062987 },
    { date: "2026-06-04", tokens: 60573986 },
    { date: "2026-06-05", tokens: 110232409 },
    { date: "2026-06-06", tokens: 1945385 },
    { date: "2026-06-07", tokens: 0, designatedZero: true },
    { date: "2026-06-08", tokens: 0, designatedZero: true },
    { date: "2026-06-09", tokens: 43834919 },
    { date: "2026-06-10", tokens: 18661327 },
    { date: "2026-06-11", tokens: 206118004 },
    { date: "2026-06-12", tokens: 204438032 },
    { date: "2026-06-13", tokens: 1636231 },
    { date: "2026-06-14", tokens: 33542348 },
    { date: "2026-06-15", tokens: 335221616 },
    { date: "2026-06-16", tokens: 273308302 },
    { date: "2026-06-17", tokens: 303292274 },
    { date: "2026-06-18", tokens: 302039872 },
    { date: "2026-06-19", tokens: 181294148 },
    { date: "2026-06-20", tokens: 149625916 },
    { date: "2026-06-21", tokens: 135742848 },
    { date: "2026-06-22", tokens: 223915765 },
    { date: "2026-06-23", tokens: 330919486 },
    { date: "2026-06-24", tokens: 87329987 },
    { date: "2026-06-25", tokens: 327292654 },
    { date: "2026-06-26", tokens: 125175005 },
    { date: "2026-06-27", tokens: 35066602 },
    { date: "2026-06-28", tokens: 111078399 },
    { date: "2026-06-29", tokens: 190351340 },
    { date: "2026-06-30", tokens: 279230431 },
    { date: "2026-07-01", tokens: 348612851 },
    { date: "2026-07-02", tokens: 138762296 },
    { date: "2026-07-03", tokens: 100852085 },
    { date: "2026-07-04", tokens: 246399113 },
    { date: "2026-07-05", tokens: 371149198 },
    { date: "2026-07-06", tokens: 130739434 },
    { date: "2026-07-07", tokens: 69052102 },
    { date: "2026-07-08", tokens: 27737196 },
    { date: "2026-07-09", tokens: 79701996 },
    { date: "2026-07-10", tokens: 528886879 },
    { date: "2026-07-11", tokens: 411674215 },
    { date: "2026-07-12", tokens: 532265101 },
    { date: "2026-07-13", tokens: 672123338 },
    { date: "2026-07-14", tokens: 488745793 },
    { date: "2026-07-15", tokens: 640127740 },
    { date: "2026-07-16", tokens: 621658594 },
    { date: "2026-07-17", tokens: 1782168715 },
    { date: "2026-07-18", tokens: 611618684 },
    { date: "2026-07-19", tokens: 1392502517 },
    { date: "2026-07-20", tokens: 246848259 },
    { date: "2026-07-21", tokens: 429222343 },
    { date: "2026-07-22", tokens: 382825553 },
    { date: "2026-07-23", tokens: 972318542 },
    { date: "2026-07-24", tokens: 264048487 },
    { date: "2026-07-25", tokens: 559154905 },
    { date: "2026-07-26", tokens: 859738616 },
    { date: "2026-07-27", tokens: 1088370933 },
    { date: "2026-07-28", tokens: 1679439520 },
    { date: "2026-07-29", tokens: 957973650 },
    { date: "2026-07-30", tokens: 639690395 },
    { date: "2026-07-31", tokens: 769661704 },
    { date: "2026-08-01", tokens: 265473083 },
    { date: "2026-08-02", tokens: 1312951449 },
    { date: "2026-08-03", tokens: 1282054348 },
    { date: "2026-08-04", tokens: 984084687 },
    { date: "2026-08-05", tokens: 93049822 },
    { date: "2026-08-06", tokens: 143237587 },
    { date: "2026-08-07", tokens: 228672768 },
    { date: "2026-08-08", tokens: 1037195855 },
    { date: "2026-08-09", tokens: 1160106124 },
    { date: "2026-08-10", tokens: 1418220870 },
    { date: "2026-08-11", tokens: 2983117301 },
    { date: "2026-08-12", tokens: 1252983282 },
    { date: "2026-08-13", tokens: 256765334 },
    { date: "2026-08-14", tokens: 0, designatedZero: true },
    { date: "2026-08-15", tokens: 279061 },
    { date: "2026-08-16", tokens: 0, designatedZero: true },
    { date: "2026-08-17", tokens: 0, designatedZero: true },
    { date: "2026-08-18", tokens: 291301 },
    { date: "2026-08-19", tokens: 0, designatedZero: true },
    { date: "2026-08-20", tokens: 260808886 },
    { date: "2026-08-21", tokens: 0, designatedZero: true },
    { date: "2026-08-22", tokens: 9366097 },
    { date: "2026-08-23", tokens: 9674161 },
    { date: "2026-08-24", tokens: 101208961 },
    { date: "2026-08-25", tokens: 75753608 },
    { date: "2026-08-26", tokens: 62916829 },
    { date: "2026-08-27", tokens: 126823336 },
    { date: "2026-08-28", tokens: 149590324 },
    { date: "2026-08-29", tokens: 905341 },
    { date: "2026-08-30", tokens: 80161413 },
    { date: "2026-08-31", tokens: 112317366 },
    { date: "2026-09-01", tokens: 85318516 },
    { date: "2026-09-02", tokens: 3709050 },
    { date: "2026-09-03", tokens: 0, designatedZero: true },
    { date: "2026-09-04", tokens: 740166637 },
    { date: "2026-09-05", tokens: 448143478 },
    { date: "2026-09-06", tokens: 106797517 },
    { date: "2026-09-07", tokens: 0, designatedZero: true },
    { date: "2026-09-08", tokens: 167907624 },
    { date: "2026-09-09", tokens: 31377095 },
    { date: "2026-09-10", tokens: 80025581 },
    { date: "2026-09-11", tokens: 10449219 },
    { date: "2026-09-12", tokens: 57557215 },
    { date: "2026-09-13", tokens: 106142752 },
    { date: "2026-09-14", tokens: 41914430 },
    { date: "2026-09-15", tokens: 5261125 },
    { date: "2026-09-16", tokens: 3667790 },
    { date: "2026-09-17", tokens: 2563476 },
    { date: "2026-09-18", tokens: 6956523 },
    { date: "2026-09-19", tokens: 107356062 },
    { date: "2026-09-20", tokens: 191809317 },
    { date: "2026-09-21", tokens: 81660554 },
    { date: "2026-09-22", tokens: 105232754 },
    { date: "2026-09-23", tokens: 114203103 },
    { date: "2026-09-24", tokens: 233108987 },
    { date: "2026-09-25", tokens: 242849740 },
    { date: "2026-09-26", tokens: 180102757 },
    { date: "2026-09-27", tokens: 142923059 },
    { date: "2026-09-28", tokens: 193219315 },
    { date: "2026-09-29", tokens: 32202240 },
    { date: "2026-09-30", tokens: 246430403 },
    { date: "2026-10-01", tokens: 146451516 },
    { date: "2026-10-02", tokens: 229695757 },
    { date: "2026-10-03", tokens: 397036248 },
    { date: "2026-10-04", tokens: 332696817 },
    { date: "2026-10-05", tokens: 531528322 },
    { date: "2026-10-06", tokens: 272868296 },
    { date: "2026-10-07", tokens: 360530102 },
    { date: "2026-10-08", tokens: 332953621 },
    { date: "2026-10-09", tokens: 452652027 },
    { date: "2026-10-10", tokens: 346608338 },
    { date: "2026-10-11", tokens: 960529329 },
    { date: "2026-10-12", tokens: 354705030 },
    { date: "2026-10-13", tokens: 392300852 },
    { date: "2026-10-14", tokens: 318335754 },
    { date: "2026-10-15", tokens: 296870681 },
    { date: "2026-10-16", tokens: 860923003 },
    { date: "2026-10-17", tokens: 528340635 },
    { date: "2026-10-18", tokens: 431732645 }
  ];
  const codexUsage = rawCodexUsage.map(day => ({
    ...day,
    millions: day.tokens === null ? null : day.tokens / 1000000
  }));

  const field = document.querySelector("[data-codex-field]");
  if (!field) return;

  const canvas = field.querySelector("[data-signal-canvas]");
  const visual = field.querySelector("[data-signal-visual]");
  const tooltip = field.querySelector("[data-signal-tooltip]");
  const tooltipDate = field.querySelector("[data-signal-tooltip-date]");
  const tooltipValue = field.querySelector("[data-signal-tooltip-value]");
  const tooltipNote = field.querySelector("[data-signal-tooltip-note]");
  const motionToggle = field.querySelector("[data-signal-motion]");
  const liveStatus = field.querySelector("[data-signal-live]");
  const tableBody = field.querySelector("[data-signal-table] tbody");
  const context = canvas?.getContext("2d", { alpha: true });
  const heatLayer = document.createElement("canvas");
  const heatContext = heatLayer.getContext("2d");

  if (!canvas || !visual || !tooltip || !motionToggle || !context || !heatContext) {
    field.classList.add("signal-field--unavailable");
    return;
  }

  const snapshotMode = new URLSearchParams(window.location.search).has("snapshot");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const dayMs = 86400000;
  const weekdays = ["M", "T", "W", "T", "F", "S", "S"];
  const monthFormat = new Intl.DateTimeFormat("en-US", { month: "short" });
  const dateFormat = new Intl.DateTimeFormat("en-US", { month: "long", day: "numeric", year: "numeric" });
  const exactTokenFormat = new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 });
  const compactFormat = new Intl.NumberFormat("en-US", { maximumFractionDigits: 1 });

  let dpr = Math.min(window.devicePixelRatio || 1, 2);
  let width = 0;
  let height = 0;
  let pausedByUser = snapshotMode;
  let inViewport = !("IntersectionObserver" in window);
  let particles = [];
  let sparks = [];
  let cells = [];
  let cellByKey = new Map();
  let hotCells = [];
  let animationId = 0;
  let resizeId = 0;
  let lastTime = performance.now();
  let keyboardIndex = -1;
  let activeCell = null;
  let palette;
  let pointer = { x: -9999, y: -9999, active: false, speed: 0, influence: 0, lastMove: -Infinity };
  let layout = { left: 46, top: 38, right: 14, bottom: 25, cellW: 10, cellH: 22, weeks: 46 };

  const reportedUsage = codexUsage.filter(day => day.tokens !== null && !day.designatedZero);
  const totalTokens = reportedUsage.reduce((sum, day) => sum + day.tokens, 0);
  const reportedDays = reportedUsage.length;
  const designatedZeroDays = codexUsage.filter(day => day.designatedZero).length;
  const averageTokens = totalTokens / codexUsage.length;
  const averageMillions = averageTokens / 1000000;
  const sortedValues = [...reportedUsage].sort((a, b) => b.tokens - a.tokens);
  const peakDay = sortedValues[0];
  const maxValue = peakDay.millions;
  const rankByDate = new Map(sortedValues.map((day, index) => [day.date, index + 1]));

  const parseLocalDate = iso => {
    const [year, month, day] = iso.split("-").map(Number);
    return new Date(year, month - 1, day, 12);
  };

  const firstDate = parseLocalDate(codexUsage[0].date);
  const lastDate = parseLocalDate(codexUsage[codexUsage.length - 1].date);
  const mondayIndex = date => (date.getDay() + 6) % 7;
  const gridStart = new Date(firstDate);
  gridStart.setDate(gridStart.getDate() - mondayIndex(gridStart));
  const weeks = Math.floor((lastDate - gridStart) / dayMs / 7) + 1;

  function formatValue(day) {
    if (day.tokens === null) return "No usage bucket returned";
    return `${exactTokenFormat.format(day.tokens)} tokens`;
  }

  function formatCompactTokens(tokens) {
    if (tokens >= 1000000000) return `${compactFormat.format(tokens / 1000000000)}B`;
    if (tokens >= 1000000) return `${compactFormat.format(tokens / 1000000)}M`;
    if (tokens >= 1000) return `${compactFormat.format(tokens / 1000)}K`;
    return exactTokenFormat.format(tokens);
  }

  function setText(selector, value) {
    const element = field.querySelector(selector);
    if (element) element.textContent = value;
  }

  function populateSummary() {
    const dateRange = `${dateFormat.format(firstDate)} through ${dateFormat.format(lastDate)}`;
    const coverage = `${reportedDays} days have recorded usage; ${designatedZeroDays} days are designated zero. Older recorded values are preserved from the previous snapshot.`;
    setText("[data-signal-total]", formatCompactTokens(totalTokens));
    setText("[data-signal-peak]", formatCompactTokens(peakDay.tokens));
    setText("[data-signal-average]", formatCompactTokens(averageTokens));
    setText("[data-signal-reported]", String(reportedDays));
    setText("[data-signal-days]", String(codexUsage.length));
    setText("[data-signal-range]", `${dateRange}.`);
    setText("[data-signal-coverage]", coverage);
    setText("[data-signal-legend-max]", `${formatCompactTokens(peakDay.tokens)} peak`);
    canvas.setAttribute("aria-label", `Interactive calendar of daily Codex token usage from ${dateRange}. ${coverage} Focus the field and use arrow keys to explore dates.`);
  }

  function populateAccessibleTable() {
    if (!tableBody) return;
    const fragment = document.createDocumentFragment();
    codexUsage.forEach(day => {
      const row = document.createElement("tr");
      const date = document.createElement("td");
      const value = document.createElement("td");
      date.textContent = dateFormat.format(parseLocalDate(day.date));
      value.textContent = formatValue(day);
      row.append(date, value);
      fragment.append(row);
    });
    tableBody.replaceChildren(fragment);
  }

  function cssValue(name, fallback) {
    return getComputedStyle(field).getPropertyValue(name).trim() || fallback;
  }

  function parseHex(value, fallback) {
    const normalized = value.trim().replace("#", "");
    const hex = normalized.length === 3
      ? normalized.split("").map(character => character + character).join("")
      : normalized;
    if (!/^[0-9a-f]{6}$/i.test(hex)) return fallback;
    return [
      Number.parseInt(hex.slice(0, 2), 16),
      Number.parseInt(hex.slice(2, 4), 16),
      Number.parseInt(hex.slice(4, 6), 16)
    ];
  }

  const rgba = (color, alpha) => `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${alpha})`;

  function mixColor(a, b, amount) {
    return a.map((channel, index) => Math.round(channel + (b[index] - channel) * amount));
  }

  function readPalette() {
    const light = document.documentElement.dataset.theme === "light";
    palette = {
      light,
      zero: parseHex(cssValue("--sf-data-zero", "#657589"), [101, 117, 137]),
      stops: [
        parseHex(cssValue("--sf-data-low", "#8778d8"), [135, 120, 216]),
        parseHex(cssValue("--sf-data-mid", "#648fd5"), [100, 143, 213]),
        parseHex(cssValue("--sf-data-high", "#67d6e8"), [103, 214, 232]),
        parseHex(cssValue("--sf-data-peak", "#e7fbff"), [231, 251, 255])
      ],
      label: cssValue("--sf-faint", "#8491a0"),
      grid: cssValue("--sf-grid", "rgba(103, 214, 232, .09)"),
      pointer: cssValue("--sf-pointer", "rgba(103, 214, 232, .08)")
    };
  }

  function colorFor(intensity, alpha) {
    const scaled = Math.max(0, Math.min(1, intensity)) * (palette.stops.length - 1);
    const index = Math.min(palette.stops.length - 2, Math.floor(scaled));
    return rgba(mixColor(palette.stops[index], palette.stops[index + 1], scaled - index), alpha);
  }

  function intensityFor(value) {
    if (value === null || value <= 0) return 0;
    return Math.pow(value / maxValue, .38);
  }

  function mulberry32(seed) {
    return () => {
      let value = seed += 0x6D2B79F5;
      value = Math.imul(value ^ value >>> 15, value | 1);
      value ^= value + Math.imul(value ^ value >>> 7, value | 61);
      return ((value ^ value >>> 14) >>> 0) / 4294967296;
    };
  }

  function hashDate(iso) {
    let hash = 2166136261;
    for (let index = 0; index < iso.length; index += 1) {
      hash ^= iso.charCodeAt(index);
      hash = Math.imul(hash, 16777619);
    }
    return hash >>> 0;
  }

  function motionAllowed() {
    return !snapshotMode && !pausedByUser && !reducedMotion.matches && inViewport && !document.hidden;
  }

  function resetParticles() {
    particles.forEach(particle => {
      particle.x = particle.baseX;
      particle.y = particle.baseY;
      particle.vx = 0;
      particle.vy = 0;
    });
    sparks = [];
    pointer.active = false;
    pointer.influence = 0;
  }

  function stopAnimation(renderStatic = false, resetToSeed = false) {
    if (animationId) cancelAnimationFrame(animationId);
    animationId = 0;
    if (renderStatic && width > 0 && height > 0) {
      if (resetToSeed) resetParticles();
      else {
        sparks = [];
        pointer.active = false;
        pointer.influence = 0;
      }
      draw(false);
    }
  }

  function scheduleResize() {
    if (resizeId) cancelAnimationFrame(resizeId);
    resizeId = requestAnimationFrame(() => {
      resizeId = 0;
      resize();
    });
  }

  function resize() {
    const rect = canvas.getBoundingClientRect();
    if (rect.width < 1 || rect.height < 1) return;
    stopAnimation(false);
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = rect.width;
    height = rect.height;
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    heatLayer.width = canvas.width;
    heatLayer.height = canvas.height;
    context.setTransform(dpr, 0, 0, dpr, 0, 0);
    heatContext.setTransform(dpr, 0, 0, dpr, 0, 0);

    const compact = width < 620;
    layout.left = compact ? 29 : 46;
    layout.right = compact ? 7 : 14;
    layout.top = compact ? 44 : 38;
    layout.bottom = compact ? 24 : 25;
    layout.weeks = weeks;
    layout.cellW = (width - layout.left - layout.right) / weeks;
    layout.cellH = (height - layout.top - layout.bottom) / 7;

    buildField();
    pointer.active = false;
    pointer.influence = 0;
    if (keyboardIndex >= 0) showKeyboardCell(keyboardIndex);
    else updateTooltip(null, { x: 0, y: 0 });
    ensureAnimation();
  }

  function buildField() {
    particles = [];
    sparks = [];
    cells = [];
    cellByKey = new Map();
    const motionScale = Math.max(.9, Math.min(1.55, layout.cellW / 10));

    codexUsage.forEach((day, index) => {
      const date = parseLocalDate(day.date);
      const dayOffset = Math.round((date - gridStart) / dayMs);
      const column = Math.floor(dayOffset / 7);
      const row = mondayIndex(date);
      const x = layout.left + (column + .5) * layout.cellW;
      const y = layout.top + (row + .5) * layout.cellH;
      const intensity = intensityFor(day.millions);
      const random = mulberry32(hashDate(day.date));
      const cell = {
        ...day,
        index,
        dateObject: date,
        column,
        row,
        x,
        y,
        intensity,
        rank: rankByDate.get(day.date),
        flowPhase: random() * Math.PI * 2,
        flowSpeed: .38 + random() * .34,
        flowDrift: (2.4 + intensity * 3.6) * motionScale,
        particleStart: particles.length
      };

      const dormant = day.tokens === null || day.tokens === 0;
      const count = dormant ? 1 : Math.round(3 + intensity * 18);
      const spreadX = Math.max(1.3, layout.cellW * .3);
      const spreadY = Math.max(3, layout.cellH * .3);

      for (let particleIndex = 0; particleIndex < count; particleIndex += 1) {
        const angle = random() * Math.PI * 2;
        const radius = Math.sqrt(random());
        const baseX = x + Math.cos(angle) * radius * spreadX;
        const baseY = y + Math.sin(angle) * radius * spreadY;
        const size = dormant ? .55 : .48 + random() * (1.08 + intensity * .85);
        particles.push({
          x: baseX,
          y: baseY,
          baseX,
          baseY,
          vx: 0,
          vy: 0,
          size,
          phase: random() * Math.PI * 2,
          speed: .68 + random() * .92,
          drift: (2.1 + random() * 3.8) * motionScale,
          intensity,
          dormant,
          cell
        });
      }

      cell.particleEnd = particles.length;
      cells.push(cell);
      cellByKey.set(`${column}:${row}`, cell);
    });

    hotCells = cells.filter(cell => cell.millions > 100);
    renderHeatLayer();
    draw(false);
  }

  function renderHeatLayer() {
    heatContext.clearRect(0, 0, width, height);
    heatContext.save();
    cells.forEach(cell => {
      if (cell.tokens === null || cell.tokens === 0) return;
      const radius = Math.max(3.2, Math.min(layout.cellH * .48, 3.5 + cell.intensity * 10));
      const gradient = heatContext.createRadialGradient(cell.x, cell.y, 0, cell.x, cell.y, radius);
      gradient.addColorStop(0, colorFor(cell.intensity, (palette.light ? .11 : .16) + cell.intensity * .2));
      gradient.addColorStop(.34, colorFor(cell.intensity, .06 + cell.intensity * .1));
      gradient.addColorStop(1, colorFor(cell.intensity, 0));
      heatContext.fillStyle = gradient;
      heatContext.beginPath();
      heatContext.arc(cell.x, cell.y, radius, 0, Math.PI * 2);
      heatContext.fill();
    });
    heatContext.restore();
  }

  function drawScaffolding() {
    context.save();
    context.font = "700 9px ui-sans-serif, system-ui, sans-serif";
    context.textAlign = "right";
    context.textBaseline = "middle";
    context.fillStyle = palette.label;

    weekdays.forEach((label, row) => {
      const y = layout.top + (row + .5) * layout.cellH;
      context.fillText(label, layout.left - 10, y);
    });

    let previousMonth = -1;
    let lastDrawnX = -999;
    cells.forEach(cell => {
      const month = cell.dateObject.getMonth();
      if (cell.dateObject.getDate() <= 7 && month !== previousMonth) {
        const x = layout.left + cell.column * layout.cellW;
        if (x - lastDrawnX > 22) {
          context.textAlign = "left";
          context.textBaseline = "alphabetic";
          context.fillText(monthFormat.format(cell.dateObject).toUpperCase(), x + 2, 19);
          context.strokeStyle = palette.grid;
          context.lineWidth = 1;
          context.beginPath();
          context.moveTo(x, layout.top - 5);
          context.lineTo(x, height - layout.bottom + 3);
          context.stroke();
          lastDrawnX = x;
        }
        previousMonth = month;
      }
    });
    context.restore();
  }

  function drawActiveAnchor(animate, now) {
    if (!activeCell) return;
    const pulse = animate ? (Math.sin(now * .006) + 1) * .5 : .55;
    const haloRadius = 8 + activeCell.intensity * 5 + pulse * 4;
    const coreRadius = 1.8 + activeCell.intensity * 1.15 + pulse * .8;
    const glow = context.createRadialGradient(
      activeCell.x,
      activeCell.y,
      0,
      activeCell.x,
      activeCell.y,
      haloRadius
    );

    context.save();
    context.globalCompositeOperation = palette.light ? "source-over" : "lighter";
    glow.addColorStop(0, colorFor(Math.max(.62, activeCell.intensity), .72));
    glow.addColorStop(.28, colorFor(activeCell.intensity, .3 + pulse * .16));
    glow.addColorStop(1, colorFor(activeCell.intensity, 0));
    context.fillStyle = glow;
    context.beginPath();
    context.arc(activeCell.x, activeCell.y, haloRadius, 0, Math.PI * 2);
    context.fill();

    context.shadowColor = colorFor(Math.max(.7, activeCell.intensity), .92);
    context.shadowBlur = 10 + pulse * 12;
    context.fillStyle = colorFor(Math.max(.72, activeCell.intensity), .96);
    context.beginPath();
    context.arc(activeCell.x, activeCell.y, coreRadius, 0, Math.PI * 2);
    context.fill();
    context.restore();
  }

  function updateParticle(particle, delta, time) {
    const cell = particle.cell;
    const sharedX = Math.sin(time * cell.flowSpeed + cell.flowPhase) * cell.flowDrift;
    const sharedY = Math.cos(time * cell.flowSpeed * .72 + cell.flowPhase) * cell.flowDrift * .78;
    const localX = Math.sin(time * particle.speed + particle.phase) * particle.drift
      + Math.sin(time * particle.speed * .37 + particle.phase * 1.73) * particle.drift * .34;
    const localY = Math.cos(time * particle.speed * .78 + particle.phase) * particle.drift * .78
      + Math.sin(time * particle.speed * .29 + particle.phase * .83) * particle.drift * .34;
    const targetX = particle.baseX + sharedX + localX;
    const targetY = particle.baseY + sharedY + localY;

    if (pointer.active) {
      const deltaX = particle.x - pointer.x;
      const deltaY = particle.y - pointer.y;
      const distanceSquared = deltaX * deltaX + deltaY * deltaY;
      const radius = Math.max(30, layout.cellH * 1.35);
      if (distanceSquared < radius * radius && distanceSquared > .001) {
        const distance = Math.sqrt(distanceSquared);
        const force = Math.pow(1 - distance / radius, 1.7);
        const speedBoost = Math.min(1.9, pointer.speed * .035);
        particle.vx += deltaX / distance * force * (.34 + speedBoost) * pointer.influence;
        particle.vy += deltaY / distance * force * (.34 + speedBoost) * pointer.influence;
      }
    }

    const spring = .16;
    particle.vx += (targetX - particle.x) * spring * delta;
    particle.vy += (targetY - particle.y) * spring * delta;
    particle.vx *= Math.pow(.86, delta);
    particle.vy *= Math.pow(.86, delta);
    particle.x += particle.vx * delta;
    particle.y += particle.vy * delta;
  }

  function maybeSpawnSpark() {
    if (sparks.length >= 24 || !hotCells.length || Math.random() > .045) return;
    const weighted = hotCells[Math.floor(Math.pow(Math.random(), .52) * hotCells.length)];
    if (Math.random() > .08 + weighted.intensity * .14) return;

    const angle = Math.random() * Math.PI * 2;
    const speed = .05 + Math.random() * .13;
    sparks.push({
      x: weighted.x + (Math.random() - .5) * layout.cellW * .35,
      y: weighted.y + (Math.random() - .5) * layout.cellH * .35,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed - .035,
      life: 1,
      decay: .006 + Math.random() * .01,
      size: .55 + Math.random() * 1.1,
      intensity: weighted.intensity
    });
  }

  function draw(animate, now = performance.now()) {
    const delta = Math.min(2.4, Math.max(.2, (now - lastTime) / 16.67));
    lastTime = now;
    context.clearRect(0, 0, width, height);
    drawScaffolding();
    context.drawImage(heatLayer, 0, 0, heatLayer.width, heatLayer.height, 0, 0, width, height);
    drawActiveAnchor(animate, now);

    context.save();
    context.globalCompositeOperation = palette.light ? "source-over" : "lighter";
    const time = now * .001;
    pointer.influence = pointer.active ? Math.max(0, 1 - (now - pointer.lastMove) / 850) : 0;
    if (pointer.influence <= 0) pointer.active = false;

    particles.forEach(particle => {
      if (animate) updateParticle(particle, delta, time);
      const twinkle = animate && !particle.dormant
        ? .58 + .11 * Math.sin(now * .00065 * particle.speed + particle.phase)
        : .58;
      const alpha = particle.dormant
        ? (palette.light ? .42 : .25)
        : (palette.light ? .34 + particle.intensity * .5 : .22 + particle.intensity * .68) * twinkle;
      context.fillStyle = particle.dormant
        ? rgba(palette.zero, alpha)
        : colorFor(particle.intensity, Math.max(.08, alpha));
      context.beginPath();
      context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      context.fill();
    });

    if (animate) maybeSpawnSpark();
    else sparks = [];

    for (let index = sparks.length - 1; index >= 0; index -= 1) {
      const spark = sparks[index];
      spark.x += spark.vx * delta;
      spark.y += spark.vy * delta;
      spark.vx *= .992;
      spark.vy *= .992;
      spark.life -= spark.decay * delta;
      if (spark.life <= 0) {
        sparks.splice(index, 1);
        continue;
      }
      context.fillStyle = colorFor(spark.intensity, Math.max(0, spark.life * .32));
      context.beginPath();
      context.arc(spark.x, spark.y, spark.size * spark.life, 0, Math.PI * 2);
      context.fill();
    }

    if (animate && pointer.active) {
      const gradient = context.createRadialGradient(pointer.x, pointer.y, 0, pointer.x, pointer.y, 31);
      gradient.addColorStop(0, palette.pointer);
      gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
      context.fillStyle = gradient;
      context.globalAlpha = pointer.influence;
      context.beginPath();
      context.arc(pointer.x, pointer.y, 31, 0, Math.PI * 2);
      context.fill();
      context.globalAlpha = 1;
    }

    context.restore();
    pointer.speed *= .84;
  }

  function animationFrame(now) {
    animationId = 0;
    if (!motionAllowed()) return;
    draw(true, now);
    ensureAnimation();
  }

  function ensureAnimation() {
    if (!animationId && motionAllowed()) {
      lastTime = performance.now();
      animationId = requestAnimationFrame(animationFrame);
    }
  }

  function pointFromEvent(event) {
    const rect = canvas.getBoundingClientRect();
    return {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top
    };
  }

  function cellAt(x, y) {
    const column = Math.floor((x - layout.left) / layout.cellW);
    const row = Math.floor((y - layout.top) / layout.cellH);
    if (column < 0 || column >= weeks || row < 0 || row > 6) return null;
    return cellByKey.get(`${column}:${row}`) || null;
  }

  function tooltipNoteFor(cell) {
    if (cell.tokens === null) return "No usage bucket was returned for this date; it is not treated as zero.";
    if (cell.designatedZero) return "Designated zero by Ariel; no usage bucket was returned for this date.";
    if (cell.tokens === 0) return "A reported zero-use day.";
    if (cell.rank === 1) return `Highest recorded day · ${(cell.millions / averageMillions).toFixed(1)}× the calendar-day average.`;
    if (cell.rank <= 5) {
      const ordinal = cell.rank === 2 ? "2nd" : cell.rank === 3 ? "3rd" : `${cell.rank}th`;
      return `Top-five day · ${ordinal} highest in the record.`;
    }
    return `${(cell.millions / averageMillions).toFixed(1)}× the calendar-day average · #${cell.rank} of ${reportedDays} recorded days.`;
  }

  function updateTooltip(cell, point, announce = false) {
    activeCell = cell;
    if (!cell) {
      tooltip.classList.remove("visible");
      tooltip.setAttribute("aria-hidden", "true");
      if (!motionAllowed() && width > 0 && height > 0) draw(false);
      return;
    }

    const note = tooltipNoteFor(cell);
    tooltipDate.textContent = dateFormat.format(cell.dateObject);
    tooltipValue.textContent = formatValue(cell);
    tooltipNote.textContent = note;

    const visualRect = visual.getBoundingClientRect();
    const tipWidth = tooltip.offsetWidth || 205;
    const tipHeight = tooltip.offsetHeight || 84;
    let left = point.x + 16;
    let top = point.y - tipHeight - 12;
    if (left + tipWidth > visualRect.width - 8) left = point.x - tipWidth - 16;
    if (top < 8) top = point.y + 17;
    left = Math.max(8, Math.min(visualRect.width - tipWidth - 8, left));
    top = Math.max(8, Math.min(visualRect.height - tipHeight - 8, top));
    tooltip.style.left = `${left}px`;
    tooltip.style.top = `${top}px`;
    tooltip.classList.add("visible");
    tooltip.setAttribute("aria-hidden", "false");
    if (!motionAllowed() && width > 0 && height > 0) draw(false);

    if (announce && liveStatus) {
      liveStatus.textContent = `${dateFormat.format(cell.dateObject)}: ${formatValue(cell)}. ${note}`;
    }
  }

  function showKeyboardCell(index) {
    keyboardIndex = Math.max(0, Math.min(cells.length - 1, index));
    const cell = cells[keyboardIndex];
    if (!cell) return;
    updateTooltip(cell, { x: cell.x, y: cell.y }, true);
  }

  function handlePointerMove(event) {
    const point = pointFromEvent(event);
    const previousX = pointer.active ? pointer.x : point.x;
    const previousY = pointer.active ? pointer.y : point.y;
    pointer.speed = Math.min(60, Math.hypot(point.x - previousX, point.y - previousY));
    pointer.x = point.x;
    pointer.y = point.y;
    pointer.active = motionAllowed() && (event.pointerType === "mouse" || event.buttons > 0);
    pointer.influence = pointer.active ? 1 : 0;
    pointer.lastMove = performance.now();
    updateTooltip(cellAt(point.x, point.y), point);
    ensureAnimation();
  }

  function handlePointerDown(event) {
    handlePointerMove(event);
    const point = pointFromEvent(event);
    const cell = cellAt(point.x, point.y);
    if (!cell) return;
    keyboardIndex = cell.index;
    updateTooltip(cell, point, true);
  }

  function handlePointerLeave() {
    pointer.active = false;
    pointer.influence = 0;
    pointer.x = -9999;
    pointer.y = -9999;
    if (document.activeElement === canvas && keyboardIndex >= 0) {
      showKeyboardCell(keyboardIndex);
    } else {
      updateTooltip(null, { x: 0, y: 0 });
    }
  }

  function handleKeydown(event) {
    if (!cells.length) return;
    let nextIndex = keyboardIndex < 0 ? cells.length - 1 : keyboardIndex;
    switch (event.key) {
      case "ArrowLeft": nextIndex -= 7; break;
      case "ArrowRight": nextIndex += 7; break;
      case "ArrowUp": nextIndex -= 1; break;
      case "ArrowDown": nextIndex += 1; break;
      case "Home": nextIndex = 0; break;
      case "End": nextIndex = cells.length - 1; break;
      case "Escape":
        keyboardIndex = -1;
        updateTooltip(null, { x: 0, y: 0 });
        if (liveStatus) liveStatus.textContent = "Date selection cleared.";
        event.preventDefault();
        return;
      default: return;
    }
    event.preventDefault();
    showKeyboardCell(nextIndex);
  }

  function updateMotionControl() {
    const preferenceBlocksMotion = reducedMotion.matches;
    motionToggle.hidden = snapshotMode;
    motionToggle.disabled = preferenceBlocksMotion;
    motionToggle.setAttribute("aria-pressed", String(!pausedByUser && !preferenceBlocksMotion));
    motionToggle.title = preferenceBlocksMotion ? "Motion is disabled by your reduced-motion setting." : "";
  }

  canvas.addEventListener("pointermove", handlePointerMove, { passive: true });
  canvas.addEventListener("pointerleave", handlePointerLeave);
  canvas.addEventListener("pointerdown", handlePointerDown, { passive: true });
  canvas.addEventListener("pointerup", () => { pointer.active = false; });
  canvas.addEventListener("pointercancel", handlePointerLeave);
  canvas.addEventListener("focus", () => {
    if (keyboardIndex < 0 && cells.length) showKeyboardCell(cells.length - 1);
  });
  canvas.addEventListener("blur", () => {
    keyboardIndex = -1;
    updateTooltip(null, { x: 0, y: 0 });
  });
  canvas.addEventListener("keydown", handleKeydown);

  motionToggle.addEventListener("click", () => {
    pausedByUser = !pausedByUser;
    updateMotionControl();
    if (pausedByUser) stopAnimation(true, false);
    else ensureAnimation();
  });

  reducedMotion.addEventListener?.("change", () => {
    updateMotionControl();
    if (reducedMotion.matches) stopAnimation(true, true);
    else ensureAnimation();
  });

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) stopAnimation(false);
    else ensureAnimation();
  });

  if ("IntersectionObserver" in window) {
    const visibilityObserver = new IntersectionObserver(entries => {
      const entry = entries[0];
      inViewport = Boolean(entry?.isIntersecting);
      if (inViewport) ensureAnimation();
      else stopAnimation(false);
    }, { threshold: .08 });
    visibilityObserver.observe(field);
  }

  if ("ResizeObserver" in window) {
    const resizeObserver = new ResizeObserver(scheduleResize);
    resizeObserver.observe(visual);
  } else {
    window.addEventListener("resize", scheduleResize, { passive: true });
  }
  window.addEventListener("codex-field:resize", scheduleResize);

  const themeObserver = new MutationObserver(mutations => {
    if (!mutations.some(mutation => mutation.attributeName === "data-theme")) return;
    readPalette();
    if (width > 0 && height > 0) {
      renderHeatLayer();
      draw(false);
      ensureAnimation();
    }
  });
  themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });

  populateSummary();
  populateAccessibleTable();
  readPalette();
  if (snapshotMode) field.classList.add("visible");
  updateMotionControl();
  resize();
})();
