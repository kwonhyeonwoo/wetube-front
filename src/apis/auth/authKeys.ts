export const USER_KEYS = {
  all: ["users"] as const,
  me: ["users", "me"] as const,
  myStorages: () => [...USER_KEYS.me, "storage"] as const,
  detail: (id: string) => [...USER_KEYS.all, "detail", id] as const,
  videos: (id: string) => [...USER_KEYS.detail(id), "videos"] as const,
  shorts:(id:string)=>[...USER_KEYS.detail(id),'shorts'] as const,
  saved: (id: string) => [...USER_KEYS.detail(id), "saved"] as const,
};
