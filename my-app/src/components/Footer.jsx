import { ReactNode } from 'react';
import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Link,
  VisuallyHidden,
  chakra,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';
import {Image} from "@chakra-ui/react"
// import AppStoreBadge from '@/components/AppStoreBadge';
// import PlayStoreBadge from '@/components/PlayStoreBadge';

const ListHeader = ({children}) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

const SocialButton = ({
  children,
  label,
  href,
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack align={'flex-start'}>
            <ListHeader>Company</ListHeader>
            <Link href={'#'}>About Us</Link>
            <Link href={'#'}>Blog</Link>
            <Link href={'#'}>Careers</Link>
            <Link href={'#'}>Contact Us</Link>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>Support</ListHeader>
            <Link href={'#'}>Help Center</Link>
            <Link href={'#'}>Safety Center</Link>
            <Link href={'#'}>Community Guidelines</Link>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>Legal</ListHeader>
            <Link href={'#'}>Cookies Policy</Link>
            <Link href={'#'}>Privacy Policy</Link>
            <Link href={'#'}>Terms of Service</Link>
            <Link href={'#'}>Law Enforcement</Link>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>Install App</ListHeader>
           <Image width="40px" src="data:image/jpeg;base64,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" alt="NA" />
           <Image width="40px" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMMAAAB6CAMAAAA1ZBclAAAAbFBMVEX///8Yd/IAaPHB0vrT4PwAcfIOdfJQjPPs8v0AbfHy9f4/hfMAZvEAb/Hi6v0Aa/EAX/BakvT3+f4AYvCevPjL2vutxvnd5vy5zvqPs/fF1vt7ovWDqvaZufg2gfNGifMne/JvnvWkwfhsmfVy/YXWAAAFEElEQVR4nO2cbZeqLBSGtYTEQtIyLc3e/v9/fKw56zmOwG5jAZ61vL/NcpzhWmw2+wUMglmzZs2aNWuWgZK0qI63y1XsttvtTlwvt2NVlInvYeEVV3XWMsEIpeGPKCXdz21WH2Lfg0MoKc/XTTf6UKWOZBMeJz4dyT0jTD3+/zkYz/bTpUibnvkAIoTVZe57tCqVNWfvx/9HXNSR7wFLSmpK0ARPkyLkNrH1vSccYUSDuSDnCRlUmpkTPMVWUzGo/L4bRdCJbvfTmIqMjyR4TUU2AYiCGK1lSYSffCNUZu5IIUoOfhH2b3ZllNjZJ8L5GwghFcd/HaET8wZxFl9CCENfM1F9axbCZzR794Gw/NQh/YbgHrxTYhZeUMI5e4pzTroIXXqZCuchYH4xQCCifdT3qoiiqFgezk39WLUy5dp1ZnREBxiU7LJl+juiyOO0EhJp7Rah2KLngNZKIyk30q/uKpcI8RprSfyqCYcimSFsXS6JBpt1kocuLFUxcIfWFC2QCKLWRtYqhnDhLidaIbcGstInB0oGenGFUGF3N8i+lQyhqzg8z5ALegH5GQ2Do01iqfzvivGAhqFmCDduJgLrV8VyBANtXSCckKuBZqBZaBhC4mKja7BOCU4JFPv0z2sO9ogUR9DlZmpfnyc/KjR7DCWldYYKvb8p3z7esh9p415hPxvCrmi6lt89XQknlLyk/TP0ahshlkJmjRSxzwGXf7PUMsMBmzew/fDVFNNf6USkN7+sGhtnCGmzQju0m12EeIVNHBbDHS7GZq/0YjeNiPRr8R1DiV1JOq/8LS2xnlVm0G3MsoTdrbpBlwJkBjS+5QWBDbs/YrAc96Ft+hOGcGeVAV2S+YzBZn8rRq/Ljxg2NsM+g3F8wrCw2aI7uVkPVp2rXCS1wmC1GXGA63u0p428x/Ufgz6a22wywgx01VNbDN4t2/7jFTgP/hhEFPc09I95/EvXaTIsDJKX9ApYk1Vbgte0CcMJWhBW1zTsW00Y7lBCZNW3wvGzCQPYC1sM/cE3BccaBgw5mNNajTXgmM+AIckgBqsxHxx7GzDEkFuyHHuDOZABQwoZpaq89kWBuagBg67a+pLlsvESMiYDhj20WVquCURQsGbAUEPzabk2A9bIDBigyjNdW261Q37dgAEqtdmuVYI1YxElPUlxa+9ZCe0O1mvGCbCo6bon6ZxGFP592EIuWtiu3QdQ5RefxwEI9nso6F7W6HzaQS8rhRKwLzC46CliWyFjGZycJkP22EczODlMhuvnjGRwc9YhOKGKriMZNm7O9OVg/vIZA7k4OiCKOmE8ksHZaWNMN2gUg7uzcEGJaPiPYnB4JhFzNnQMg8uzoZgzumMYnJ7RDYqdBYad4xtab8+smzPwxi1CkL87uGHM4P7uQJC/OblhykCZh2u8YPXdmIG6ifWGgu80mTFQ5umyInhJ0YxBeLuquAfuNZkwUH93/MCZMGDwetcyCO5aCAMGv3deuzhcd/cYzUCoF4/0a2ihesfGMhBis/mG1UMJgWRgmZcxD5UfNgp7QjHQ3X0CnxN4KX3ISxvBQNnKQT0MrXs4pHjLQLn1Areh8oZyIwZO6+l9/adsCEMzMNZMyYz+Kj327jXoGWhnRY31HsNo5YcH/VPz0DFQQbLJOCO18nK/fn3LS8Xw/JZXe57m56MGSqo6W2+HEUSxbbO6mt461ipPi2FqGZ/Sf2ECZs2aNWvWrAnpP7eQTBKA1VzFAAAAAElFTkSuQmCC" aly="NA" />
           <Image width="40px" alt="NA" src="data:image/png;base64,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" />
          </Stack>
        </SimpleGrid>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ md: 'space-between' }}
          align={{ md: 'center' }}>
          <Text><i><b>Beautify</b></i>2022 © The Hut.com Ltd.</Text>
        </Container>
      </Box>
    </Box>
  );
}