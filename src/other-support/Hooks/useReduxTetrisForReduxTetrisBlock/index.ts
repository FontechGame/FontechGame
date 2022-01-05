import React from 'react'

import useReduxTetrisState from '@redux-folder/hooks/useReduxTetrisState'
import useCustomReduxTetrisAction from '@redux-folder/hooks/useCustomReduxTetrisAction'

import useCustomKeyboard from '@other-support/Hooks/useCustomKeyboard'

const useReduxTetrisForReduxTetrisBlock = () => {
  const { isLose, count, activeBlockIndexes } =
    useReduxTetrisState()

  const {
    doAsyncUpdateCurrentBlockByRandom,
    dropDownCurrentBlock,
    updateCurrentBlockWithKeyCode,
  } = useCustomReduxTetrisAction()

  const { keyCode, setKeyCode } =
    useCustomKeyboard()

  return {
    isLose,
    count,
    activeBlockIndexes,

    doAsyncUpdateCurrentBlockByRandom,
    dropDownCurrentBlock,
    updateCurrentBlockWithKeyCode,

    keyCode,
    setKeyCode,
  }
}

export default useReduxTetrisForReduxTetrisBlock
