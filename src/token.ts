import { TokenType } from "./tokenType";

export class Token {
    constructor(
        public type: TokenType,
        public lexeme: string,
        public literal: unknown,
        public line: number
    ){}
}