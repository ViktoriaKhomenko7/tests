import {GovernmentBuildingType, HouseType} from "../02/02_02";

export const getStreetsTitlesOfGovernmentBuildings =
    (buildings: GovernmentBuildingType[]) => {
        return buildings.map(b => b.address.street.title)

    }

export const getStreetsTitlesOfHouses =
    (houses: Array<HouseType>) => {
        return houses.map(b => b.address.street.title)

    }

export const createMessages = (houses: Array<HouseType>) => {
    let callbackfn = (h: HouseType)  => {
        return `Hello guys from ${h.address.street.title}`;
    }
    return houses.map(callbackfn)
}


// анонимная стрелочная ф-ция .map(h=>bla-bla)
//callback - ф-ция, кот. мы не вызываем, а отдаем в другой код