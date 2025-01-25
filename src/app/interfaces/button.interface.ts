export interface ButtonConfig {
  label: string;
  action: () => void;
  type?: string;
  class?: string;
  fontSize?: string;
  disabled?: boolean;
  href?: string;
  icon?: string;
  iconPosition?: 'left' | 'right'; 
}
