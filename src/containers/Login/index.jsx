/* eslint-disable react/jsx-props-no-spreading */

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as Yup from 'yup';

import ImgLogin from '../../assets/burguer1.svg';
import Logo from '../../assets/logo.svg';
import { Button, ErrorMessage } from '../../components/index';
import { useUser } from '../../hooks/UserContext';
import api from '../../services/api';
import {
  Container,
  Containeriten,
  Input,
  Label,
  LoginImage,
  LogoImg,
  SingInLink,
} from './style';

export function Login() {
  const navigate = useNavigate();
  const { putUserData } = useUser();
  const schema = Yup.object().shape({
    email: Yup.string()
      .email('Digite um email válido!')
      .required('Email obrigatório!'),
    password: Yup.string()
      .required('A senha é obrigatória')
      .min(6, 'Sua senha deve ter no mínimo 6 dígitos! '),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (clientData) => {
    const { data } = await toast.promise(
      api.post('sessions', {
        email: clientData.email,
        password: clientData.password,
      }),
      {
        pending: 'Verificando seus dados!',
        success: 'Bem-vindo(a)!',
        error: 'Verifique seus dados!',
      },
    );

    console.log('teste');

    putUserData(data);

    setTimeout(() => {
      if (data.admin) {
        navigate('/pedidos');
      } else {
        navigate('/');
      }
    }, 1000);
  };

  return (
    <Container>
      <LoginImage src={ImgLogin} alt="Login-image" />

      <Containeriten>
        <LogoImg src={Logo} alt="image-logo" />

        <h1>Login</h1>

        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Label>Email</Label>
          <Input
            type="email"
            {...register('email')}
            erro={errors.email?.message}
          />
          <ErrorMessage>{errors.email?.message}</ErrorMessage>
          <Label>Senha</Label>
          <Input
            type="password"
            {...register('password')}
            erro={errors.password?.message}
          />
          <ErrorMessage>{errors.password?.message}</ErrorMessage>

          <Button type="submit" style={{ marginTop: 25 }}>
            Sing Up
          </Button>
        </form>

        <SingInLink>
          Não possui uma conta ?
          <Link to="/cadastro" style={{ color: 'white' }}>
            {' '}
            Sing Up
          </Link>
        </SingInLink>
      </Containeriten>
    </Container>
  );
}
