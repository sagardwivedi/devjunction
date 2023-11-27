import Link from 'next/link';

import { loginAction } from '@/lib/actions/authAction';
import { EmailInput, PasswordInput } from '@/components/form-inputs';
import { AuthFormButton } from '@/components/butons';

export function LoginForm() {
  return (
    <form action={loginAction} className="space-y-8 animate-in">
      <div className="space-y-4">
        <EmailInput />
        <PasswordInput />
      </div>
      <AuthFormButton text="Log In" />
      <div className="flex flex-row justify-center gap-x-2">
        <p>Aleadry have an account?</p>
        <Link href={'/signup'} className="text-blue-500 hover:underline">
          Signup
        </Link>
      </div>
    </form>
  );
}
