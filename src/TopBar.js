import { Text, Box} from '@chakra-ui/react'

export default function TopBar() {

  return (
    <Box h="100" bg="teal.200">
    <Text fontWeight='bold'
      textTransform='uppercase'
      fontSize='lg'
      letterSpacing='wide'
      color='teal.900'
      align="center"
      justify="center">
      films
    </Text>
  </Box>
    )
}