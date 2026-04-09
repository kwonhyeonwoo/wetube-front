export const VIDEO_KEYS ={
    all:['vidoes'] as const,
    detail:(id:string)=>[...VIDEO_KEYS.all, "detail",id] as const
}
