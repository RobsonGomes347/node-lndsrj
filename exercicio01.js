function podeBeberAlcool(anoNascimento, paisReferencia, anoReferencia) {
  let beberas = false;
  const idade = anoReferencia - anoNascimento;
  if (paisReferencia === 'BR' && idade >= 18) {
    beberas = true;
  }
  if (paisReferencia === 'EUA' && idade >= 21) {
    beberas = true;
  }
  if (paisReferencia === 'JP' && idade >= 19) {
    return beberas = true;
  }
  return beberas;
}
console.log(podeBeberAlcool(1990, 'BR', 2023));
