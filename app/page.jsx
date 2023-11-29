"use client"

import { useRouter } from "next/navigation";
//import Link from "next/link";

/* Object person 
const person = {
  name: 'John Doe',
  age: 30,
}
 */

export default function Home() {
  const router = useRouter()
  return (
    <>
    <div className="text-left m-10 text-5xl">
      <h1>Home</h1>
      <section className="inline-flex">
      <button onClick={() => router.push('/about')}>Go to about page</button>
      <button onClick={() => router.push('/users')}>Go to user page</button>
      </section>
      {/* Way to use link component to pass data in URL
      <Link href={{
        pathname: '/about',
        query: {person: JSON.stringify(person)}
      }}>
      about page
      </Link>
       */}
    </div>
    </>
  );
}
