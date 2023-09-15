import type { Options } from 'execa'
import type { AnalysisBlockItem, Context } from '../lib'
import type { Agent } from '../constant'
import type { ExecuteTaskFunc } from '../execute'

export interface PluginData<T extends any[] = any> {
  id: string
  command: string
  description: string
  option?: PluginOption[]
  action: (context: Context, ...args: T) => void
}

export type PluginOption = [flags: string, description?: string, defaultValue?: string | boolean]

export type AgentType = Agent | string

export interface CommandParams<T = string[]> {
  args: T
  options?: Options
}

export interface CommandResult<T = string[]> extends CommandParams<T> {
  agent: AgentType
}

export interface CommandMainResult {
  analysisBlockList: AnalysisBlockItem[]
  commandList: CommandResult[]
}

export interface GitCommandMainResult extends CommandMainResult {
  gitCommandList: CommandResult[]
}

export interface ExecuteCommandResult<T = any> extends CommandMainResult {
  executeResult: T[]
}

export interface HandleMainResult {
  analysisBlockList: AnalysisBlockItem[]
  taskList: ExecuteTaskFunc[]
}

export * from './version/type'
export * from './publish/type'
export * from './run/type'
