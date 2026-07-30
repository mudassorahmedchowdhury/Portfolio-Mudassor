import { useState, type ReactNode } from 'react'
import { Skeleton } from '@/components/ui/skeleton'
import { cn } from '@/lib/utils'

interface ImageWithSkeletonProps {
  src: string
  alt: string
  className?: string
  fallback?: ReactNode
}

/** Shows a shimmering skeleton until the image finishes loading; swaps to `fallback` on error. */
export function ImageWithSkeleton({ src, alt, className, fallback }: ImageWithSkeletonProps) {
  const [status, setStatus] = useState<'loading' | 'loaded' | 'error'>('loading')

  if (status === 'error' && fallback) {
    return <>{fallback}</>
  }

  return (
    <div className={cn('relative overflow-hidden', className)}>
      {status !== 'loaded' && <Skeleton className="absolute inset-0 rounded-[inherit]" />}
      <img
        src={src}
        alt={alt}
        onLoad={() => setStatus('loaded')}
        onError={() => setStatus('error')}
        className={cn(
          'size-full object-cover transition-opacity duration-300',
          status === 'loaded' ? 'opacity-100' : 'opacity-0'
        )}
      />
    </div>
  )
}
