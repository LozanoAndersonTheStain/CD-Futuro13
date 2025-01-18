
export interface ButtonConfig {
  label: string;
  action: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  class?: string;
  icon?: string;
  fontSize?: string;
}
