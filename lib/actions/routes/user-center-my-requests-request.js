import { notifyRequestRead } from '../../utils/cengceng-api/request'

export const BEGIN = 'ROUTES-USER_CENTER_MY_TRAVEL_REQUEST-BEGIN'

export function begin(item) {
  notifyRequestRead({ request_id: item.request_id })
  return {
    type: BEGIN,
    item
  }
}
