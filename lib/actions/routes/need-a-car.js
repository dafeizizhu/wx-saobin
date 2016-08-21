export const CHANGE_COUNT = 'ROUTES-NEED_A_CAR-CHANGE_COUNT'

export function changeCount(count) {
  return {
    type: CHANGE_COUNT,
    count
  }
}
