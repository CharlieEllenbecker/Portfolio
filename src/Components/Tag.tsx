
interface tagProps {
  name: string
}

const Tag = ({ name }: tagProps) => {
  return (
    <div className="tag">
      {name}
    </div>
  )
}

export default Tag