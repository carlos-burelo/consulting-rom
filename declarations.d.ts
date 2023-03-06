import type { NextPage } from 'next'
import type { ReactNode, ReactElement } from 'react'

export declare global {
  type FC<T = object> = {
    (props: Props<T>): ReactElement<any, any> | null
    displayName?: string | undefined
  }
  type Props<T> = { children?: ReactNode } & T
  type PageProps = {
    searchParams: Record<string, string>
    params: Record<string, string>
  }
  type Page = NextPage<PageProps>

  export type TimeFormat = `${number}${'d' | 'h' | 'm'}`

  export type RelativeTimeFormat = `${number}${'am' | 'pm'}`
}