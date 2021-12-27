import React from 'react'
import classnames from 'classnames'
import Link from 'next/link'

interface CustomLinkProps {
  className: undefined | string | string[]
  title: string
  path: string
}

const CustomLink: React.FC<CustomLinkProps> = ({
  className,
  title,
  path,
}) => {
  return (
    <div className={classnames(className, 'p-2')}>
      <Link href={path}>
        <a>{title}</a>
      </Link>
    </div>
  )
}

export default CustomLink
