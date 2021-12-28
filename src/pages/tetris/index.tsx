import React from 'react'

import TetrisBlock from '@components/TetrisBlock'

const Tetris: React.FC = () => {
  return (
    <div className="p-4">
      <div className="flex flex-col w-[300px]">
        <div className="text-white">Tetris</div>

        <TetrisBlock />
      </div>
    </div>
  )
}

export default Tetris
