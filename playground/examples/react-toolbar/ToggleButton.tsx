import React from 'react'

export function ToggleButton({
  active,
  available,
  onChange,
  children,
}: {
  active?: boolean
  available: boolean
  onChange: () => void
  children: React.ReactNode
}) {
  return (
    <button
      data-state={active ? 'on' : 'off'}
      onMouseDown={(event) => event.preventDefault()}
      onClick={() => onChange()}
      disabled={!available}
      className="TOGGLE_BUTTON"
    >
      {children}
    </button>
  )
}