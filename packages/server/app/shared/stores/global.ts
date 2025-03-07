import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect } from "react";
import { create } from "zustand";
import { MINUTE } from "../config/constants";

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
            const res = await axios.get<{ privyAppId: string }>(
                "/stats",
            );
            return res.data;
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
