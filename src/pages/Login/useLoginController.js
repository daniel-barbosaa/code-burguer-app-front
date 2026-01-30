import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api';
import { useUser } from '../../hooks/UserContext';

export function useLoginController() {
  const loginSchema = Yup.object().shape({
    email: Yup.string()
      .email('Digite um email válido')
      .required('Email é obrigatório'),
    password: Yup.string()
      .required('Senha é obrigatório')
      .min(6, 'Sua senha deve ter no mínimo 6 dígitos'),
  });
  const navigate = useNavigate();
  const { putUserData } = useUser();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
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

    putUserData(data);

    setTimeout(() => {
      if (data.admin) {
        navigate('/pedidos');
      } else {
        navigate('/');
      }
    }, 500);
  };

  return {
    register,
    handleSubmit,
    errors,
    onSubmit,
  };
}
