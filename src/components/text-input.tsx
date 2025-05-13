type TextInputProps = {
  className?: string;
  value: string;
  placeholder: string;
  onChange: (text: string) => void;
};

export default function TextInput({ className, value, placeholder, onChange }: TextInputProps) {
  return <input className={`bg-gray-300 dark:bg-gray-700 px-2 py-1 rounded-lg ${className}`} type="text" value={value} placeholder={placeholder} onChange={(e) => onChange(e.currentTarget.value)} />;
}
