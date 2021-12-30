import React from 'react'
import CustomButton from '@components/CustomButton'

import useReduxTetris from '@redux-folder/hooks/useReduxTetris'

const ClearTetrisButton: React.FC = () => {
  const {
    isLose,
    initTetris,
    doAsyncUpdateIsLose,
    doAsyncUpdateCurrentBlockByRandom,
  } = useReduxTetris()

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
