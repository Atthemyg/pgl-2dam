export type Game = {
    id: number;
    name: string;
    genre?: string;
    releaseDate?: {
        Europe?: string;
        Japan?: string
        NorthAmerica?: string;
        Australia?: string;
    };
};