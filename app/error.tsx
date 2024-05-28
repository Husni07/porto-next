'use client'
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div>
      <h2>Error bang!🗿</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  )
}