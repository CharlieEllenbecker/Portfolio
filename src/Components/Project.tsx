import Card from 'react-bootstrap/Card'

interface ProjectProps {
  title: string,
  subTitle: string,
  text: string
}

// { title, subTitle, text }: ProjectProps

const Project = () => {
  return (
    <Card className="project">
      <Card.Header>
        <Card.Title>React</Card.Title>
        <Card.Subtitle>Date here</Card.Subtitle>
      </Card.Header>
      <Card.Body>
        <Card.Text>
          Front end experience with React Javascript and React Typescript
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Project