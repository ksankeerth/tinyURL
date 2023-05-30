export type InputFieldError = {
  state: boolean;
  message: string;
};

export type FormFieldErrors = {
  [key:string] : InputFieldError;
};

export type LoginResponse = {
  token?: string;
  error?: string;
};
