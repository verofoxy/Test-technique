import { Text, Image, Badge, Stack } from '@chakra-ui/react'

export default function MovieDetails(props) {
    return (
        <Stack>

            <Image
                borderRadius='lg'
                width={"100%"} height={"100%"}
                src='https://bit.ly/2jYM25F'
                alt='Woman paying for a purchase'
                p={4}
            />
            <Text
                fontWeight='bold'
                textTransform='uppercase'
                fontSize='sm'
                letterSpacing='wide'
                color='teal.600'
                nbroflines={1}
                mt={2}
            >
                {props.item.title}
            </Text>
            <Badge borderRadius='full' w={"25%"} px='2' colorScheme='teal'>
                {props.item.category}
            </Badge>
        </Stack>
    )
}