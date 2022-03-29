import { Text, Box, Progress, Flex } from '@chakra-ui/react'

export default function likeForm(props) {
    return (
        <Flex justify="flex-end">
            <Box >
                <Progress w={"100%"} colorScheme='pink'  value={(props.item.likes * 100) / (props.item.likes + props.item.dislikes)} />
                <Text color='gray.500'
                    fontWeight='semibold'
                    letterSpacing='wide'>
                    {props.item.likes} likes &bull; {props.item.dislikes} dislikes
                </Text>
            </Box>
        </Flex>
    )
}