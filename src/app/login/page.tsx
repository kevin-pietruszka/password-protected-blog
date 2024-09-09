"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from 'react';
import { useForm } from "react-hook-form";
import { useRouter } from 'next/navigation';
import { ThemeButton } from "@/components/theme-button";

const formSchema = z.object({
  password: z.string(),
})

export default function LoginPage() {

  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);

    const password = values.password;

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      })

      if (response.ok) {
        setHasError(false);
        router.push("/blog");
      } else {
        throw new Error('Login failed');
      }
    } catch (error) {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }

    setIsLoading(false);
  }

  return (
    <section id="login" className="w-screen h-screen flex items-center justify-center">
      <Card className="max-w-lg">
        <CardHeader>
          <CardTitle> {"Welcome to Isabelles Blog!"} </CardTitle>
          <CardDescription className={hasError ? "text-destructive" : ""}>
            {hasError ? "Please try again." : "Please enter the password below."}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel> {"Password"} </FormLabel>
                    <FormControl>
                      <Input type="password" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
            </form>
          </Form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button type="submit" disabled={isLoading}> {isLoading ? 'Submitting...' : 'Submit'} </Button>
          <ThemeButton />
        </CardFooter>
      </Card>
    </section>
  );
}
