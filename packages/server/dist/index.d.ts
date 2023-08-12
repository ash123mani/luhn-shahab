declare global {
    interface Error {
        statusCode: number;
        isOperational?: boolean;
        description?: string;
    }
}
export {};
//# sourceMappingURL=index.d.ts.map