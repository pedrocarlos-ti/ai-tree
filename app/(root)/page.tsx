import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";

const Home = async () => {
  const session = await auth();

  console.log(session);
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h1 className="text-7xl font-bold">Welcome to the tree🌳</h1>
      <h1 className="font-space-grotesk text-7xl font-bold">
        Welcome to the tree 🌳
      </h1>

      <form
        className="mt-10"
        action={async () => {
          "use server";
          await signOut({ redirectTo: ROUTES.SIGN_IN });
        }}
      >
        <Button type="submit">Log out</Button>
      </form>
    </div>
  );
};

export default Home;
