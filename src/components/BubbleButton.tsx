import { deleteProps } from '@tiptap/react'
import { ComponentProps, ReactNode } from 'react'

interface BubbleButtonProps extends ComponentProps<'button'> {
  children: ReactNode
}



export function BubbleButton(props: BubbleButtonProps) {
  return (
    <button className='p-2 text-zinc-200 text-sm flex items-center gap-1.5 leading-none font-medium hover:text-zinc-50 hover:bg-zinc-600 data-[active=true]:text-violet-400' {...props} />
  )

}