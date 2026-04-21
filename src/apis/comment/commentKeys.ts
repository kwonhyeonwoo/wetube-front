export const COMMENT_KEYS = {
    all: ['comments'] as const,
    list: (videoId: string) => [...COMMENT_KEYS.all, videoId] as const,
  };