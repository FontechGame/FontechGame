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
  } = useTetris()

  React.useEffect(() => {
    doclearTetris()
    doUpdateActiveBlockIndexes([
      ...[101, 102, 103, 104],
      ...[142, 161, 162, 163],
      ...[201, 221, 222, 223],
      ...[261, 262, 281, 282],
      ...[321, 322, 342, 343],
    ])
  }, [doUpdateActiveBlockIndexes, doclearTetris])

  React.useEffect(() => {
    // console.log(
    //   'max: ',
    //   Math.max(...activeBlockIndexes)
    // )
    // console.log('count: ', count)

    if (activeBlockIndexes.length === 0) {
      return
    }

    if (
      activeBlockIndexes.find(
        each => each + 20 >= count
      )
    ) {
      return
    }

    setTimeout(
      () =>
        doUpdateActiveBlockIndexes(
          activeBlockIndexes.map(
            each => each + 20
          )
        ),
      1000
    )
  }, [
    count,
    activeBlockIndexes,
    doUpdateActiveBlockIndexes,
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
