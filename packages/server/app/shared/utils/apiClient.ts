import { hc } from "hono/client";
import { API } from "../../../api";

let authToken: string | null = null;

function createApiClient() {
    return hc<API>("/api", {
        headers: () => ({
            Authorization: authToken ? `Bearer ${authToken}` : "",
        }),
    });
}

let apiClient = createApiClient();

export function setAuthToken(token: string) {
    authToken = token;
    apiClient = createApiClient();
}

export default apiClient;
