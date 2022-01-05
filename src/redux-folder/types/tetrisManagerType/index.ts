export type TetrisManagerType = {
  isLose: boolean
  count: number
  reminderBlockIndexes: number[]
  currentBlockIndexes: number[]
}

export enum TRETRIS_STRING {
  UPDATE_ISLOSE = 'UPDATE_ISLOSE',
  UPDATE_REMINDER = 'UPDATE_REMINDER',
  REMINDER_DELETE_LINES = 'REMINDER_DELETE_LINES',
  UPDATE_CURRENT = 'UPDATE_CURRENT',
  CLEAR = 'CLEAR',
}

interface TetrisManagerBaseActionType {
  type: TRETRIS_STRING
}

interface TetrisManagerUpdateIsLoseActionType
  extends TetrisManagerBaseActionType {
  type: TRETRIS_STRING.UPDATE_ISLOSE
  isLose: boolean
}

interface TetrisManagerUpdateReminderActionType
  extends TetrisManagerBaseActionType {
  type: TRETRIS_STRING.UPDATE_REMINDER
  reminderBlockIndexes: number[]
}

interface TetrisManagerReminderDeleteLinesActionType
  extends TetrisManagerBaseActionType {
  type: TRETRIS_STRING.REMINDER_DELETE_LINES
}

interface TetrisManagerUpdateCurrentActionType
  extends TetrisManagerBaseActionType {
  type: TRETRIS_STRING.UPDATE_CURRENT
  currentBlockIndexes: number[]
}

interface TetrisManagerClearActionType
  extends TetrisManagerBaseActionType {
  type: TRETRIS_STRING.CLEAR
}

export type TetrisManagerActionTypes =
  | TetrisManagerUpdateIsLoseActionType
  | TetrisManagerUpdateReminderActionType
  | TetrisManagerReminderDeleteLinesActionType
  | TetrisManagerUpdateCurrentActionType
  | TetrisManagerClearActionType
