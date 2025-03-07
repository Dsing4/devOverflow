import Question from '@/components/forms/Question'
import { getUserById } from '@/lib/actions/user.action'
import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ask a Question | devOverflow',
}

const Page = async () => {
  const { userId } = auth()

  if (!userId) redirect('/sign-in')
  const mongoUser = await getUserById({ userId })

  // console.log(mongoUser)

  return (
    <div>
      <h1 className="h1-bold text-dark-100 dark:text-light-900">
        Ask a Question
      </h1>{' '}
      {/* Updated className */}
      <div>
        <Question mongoUserId={JSON.stringify(mongoUser?._id)} />
      </div>
    </div>
  )
}

export default Page
