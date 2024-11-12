type StreetType = {
  title: string
}

type AddressType = {
  number: number
  street: StreetType
}

type HouseType = {
  buildedAt: number
  repaired: boolean
  address: AddressType
}

type GovernmentBuildingsAddressTitleType = {
  title: string
}

type GovernmentBuildingsAddressType = {
  street: GovernmentBuildingsAddressTitleType
}

type GovernmentBuildingsType = {
  type: 'HOSPITAL' | 'FIRE-STATION'
  budget: number
  staffCount: number
  address: GovernmentBuildingsAddressType
}

export type CityType = {
  title: string
  houses: Array<HouseType>
  governmentBuildings: Array<GovernmentBuildingsType>
  citizensNumber: number
}