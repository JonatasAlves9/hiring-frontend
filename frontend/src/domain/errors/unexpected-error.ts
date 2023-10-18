export class UnexpectedError extends Error {
    constructor(message?: string) {
        super(message || 'Algo de errado aconteceu. Tente novamente');
        this.name = 'UnexpectedError';
    }
}
