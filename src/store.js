import { configureStore, createSlice } from '@reduxjs/toolkit'


let data1= createSlice({
  name : 'Epl',
  initialState : [
    {rank : 1, name : 'MNC', GP: 38, W: 29, D: 6, L: 3,F: 99,A: 26,GD: + 73,P: 93},
    {rank : 2, name : 'LIV', GP: 38, W: 28, D: 8, L: 2,F: 94,A: 26,GD: + 68,P: 92},
    {rank : 3, name : 'CHE', GP: 38, W: 21, D: 11, L: 6,F: 76,A: 33,GD: + 43,P: 74},
    {rank : 4, name : 'TOT', GP: 38, W: 22, D: 5, L: 11,F: 69,A: 40,GD: + 29,P: 71},
    {rank : 5, name : 'ARS', GP: 38, W: 22, D: 3, L: 13,F: 61,A: 48,GD: + 13,P: 69},
    {rank : 6, name : 'MAN', GP: 38, W: 16, D: 10, L: 12,F: 57,A: 57,GD: 0,P: 58},
    {rank : 7, name : 'WHU', GP: 38, W: 16, D: 8, L: 14,F: 60,A: 51,GD: + 9,P: 56},
    {rank : 8, name : 'LEI', GP: 38, W: 14, D: 10, L: 14,F: 62,A: 59,GD: + 3,P: 52},
    {rank : 9, name : 'BHA', GP: 38, W: 12, D: 15, L: 11,F: 42,A: 44,GD: -2,P: 51},
    {rank : 10, name : 'WOL', GP: 38, W: 15, D: 6, L: 17,F: 38,A: 43,GD: -5,P: 51},
    {rank : 11, name : 'NEW', GP: 38, W: 13, D: 10, L: 15,F: 44,A: 62,GD: -18,P: 49},
    {rank : 12, name : 'CRY', GP: 38, W: 11, D: 15, L: 12,F: 50,A: 46,GD: +4,P: 48},
    {rank : 13, name : 'BRE', GP: 38, W: 13, D: 7, L: 18,F: 48,A: 56,GD: -8,P: 46},
    {rank : 14, name : 'AVL', GP: 38, W: 13, D: 6, L: 19,F: 52,A: 54,GD: -2,P: 45},
    {rank : 15, name : 'SOU', GP: 38, W: 9, D: 13, L: 16,F: 43,A: 67,GD: -24,P: 40},
    {rank : 16, name : 'EVE', GP: 38, W: 11, D: 6, L: 21,F: 43,A: 66,GD: -23,P: 39},
    {rank : 17, name : 'LEE', GP: 38, W: 9, D: 11, L: 18,F: 42,A: 79,GD: -37,P: 38},
    {rank : 18, name : 'BUR', GP: 38, W: 7, D: 14, L: 17,F: 34,A: 53,GD: -19,P: 35},
    {rank : 19, name : 'WFD', GP: 38, W: 6, D: 5, L: 27,F: 34,A: 77,GD: -43,P: 23},
    {rank : 20, name : 'NWC', GP: 38, W: 5, D: 7, L: 26,F: 23,A: 84,GD: -61,P: 22},
  ]
})
let data2= createSlice({
  name : 'Laliga',
  initialState : [
    {rank : 1, name : 'RMA', GP: 38, W: 26, D: 8, L: 4,F: 80,A: 31,GD: + 49,P: 93},
    {rank : 2, name : 'BAR', GP: 38, W: 21, D: 10, L: 7,F: 68,A: 38,GD: + 30,P: 92},
    {rank : 3, name : 'ATL', GP: 38, W: 21, D: 8, L: 9,F: 65,A: 43,GD: + 22,P: 74},
    {rank : 4, name : 'SEV', GP: 38, W: 18, D: 16, L: 4,F: 53,A: 30,GD: + 23,P: 71},
    {rank : 5, name : 'BET', GP: 38, W: 19, D: 8, L: 11,F: 62,A: 40,GD: + 22,P: 69},
    {rank : 6, name : 'RSO', GP: 38, W: 17, D: 11, L: 10,F: 40,A: 37,GD: + 3,P: 58},
    {rank : 7, name : 'VIL', GP: 38, W: 16, D: 11, L: 11,F: 63,A: 37,GD: + 26,P: 56},
    {rank : 8, name : 'ATH', GP: 38, W: 14, D: 13, L: 11,F: 43,A: 36,GD: + 7,P: 52},
    {rank : 9, name : 'VAL', GP: 38, W: 11, D: 15, L: 12,F: 48,A: 53,GD: -5,P: 51},
    {rank : 10, name : 'VIL', GP: 38, W: 12, D: 11, L: 15,F: 37,A: 51,GD: -14,P: 51},
    {rank : 11, name : 'OSA', GP: 38, W: 12, D: 10, L: 16,F: 43,A: 43,GD: 0,P: 49},
    {rank : 12, name : 'CEL', GP: 38, W: 11, D: 9, L: 18,F: 39,A: 50,GD: -11,P: 48},
    {rank : 13, name : 'RAY', GP: 38, W: 11, D: 9, L: 18,F: 40,A: 52,GD: -12,P: 46},
    {rank : 14, name : 'ELC', GP: 38, W: 10, D: 12, L: 16,F: 40,A: 53,GD: -13,P: 45},
    {rank : 15, name : 'ESP', GP: 38, W: 8, D: 15, L: 15,F: 33,A: 41,GD: -8,P: 40},
    {rank : 16, name : 'GET', GP: 38, W: 10, D: 9, L: 19,F: 36,A: 63,GD: -27,P: 39},
    {rank : 17, name : 'MLL', GP: 38, W: 8, D: 15, L: 15,F: 35,A: 51,GD: -16,P: 38},
    {rank : 18, name : 'GRN', GP: 38, W: 8, D: 14, L: 16,F: 44,A: 61,GD: -17,P: 35},
    {rank : 19, name : 'LEV', GP: 38, W: 8, D: 11, L: 19,F: 51,A: 76,GD: -25,P: 23},
    {rank : 20, name : 'ALV', GP: 38, W: 8, D: 7, L: 23,F: 31,A: 65,GD: -34,P: 22},
  ]
})

let data3= createSlice({
  name : 'Bundes',
  initialState : [
    {rank : 1, name : 'MUN', GP: 34, W: 24, D: 5, L: 5,F: 97,A: 37,GD: + 60,P: 77},
    {rank : 2, name : 'DOR', GP: 34, W: 22, D: 3, L: 9,F: 85,A: 52,GD: + 33,P: 69},
    {rank : 3, name : 'LEV', GP: 34, W: 19, D: 7, L: 8,F: 80,A: 47,GD: + 33,P: 64},
    {rank : 4, name : 'RBL', GP: 34, W: 17, D: 7, L: 10,F: 72,A: 37,GD: + 35,P: 58},
    {rank : 5, name : 'FCU', GP: 34, W: 16, D: 9, L: 9,F: 50,A: 44,GD: + 6,P: 57},
    {rank : 6, name : 'SCF', GP: 34, W: 15, D: 10, L: 9,F: 58,A: 46,GD: + 12,P: 55},
    {rank : 7, name : 'COL', GP: 34, W: 14, D: 10, L: 10,F: 52,A: 49,GD: + 3,P: 52},
    {rank : 8, name : 'M05', GP: 34, W: 13, D: 7, L: 14,F: 50,A: 45,GD: + 5,P: 46},
    {rank : 9, name : 'HOF', GP: 34, W: 13, D: 7, L: 14,F: 58,A: 60,GD: -2,P: 46},
    {rank : 10, name : 'MON', GP: 34, W: 12, D: 9, L: 13,F: 54,A: 61,GD: -7,P: 45},
    {rank : 11, name : 'SGE', GP: 34, W: 10, D: 12, L: 12,F: 45,A: 49,GD: -4,P: 42},
    {rank : 12, name : 'WOB', GP: 34, W: 12, D: 6, L: 16,F: 43,A: 54,GD: -11,P: 42},
    {rank : 13, name : 'BOC', GP: 34, W: 12, D: 6, L: 16,F: 38,A: 52,GD: -14,P: 42},
    {rank : 14, name : 'AUG', GP: 34, W: 10, D: 8, L: 16,F: 39,A: 56,GD: -17,P: 38},
    {rank : 15, name : 'VFB', GP: 34, W: 7, D: 12, L: 15,F: 41,A: 59,GD: -18,P: 33},
    {rank : 16, name : 'BSC', GP: 34, W: 9, D: 6, L: 19,F: 37,A: 71,GD: -34,P: 33},
    {rank : 17, name : 'ABF', GP: 34, W: 5, D: 13, L: 16,F: 27,A: 53,GD: -26,P: 28},
    {rank : 18, name : 'SGF', GP: 34, W: 3, D: 9, L: 22,F: 28,A: 82,GD: -54,P: 18},
    {rank : 19, name : '', GP: 0, W: 0, D: 0, L: 0,F: 0,A: 0,GD: 0,P: 0},
    {rank : 20, name : '', GP: 0, W: 0, D: 0, L: 0,F: 0,A: 0,GD: 0,P: 0},
  ]
})
let data4= createSlice({
  name : 'SerieA',
  initialState : [
    {rank : 1, name : 'MIL', GP: 38, W: 26, D: 8, L: 4,F: 69,A: 31,GD: + 38,P: 86},
    {rank : 2, name : 'INT', GP: 38, W: 25, D: 9, L: 4,F: 84,A: 32,GD: + 52,P: 84},
    {rank : 3, name : 'NAP', GP: 38, W: 24, D: 7, L: 7,F: 74,A: 31,GD: + 43,P: 79},
    {rank : 4, name : 'JUV', GP: 38, W: 20, D: 10, L: 8,F: 57,A: 37,GD: + 20,P: 70},
    {rank : 5, name : 'LAZ', GP: 38, W: 18, D: 10, L: 10,F: 77,A: 58,GD: + 19,P: 64},
    {rank : 6, name : 'ROMA', GP: 38, W: 18, D: 9, L: 11,F: 59,A: 43,GD: + 16,P: 63},
    {rank : 7, name : 'FIO', GP: 38, W: 19, D: 5, L: 14,F: 59,A: 51,GD: + 8,P: 62},
    {rank : 8, name : 'ATA', GP: 38, W: 16, D: 11, L: 11,F: 65,A: 48,GD: + 17,P: 59},
    {rank : 9, name : 'VER', GP: 38, W: 14, D: 11, L: 13,F: 65,A: 59,GD: +6,P: 53},
    {rank : 10, name : 'TOR', GP: 38, W: 13, D: 11, L: 14,F: 46,A: 41,GD: +5,P: 50},
    {rank : 11, name : 'SAS', GP: 38, W: 13, D: 11, L: 14,F: 64,A: 66,GD: -2,P: 50},
    {rank : 12, name : 'UDN', GP: 38, W: 11, D: 14, L: 13,F: 61,A: 58,GD: +3,P: 47},
    {rank : 13, name : 'BOL', GP: 38, W: 12, D: 10, L: 16,F: 44,A: 55,GD: -11,P: 46},
    {rank : 14, name : 'EMP', GP: 38, W: 10, D: 11, L: 17,F: 50,A: 70,GD: -20,P: 41},
    {rank : 15, name : 'SPE', GP: 38, W: 10, D: 6, L: 22,F: 46,A: 63,GD: -17,P: 36},
    {rank : 16, name : 'SAL', GP: 38, W: 10, D: 6, L: 22,F: 41,A: 71,GD: -30,P: 36},
    {rank : 17, name : 'MLL', GP: 38, W: 7, D: 10, L: 21,F: 33,A: 78,GD: -45,P: 31},
    {rank : 18, name : 'CAG', GP: 38, W: 6, D: 12, L: 20,F: 34,A: 68,GD: -34,P: 30},
    {rank : 19, name : 'GEN', GP: 38, W: 4, D: 16, L: 18,F: 27,A: 60,GD: -33,P: 28},
    {rank : 20, name : 'VEN', GP: 38, W: 6, D: 9, L: 23,F: 34,A: 69,GD: -35, P: 27},
  ]
})
let League = createSlice({
   name: 'League',
   initialState : [
    {name: 'EnglishPremierLeague'},
    {name: 'LaLiga'},
    {name: 'GermanBundesliga'},
    {name: 'ItalianSerieA'}
   ]
})
let profile = createSlice({
  name: 'profile',
  initialState : [
    {
      id: 0,
      title: " 살라, 리버풀과 계약 연장…2025년까지",
      name: "박지혁 기자",
      time: "July 02 11:49 am"
     },  
    {
      id: 1,
      title: "캘빈 필립스: 잉글랜드 미드필더, 맨체스터 시티와 6년 계약",
      name: "Mancity",
      time: "June 04 2022"
     },
    {
      id: 2,
      title: "조코비치 윔블던 16강 진출, 4연패까지 4승 남았다",
      name: "피주영 기자",
      time: "July 02 15:35 pm"
     },

    {
      id: 3,
      title: "맨유, 말라시아 영입 근접…아스날에 희소식?",
      name: "조효종 기자",
      time: "June 29 15:30 pm"
     },
    {
      id: 4,
      title: "UFC 276: 이스라엘 아데산야, 자레드 캐노니어 꺾고 미들급 타이틀 유지",
      name: "BBC",
      time: "2022 July 03 "
     },
    ]
})

export default configureStore({
  reducer: {
    cart: data1.reducer,
    cart2:data2.reducer,
    cart3:data3.reducer,
    cart4:data4.reducer,
    profile:profile.reducer
  }
}) 