export const isActiveBlockIndex = ({
  index,
  activeBlockIndexes,
}: {
  index: number
  activeBlockIndexes: number[]
}): boolean => activeBlockIndexes.includes(index)
