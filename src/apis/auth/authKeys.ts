export const USER_KEYS = {
    all:['users'] as const,
    me:['me'] as const, 
    detail:(id:string)=>[...USER_KEYS.all, "detail",id] as const,
    videos:(id:string)=>[...USER_KEYS.me, 'videos',id] as const
}