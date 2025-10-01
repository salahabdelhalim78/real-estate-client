export type Unit = {
    id: string
    title: string
    description: string
    number: string
    space: string
    bedrooms: number
    bathroom: number
    level: string
    delivery: string
    price: string
    payment: string
    thumbnail: string
    images: string[]
    doc: string
}

export type Compound = {
    id: string
    name: string
    description: string
    thumbnail: string
    images: string[]
    units: Unit[]
    amenities: string[]
}

export type Developer = {
    id: string
    name: string
    description: string
    logo: string
    compounds: Compound[]
}

export type DevelopersData = {
    developers: Developer[]
}
