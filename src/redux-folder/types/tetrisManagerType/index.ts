export type TetrisManagerType = {
  count: number
  activeBlockIndexes: number[]
}

export enum TRETRIS_STRING {
  UPDATE_ACTIVEBLOCKS = 'UPDATE_ACTIVEBLOCKS',
  CLEAR = 'CLEAR',
}

interface TetrisManagerBaseActionType {
  type: TRETRIS_STRING
}

interface TetrisManagerUpdateActionType
  extends TetrisManagerBaseActionType {
  type: TRETRIS_STRING.UPDATE_ACTIVEBLOCKS
  activeBlockIndexes: number[]
}

interface TetrisManagerClearActionType
  extends TetrisManagerBaseActionType {
  type: TRETRIS_STRING.CLEAR
}

export type TetrisManagerActionTypes =
  | TetrisManagerUpdateActionType
  | TetrisManagerClearActionType
