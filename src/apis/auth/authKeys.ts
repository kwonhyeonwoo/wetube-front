export const USER_KEYS = {
  all: ["users"] as const,
  me: ["me"] as const,
  myStorages: () => [...USER_KEYS.me, "storage"] as const,
  detail: (id: string) => [...USER_KEYS.all, "detail", id] as const,
  videos: (id: string) => [...USER_KEYS.detail(id), "videos"],
  storages: (id: string) => [...USER_KEYS.detail(id), "storage"],
};