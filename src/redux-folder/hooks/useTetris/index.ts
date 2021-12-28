import React from 'react'

import {
  useSelector,
  shallowEqual,
  useDispatch,
} from 'react-redux'

import { TetrisManagerActionTypes } from '@redux-folder/types/tetrisManagerType'

import {
  updateCurrentBlock,
  updateReminderBlock,
  clearTetris,
} from '@redux-folder/actions/tetrisManagerAction'

import { unionArray } from '@other-support/Consts'

export const useTetris = () => {
  const dispatch = useDispatch()

  const {
    count,
    reminderBlockIndexes,
    currentBlockIndexes,
  } = useSelector(
    state => ({
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
    dispatch(
      updateCurrentBlock(currentBlockIndexes)
    )
  }

  const doUpdateReminderBlock = (
    reminderBlockIndexes: number[]
  ) => {
    dispatch(
      updateReminderBlock(reminderBlockIndexes)
    )
  }

  const doclearTetris = () => {
    dispatch(clearTetris())
  }

  const dropDownCurrentBlock =
    React.useCallback(() => {
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
      currentBlockIndexes,
      reminderBlockIndexes,
      count,
    ])

  return {
    currentBlockIndexes,
    doUpdateCurrentBlock,
    doUpdateReminderBlock,
    doclearTetris,
    count,
    activeBlockIndexes,
    dropDownCurrentBlock,
  }
}

export default useTetris
