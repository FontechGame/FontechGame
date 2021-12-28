import React from 'react'
import classnames from 'classnames'
import BlockContainer from '@components/BlockContainer'

const TetrisBlock: React.FC = () => {
  return (
    <div className="pt-[64px]">
      <div className="relative flex mt-4">
        <div className="absolute inset top-[64px] bottom-0 left-0 right-0 border-x border-b border-[cyan]" />
        <BlockContainer
          count={840}
          activeBlockIndexes={[
            ...[101, 102, 103, 104],
            ...[142, 161, 162, 163],
            ...[201, 221, 222, 223],
            ...[261, 262, 281, 282],
            ...[321, 322, 342, 343],
          ]}
        />
      </div>
    </div>
  )
}

export default TetrisBlock
