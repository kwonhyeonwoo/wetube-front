export const SHORTS_KEYS = {
  all: ["shorts"] as const,
  list:()=>[...SHORTS_KEYS.all,"list" ] as const,
  detail: (id:string) => [...SHORTS_KEYS.all, "detail",id] as const,
};