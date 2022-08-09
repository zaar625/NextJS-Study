import Link from "next/link"

const Layout = () => {
  return (
    <div>
        <Link href={`/home`}></Link>
        <Link href={`/register`}></Link>
        <Link href={`/login`}></Link>
    </div>
  )
}

export default Layout
