import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Appearance } from 'react-native';

const systemMode = Appearance.getColorScheme() || 'light';

export const useThemeStore = create(
  persist(
    (set) => ({
      thememode: systemMode,
      isHydrated: false,
      toggleTheme: () =>
        set((state) => ({
          thememode: state.thememode === 'light' ? 'dark' : 'light',
        })),
      setHydrated: (val) => set({ isHydrated: val }),
    }),
    {
      name: 'theme-storage',
      storage: createJSONStorage(() => AsyncStorage),
      onRehydrateStorage: () => (state) => {
        state?.setHydrated(true);
      },
    }
  )
);
