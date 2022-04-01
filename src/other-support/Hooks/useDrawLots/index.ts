import React from 'react'

import type { StringKeyStringValueObject } from '@other-support/Types'

import {
  showAlert,
  getRandomOneFromArray,
} from '@other-support/Consts'

const initialValues: string[] = [
  'bobo',
  'icelorc',
  'jason',
  'cindy',
  'Charles Tsai',
  'daisy',
  'sasaya',
  'anna',
  'Alison',
  'Sunny Chang',
  'tracy',
  'livia',
  'Austin',
]

const useDrawLots = () => {
  const [drawLots, setDrawLots] = React.useState(
    initialValues
  )

  const [anotherDrawLots, setAnotherDrawLots] =
    React.useState(initialValues)

  const [drawLotResults, setDrawLotResults] =
    React.useState<StringKeyStringValueObject>({})
  const [
    realDrawLotResults,
    setRealDrawLotResults,
  ] = React.useState<Array<string>>([])

  const insertDrawLot = React.useCallback(
    (value: string) => {
      if (value.length === 0) {
        return
      }

      if (drawLots.includes(value)) {
        return
      }

      setDrawLots([...drawLots, value])
    },
    [drawLots]
  )

  const removeDrawLot = React.useCallback(
    (value: string) => {
      if (value.length === 0) {
        return
      }

      setDrawLots(
        drawLots.filter(
          drawLot => drawLot !== value
        )
      )
    },
    [drawLots]
  )

  const insertAnotherDrawLot = React.useCallback(
    (value: string) => {
      if (value.length === 0) {
        return
      }

      if (anotherDrawLots.includes(value)) {
        return
      }

      setAnotherDrawLots([
        ...anotherDrawLots,
        value,
      ])
    },
    [anotherDrawLots]
  )

  const removeAnotherDrawLot = React.useCallback(
    (value: string) => {
      if (value.length === 0) {
        return
      }

      setAnotherDrawLots(
        anotherDrawLots.filter(
          anotherDrawLot =>
            anotherDrawLot !== value
        )
      )
    },
    [anotherDrawLots]
  )

  const insertToDrawLot = React.useCallback(
    (value: string) => {
      insertDrawLot(value)
      insertAnotherDrawLot(value)
    },
    [insertDrawLot, insertAnotherDrawLot]
  )

  const realDrawLot = React.useCallback(() => {
    if (drawLots.length === 0) {
      showAlert('drawLots is empty')
      return
    }

    const random = getRandomOneFromArray(drawLots)

    removeDrawLot(random)
    showAlert(random)
    setRealDrawLotResults([
      ...realDrawLotResults,
      random,
    ])
  }, [drawLots, realDrawLotResults])

  const drawLot = React.useCallback(() => {
    if (drawLots.length === 0) {
      showAlert('drawLots is empty')
      return
    }

    if (anotherDrawLots.length === 0) {
      showAlert('drawLots is empty')
      return
    }
  }, [drawLots, anotherDrawLots])

  const drawLotAll = React.useCallback(() => {}, [
    drawLot,
  ])

  const clearDraw = () => setDrawLotResults({})

  return {
    drawLots,
    anotherDrawLots,

    removeDrawLot,
    removeAnotherDrawLot,
    insertToDrawLot,

    realDrawLot,
    drawLot,
    drawLotAll,
    clearDraw,

    drawLotResults,
    realDrawLotResults,
  }
}

export default useDrawLots
