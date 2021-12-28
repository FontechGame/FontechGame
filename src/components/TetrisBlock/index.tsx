import React from 'react'
import classnames from 'classnames'
import BlockContainer from '@components/BlockContainer'

const TetrisBlock: React.FC = () => {
  return (
    <div className="pt-[64px]">
      <div className="flex border-x border-b border-[cyan] mt-4">
        <BlockContainer
          count={800}
          activeBlockIndexes={[
            ...[1, 2, 3, 4],
            ...[42, 61, 62, 63],
            ...[101, 121, 122, 123],
            ...[161, 162, 181, 182],
            ...[221, 222, 242, 243],
          ]}
        />
      </div>
    </div>
  )
}

export default TetrisBlock
