import React from 'react'
import type { Dispatch } from 'redux'

import {
  useSelector,
  shallowEqual,
} from 'react-redux'

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

  return {
    isLose,
    count,
    reminderBlockIndexes,
    currentBlockIndexes,
  }
}

export default useReduxTetrisState
