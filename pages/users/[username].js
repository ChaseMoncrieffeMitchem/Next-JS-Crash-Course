import React from 'react'
import { useRouter } from 'next/router'

export default function User() {
    const router = useRouter()
    const {username} = router.query
  return (
    <>
    <h1>This is user: {username}</h1>
    </>
  )
}
 