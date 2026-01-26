/* eslint-disable react/jsx-props-no-spreading */
import { ContainerButton } from './styled';

export function Button({ children, ...props }) {
  return <ContainerButton {...props}>{children}</ContainerButton>;
}
