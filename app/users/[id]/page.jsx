import getUser from "@/utils/get_user";
import getPost from "@/utils/get_post";
import PostList from "@/components/post_list";
import { Suspense } from "react"

export async function generateMetadata({params: {id}}){
  const user = await getUser(id);
  return {
    title: user.name,
    description: user.email,
  }
}

export default async function User({ params: { id } }) {
  const userData = getUser(id);
  const postList = getPost(id);

  const user = await userData;

  return (
    <div>
      <h1>{user.name}</h1>
      <Suspense fallback={<div>Loading...</div>}>
      <PostList promise={postList} />
      </Suspense>
    </div>
  );
}
