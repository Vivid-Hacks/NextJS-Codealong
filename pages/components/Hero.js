import {
    Flex,
    Container,
    Heading,
    Stack,
    Text,
    Button,
    Icon,
    IconProps,
  } from '@chakra-ui/react';
  
  export default function CallToActionWithIllustration() {
    return (
      <Container maxW={'5xl'}>
        <Stack
          textAlign={'center'}
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}>
          <Heading
            fontWeight={700}
            fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}>
            Open Worlds{' '}
            <Text as={'span'} color={'green.400'}>
              By Flow
            </Text>
          </Heading>
          <Text color={'gray.500'} maxW={'3xl'}>
          Flow is a new blockchain built for the next generation of apps, games, and the digital assets that power them.

          </Text>
          <Stack spacing={6} direction={'row'}>
            <Button
              px={6}
              colorScheme={'orange'}
              bg={'green.300'}
              _hover={{ bg: 'green.500' }}>
              Start Building
            </Button>
            <Button px={6}>
              Learn More
            </Button>
          </Stack>
          <Flex w={'full'}>
            <Illustration
              height={{ sm: '24rem', lg: '28rem' }}
              mt={{ base: 12, sm: 16 }}
            />
          </Flex>
        </Stack>
      </Container>
    );
  }
  
  export const Illustration = (props) => {
    return (
        <iframe width="100%" height="500px" scrolling="no"  id="player" src="https://player.vimeo.com/video/631446664?app_id=122963&amp;h=7dd4463870&amp;referrer=https%3A%2F%2Fwww.onflow.org%2F"></iframe>
    );
  };