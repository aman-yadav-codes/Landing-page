import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useUiStore = create(persist((set) => ({
  sidebarCollapsed: false,
  setSidebarCollapsed: (value) => set({ sidebarCollapsed: value }),
  toggleSidebar: () => set((state) => ({ sidebarCollapsed: !state.sidebarCollapsed })),
}), { name: 'cappuccino-ui' }));
