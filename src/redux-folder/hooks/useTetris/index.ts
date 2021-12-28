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

  const dropDownActiveBlockIndexes =
    React.useCallback(() => {
      if (
        activeBlockIndexes.find(
          each => each + 20 >= count
        )
      ) {
        return
      }

      return activeBlockIndexes.map(
        each => each + 20
      )
    }, [activeBlockIndexes, count])

  return {
    doUpdateActiveBlockIndexes,
    doclearTetris,
    count,
    activeBlockIndexes,
    dropDownActiveBlockIndexes,
  }
}

export default useTetris
