export const STORAGE_KEYS={
    all:["storages" as const],
    details:()=>[...STORAGE_KEYS.all, "details" as const],
    detail:(id:string)=>[...STORAGE_KEYS.all, "detail",id]
}