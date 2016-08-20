export const CHANGE_TYPE = 'ROUTES-OWN_A_CAR-CHANGE_TYPE'

export function changeType(nextType) {
  return {
    type: CHANGE_TYPE,
    nextType
  }
}

export const CHANGE_COUNT = 'ROUTES-OWN_A_CAR-CHANGE_COUNT'

export function changeCount(count) {
  return {
    type: CHANGE_COUNT,
    count
  }
}

export const CHANGE_CAR_TYPE = 'ROUTES-OWN_A_CAR-CHANGE_CAR_TYPE'

export function changeCarType(carType) {
  return {
    type: CHANGE_CAR_TYPE,
    carType
  }
}
