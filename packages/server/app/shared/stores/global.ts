import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { create } from "zustand";
import { MINUTE } from "../config/constants";
import apiClient from "../utils/apiClient";

interface IGlobalState {
    privyAppId: string;
    init: boolean;
    actions: {
        setPrivyAppId: (appId: string) => void;
        initialize: () => void;
    };
}

const useGlobalStore = create<IGlobalState>()((set) => ({
    privyAppId: "",
    init: false,

    actions: {
        setPrivyAppId: (appId) => set({ privyAppId: appId }),
        initialize: () => set({ init: true }),
    },
}));

export const usePrivyAppId = () => useGlobalStore((state) => state.privyAppId);

export const useGlobalStoreActions = () =>
    useGlobalStore((state) => state.actions);

export const useServerConfig = () => {
    const globalStore = useGlobalStore();

    const serverStats = useQuery({
        queryKey: ["server-stats"],
        queryFn: async () => {
            const res = await apiClient.stats.$get()
            return res.json();
        },
        enabled: !globalStore.init,
        staleTime: 10 * MINUTE,
    });

    useEffect(() => {
        if (serverStats.data) {
            globalStore.actions.setPrivyAppId(serverStats.data.privyAppId);
            globalStore.actions.initialize();
        }
    }, [serverStats.data]);

    return {
        privyAppId: globalStore.privyAppId,
        loading: (serverStats.isLoading || !globalStore.init ||
            !globalStore.privyAppId),
    };
};
