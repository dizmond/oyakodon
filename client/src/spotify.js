import axios from "axios";

const authEndpoint = "https://accounts.spotify.com/authorize?";
const clientId = "71a6034a2d9040ebb2d4c06d40043aff";
const redirectUri = "http://localhost:3000";
const scopes = ["user-read-email", "streaming", "user-read-private", "user-modify-playback-state", "user-library-read", "playlist-read-private", 'user-read-currently-playing', 'user-read-recently-played', 'user-read-playback-state'];

export const loginEndpoint = `${authEndpoint}client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
    "%20"
)}&response_type=token&show_dialog=true`;

const apiClient = axios.create({
    baseURL: "https://api.spotify.com/v1/",
});

export const setClientToken = (token) => {
    apiClient.interceptors.request.use(async function (config) {
        config.headers.Authorization = "Bearer " + token;
        return config;
    });
};

export default apiClient;