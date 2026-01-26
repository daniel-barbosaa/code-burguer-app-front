/* eslint-disable react/jsx-props-no-spreading */

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as Yup from 'yup';

import ImgRegister from '../../assets/burguer3.svg';
import Logo from '../../assets/logo.svg';
import { Button, ErrorMessage } from '../../components/index';
import api from '../../services/api';
import {
  Container,
  Containeriten,
  Input,
  Label,
  RegisterImage,
  LogoImg,
  SingInLink,
} from './style';

export function Register() {
  const navigate = useNavigate();

  const schema = Yup.object().shape({
    name: Yup.string().required('Nome é obrigatório'),
    email: Yup.string()
      .email('Digite um email válido')
      .required('Email obrigatório!'),
    password: Yup.string()
      .required('A senha é obrigatória')
      .min(6, 'Sua senha deve ter no mínimo 6 dígitos! '),
    passwordConfirm: Yup.string()
      .required('Confirme a senha')
      .oneOf([Yup.ref('password')], 'As senhas não correspondem'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (clientData) => {
    try {
      const { status } = await api.post(
        'users',
        {
          name: clientData.name,
          email: clientData.email,
          password: clientData.password,
        },
        { validateStatus: () => true },
      );

      if (status === 201 || status === 200) {
        toast.success('Cadastro criado com sucesso, faça o login!');
        setTimeout(() => {
          navigate('/');
        }, 2000);
        navigate('/');
      } else if (status === 409) {
        toast.error('Email existente! Faça login para continuar.');
      } else {
        throw new Error();
      }
    } catch (err) {
      toast.error('Falha no sistema, tente novamente em instantes!');
    }
  };

  return (
    <Container>
      <RegisterImage src={ImgRegister} alt="register-image" />
      <Containeriten>
        <LogoImg src={Logo} alt="image-logo" />
        <h1>Cadastre-se</h1>
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Label>Nome</Label>
          <Input
            type="text"
            {...register('name')}
            erro={errors.name?.message}
          />
          <ErrorMessage>{errors.name?.message}</ErrorMessage>
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
          <Label>Confirme a senha</Label>
          <Input
            type="password"
            {...register('passwordConfirm')}
            erro={errors.passwordConfirm?.message}
          />
          <ErrorMessage>{errors.passwordConfirm?.message}</ErrorMessage>

          <Button type="submit" style={{ marginTop: 25 }}>
            Sing In
          </Button>
        </form>

        <SingInLink>
          Já possui uma conta ?
          <Link to="/login" style={{ color: 'white' }}>
            {' '}
            Sing In
          </Link>
        </SingInLink>
      </Containeriten>
    </Container>
  );
}
