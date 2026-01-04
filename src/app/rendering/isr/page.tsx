import Image from "next/image";
export const revalidate = 10;

export default async function IsrPage() {
  const response = await fetch("https://dog.ceo/api/breeds/image/random", {
    next: {
      revalidate: 10,
    },
  });
  const responseJson = await response.json();
  const image = responseJson.message;
  const timestamp = new Date().toISOString();
  return (
    <div>
      ISR 10秒ごとにリロード: {timestamp}
      <Image src={image} width={400} alt="" />
    </div>
  );
}
