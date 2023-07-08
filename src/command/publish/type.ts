import type { DefaultParams, GetConfig } from '../../defaultOptions'

export interface CommandPublishOption extends DefaultParams {
  message: string
  tag?: string
}

export type CommandPublishParams = Partial<CommandPublishOption>

export type CommandPublishConfig = GetConfig<CommandPublishOption>