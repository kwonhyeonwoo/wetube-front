export const SHORTS_CMT_KEYS = {
    all: ['shortsCmt'] as const,
    list: (shortsId:string) => [...SHORTS_CMT_KEYS.all, 'list',shortsId],
}