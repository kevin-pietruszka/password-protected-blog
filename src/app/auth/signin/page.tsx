import { SignInForm } from "@/components/signin-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function LoginPage() {

  return (
    <section id="login" className="w-screen h-screen flex items-center justify-center">
      <Card className="max-w-lg">
        <CardHeader>
          <CardTitle> {"Welcome to Isabelles Blog!"} </CardTitle>
          <CardDescription>
            {"Please enter the password below."}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <SignInForm />
        </CardContent>
      </Card>
    </section>
  );
}
