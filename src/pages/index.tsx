import React from 'react'

import CustomLink from '@components/CustomLink'

const Home: React.FC = () => {
  return (
    <div className="p-4">
      <div className="text-white">
        Fontech Game Home
      </div>
      <CustomLink
        title="To Tetris"
        path="/tetris"
      />
    </div>
  )
}

export default Home
