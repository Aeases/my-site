export interface IabsRawDataRequest {
  meta: Meta
  data: Data
}

interface Data {
  dataSets: DataSet[]
  structure: Structure
}

interface DataSet {
  action: string
  links: Link[]
  annotations: number[]
  observations: { [key: string]: Array<number | null> }
}

interface Link {
  urn: string
  rel: string
}

interface Structure {
  name: string
  names: Descriptions
  description: string
  descriptions: Descriptions
  dimensions: Dimensions
  attributes: Attributes
  annotations: Annotation[]
}

interface Annotation {
  type: string
  text?: string
  texts?: Descriptions
  title?: string
}

interface Descriptions {
  en: string
}

interface Attributes {
  dataSet: any[]
  series: any[]
  observation: AttributesObservation[]
}

interface AttributesObservation {
  id: string
  name: string
  names: Descriptions
  roles: string[]
  relationship: Relationship
  values: Sender[]
  annotations?: number[]
}

interface Relationship {
  dimensions?: string[]
  primaryMeasure?: string
}

interface Sender {
  id: string
  order?: number
  name: string
  names: Descriptions
}

interface Dimensions {
  dataset: any[]
  series: any[]
  observation: DimensionsObservation[]
}

interface DimensionsObservation {
  id: string
  name: string
  names: Descriptions
  keyPosition: number
  roles: string[]
  values: Value[]
  annotations?: number[]
}

interface Value {
  id: string
  order?: number
  name: string
  names: Descriptions
  annotations?: number[]
  parent?: string
  start?: Date
  end?: Date
}

interface Meta {
  schema: string
  id: string
  prepared: Date
  test: boolean
  contentLanguages: string[]
  sender: Sender
}
