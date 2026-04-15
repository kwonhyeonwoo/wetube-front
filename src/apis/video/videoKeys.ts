export const VIDEO_KEYS = {
  all: ["vidoes"] as const,
  details: () => [...VIDEO_KEYS.all, "details"] as const,
  detail: (id: string) => [...VIDEO_KEYS.all, "detail", id] as const,
  search: (filters: { keyword?: string; category?: string }) => {
    const cleanFilters = Object.fromEntries(
      Object.entries(filters).filter(
        ([_, value]) => value !== undefined && value !== "",
      ),
    );
    return [...VIDEO_KEYS.all, "search", cleanFilters] as const;
  },
};
