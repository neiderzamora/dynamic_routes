import Image from "next/image";

async function getDogs() {
  const response = await fetch("https://dog.ceo/api/breeds/image/random", {
    next:{
      revalidate: 5
    }
  });
  const data = await response.json();
  return data;
}

export default async function Fetch_data_dogs() {
    const dogs = await getDogs()
    console.log(dogs.message)
  return <>
  <Image src={dogs.message} alt="dogs" width={300} height={200} />
  </>;
}
