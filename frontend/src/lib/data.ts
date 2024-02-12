import type { DateRange } from "react-day-picker"
import { colors } from "./colors"
export interface Content {
  id: string
  title: string
  color?: color
  cover: string
  author?: string[]
}

export interface BespokeContent extends Content {
  href: string
}

export type color = (typeof colors)[keyof typeof colors]

export interface Playlist extends Content {
  color: color
  author: string[]
}

export interface Video extends Playlist {
  source: string
}

export const Videos: Video[] = []
export enum measureTypes {
  Index = "Index",
  IndexPercentChange = "Index-%-Change",
  ChainVolume = "Chain-Vol",
  ChainVolumePercentChange = "Chain-Volume-Percent-Change",
  Price = "Price",
  PricePercentChange = "Price-%-Change",
  Ratio = "Ratio",
}

export const Indicators: Indicator[] = [
  {
    indicator: "gdp $",
    readableName: "GDP ($)",
    apiURL: "https://api.data.abs.gov.au/data/ANA_AGG/M3.GPM.20.AUS",
    frequency: ["Q"],
    charts: ["bar", "line"],
    measureTypes: [
      measureTypes.Price,
      /*       measureTypes.ChainVolume,
      measureTypes.ChainVolumePercentChange, */
    ],
    color: colors.teal,
  },
  {
    indicator: "tot",
    readableName: "Terms of Trade Index (N.K.A)",
    apiURL: "https://api.data.abs.gov.au/data/ANA_AGG/M5.TTR.10.AUS",
    frequency: ["Q"],
    charts: ["bar", "line"],
    measureTypes: [measureTypes.Index, measureTypes.IndexPercentChange],
    color: colors.flexokiPurple,
  },
  {
    indicator: "WPI",
    readableName: "Wage Price Index",
    apiURL: "https://api.data.abs.gov.au/data/WPI/1.OHRPEB.1.TOT.10.AUS",
    frequency: ["Q"],
    charts: ["bar", "line"],
    measureTypes: [measureTypes.Index],
    color: colors.yellow,
  },
  {
    indicator: "CAB",
    readableName: "Current Account Balance",
    apiURL: "https://api.data.abs.gov.au/data/BOP/1.100.10",
    charts: ["bar", "line"],
    frequency: ["Q"],
    measureTypes: [measureTypes.Price],
    color: colors.flexokiBlue,
  },
  {
    indicator: "PRIM",
    readableName: "Primary Income Account",
    apiURL: "https://api.data.abs.gov.au/data/BOP/1.8700.10",
    charts: ["bar", "line"],
    frequency: ["Q"],
    measureTypes: [measureTypes.Price],
    color: colors.flexokiGreen,
  },
  {
    indicator: "BOT",
    readableName: "Balance of Trade / G&S",
    apiURL: "https://api.data.abs.gov.au/data/BOP/1.130.10",
    charts: ["bar", "line"],
    frequency: ["Q"],
    measureTypes: [measureTypes.Price],
    color: colors.flexokiOrange,
  },
  {
    indicator: "KFAB",
    readableName: "Capital & Financial Account Balance",
    apiURL: "https://api.data.abs.gov.au/data/BOP/1.8750.10",
    charts: ["bar", "line"],
    frequency: ["Q"],
    measureTypes: [measureTypes.Price],
    color: colors.flexokiYellow,
  },
  {
    indicator: "FAB",
    readableName: "Financial Account Balance",
    apiURL: "https://api.data.abs.gov.au/data/BOP/1.8800.10",
    charts: ["bar", "line"],
    frequency: ["Q"],
    measureTypes: [measureTypes.Price],
    color: colors.flexokiBlue,
  },
  {
    indicator: "KAPB",
    readableName: "Capital Account Balance",
    apiURL: "https://api.data.abs.gov.au/data/BOP/1.8305.10",
    charts: ["bar", "line"],
    frequency: ["Q"],
    measureTypes: [measureTypes.Price],
    color: colors.flexokiCyan,
  },
  {
    indicator: "N.ERR+OMM",
    readableName: "Net Errors & Ommisions (BOP)",
    apiURL: "https://api.data.abs.gov.au/data/BOP/1.8900.10",
    charts: ["bar", "line"],
    frequency: ["Q"],
    measureTypes: [measureTypes.Price],
    color: colors.red,
  },
  {
    indicator: "xpi",
    readableName: "Export Price Index",
    apiURL: "https://api.data.abs.gov.au/data/ITPI_EXP/1.8093697",
    charts: ["bar", "line"],
    frequency: ["Q"],
    measureTypes: [measureTypes.Index],
    color: colors.flexokiOrange,
  },
  {
    indicator: "mpi",
    readableName: "Import Price Index",
    apiURL: "https://api.data.abs.gov.au/data/ITPI_IMP/1.6011001",
    frequency: ["Q"],
    charts: ["bar", "line"],
    measureTypes: [measureTypes.Index, measureTypes.IndexPercentChange],
    color: colors.flexokiBlue,
  },
  {
    indicator: "HSR",
    readableName: "Household Savings Ratio",
    apiURL: "https://api.data.abs.gov.au/data/ANA_AGG/M7.HSR.10.AUS",
    frequency: ["Q"],
    charts: ["bar", "line"],
    measureTypes: [],
    color: colors.green,
  },
  {
    indicator: "gdp %Δ",
    readableName: "GDP %Δ",
    apiURL: "https://api.data.abs.gov.au/data/ANA_AGG/M4.GPM.20.AUS",
    frequency: ["Q"],
    charts: ["bar", "line"],
    measureTypes: [
      measureTypes.PricePercentChange,
      /*       measureTypes.ChainVolume,
      measureTypes.ChainVolumePercentChange, */
    ],
    color: colors.green,
  },
  {
    indicator: "unemployment",
    readableName: "Unemployment Rate %",
    apiURL: "https://api.data.abs.gov.au/data/LF/M13.3.1599.10.AUS",
    charts: ["line", "bar"],
    frequency: ["M"],
    measureTypes: [measureTypes.Index],
    color: colors.flexokiRed,
  },
  {
    indicator: "GDP p.c",
    readableName: "GDP Per Capita",
    apiURL: "https://api.data.abs.gov.au/data/ANA_AGG/M1.GPM_PCA.10.AUS",
    frequency: ["Q"],
    charts: ["bar", "line"],
    measureTypes: [
      measureTypes.Price,
      measureTypes.PricePercentChange,
      /*       measureTypes.ChainVolume,
      measureTypes.ChainVolumePercentChange, */
    ],
    color: colors.teal,
  },
  {
    indicator: "RULC_LAB",
    readableName: "Real Unit Labour Costs",
    apiURL: "https://api.data.abs.gov.au/data/ANA_AGG/M6.RULC_LAB.30.AUS",
    charts: ["line", "bar"],
    frequency: ["Q"],
    measureTypes: [],
    color: colors.emerald,
  },

  /*   {
    indicator: "exchangerate",
    readableName: "Exchange Rate",
  },
  {
    indicator: "inflation",
    readableName: "Inflation",
  },
  {
    indicator: "unitlabourcosts",
    readableName: "Unit Labour Costs",
  }, */
]

export type frequency = "H" | "D" | "N" | "B" | "W" | "S" | "A" | "M" | "Q"

export type Indicator = {
  indicator: string
  readableName: string
  color: color
  apiURL: string
  frequency: frequency[]
  charts: IndicChartTypes[]
  measureTypes: measureTypes[]
}
export type IndicChartTypes = "line" | "bar" | "step"

export interface DataSet {
  indicator: Indicator
  data: DataDot[]
  multipFactor: number
  datasetScope: DateRange
}

export interface Datapoint {
  value: number | null
  date: Date
}

export interface DataDot {
  value: number | null
  dateRange: DateRange
}

export const theContent: BespokeContent[] = [
  {
    id: "2",
    title: "Economics Chart",
    cover: "econscover.png",
    href: "econs-charts",
    author: ["Zane"],
    color: colors.teal,
  },
]

export const playlists: Playlist[] = [
  {
    id: "1",
    title: "Year 12 AIT Video",
    color: colors.gray,
    cover: "cover.png",
    author: ["Zane"],
  },
]

export const morePlaylists = [
  ...playlists.map((item) => ({
    ...item,
    id: item.id + "a",
  })),
]

export const moreBespoke = [
  ...theContent.map((item) => ({
    ...item,
    id: item.id + "",
  })),
]

export const sidebarPlaylists = [
  ...playlists.map((item) => ({
    ...item,
    id: item.id + "_side",
  })),
]

export const allPlaylists = [...playlists, ...morePlaylists, ...sidebarPlaylists, ...Videos]

interface Song {
  id: string
  title: string
  image: string
  artists: string[]
  album: string
  duration: string
}
const songScale = "w_40,h_40,c_scale"
export const songs: Song[] = [
  {
    id: "1",
    title: "The Nights",
    image: `https://res.cloudinary.com/dp3ppkxo5/image/upload/${songScale}/v1693776175/spotify-astro/song_1_qitfwl.jpg`,
    artists: ["Avicii"],
    album: "The Days / Nights",
    duration: "2:56",
  },
  {
    id: "2",
    title: "Saint-Tropez",
    image: `https://res.cloudinary.com/dp3ppkxo5/image/upload/${songScale}/v1693776175/spotify-astro/song_2_cijs8v.jpg`,
    artists: ["Post Malone"],
    album: "Hollywood's Bleeding",
    duration: "2:23",
  },
  {
    id: "3",
    title: "SICKO MODE",
    image: `https://res.cloudinary.com/dp3ppkxo5/image/upload/${songScale}/v1693776176/spotify-astro/song_3_td9ncs.jpg`,
    artists: ["Travis Scott", "Drake"],
    album: "ASTROWORLD",
    duration: "5:13",
  },
  {
    id: "4",
    title: "Blinding Lights",
    image: `https://res.cloudinary.com/dp3ppkxo5/image/upload/${songScale}/v1693776176/spotify-astro/song_4_lwumgu.png`,
    artists: ["The Weeknd"],
    album: "After Hours",
    duration: "3:22",
  },
  {
    id: "5",
    title: "Shape of You",
    image: `https://res.cloudinary.com/dp3ppkxo5/image/upload/${songScale}/v1693776175/spotify-astro/song_5_rd5xqa.jpg`,
    artists: ["Ed Sheeran"],
    album: "÷ (Divide)",
    duration: "3:53",
  },
  {
    id: "6",
    title: "Uptown Funk",
    image: `https://res.cloudinary.com/dp3ppkxo5/image/upload/${songScale}/v1693776175/spotify-astro/song_6_f1lt7y.jpg`,
    artists: ["Mark Ronson", "Bruno Mars"],
    album: "Uptown Special",
    duration: "4:30",
  },
  {
    id: "7",
    title: "Bad Guy",
    image: `https://res.cloudinary.com/dp3ppkxo5/image/upload/${songScale}/v1693776175/spotify-astro/song_7_m7f0mh.jpg`,
    artists: ["Billie Eilish"],
    album: "When We All Fall Asleep, Where Do We Go?",
    duration: "3:14",
  },
  {
    id: "8",
    title: "Yesterday",
    image: `https://res.cloudinary.com/dp3ppkxo5/image/upload/${songScale}/v1693776175/spotify-astro/song_8_hwxisr.jpg`,
    artists: ["The Beatles"],
    album: "Today & Tomorrow",
    duration: "4:38",
  },
  {
    id: "9",
    title: "Havana",
    image: `https://res.cloudinary.com/dp3ppkxo5/image/upload/${songScale}/v1693776176/spotify-astro/song_9_szemzp.jpg`,
    artists: ["Camila Cabello", "Young Thug"],
    album: "Camila",
    duration: "3:37",
  },
  {
    id: "10",
    title: "Radioactive",
    image: `https://res.cloudinary.com/dp3ppkxo5/image/upload/${songScale}/v1693776176/spotify-astro/song_10_sz0cib.jpg`,
    artists: ["Imagine Dragons"],
    album: "Night Visions",
    duration: "3:07",
  },
]
