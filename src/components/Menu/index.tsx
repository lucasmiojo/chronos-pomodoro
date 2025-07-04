import {
  HistoryIcon,
  HouseIcon,
  MoonIcon,
  SettingsIcon,
  SunIcon,
} from "lucide-react";
import styles from "./styles.module.css";
import { useState, useEffect } from "react";
// O useState deve ser uma função "pura" (apenas lidar com o que o React prevê)
// Para utilizar algo que cause efeito colateral (fazer chamadas http, mudar o index.html, etc)
// Usa-se o useEffect

type AvailableThemes = "dark" | "light";

export function Menu() {
  const [theme, setTheme] = useState<AvailableThemes>(() => {
    const storageTheme =
      (localStorage.getItem("theme") as AvailableThemes) || "dark";

    return storageTheme;
  });

  const nextThemeIcon = {
    dark: <SunIcon />,
    light: <MoonIcon />,
  };

  function handleThemeChange(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) {
    event.preventDefault(); // Não segue o link

    setTheme((prevTheme) => {
      const nextTheme = prevTheme === "dark" ? "light" : "dark";

      return nextTheme;
    });
  }

  useEffect(() => {
    console.log("Theme mudou", theme);
    document.documentElement.setAttribute("data-theme", theme);

    localStorage.setItem("theme", theme);
  }, [theme]);

  // NOTAS SOBRE useEffect
  // useEffect(() => {
  //   console.log("useEffect sem dependências");
  // }); // Executado todas as vezes que o componente renderiza a tela

  // useEffect(() => {
  //   console.log("useEffect com array de dependências vazio");
  // }, []); // Executa apenas quando o React monta o componente pela primeira vez
  // Por exemplo: você tem um eccomerce e ele faz a busca dos dados na API
  // você quer que isso ocorra apenas uma vez, correto? E aí se a tela renderizar de novo
  // vocÊ não quer que ela faça a busca de novo, tendo em vista que os dados já estão disponíveis pra vocÊ

  // useEffect(() => {
  //   console.log("useEffect com array de dependências preenchido");

  // função de Clean Up (função para tirar "sujeiras da página")
  // função para limpar componentes antes de ações ocorrerem e não guardar o estado delas
  // return () => {
  //   console.log("O theme será atualizado");
  // };
  // }, [theme]); // Executa apenas quando o valor da dependênia mudar

  return (
    <nav className={styles.menu}>
      <a
        className={styles.menuLink}
        href="#"
        aria-label="Ir para a Home"
        title="Ir para a Home"
      >
        <HouseIcon />
      </a>
      <a
        className={styles.menuLink}
        href="#"
        aria-label="Ver Histórico"
        title="Ver Histórico"
      >
        <HistoryIcon />
      </a>
      <a
        className={styles.menuLink}
        href="#"
        aria-label="Configurações"
        title="Configurações"
      >
        <SettingsIcon />
      </a>
      <a
        className={styles.menuLink}
        href="#"
        aria-label="Mudar Tema"
        title="Mudar Tema"
        onClick={handleThemeChange}
      >
        {nextThemeIcon[theme]}
      </a>
    </nav>
  );
}
