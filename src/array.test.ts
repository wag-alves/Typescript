import { describe, it, expect } from 'vitest';

import { 
  quadrado, 
  quadradoForEach, 
  concatenarArray, 
  pegarDoisPrimeiros, 
  filtrarPares, 
  Corredor, 
  Nadador 
} from './array.ts'; 

describe('Testes do Exercício de TypeScript', () => {


  it('deve retornar o quadrado de cada número no array', () => {
    const entrada = [1, 2, 3];
    const resultadoEsperado = [1, 4, 9];
    
    expect(quadrado(entrada)).toEqual(resultadoEsperado);
    expect(quadradoForEach(entrada)).toEqual(resultadoEsperado);
  });


  it('deve concatenar um array de strings com espaços', () => {
    expect(concatenarArray(['Olá', 'Mundo'])).toBe('Olá Mundo');
    expect(concatenarArray(['TypeScript', 'é', 'legal'])).toBe('TypeScript é legal');
  });


  it('deve pegar apenas os dois primeiros elementos', () => {
    const entrada = [10, 20, 30, 40];
    expect(pegarDoisPrimeiros(entrada)).toEqual([10, 20]);
  });


  it('deve filtrar apenas os números pares', () => {
    const entrada = [1, 2, 3, 4, 5, 6];
    expect(filtrarPares(entrada)).toEqual([2, 4, 6]);
  });


  describe('Classe Atleta', () => {
    it('deve formatar corretamente o treino do Corredor', () => {
      const corredor = new Corredor('Wagner', 10);
      expect(corredor.treinar()).toBe('Wagner correu 10km hoje');
    });

    it('deve formatar corretamente o treino do Nadador', () => {
      const nadador = new Nadador('Wagner', 'Crawl');
      expect(nadador.treinar()).toBe('Wagner treinou nado Crawl');
    });
  });
});