export interface IabsOverview {
  data: Data
  meta: Meta
}

export interface Data {
  dataflows: Dataflow[]
}

export interface Dataflow {
  agencyID: AgencyID
  annotations: Annotation[]
  description?: string
  descriptions?: Descriptions
  id: string
  isFinal: boolean
  name: string
  names: Descriptions
  structure: string
  version: Version
}

export enum AgencyID {
  Abs = "ABS",
}

export interface Annotation {
  text?: string
  texts?: Descriptions
  type: Type
  title?: string
  id?: ID
}

export enum ID {
  Death1 = "DEATH_1",
  LayoutColumn = "LAYOUT_COLUMN",
  LayoutRow = "LAYOUT_ROW",
  LayoutRowSection = "LAYOUT_ROW_SECTION",
  Methodology = "METHODOLOGY",
  NotDisplayed = "NOT_DISPLAYED",
  Weblink = "WEBLINK",
}

export interface Descriptions {
  en: string
}

export enum Type {
  BasePeriod = "BASE_PERIOD",
  Default = "DEFAULT",
  EXTResource = "EXT_RESOURCE",
  FurtherInformation = "FURTHER_INFORMATION",
  LayoutColumn = "LAYOUT_COLUMN",
  LayoutRow = "LAYOUT_ROW",
  LayoutRowSection = "LAYOUT_ROW_SECTION",
  NonProductionDataflow = "NonProductionDataflow",
  NotDisplayed = "NOT_DISPLAYED",
}

export enum Version {
  The100 = "1.0.0",
  The110 = "1.1.0",
  The120 = "1.2.0",
  The130 = "1.3.0",
  The200 = "2.0.0",
}

export interface Meta {
  contentLanguages: string[]
  id: string
  prepared: Date
  receiver: Sender[]
  schema: string
  sender: Sender
  test: boolean
}

export interface Sender {
  id: string
}
