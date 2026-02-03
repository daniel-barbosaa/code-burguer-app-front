import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import styled from 'styled-components';

import { Button } from '../../../components/Button/index';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    border-radius: 10px;
    background: #565656;
    padding: 30px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;

export const Label = styled.p`
  font-size: 15px;
  color: #ffff;
  margin-bottom: 3px;
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 8px;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.1);
  border: none;

  padding-left: 10px;
  min-width: 250px;
`;

export const ButtonStyle = styled(Button)`
  width: 100%;
  margin-top: 50px;
  height: 40px;
`;

export const LabelUpload = styled.label`
  display: flex;
  align-items: center;
  border: 1px dashed #ffffff;
  border-radius: 5px;
  padding: 10px;

  height: 40px;
  font-size: 12px;
  gap: 5px;
  color: #ebe6e6;

  input {
    opacity: 0;
    width: 1px;
    position: absolute;
  }
`;

export const IconUpload = styled(DriveFolderUploadIcon)`
  color: #ffffff;
`;

export const TitleText = styled.h1`
  font-size: 30px;
  color: #e9e4eb;
  margin-bottom: 10px;
  text-align: center;
`;
