export const CHANGE_IS_DRIVER = 'ROUTES-SIGN_UP-CHANGE_IS_DRIVER'

export function changeIsDriver(isDriver) {
  return {
    type: CHANGE_IS_DRIVER,
    isDriver
  }
}

export const CHANGE_MORE_VEHICLE = 'ROUTES-SIGN_UP-CHANGE_MORE_VEHICLE'

export function changeMoreVehicle(moreVehicle) {
  return {
    type: CHANGE_MORE_VEHICLE,
    moreVehicle
  }
}
