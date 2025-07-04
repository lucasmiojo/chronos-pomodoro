import styles from "./styles.module.css";

type DefaultButtonProps = {
  color?: "green" | "red";
  icon: React.ReactNode;
} & React.ComponentProps<"button">;
// Essa linha é para fazer um Union entre os customTypes + tipos nativos dos componentes (no caso, propriedades dos componentes)
// Caso não existisse, só seria possível pegar os customTypes

// usamos o ...props quand definimos as props para garantir que as outras propriedades venham também pra essa instância
// como required, disabled, etc... essas propriedades nativas
export function DefaultButton({
  icon,
  color = "green",
  ...props
}: DefaultButtonProps) {
  return (
    <>
      <button className={`${styles.button} ${styles[color]}`} {...props}>
        {icon}
      </button>
    </>
  );
}
