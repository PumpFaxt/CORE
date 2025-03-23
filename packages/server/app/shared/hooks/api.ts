import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { MINUTE } from "../config/constants";
import { usePrivy } from "@privy-io/react-auth";
import imageCompression from "browser-image-compression";
import apiClient from "../utils/apiClient";

const api = {
    useDummyCoins: () =>
        useQuery({
            queryKey: ["dummy", "coins"],
            queryFn: async () => {
                const res = await apiClient.dummy.coins.$get();
                const { coins } = await res.json();
                return coins;
            },
            staleTime: 10 * MINUTE,
        }),

    useRelayNonce: () => {
        const privy = usePrivy();
        return useQuery({
            queryKey: ["relay-nonce", { id: privy.user?.id }],
            queryFn: async () => {
                const res = await apiClient.access["evm-nonce"].$get();
                const { nonce } = await res.json();
                return nonce;
            },
            enabled: !!privy.user?.id,
        });
    },

    useTokens: () => {
        return useQuery({
            queryKey: ["tokens"],
            queryFn: async () => {
                const res = await apiClient.tokens.$get();
                const { tokens } = await res.json();
                return tokens;
            },
        });
    },

    useNewToken: () => {
        return useMutation({
            mutationFn: async (
                args: { req: string; description: string; image: File },
            ) => {
                const formData = new FormData();
                formData.append("req", args.req);
                formData.append("description", args.description);

                const options = {
                    maxSizeMB: 1,
                    maxWidthOrHeight: 384,
                    useWebWorker: true,
                    fileType: "image/webp",
                };

                const compressedImage = await imageCompression(
                    args.image,
                    options,
                );
                formData.append("image", compressedImage);

                const { req, description } = args;
                const res = await apiClient.tokens.new.$post({
                    form: { req, description, image: compressedImage },
                }, {
                    // headers: { "Content-Type": "multipart/form-data" },
                });

                return await res.json();
            },
        });
    },

    useFrxUsdPermit: () => {
        return useMutation({
            mutationFn: async (req: string) => {
                const res = await apiClient.access["frxusd-permit"].$post({
                    json: { req },
                });
                return await res.json();
            },
        });
    },

    useUserById: (id: number) => {
        return useQuery({
            queryKey: ["user-info-route", { id }],
            queryFn: async () => {
                const res = await apiClient.users[":id"].$get({
                    param: { id: id.toString() },
                });
                const { user } = await res.json();
                return user;
            },
            staleTime: 60 * MINUTE,
        });
    },
};

export default api;
