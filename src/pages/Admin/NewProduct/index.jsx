/* eslint-disable react/jsx-props-no-spreading */
import { yupResolver } from '@hookform/resolvers/yup';
import React, { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import ReactSelect from 'react-select';
import { toast } from 'react-toastify';
import * as Yup from 'yup';

import { ErrorMessage } from '../../../components';
import api from '../../../services/api';
import {
  Container,
  Label,
  Input,
  ButtonStyle,
  LabelUpload,
  IconUpload,
  TitleText,
} from './style';

export function NewProduct() {
  const schema = Yup.object().shape({
    name: Yup.string().required('Campo vazio, informe o nome do produto!'),
    price: Yup.string().required('Campo vazio, informe o preço do produto!'),
    category: Yup.object().required('Escolha uma categoria!'),
    file: Yup.mixed()
      .test('Required', 'Adicione a imagem!', (value) => {
        return value?.length > 0;
      })
      .test('fileSize', 'Adicione arquivo até 2mb', (value) => {
        return value[0]?.size <= 200000;
      })
      .test('type', 'Adicione apenas arquivos jpeg', (value) => {
        return (
          value[0]?.type === 'image/jpeg' || value[0]?.type === 'image/png'
        );
      }),
  });
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [filename, setFileName] = useState(null);
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const productDataFormData = new FormData();

    productDataFormData.append('name', data.name);
    productDataFormData.append('price', data.price);
    productDataFormData.append('category_id', data.category.id);
    productDataFormData.append('file', data.file[0]);

    await toast.promise(api.post('products', productDataFormData), {
      pending: 'Aguarde, criando novo produto',
      success: 'Produto criado com sucesso',
      error: 'Falha ao criar produto, tente novamente',
    });

    setTimeout(() => {
      navigate('/listar-produtos');
    }, 2000);
  };

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('categories');

      setCategories(data);
    }

    loadCategories();
  }, []);

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TitleText>NOVO PRODUTO</TitleText>
        <div>
          <Label>Nome</Label>
          <Input type="text" {...register('name')} />
          <ErrorMessage>{errors.name?.message}</ErrorMessage>
        </div>
        <div>
          <Label>Preço</Label>
          <Input type="number" {...register('price')} />
          <ErrorMessage>{errors.price?.message}</ErrorMessage>
        </div>
        <div>
          <LabelUpload>
            {filename || (
              <>
                <IconUpload />
                Escolha a imagem do produto
              </>
            )}
            <Input
              type="file"
              accept="image/png, image/jpeg"
              {...register('file')}
              onChange={(value) => {
                setFileName(value.target.files[0]?.name);
              }}
            />
          </LabelUpload>
          <ErrorMessage>{errors.file?.message}</ErrorMessage>
        </div>
        <div>
          <Controller
            name="category"
            control={control}
            render={({ field }) => {
              return (
                <ReactSelect
                  {...field}
                  style={{ marginTop: '10px' }}
                  options={categories}
                  getOptionLabel={(cat) => cat.name}
                  getOptionValue={(cat) => cat.id}
                  placeholder="Catetorias"
                />
              );
            }}
          />
          <ErrorMessage>{errors.category?.message}</ErrorMessage>
        </div>
        <ButtonStyle>Adicionar produto</ButtonStyle>
      </form>
    </Container>
  );
}

export default NewProduct;
