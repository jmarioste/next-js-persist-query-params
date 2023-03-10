// pages/signup.tsx
import RetainQueryLink from "../components/RetainQueryLink";

const SignUpPage = () => {
  return (
    <form>
      <h1>Sign up</h1>
      <input type="text" placeholder="username" name="username" />
      <input type="text" placeholder="password" name="password" />
      <button type="submit">Sign up</button>
      <RetainQueryLink href={"/signup"}>
        Already have an account
      </RetainQueryLink>
    </form>
  );
};
export default SignUpPage;
