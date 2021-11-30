import { useRouter } from "next/router";

const Fruit = () => {
  const router = useRouter();
  const redirectToHome = () => router.push("/");
  console.log(router);
  return (
    <h1>
      long route path page
      <button onClick={redirectToHome}>Home</button>
    </h1>
  );
};

export default Fruit;
