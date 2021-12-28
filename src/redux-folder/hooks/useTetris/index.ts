import React from 'react'

import {
  useSelector,
  shallowEqual,
  useDispatch,
} from 'react-redux'

import { TetrisManagerActionTypes } from '@redux-folder/types/tetrisManagerType'

import {
  updateIsLose,
  updateCurrentBlock,
  updateReminderBlock,
  clearTetris,
} from '@redux-folder/actions/tetrisManagerAction'

import { unionArray } from '@other-support/Consts'

// const defaultBlocks: Array<number[]> = [
//   [101, 102, 103, 104],
//   [102, 121, 122, 123],
//   [101, 121, 122, 123],
//   [101, 102, 121, 122],
//   [101, 102, 122, 123],
// ]

const defaultBlocks: Array<number[]> = [
  [1, 2, 3, 4],
  [2, 21, 22, 23],
  [1, 21, 22, 23],
  [1, 2, 21, 22],
  [1, 2, 22, 23],
]

export const useTetris = () => {
  const dispatch = useDispatch()

  const {
    isLose,
    count,
    reminderBlockIndexes,
    currentBlockIndexes,
  } = useSelector(
    state => ({
      isLose: state.tetrisManagerState.isLose,
      count: state.tetrisManagerState.count,
      reminderBlockIndexes:
        state.tetrisManagerState
          .reminderBlockIndexes,
      currentBlockIndexes:
        state.tetrisManagerState
          .currentBlockIndexes,
    }),
    shallowEqual
  )

  React.useEffect(() => {
    const minReminderBlockIndexes = Math.min(
      ...reminderBlockIndexes
    )

    if (minReminderBlockIndexes <= 80) {
      dispatch(updateIsLose(true))
    }
  }, [reminderBlockIndexes])

  const activeBlockIndexes = React.useMemo(
    () =>
      unionArray({
        currentArray: reminderBlockIndexes,
        targetArray: currentBlockIndexes,
      }),
    [reminderBlockIndexes, currentBlockIndexes]
  )

  const doUpdateCurrentBlock = (
    currentBlockIndexes: number[]
  ) => {
    if (isLose) {
      return
    }

    dispatch(
      updateCurrentBlock(currentBlockIndexes)
    )
  }

  const doUpdateReminderBlock = (
    reminderBlockIndexes: number[]
  ) => {
    if (isLose) {
      return
    }

    dispatch(
      updateReminderBlock(reminderBlockIndexes)
    )
  }

  const doClearTetris = () => {
    dispatch(clearTetris())
    dispatch(updateIsLose(false))
  }

  const dropDownCurrentBlock =
    React.useCallback(() => {
      if (isLose) {
        return
      }

      if (
        currentBlockIndexes.find(
          each => each + 20 >= count
        )
      ) {
        return
      }

      if (
        currentBlockIndexes.find(each =>
          reminderBlockIndexes.find(
            reminder => each + 20 == reminder
          )
        )
      ) {
        return
      }

      return currentBlockIndexes.map(
        each => each + 20
      )
    }, [
      isLose,
      currentBlockIndexes,
      reminderBlockIndexes,
      count,
    ])

  const doUpdateCurrentBlockByRandom =
    React.useCallback(() => {
      const block =
        defaultBlocks[
          Math.floor(
            Math.random() * defaultBlocks.length
          )
        ]

      if (block) {
        doUpdateCurrentBlock([...block])
      }
    }, [doUpdateCurrentBlock])

  return {
    isLose,
    currentBlockIndexes,
    doUpdateCurrentBlock,
    doUpdateReminderBlock,
    doClearTetris,
    count,
    activeBlockIndexes,
    dropDownCurrentBlock,
    doUpdateCurrentBlockByRandom,
  }
}

export default useTetris
