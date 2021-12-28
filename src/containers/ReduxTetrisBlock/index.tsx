import React from 'react'
import classnames from 'classnames'
import BlockContainer from '@components/BlockContainer'

import useTetris from '@redux-folder/hooks/useTetris'

const ReduxTetrisBlock: React.FC = () => {
  const {
    doUpdateActiveBlockIndexes,
    doclearTetris,
    count,
    activeBlockIndexes,
    dropDownActiveBlockIndexes,
  } = useTetris()

  React.useEffect(() => {
    doclearTetris()
    doUpdateActiveBlockIndexes([
      ...[101, 102, 103, 104],
      ...[202, 221, 222, 223],
      ...[321, 341, 342, 343],
      ...[441, 442, 461, 462],
      ...[561, 562, 582, 583],
    ])
  }, [])

  React.useEffect(() => {
    if (activeBlockIndexes.length === 0) {
      return
    }

    const dropDownActiveBlockIndexesResult =
      dropDownActiveBlockIndexes()

    if (!dropDownActiveBlockIndexesResult) {
      return
    }

    setTimeout(
      () =>
        doUpdateActiveBlockIndexes(
          dropDownActiveBlockIndexesResult
        ),
      1000
    )
  }, [
    count,
    activeBlockIndexes,
    doUpdateActiveBlockIndexes,
    dropDownActiveBlockIndexes,
  ])

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
