import React from 'react'

import ReduxTetrisBlock from '@containers/ReduxTetrisBlock'

import TetrisBlock from '@components/TetrisBlock'
import ClearTetrisButton from '@components/ClearTetrisButton'

const Tetris: React.FC = () => {
  return (
    <div className="p-4">
      <div className="flex flex-col w-[300px]">
        <div className="text-white">Tetris</div>
        <ClearTetrisButton />
        <ReduxTetrisBlock />
      </div>
    </div>
  )
}

export default Tetris
