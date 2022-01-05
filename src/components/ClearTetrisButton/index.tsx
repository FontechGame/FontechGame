import React from 'react'
import CustomButton from '@components/CustomButton'

import useReduxTetrisForClearTetrisButton from '@other-support/Hooks/useReduxTetrisForClearTetrisButton'

const ClearTetrisButton: React.FC = () => {
  const {
    isLose,
    initTetris,
    doAsyncUpdateIsLose,
    doAsyncUpdateCurrentBlockByRandom,
  } = useReduxTetrisForClearTetrisButton()

  if (!isLose) {
    return <div>AAA</div>
  }

  const clearTetrisButtonOnClick = async () => {
    await initTetris()
    await doAsyncUpdateIsLose(false)
    await doAsyncUpdateCurrentBlockByRandom()
  }

  return (
    <CustomButton
      onClick={() => clearTetrisButtonOnClick()}
    >
      You Lose, Clear Tetris
    </CustomButton>
  )
}

export default ClearTetrisButton
