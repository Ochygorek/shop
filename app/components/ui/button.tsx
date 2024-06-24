import Link from 'next/link'

interface Props {
  children: React.ReactNode,
  href: string
}

function button(prop: Props) {

  const { children, href } = prop

  return (
    <Link href={href} className='w-full h-8 rounded-md text-black'>{children}</Link>
  )
}

export default button