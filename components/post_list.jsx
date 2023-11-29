export default async function PostList({promise}) {
  const post = await promise
  return (
    <div>
      <ul>
        {post.map((post) => {
          return (
            <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
