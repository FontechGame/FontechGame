import React from 'react'
import type { Dispatch } from 'redux'

import {
  useSelector,
  shallowEqual,
} from 'react-redux'

import { unionArray } from '@other-support/Consts'

export const useReduxTetrisState = () => {
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

  const activeBlockIndexes = React.useMemo(
    () =>
      unionArray({
        currentArray: reminderBlockIndexes,
        targetArray: currentBlockIndexes,
      }),
    [reminderBlockIndexes, currentBlockIndexes]
  )

  return {
    isLose,
    count,
    reminderBlockIndexes,
    currentBlockIndexes,
    activeBlockIndexes,
  }
}

export default useReduxTetrisState
