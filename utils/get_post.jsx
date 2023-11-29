export default async function getPost(id) {
    const response = await fetch(`http://jsonplaceholder.typicode.com/posts?userId=${id}`)
    if (!response){
        throw new Error('Failed to load post')
    }
    return response.json();
}
