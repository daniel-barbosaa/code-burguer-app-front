import { Link } from 'react-router-dom';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';

import ImgRegister from '../../assets/background.svg';
import Logo from '../../assets/logo.svg';
import { useRegisterController } from './useRegisterController';

export function Register() {
  const { errors, handleSubmit, onSubmit, register } = useRegisterController();
  return (
    <div className="min-h-screen grid md:grid-cols-2">
      <div
        className="hidden md:block bg-cover bg-center"
        style={{ backgroundImage: `url(${ImgRegister})` }}
      />

      <div className="flex items-center justify-center px-6">
        <Card className="w-full max-w-sm shadow-none border-none">
          <CardHeader className="space-y-3 text-center">
            <img
              src={Logo}
              alt="CodeClub Burger"
              className="mx-auto h-14 mb-16"
            />
            <CardTitle className="text-lg font-medium text-zinc-900">
              <p className="font-bold text-2xl"> Crie sua conta</p>
              <span className="text-xs text-zinc-500 mt-2">
                Já possui uma conta?
                <Link
                  to="/login"
                  className="text-violet-600 hover:text-violet-700 hover:underline"
                >
                  {' '}
                  Faça login
                </Link>
              </span>
            </CardTitle>
          </CardHeader>

          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <CardContent className="space-y-4">
              <div className="space-y-1">
                <Label>Nome</Label>
                <Input
                  type="text"
                  {...register('name')}
                  className="
                  focus-visible:ring-violet-500/30
                  focus-visible:border-violet-600
                "
                />
                {errors.name && (
                  <p className="text-xs text-red-500">{errors.name.message}</p>
                )}
              </div>

              <div className="space-y-1">
                <Label>Email</Label>
                <Input
                  type="email"
                  {...register('email')}
                  className="
                  focus-visible:ring-violet-500/30
                  focus-visible:border-violet-600
                "
                />
                {errors.email && (
                  <p className="text-xs text-red-500">{errors.email.message}</p>
                )}
              </div>

              <div className="space-y-1">
                <Label>Senha</Label>
                <Input
                  type="password"
                  {...register('password')}
                  className="
                  focus-visible:ring-violet-500/30
                  focus-visible:border-violet-600
                "
                />
                {errors.password && (
                  <p className="text-xs text-red-500">
                    {errors.password.message}
                  </p>
                )}
              </div>

              <div className="space-y-1">
                <Label>Confirmar senha</Label>
                <Input
                  type="password"
                  {...register('passwordConfirm')}
                  className="
                  focus-visible:ring-violet-500/30
                  focus-visible:border-violet-600
                "
                />
                {errors.passwordConfirm && (
                  <p className="text-xs text-red-500">
                    {errors.passwordConfirm.message}
                  </p>
                )}
              </div>
            </CardContent>

            <CardFooter className="flex flex-col gap-4">
              <Button
                type="submit"
                className="w-full bg-violet-600 hover:bg-violet-700 text-white mt-6"
              >
                Criar conta
              </Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  );
}
