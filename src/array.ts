// 1.
export const quadrado = (num: number[]): number[] => {
    let resultado: number[] = [];
    for (let i = 0; i < num.length; i++) {
        resultado.push(num[i] * num[i]);
    }
    return resultado;
};

export const quadradoForEach = (num: number[]): number[] => {
    let resultado: number[] = [];
    num.forEach((num) => resultado.push(num ** 2));
    return resultado;
};

// 2.
export const concatenarArray = (arr: string[]): string => { 
    return arr.join(" ");
};

// 3.

// 4.
export const pegarDoisPrimeiros = (num: any[]) => num.slice(0, 2);

// 5.
export const filtrarPares = (num: number[]) => num.filter(n => n % 2 === 0);

// 6.
export interface Atleta {
    treinar(): string;
};

export class Corredor implements Atleta {
    constructor(public nome: string, public kmDia: number) {
        this.nome = nome;
        this.kmDia = kmDia;
    }
    treinar(): string{
        return this.nome + " correu " + this.kmDia + 'km hoje'
    }
};

export class Nadador implements Atleta {
    constructor(public nome: string, public estilo: string) {
        this.nome = nome;
        this.estilo = estilo;
    }
    treinar(): string {
        return this.nome + ' treinou nado ' + this.estilo 
    }
};