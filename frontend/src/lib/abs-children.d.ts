export interface IabsChildren {
  data: Data
  meta: Meta
}

export interface Data {
  conceptSchemes: ConceptScheme[]
  codelists: Codelist[]
  dataStructures: ConceptScheme[]
}

export interface Codelist {
  id: string
  version: string
  agencyID: string
  isFinal: boolean
  name: string
  names: Descriptions
  description?: string
  descriptions?: Descriptions
  isPartial: boolean
  codes: Code[]
}

export interface Code {
  id: string
  name: string
  names: Descriptions
  annotations?: CodeAnnotation[]
  parent?: string
  description?: string
  descriptions?: Descriptions
}

export interface CodeAnnotation {
  type: Type
  text: string
  texts: Descriptions
  id?: string
  title?: string
}

export interface Descriptions {
  en: string
}

export enum Type {
  FullName = "FULL_NAME",
  Order = "ORDER",
  TypeOrder = "order",
}

export interface ConceptScheme {
  id: string
  version: string
  agencyID: string
  isFinal: boolean
  name: string
  names: Descriptions
  isPartial?: boolean
  concepts?: Concept[]
  dataStructureComponents?: DataStructureComponents
}

export interface Concept {
  id: string
  name: string
  names: Descriptions
  description?: string
  descriptions?: Descriptions
  annotations?: ConceptAnnotation[]
  parent?: string
}

export interface ConceptAnnotation {
  type: string
  text: string
  texts: Descriptions
}

export interface DataStructureComponents {
  attributeList: AttributeList
  dimensionList: DimensionList
  measureList: MeasureList
}

export interface AttributeList {
  id: string
  attributes: Attribute[]
}

export interface Attribute {
  id: string
  conceptIdentity: string
  localRepresentation?: AttributeLocalRepresentation
  assignmentStatus: string
  attributeRelationship: AttributeRelationship
}

export interface AttributeRelationship {
  dimensions?: string[]
  primaryMeasure?: string
}

export interface AttributeLocalRepresentation {
  enumeration: string
}

export interface DimensionList {
  id: string
  dimensions: Dimension[]
  timeDimensions: TimeDimension[]
}

export interface Dimension {
  id: string
  position: number
  type: string
  conceptIdentity: string
  localRepresentation: AttributeLocalRepresentation
}

export interface TimeDimension {
  id: string
  position: number
  type: string
  conceptIdentity: string
  localRepresentation: TimeDimensionLocalRepresentation
}

export interface TimeDimensionLocalRepresentation {
  textFormat: TextFormat
}

export interface TextFormat {
  textType: string
  isSequence: boolean
  isMultiLingual: boolean
}

export interface MeasureList {
  id: string
  primaryMeasure: PrimaryMeasure
}

export interface PrimaryMeasure {
  id: string
  conceptIdentity: string
}

export interface Meta {
  schema: string
  contentLanguages: string[]
  id: string
  prepared: Date
  test: boolean
  sender: Sender
  receiver: Sender[]
}

export interface Sender {
  id: string
}
