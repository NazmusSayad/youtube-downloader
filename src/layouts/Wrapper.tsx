const Wrapper = ({
  className,
  children,
  ...props
}: {
  className?: any
  children: any
  [i: string]: any
}) => {
  return (
    <div {...props} className={$cn('wrapper', className)}>
      {children}
    </div>
  )
}

export const RootWrapper: typeof Wrapper = ({ className, ...props }) => {
  return <Wrapper {...props} className={['rootWrapper', className]} />
}

export default Wrapper
