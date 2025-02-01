import React from "react";
import { create } from "zustand";

interface INavigationStore {
    path: string;
    actions: {
        navigate: (content: React.ReactNode) => void;
        hide: () => void;
    };
}

// const useModalStore = create<INavigationStore>()((set) => ({
//     content: null,
//     actions: {
//         show: (content: React.ReactNode) => set({ content: content }),
//         hide: () => set({ content: null }),
//     },
// }));

// export const useModalContent = () => useModalStore((state) => state.content);
// export const useModalActions = () => useModalStore((state) => state.actions);
