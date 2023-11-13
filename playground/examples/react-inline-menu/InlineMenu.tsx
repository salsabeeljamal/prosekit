import { useEditor } from 'prosekit/react'
import { InlinePopover } from 'prosekit/react/inline-popover'

import ButtonGroup from './ButtonGroup'

export default function InlineMenu() {
  const editor = useEditor()

  return (
    <InlinePopover className="INLINE_MENU" editor={editor}>
      <ButtonGroup />
    </InlinePopover>
  )
}
