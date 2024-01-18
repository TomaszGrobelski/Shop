import { FormEvent } from 'react';

export interface EmailLabelProps {
  children: React.ReactNode;
}

export interface FormHeaderProps {
  h1: string;
  children: React.ReactNode;
  onSubmit: (e: FormEvent) => void;
  
}

export interface PasswordLabelProps {
  children: React.ReactElement;
}

export interface WrapperWithFormAndTitleProps {
  h1: string;
  children: React.ReactNode;
  onSubmit: (e: FormEvent) => void;
}
