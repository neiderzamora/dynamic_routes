import getUsers from "@/utils/get_users"
import Link from "next/link";

export default async function Users() {
    const users = await getUsers();
  return (
    <>
      <p>users</p>
      {users.map((users) => {
        return (
        <li key={users.id}>
            <Link href={`/users/${users.id}`} >
            {users.name}
            </Link>
            </li>
        )
      })}
    </>
  )
}
