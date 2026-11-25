import { describe, it, expect } from 'vitest'
import { filtrarMaiores18 } from './filtrar-maiores-18'

describe('filtrarMaiores18', () => {
  const ana = { name: 'Ana', age: 22 }
  const beto = { name: 'Beto', age: 17 }
  const carla = { name: 'Carla', age: 30 }

  it('mantém Ana e Carla e deixa Beto de fora', () => {
    expect(filtrarMaiores18([ana, beto, carla])).toEqual([ana, carla])
  })

  it('considera age === 18 como maior de idade', () => {
    const diego = { name: 'Diego', age: 18 }
    expect(filtrarMaiores18([diego])).toEqual([diego])
  })
})
