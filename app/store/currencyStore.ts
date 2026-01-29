import { create } from 'zustand';
import { persist } from 'zustand/middleware'; // Importar persist

interface CurrencyState {
  currency: 'PYG' | 'EUR';
  setCurrency: (currency: 'PYG' | 'EUR') => void;
}

// Usamos 'persist' para guardar en localStorage
export const useCurrencyStore = create<CurrencyState>()(
  persist(
    (set) => ({
      currency: 'PYG',
      setCurrency: (currency) => set({ currency }),
    }),
    {
      name: 'nandevibes-currency', // Nombre en la memoria del navegador
    }
  )
);