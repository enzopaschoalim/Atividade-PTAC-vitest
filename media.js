export function media(notas) {
  if (notas.length === 0) {
    throw new Error('Lista vazia')
  }
  const soma = notas.reduce((acc, nota) => acc + nota, 0)
  return soma / notas.length
}
