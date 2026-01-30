/* eslint-disable react/jsx-props-no-spreading */
import { yupResolver } from '@hookform/resolvers/yup';
import Checkbox from '@mui/material/Checkbox';
import React, { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
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
  ContainerCheckBox,
  TitleText,
} from './style';

export function EditProduct() {
  const schema = Yup.object().shape({
    name: Yup.string().required('Campo vazio, informe o nome do produto!'),
    price: Yup.string().required('Campo vazio, informe o preço do produto!'),
    category: Yup.object().required('Escolha uma categoria!'),
    offer: Yup.bool(),
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
  const { state } = useLocation();
  const navigate = useNavigate();
  const product = state;

  const onSubmit = async (data) => {
    const productDataFormData = new FormData();

    productDataFormData.append('name', data.name);
    productDataFormData.append('price', data.price);
    productDataFormData.append('category_id', data.category.id);
    productDataFormData.append('file', data.file[0]);
    productDataFormData.append('offer', data.offer);

    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    await toast.promise(
      api.put(`products/${product.id}`, productDataFormData),
      {
        pending: 'Aguarde, editando produto',
        success: 'Produto editado com sucesso',
        error: 'Falha ao editar produto, tente novamente',
      },
    );

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
        <TitleText>EDITAR PRODUTO</TitleText>
        <div>
          <Label>Nome</Label>
          <Input
            type="text"
            {...register('name')}
            defaultValue={product.name}
          />
          <ErrorMessage>{errors.name?.message}</ErrorMessage>
        </div>
        <div>
          <Label>Preço</Label>
          <Input
            type="number"
            {...register('price')}
            defaultValue={product.price}
          />
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
                  defaultValue={product.category}
                />
              );
            }}
          />
          <ErrorMessage>{errors.category?.message}</ErrorMessage>
        </div>

        <ContainerCheckBox>
          <Checkbox
            defaultChecked={product.offer}
            {...register('offer')}
            style={{ margin: '0' }}
          />
          <Label style={{ margin: '0' }}>Produto em oferta?</Label>
        </ContainerCheckBox>
        <ButtonStyle>Editar produto</ButtonStyle>
      </form>
    </Container>
  );
}

export default EditProduct;
