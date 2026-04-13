export const STORAGE_KEYS={
    all:["storages" as const],
    detail:(id:string)=>[...STORAGE_KEYS.all, "detail",id]
}