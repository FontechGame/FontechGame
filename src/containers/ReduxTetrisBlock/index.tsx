import React from 'react'
import classnames from 'classnames'
import BlockContainer from '@components/BlockContainer'

import useReduxTetris from '@redux-folder/hooks/useReduxTetris'

const ReduxTetrisBlock: React.FC = () => {
  const {
    isLose,
    count,
    activeBlockIndexes,

    dropdownCurrentBlock,
    doAsyncUpdateCurrentBlockByRandom,
  } = useReduxTetris()

  // console.log('ReduxTetrisBlock isLose:', isLose)

  React.useEffect(() => {
    doAsyncUpdateCurrentBlockByRandom()
  }, [])

  React.useEffect(() => {
    dropdownCurrentBlock()
  }, [dropdownCurrentBlock])

  return (
    <div className="pt-[64px]">
      <div className="relative flex mt-4">
        <div className="absolute inset top-[64px] bottom-0 left-0 right-0 border-x border-b border-[cyan]" />
        <BlockContainer
          count={count}
          activeBlockIndexes={activeBlockIndexes}
        />
      </div>
    </div>
  )
}

export default ReduxTetrisBlock
