import { handleGithubLogin } from '@/lib/action';

import { auth, signIn } from "@/lib/auth";

const LoginPage = async() => {

  const session = await auth();
console.log(session)

  return (
    <div>
      <form
        action={async () => {
          "use server";
          await signIn("google");
        }}
      >
        <button type="submit">Signin with Google</button>
      </form>
      <br />
      <form
        action={handleGithubLogin}
      >
        <button type="submit">Signin with Github</button>
      </form>
    </div>
  );
};

export default LoginPage;
