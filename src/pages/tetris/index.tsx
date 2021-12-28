import React from 'react'

import TetrisBlock from '@components/TetrisBlock'
import ReduxTetrisBlock from '@containers/ReduxTetrisBlock'

const Tetris: React.FC = () => {
  return (
    <div className="p-4">
      <div className="flex flex-col w-[300px]">
        <div className="text-white">Tetris</div>

        <ReduxTetrisBlock />
      </div>
    </div>
  )
}

export default Tetris
