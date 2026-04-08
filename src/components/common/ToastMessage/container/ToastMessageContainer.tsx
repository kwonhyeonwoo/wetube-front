import styles from "../css/index.module.css"
import { useToastStore } from '@/store/useToastStore';

export const ToastContainer = () => {
  const { toasts, removeToast } = useToastStore();

  if (toasts.length === 0) return null;

  return (
    <div className={styles.toastContainer}>
      {toasts.map(({id,message,type}) => (
        <div key={id} className={`${styles.toastItem} ${type}`}>
          <span>{message}</span>
          <button onClick={() => removeToast(id)}>✕</button>
        </div>
      ))}
    </div>
  );
};