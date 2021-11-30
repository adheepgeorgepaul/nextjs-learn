import { useRouter } from "next/router";

const Student = () => {
  const router = useRouter();
  const redirectToHome = () => router.push("/");
  console.log(router);
  return (
    <h1>
      Hi, {router.query.student}
      <button onClick={redirectToHome}>Home</button>
    </h1>
  );
};

export default Student;
