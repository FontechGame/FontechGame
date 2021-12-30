import React from 'react'
import CustomButton from '@components/CustomButton'

import useReduxTetris from '@redux-folder/hooks/useReduxTetris'

const ClearTetrisButton: React.FC = () => {
  const {
    isLose,
    initTetris,
    doAsyncUpdateCurrentBlockByRandom,
  } = useReduxTetris()

  // console.log('ClearTetrisButton isLose:', isLose)
  if (!isLose) {
    return <div>AAA</div>
  }

  const clearTetrisButtonOnClick = async () => {
    await initTetris()

    // doAsyncUpdateCurrentBlockByRandom
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
