import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { MINUTE } from "../config/constants";

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
                        description: string
                    }[];
                }>("/dummy/coins");
                return res.data.coins;
            },
            staleTime: 10 * MINUTE,
        }),
};

export default api;
