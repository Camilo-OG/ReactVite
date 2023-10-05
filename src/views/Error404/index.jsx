import styles from './Error404.module.css'
import {useRouteError} from "react-router-dom"

export default function Error404() {

  const error = useRouteError();
  console.log(error)

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Error {error.status} Ops!</h3>
      <p className={styles.description}>{error.data}</p>
    </div>
  )
}
