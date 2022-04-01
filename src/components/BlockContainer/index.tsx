import React from 'react'
import classnames from 'classnames'

import { isActiveBlockIndex } from '@other-support/Consts'

interface BlockContainerProps {
  containerClassName?: string | string[]
  blockClassName?: string | string[]
  blockKey?: string
  count?: number
  activeBlockIndexes?: number[]
}

const BlockContainer: React.FC<
  BlockContainerProps
> = ({
  containerClassName,
  blockClassName,
  blockKey = 'tetris-item',
  count = 800,
  activeBlockIndexes = Array<number>(),
}) => {
  return (
    <div
      className={classnames(
        'flex',
        'flex-row',
        'flex-wrap',
        'w-[280px]',
        'h-[560px]',
        'm-2',
        containerClassName
      )}
    >
      {Array(count)
        .fill(0)
        .map((each, index) => (
          <div
            key={`${blockKey}-${index + 1}`}
            className={classnames(
              'w-[14px]',
              'h-[14px]',
              blockClassName
            )}
          >
            <div
              className={classnames(
                'inline-block',
                'w-full',
                'h-full',
                'm-px',
                'border',
                'border-transparent',
                'bg-transparent',
                isActiveBlockIndex({
                  index: index + 1,
                  activeBlockIndexes,
                }) && ['border-white', 'bg-black']
              )}
            />
          </div>
        ))}
    </div>
  )
}

export default BlockContainer
