import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { MINUTE } from "../config/constants";
import { usePrivy } from "@privy-io/react-auth";
import imageCompression from "browser-image-compression";

const api = {
    useDummyCoins: () =>
        useQuery({
            queryKey: ["dummy", "coins"],
            queryFn: async () => {
                const res = await axios.get<{
                    coins: {
                        name: string;
                        ticker: string;
                        address: string;
                        imageUrl: string;
                        description: string;
                    }[];
                }>("/dummy/coins");
                return res.data.coins;
            },
            staleTime: 10 * MINUTE,
        }),

    useRelayNonce: () => {
        const privy = usePrivy();
        return useQuery({
            queryKey: ["relay-nonce", privy.user.id],
            queryFn: async () => {
                const res = await axios.get<{
                    nonce: string;
                }>("/access/evm-nonce");
                return res.data.nonce;
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

                const res = await axios.post<
                    { address: string; imageUrl: string }
                >(
                    "/tokens/new",
                    formData,
                    { headers: { "Content-Type": "multipart/form-data" } },
                );

                return res.data;
            },
        });
    },

    useFrxUsdPermit: () => {
        return useMutation({
            mutationFn: async (req: string) => {
                const res = await axios.post("/access/frxusd-permit", { req });
                return res.data;
            },
        });
    },
};

export default api;
