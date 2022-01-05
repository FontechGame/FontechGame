import React from 'react'

import useReduxTetrisState from '@redux-folder/hooks/useReduxTetrisState'
import useReduxTetrisAction from '@redux-folder/hooks/useReduxTetrisAction'
import useCustomReduxTetrisAction from '@redux-folder/hooks/useCustomReduxTetrisAction'

const useReduxTetrisForReduxTetrisBlock = () => {
  const { isLose } = useReduxTetrisState()

  const { doAsyncUpdateIsLose } =
    useReduxTetrisAction()
  const {
    initTetris,

    doAsyncUpdateCurrentBlockByRandom,
  } = useCustomReduxTetrisAction()

  return {
    isLose,
    initTetris,
    doAsyncUpdateIsLose,
    doAsyncUpdateCurrentBlockByRandom,
  }
}

export default useReduxTetrisForReduxTetrisBlock
