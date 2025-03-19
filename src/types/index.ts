export interface ExampleType {
    id: number;
    name: string;
    isActive: boolean;
}

export type User = {
    username: string;
    email: string;
    age?: number; // optional property
};

export interface ApiResponse<T> {
    data: T;
    error?: string;
}