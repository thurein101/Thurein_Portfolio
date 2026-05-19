import React from 'react'

type Props = {
  params: Promise<{
    name: string
  }>
}

export default async function TeamDetailPage({ params }: Props) {
  const { name } = await params

  return (
    <div>
      <h1>{name}</h1>
    </div>
  )
}