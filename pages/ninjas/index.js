
import Link from "next/link"
import styles from "../../styles/Ninjas.module.css"

const Home = ({ ninjas }) => {
  return (
    <div>
      <h1>All Ninjas : </h1>
      {ninjas.map((user) => (
        <Link key={user.id} href={`/ninjas/${user.id}`}>
          <h3 className={styles.single}>{user.name}</h3>
        </Link>
      ))}
    </div>
  )
}

export const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const data = await response.json()
  return {
    props : {
      ninjas: data
    }
  }
}

export default Home