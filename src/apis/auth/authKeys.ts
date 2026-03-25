export const USER_KEYS = {
    all:['users'] as const,
    detail:(id:string)=>[...USER_KEYS.all, "detail",id] as const
}