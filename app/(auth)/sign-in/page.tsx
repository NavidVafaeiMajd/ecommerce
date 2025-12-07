import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import SignIn from "@/app/components/ui/sign-in";
import SignUp from "@/app/components/ui/sign-up";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/app/components/ui/tabs";

const Page = () => {
  return (
    <>
      <Tabs defaultValue="sign-in" className="items-center">
        <TabsList className="mt-5">
          <TabsTrigger value="sign-in">Sign In</TabsTrigger>
          <TabsTrigger value="sign-up">Sign Up</TabsTrigger>
        </TabsList>
        <TabsContent value="sign-in" className="max-md:w-full!  md:w-1/2">
          <Card>
            <CardHeader>
              <CardTitle>Sign In</CardTitle>
              <CardDescription>
                Login to yout account. Click save when you&apos;re
                done.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
              <SignIn />
            </CardContent>
            <CardFooter></CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="sign-up" className="max-md:w-full!  md:w-1/2">
          <Card>
            <CardHeader> 
              <CardTitle>Sign Up</CardTitle>
              <CardDescription>
                Create your account. Click save when you&apos;re
                done.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
              <SignUp />
            </CardContent>
            <CardFooter></CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </>
  );
};

export default Page;
