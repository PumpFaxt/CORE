import React from "react";
import { create } from "zustand";

interface IModalStore {
    content: React.ReactNode;
    actions: {
        show: (content: React.ReactNode) => void;
        hide: () => void;
    };
}

const useModalStore = create<IModalStore>()((set) => ({
    content: null,
    actions: {
        show: (content: React.ReactNode) => set({ content: content }),
        hide: () => set({ content: null }),
    },
}));

export const useModalContent = () => useModalStore((state) => state.content);
export const useModalActions = () => useModalStore((state) => state.actions);
