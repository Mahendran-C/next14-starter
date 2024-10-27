import LoginForm from "@/components/loginForm/LoginForm";
import { handleGithubLogin } from "@/lib/action";
import { signIn } from "@/lib/auth";
import styles from "./login.module.css";

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form
          
          action={async () => {
            "use server";
            await signIn("google");
          }}
        >
          <button className={styles.google} type="submit">Signin with Google</button>
        </form>
        <br />
        <form  action={handleGithubLogin}>
          <button className={styles.github}  type="submit">Signin with Github</button>
        </form>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
