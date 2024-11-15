import { ThemeProvider as Provider, ThemeProviderProps } from "next-themes";

const ThemeProvider = ({ children, ...props }: ThemeProviderProps) => {
  return <Provider {...props}>{children}</Provider>;
};

export default ThemeProvider;
