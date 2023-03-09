import { CarType } from "../components/Car/Car"

const getCarBodyTypes = (cars: CarType[]) => (
  cars.reduce((acc, { bodyType }) => {
    if(!acc.includes(bodyType)) {
      acc = [...acc, bodyType]
    }
    return acc
  }, [] as string[])
)

export default getCarBodyTypes;