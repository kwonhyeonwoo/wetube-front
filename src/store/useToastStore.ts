import { create } from "zustand";
export type ToastType = 'success' | 'error' | 'info';

export interface Toast {
  id: string;
  message: string;
  type: ToastType;
}

interface ToastStore {
  toasts: Toast[];
  addToast: (message: string, type?: ToastType, duration?: number) => void;
  removeToast: (id: string) => void;
}
export const useToastStore = create<ToastStore>((set)=>({
    toasts: [],
  
    addToast: (message, type = 'info', duration = 3000) => {
      const id = Math.random().toString(36).substring(2, 9); // 고유 ID 생성
      
      set((state) => ({
        toasts: [...state.toasts, { id, message, type }],
      }));
  
      // 지정된 시간 후 자동 삭제
      setTimeout(() => {
        set((state) => ({
          toasts: state.toasts.filter((toast) => toast.id !== id),
        }));
      }, duration);
    },
  
    removeToast: (id) =>
      set((state) => ({
        toasts: state.toasts.filter((toast) => toast.id !== id),
      })),
}))