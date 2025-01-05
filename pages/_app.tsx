import Layout from "@/components/organisms/Layout"
import i18n from "@/i18n"
import "@/styles/globals.css"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import type { AppProps } from "next/app"
import { I18nextProvider } from "react-i18next"
import "@mantine/core/styles.css"
import { createTheme, MantineProvider } from "@mantine/core"

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: { refetchOnWindowFocus: false },
    },
  })
  const theme = createTheme({
    /** Put your mantine theme override here */
  })
  return (
    <I18nextProvider i18n={i18n}>
      <MantineProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </QueryClientProvider>
      </MantineProvider>
    </I18nextProvider>
  )
}
