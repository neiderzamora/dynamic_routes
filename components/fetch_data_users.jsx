
async function getUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  if (!response) {
    throw new Error("failed to load data");
  }
  const data = await response.json();
  return data;
}

export default async function Fetch_data_users() {
  const users = await getUsers();
  console.log(users);
  return (
    <>
      <p className="text-white">{users.name}</p>
    </>
  );
}
