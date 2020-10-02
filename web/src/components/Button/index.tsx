import React, { ButtonHTMLAttributes } from 'react';
import BeatLoader from 'react-spinners/BeatLoader';

import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
};

const Button: React.FC<ButtonProps> = ({ children, loading, ...rest }) => (
  <Container type="button" {...rest}>
    {loading ? (
      <BeatLoader size={8} color="#312e38" loading={loading} />
    ) : (
      children
    )}
  </Container>
);

export default Button;
