import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import apiCodeBurguer from '@/services/api';

export function useRegisterController() {
  const registerSchema = Yup.object().shape({
    name: Yup.string().required('Nome é obrigatório'),
    email: Yup.string()
      .email('Digite um email válido')
      .required('Email é obrigatório'),
    password: Yup.string()
      .required('Senha é obrigatório')
      .min(6, 'Sua senha deve ter no mínimo 6 dígitos '),
    passwordConfirm: Yup.string()
      .required('Confirme a senha')
      .oneOf([Yup.ref('password')], 'As senhas não correspondem'),
  });
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const onSubmit = async (clientData) => {
    try {
      const { status } = await apiCodeBurguer.post(
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

  return {
    register,
    handleSubmit,
    errors,
    onSubmit,
  };
}
