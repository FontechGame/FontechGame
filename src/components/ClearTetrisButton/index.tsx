import React from 'react'
import CustomButton from '@components/CustomButton'

import useTetris from '@redux-folder/hooks/useTetris'

const ClearTetrisButton: React.FC = () => {
  const {
    isLose,
    doClearTetris,
    doUpdateCurrentBlockByRandom,
  } = useTetris()

  if (!isLose) {
    return <div>AAA</div>
  }

  const clearTetrisButtonOnClick = () => {
    doClearTetris()
    doUpdateCurrentBlockByRandom()
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
