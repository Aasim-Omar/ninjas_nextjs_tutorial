
export const getStaticPaths = async () => {
  const respons = await fetch(`https://jsonplaceholder.typicode.com/users`)
  const data = await respons.json()
  const paths = data.map((ninja) => {
    return {
      params: { id: ninja.id.toString() }
    }
  })
  return {
    paths: paths,
    fallback: false,
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  const data = await response.json()
  return {
    props: {
      ninja: data,
    }
  }
}

const Details = ({ ninja: { name, email, website, address: { city } } }) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>{email}</p>
      <p>{website}</p>
      <p>{city}</p>
    </div>
  )
}

export default Details