import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const BackButton = () => {
  return (
    <div> <Link href={"/"} className="">
    <span className="flex gap-2 hover:underline underline-offset-2">
    <ArrowLeft size={16} className="my-auto" /><h1 className="my-auto text-sm">back</h1>
    </span>
  </Link></div>
  )
}

export default BackButton
