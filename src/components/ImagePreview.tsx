interface Props {
  src: string
  alt: string
  className?: string
  loading?: 'eager' | 'lazy'
}

export function ImagePreview({ src, alt, className, loading }: Props) {
  return (
    <a className="image-preview-link" href={src} target="_blank" rel="noreferrer" aria-label={`View full-size image: ${alt}`}>
      <img src={src} alt={alt} className={className} loading={loading} />
      <span className="image-zoom-hint" aria-hidden>View full size ↗</span>
    </a>
  )
}
