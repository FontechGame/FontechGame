import React from 'react'

import type { Dispatch } from 'redux'

import {
  useSelector,
  shallowEqual,
  useDispatch,
} from 'react-redux'

import { TetrisManagerActionTypes } from '@redux-folder/types/tetrisManagerType'

import {
  updateActiveBlockIndexes,
  clearTetris,
} from '@redux-folder/actions/tetrisManagerAction'

export const useTetris = () => {
  const dispatch = useDispatch()

  const { count, activeBlockIndexes } =
    useSelector(
      state => ({
        count: state.tetrisManagerState.count,
        activeBlockIndexes:
          state.tetrisManagerState
            .activeBlockIndexes,
      }),
      shallowEqual
    )

  const doUpdateActiveBlockIndexes = (
    activeBlockIndexes: number[]
  ) => {
    dispatch(
      updateActiveBlockIndexes(activeBlockIndexes)
    )
  }

  const doclearTetris = () => {
    dispatch(clearTetris())
  }

  return {
    doUpdateActiveBlockIndexes,
    doclearTetris,
    count,
    activeBlockIndexes,
  }
}

export default useTetris
