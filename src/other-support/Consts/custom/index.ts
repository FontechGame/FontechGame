// import { emptyStringKeyObject } from '@other-support/Consts'

// export default emptyStringKeyObject

export const isActiveBlockIndex = ({
  index,
  activeBlockIndexes,
}: {
  index: number
  activeBlockIndexes: number[]
}): boolean => activeBlockIndexes.includes(index)
