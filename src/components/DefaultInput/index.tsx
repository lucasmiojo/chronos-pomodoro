import styles from "./styles.module.css";

type DefaultInputProps = {
  id: string;
  labelText?: string;
} & React.ComponentProps<"input">;
// Essa linha é para fazer um Union entre os customTypes + tipos nativos dos componentes (no caso, propriedades dos componentes)
// Caso não existisse, só seria possível pegar os customTypes

// usamos o ...props quand definimos as props para garantir que as outras propriedades venham também pra essa instância
// como required, disabled, etc... essas propriedades nativas
export function DefaultInput({
  id,
  type,
  labelText,
  ...props
}: DefaultInputProps) {
  return (
    <>
      {/* Como labelText é opicional, essa lógica é para:
    se eu tiver lá no componente pai, ele renderiza a label, se não, nem renderiza (performance) */}
      {labelText && <label htmlFor={id}>{labelText}</label>}
      <input id={id} type={type} {...props} />
    </>
  );
}
