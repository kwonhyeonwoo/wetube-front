export const SHORTS_KEYS = {
  all: ["shorts"] as const,
  detail: (id:string) => [[...SHORTS_KEYS.all, "detail",id]],
};