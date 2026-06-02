export function alugarFilme(nomeFilme, dataAluguel, preco) {
  return `Filme "${nomeFilme}" alugado em ${dataAluguel} por R$ ${preco.toFixed(2)}.`;
}

export function devolverFilme(nomeFilme, dataDevolucao) {
  return `Filme "${nomeFilme}" devolvido em ${dataDevolucao}.`;
}
