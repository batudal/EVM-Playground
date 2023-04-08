import React from 'react'

import cn from 'classnames'

type Props = {
  children: React.ReactNode
  className?: string
}

export const Container: React.FC<Props> = ({ children, className }) => {
  return (
    <div className={cn('container mx-auto px-0 md:px-0', className)}>
      {children}
    </div>
  )
}
