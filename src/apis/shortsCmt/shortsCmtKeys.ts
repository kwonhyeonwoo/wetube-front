export const SHORTS_CMT_KEYS = {
    all: ['shortsCmt'] as const,
    list: () => [...SHORTS_CMT_KEYS.all, 'list'],
}