import developersData from "./data.json"
import { Developer, DevelopersData, Compound, Unit } from "./types"

// Cast JSON into typed data
const data: DevelopersData = developersData as DevelopersData

// Get all developers
export function getDevelopers(): Developer[] {
    return data.developers
}

// Get developer by id
export function getDeveloperById(devId: string): Developer | undefined {
    return data.developers.find(d => d.id === devId)
}

// Get compound by developer id + compound id
export function getCompound(devId: string, compoundId: string): Compound | undefined {
    return getDeveloperById(devId)?.compounds.find(c => c.id === compoundId)
}

// Get unit by developer id + compound id + unit id
export function getUnit(devId: string, compoundId: string, unitId: string): Unit | undefined {
    return getCompound(devId, compoundId)?.units.find(u => u.id === unitId)
}
