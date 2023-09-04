export const shortcuts = {
  EDITOR_BOX:
    'my-2 box-border h-[250px] w-full overflow-auto rounded-md p-4 outline outline-2 relative',

  SLASH_MENU:
    'relative max-h-[400px] min-w-[120px] select-none overflow-auto whitespace-nowrap rounded bg-white dark:bg-zinc-800 border border-solid border-gray-500',

  SLASH_MENU_ITEM:
    'relative min-w-[64px] cursor-default select-none whitespace-nowrap p-2 data-[selected]:bg-gray-200 data-[selected]:dark:bg-gray-700',

  LANGUAGE_BUTTON:
    'rounded-md text-xs px-2 py-0.5 bg-transparent hover:bg-gray-500/30 border-none text-gray-400 outline-none cursor-pointer box-border m-2',

  LANGUAGE_COMBO_BOX:
    'flex flex-col overflow-hidden rounded-md  bg-white dark:bg-zinc-800 rounded-md   shadow-lg border border-solid border-gray-200 divide-y divide-y-1 divide-gray-200 box-border w-50',

  LANGUAGE_COMBO_BOX_INPUT:
    'flex h-8 w-full rounded-md bg-transparent text-sm [&_input]:outline-none [&_input]:border-none disabled:cursor-not-allowed disabled:opacity-50 px-4 py-2',

  LANGUAGE_COMBO_BOX_LIST:
    'max-h-[300px] overflow-y-auto overflow-x-hidden border-solid border-0 px-1 py-2 flex flex-col',

  LANGUAGE_COMBO_BOX_ITEM:
    'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-gray-100 aria-selected:text-gray-900',
}