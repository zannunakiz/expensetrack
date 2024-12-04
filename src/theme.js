import { extendTheme } from '@chakra-ui/react'

const themes = extendTheme({
    initialColorMode: 'light',
    useSystemColorMode: true,
})

export default themes