import { Text, Box, Wrap, WrapItem, Flex, Switch, HStack } from '@chakra-ui/react'
import LikeForm from './likeForm.js';
import MovieDetails from './movieDetails.js';
import { DeleteIcon } from '@chakra-ui/icons';
import { useToast } from '@chakra-ui/react'
import { movies$ } from './movies.js'
import React, { useEffect, useState } from 'react';

export default function MoviesPart() {
    const [movies, setMovies] = useState([]);
    const [isSuccess, setIsSuccess] = useState(false);
    const toast = useToast()

    useEffect(() => {

        const fetchMatcher = async () => {
            let moviess = await movies$;
            setMovies(moviess);
            setIsSuccess(true);
        }

        fetchMatcher()
            .catch(console.error);
    }, []);

    const onClick = (id) => {

        setMovies(movies.filter(movie => movie.id !== id))
        toast({
            title: 'Deleted Card.',
            description: "We've succesfully deleted this card.",
            status: 'success',
            duration: 9000,
            isClosable: true,
        })
    }

    const onClickLike = (id) => {
        setMovies(movies.map(movie => movie.id === id ? { ...movie, likes: movie.likes + 1 } : movie,))

        toast({
            title: 'Liked Card.',
            description: "We've succesfully liked this card.",
            status: 'success',
            duration: 9000,
            isClosable: true,
        })
    }

    const onClickDislike = (id) => {
        setMovies(movies.map(movie => movie.id === id ? { ...movie, dislikes: movie.dislikes + 1 } : movie))

        toast({
            title: 'Disliked Card.',
            description: "We've succesfully disliked this card.",
            status: 'success',
            duration: 9000,
            isClosable: true,
        })
    }
    if (!isSuccess) {
        return <Text>Loading...</Text>;
    }

    return (
        <Wrap justify='center' >
            {movies.map((item) => {
                return (

                    <WrapItem w={"400px"} bg='red.200' pt={2} borderRadius={"9"} key={item.id}>

                    <Box pl={4} pr={4} pt={1} w="100%" >
                        <Flex justify={"flex-end"}>
                            <DeleteIcon color="teal.900" onClick={() => onClick(item.id)} />
                        </Flex>

                        <MovieDetails item={item} />

                        <HStack justify={"space-between"} >
                            <Switch colorScheme='pink' onChange={(e) => {
                                e.target.checked ? onClickLike(item.id) : onClickDislike(item.id);
                            }
                            } />
                            <LikeForm item={item} />

                        </HStack>

                    </Box>
                </WrapItem>
            )
            })
            }
        </Wrap>
    )

}
