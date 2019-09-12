import { get } from '@/utils/request'

export const $getData = obj => {
    return get('/reconciliation/getData', obj)
}