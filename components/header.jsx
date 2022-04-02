import Image from 'next/image'
import Link from 'next/link'
import styled from '@emotion/styled'
import AnchorLink from "react-anchor-link-smooth-scroll";
import * as React from 'react'
import ReactDOM from "react-dom";

//mui
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack'

const Item = (props) => {
  const { sx, ...other} = props;
  return (
    <Box 
      sx={{
        pr: 1,
        pl: 1,
        backgroundColor: 'secoundary.main',
        display: 'flex',
        alignItems: 'center',
        ...sx,
      }}
      {...other}
    />
  )
}

//emotion styled
const RedLink = styled.a`
  color: red;
  cursor: pointer !important;
  margin: 0.5rem 1rem;
`;
const AppBar = styled.div`
  display: flex;
  flex-direction: ;
  justify-content: space-between;
  background-color: #121212;
  ${'' /* backdrop-filter: blur(4px); */}
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  @media (max-width: 420px) {
        padding: 0.4rem 1rem 0 0;
      }
`;
const IconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  margin: 0 1rem;
`;
const MenuItem = styled.div`
  font-family: 'MuseoModerno';
  font-weight: 700;
  font-size: 1rem;
  color: #EEEEEE;
  transition: all .3s;

  &:hover {
    color: #80EF7E;
  }
`;

const SvgLogo = styled.svg`
  fill: #f4f4f4;
  transition: all .3s;

  &:hover {
    fill: #80EF7E;
  }
`;

//emtion styled end

const Header = () => {
  return (
        <Box sx={{ 
          flexGrow: 1,      
        }}>
          <AppBar>
            <Link href='/' passHref>
              <RedLink>
                <SvgLogo width="65" height="82" viewBox="0 0 65 82" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g>
                <path d="M6.60052 25.4842C6.67677 28.7537 7.39686 31.9762 8.7194 34.9678C10.0095 34.1784 10.9638 33.7729 11.5704 33.5149C11.7722 33.4293 11.9354 33.3599 12.06 33.2981C12.3222 33.168 12.4642 32.9861 12.576 32.8427C12.6772 32.7132 12.7536 32.6153 12.8719 32.6155C13.1211 32.6163 15.8027 31.7524 17.4257 30.6986C18.0176 30.3144 18.5826 30.1378 19.1713 29.9539C20.197 29.6335 21.2944 29.2907 22.7301 27.7875C23.1786 27.3179 22.6701 27.0605 22.3651 26.906C22.1991 26.822 22.0933 26.7684 22.2346 26.7278C22.5545 26.6358 23.0877 26.6549 23.7349 26.6781C24.9243 26.7207 26.4993 26.777 27.8438 26.1835C29.0359 25.6572 29.803 25.2258 30.5193 24.8231C31.6017 24.2144 32.5674 23.6714 34.7066 22.9656C36.5838 22.9219 34.241 21.7262 32.9049 21.0444V21.0442H32.9048C32.4502 20.8122 32.1122 20.6398 32.0965 20.5923C32.0817 20.5471 32.4164 20.6632 32.9379 20.8441C34.5717 21.4111 38.038 22.6136 38.3245 21.4818C38.5842 20.4565 37.9018 20.133 37.3885 19.8898C37.1543 19.7788 36.9553 19.6843 36.8971 19.5476C36.8279 19.3849 37.2947 19.4921 37.9916 19.6519C39.1641 19.9209 40.9878 20.3392 42.0052 19.8736C43.6273 19.1311 54.3124 14.8399 54.3124 14.8399C52.9899 11.8483 51.0905 9.14636 48.7231 6.88842C46.3555 4.63035 43.566 2.86036 40.514 1.67961C37.4619 0.498816 34.2069 -0.0696994 30.9351 0.00652055C27.6631 0.0827405 24.4382 0.802201 21.4445 2.12383C18.4508 3.4455 15.747 5.34334 13.4873 7.70918C11.2277 10.075 9.45643 12.8624 8.27481 15.9122C7.0932 18.9621 6.52426 22.2146 6.60052 25.4842ZM15.9184 47.7697C15.5231 47.4422 15.1386 47.103 14.7652 46.7527C15.692 46.6631 16.4655 44.2661 16.4545 43.4704C16.4413 42.5252 17.1453 41.5422 17.1453 41.5422C18.0782 40.6541 18.3308 41.499 18.5239 42.1447C18.6413 42.537 18.7366 42.8558 18.949 42.6682C19.1186 42.5185 19.3739 42.0522 19.6803 41.4927C20.3903 40.196 21.3744 38.3989 22.1999 38.8796C23.0357 39.3664 22.9428 41.1516 22.8983 42.006C22.8798 42.3596 22.8697 42.5539 22.9373 42.4305C23.1228 42.0915 23.3078 40.8576 23.5077 39.5253C23.7663 37.802 24.0494 35.9143 24.39 35.5861C25.8103 34.2178 26.6523 38.5439 27.2419 41.5729C27.5083 42.9412 27.7232 44.0449 27.9165 44.2392C28.0834 44.4069 28.1533 43.931 28.2601 43.2026C28.5512 41.219 29.1171 37.3624 32.6653 39.5211C35.9916 41.5446 36.1699 38.2217 36.2948 35.8933C36.3521 34.8259 36.3982 33.9675 36.7312 33.9294C36.8296 33.9173 36.9751 33.8158 37.1488 33.6945C37.8559 33.2008 39.032 32.3798 39.4142 35.9292C39.8904 40.3512 42.3158 33.9453 41.2859 31.7009C40.256 29.4567 40.5599 25.8212 40.7425 25.6602C40.9021 25.5194 41.1644 25.2702 41.4781 24.9721L41.4789 24.9715V24.9714C42.7118 23.8001 44.737 21.8761 44.4363 22.818C44.2462 23.4136 44.4633 23.2169 44.805 22.9074C45.1416 22.6028 45.5989 22.1886 45.9077 22.3129C46.2128 22.4359 46.3231 22.6183 46.4296 22.7944C46.5403 22.9775 46.6469 23.1538 46.9642 23.25C47.212 23.1726 47.8616 22.4128 48.5197 21.643C49.1978 20.8496 49.885 20.0458 50.1512 19.9669C50.9996 19.7156 51.297 20.3032 51.451 20.6075C51.5072 20.7183 51.5442 20.7915 51.582 20.7727C51.7309 20.6988 51.964 20.1738 52.2505 19.5284C52.6248 18.6852 53.0903 17.6368 53.5783 17.1212L53.8643 16.9702C55.3926 19.8622 56.3357 23.0268 56.6401 26.2831C56.9444 29.5393 56.604 32.8236 55.6381 35.9484C54.6723 39.0731 53.0999 41.9772 51.0109 44.4949C48.9219 47.0123 46.3571 49.0941 43.4629 50.6212C40.5689 52.1482 37.4021 53.0907 34.1434 53.3949C30.8847 53.6991 27.5981 53.3588 24.471 52.3936C21.344 51.4284 18.4377 49.8573 15.9184 47.7697ZM53.8118 16.919C53.7336 16.9711 53.6556 17.0395 53.5783 17.1212L31.8259 28.5988L9.7875 40.2273C11.0759 42.6655 12.7589 44.8699 14.7652 46.7527C14.7592 46.7533 14.7531 46.7538 14.747 46.7542C14.7217 46.7558 14.5503 46.6333 14.4362 46.5042C14.4139 46.4804 14.3892 46.46 14.3626 46.438C14.3109 46.3954 14.2517 46.3467 14.1876 46.2544C14.171 46.2304 14.1487 46.2157 14.1238 46.1993C14.0846 46.1734 14.0392 46.1435 14.0013 46.0671C13.2212 45.3412 12.9661 49.1155 12.7541 52.2538C12.6144 54.3209 12.4934 56.1121 12.2532 56.1595C11.8717 56.2968 11.9216 55.2826 11.9976 53.7333C12.0584 52.4956 12.1359 50.9165 12.0236 49.3102C11.7728 45.7176 10.4964 41.6171 9.73492 40.1761L31.7734 28.5476L53.8118 16.919ZM6.68338 39.5421L58.3872 13.4036L58.556 13.7371L6.85222 39.8757L6.68338 39.5421ZM10.97 26.7177C11.2001 26.8535 11.5065 26.9767 11.8916 27.0145C12.0054 27.0256 12.0925 27.1274 12.0748 27.2404C12.0613 27.3275 11.989 27.3933 11.9015 27.4047C11.5783 27.4469 11.0756 27.5605 10.5766 27.6851C10.0737 27.8108 9.68208 27.2181 10.0059 26.8132C10.2251 26.5394 10.6678 26.5394 10.97 26.7177ZM17.8628 24.3679C17.9808 24.4454 18.1351 24.3486 18.1172 24.2085C18.1106 24.157 18.081 24.112 18.0361 24.0856C17.7444 23.914 16.5756 23.2067 15.011 21.9974C13.7159 20.9966 12.9062 20.2366 12.549 19.8837C12.4252 19.7614 12.2295 19.7441 12.0893 19.8472C11.9063 19.9817 11.9031 20.2535 12.0841 20.3909C12.6561 20.8257 13.7975 21.6812 14.6734 22.2634C15.6209 22.8931 17.2054 23.9357 17.8628 24.3679ZM19.1364 26.0592C19.172 26.1186 19.1217 26.1926 19.0533 26.1809C18.6722 26.1158 17.7536 25.9586 17.2031 25.8618C16.9224 25.8124 16.3582 25.8251 15.7794 25.8583C15.4112 25.8795 15.2605 25.3561 15.5889 25.1884C15.6969 25.1332 15.8272 25.1403 15.9353 25.1954C16.1537 25.3068 16.591 25.4976 17.3027 25.6757C18.2452 25.9119 18.9106 26 19.0756 26.0198C19.101 26.0228 19.1232 26.0372 19.1364 26.0592ZM17.3553 47.6221C17.8979 45.902 18.4937 43.7535 18.3307 43.0595C18.3197 43.0128 18.3111 42.9678 18.3115 42.9199C18.315 42.4919 18.4963 42.4768 18.5156 42.9044C18.594 44.6299 18.6009 47.0486 18.6011 47.8502C18.6011 48.0224 18.5283 48.186 18.401 48.3021C17.9266 48.7346 17.162 48.2343 17.3553 47.6221Z"/>
                <path d="M1.83933 75.1299V72.0517H9.16837C9.52673 72.0517 9.85242 71.9622 10.1456 71.783C10.4387 71.6038 10.6749 71.3677 10.8541 71.0745C11.0332 70.7651 11.1228 70.4312 11.1228 70.0729C11.1228 69.6983 11.0332 69.3644 10.8541 69.0712C10.6749 68.7618 10.4387 68.5175 10.1456 68.3384C9.85242 68.1592 9.52673 68.0696 9.16837 68.0696H6.31005C5.34914 68.0696 4.47779 67.8742 3.69602 67.4833C2.91426 67.0924 2.28721 66.5305 1.8149 65.7976C1.35887 65.0484 1.13086 64.1526 1.13086 63.1103C1.13086 62.0842 1.35073 61.1966 1.79047 60.4474C2.23021 59.6819 2.82468 59.0874 3.57388 58.664C4.32307 58.2405 5.15369 58.0288 6.06575 58.0288H13.4925V61.107H6.40777C6.08204 61.107 5.78073 61.1966 5.50386 61.3757C5.22698 61.5386 5.00711 61.7585 4.84424 62.0354C4.69766 62.3123 4.62437 62.6217 4.62437 62.9637C4.62437 63.3057 4.69766 63.6152 4.84424 63.8921C5.00711 64.1689 5.22698 64.3888 5.50386 64.5517C5.78073 64.7145 6.08204 64.796 6.40777 64.796H9.3638C10.4225 64.796 11.3427 64.9996 12.1244 65.4067C12.9062 65.8139 13.5088 66.3839 13.9322 67.1168C14.372 67.8498 14.5919 68.7048 14.5919 69.682C14.5919 70.8384 14.3639 71.8237 13.9079 72.638C13.4681 73.4524 12.8655 74.0713 12.1 74.4948C11.3508 74.9182 10.5202 75.1299 9.60811 75.1299H1.83933ZM21.5295 75.1299C20.5848 75.1299 19.7216 74.9019 18.9399 74.4459C18.1744 73.9898 17.5636 73.3791 17.1076 72.6136C16.6516 71.8318 16.4235 70.9686 16.4235 70.024C16.4235 69.34 16.5702 68.6966 16.8633 68.0941C17.1565 67.4914 17.5555 66.9621 18.0604 66.506C17.5555 66.05 17.1565 65.5207 16.8633 64.9181C16.5702 64.3155 16.4235 63.6804 16.4235 63.0126C16.4235 62.0842 16.6435 61.2454 17.0832 60.4962C17.5392 59.7471 18.1418 59.1526 18.891 58.7129C19.6565 58.2568 20.4953 58.0288 21.4073 58.0288H28.4432V61.107H21.7982C21.4562 61.107 21.1386 61.1966 20.8454 61.3757C20.5685 61.5386 20.3405 61.7667 20.1614 62.0598C19.9985 62.3367 19.9171 62.6542 19.9171 63.0126C19.9171 63.3546 19.9985 63.6722 20.1614 63.9654C20.3405 64.2423 20.5685 64.4702 20.8454 64.6494C21.1386 64.8123 21.4562 64.8937 21.7982 64.8937H27.6126V67.9719H21.9448C21.5702 67.9719 21.2282 68.0696 20.9187 68.265C20.6093 68.4442 20.365 68.6885 20.1858 68.9979C20.0066 69.3074 19.9171 69.6494 19.9171 70.024C19.9171 70.3986 20.0066 70.7406 20.1858 71.0501C20.365 71.3595 20.6093 71.6038 20.9187 71.783C21.2282 71.9622 21.5702 72.0517 21.9448 72.0517H28.4432V75.1299H21.5295ZM30.4041 70.3904V67.3367H37.3179V70.3904H30.4041ZM42.4062 75.1299C41.7547 75.1299 41.1847 74.9915 40.6961 74.7146C40.2075 74.4215 39.8247 74.0387 39.5479 73.5664C39.2873 73.0941 39.157 72.5648 39.157 71.9785C39.157 71.4247 39.2954 70.8873 39.5723 70.366C39.8654 69.8448 40.2401 69.4214 40.6961 69.0957L45.9485 65.3335C46.3069 65.0729 46.5756 64.7634 46.7547 64.4051C46.934 64.0467 47.0235 63.6722 47.0235 63.2813C47.0235 62.8253 46.9258 62.4425 46.7304 62.1331C46.5349 61.8073 46.258 61.5549 45.8997 61.3757C45.5414 61.1966 45.1098 61.107 44.6049 61.107H40.0854V58.0288H45.0203C46.1441 58.0288 47.1131 58.2649 47.9274 58.7373C48.7417 59.2096 49.3688 59.8448 49.8085 60.6429C50.2646 61.4246 50.4926 62.3041 50.4926 63.2813C50.4926 64.2585 50.2972 65.1217 49.9063 65.8709C49.5316 66.6038 48.9128 67.2634 48.0496 67.8498L42.7971 71.4166C42.7645 71.4329 42.7238 71.4735 42.6749 71.5387C42.626 71.5875 42.6016 71.6527 42.6016 71.7342C42.6016 71.8481 42.6342 71.9296 42.6994 71.9785C42.7645 72.0273 42.8541 72.0517 42.9681 72.0517H51.0056V75.1299H42.4062ZM53.4626 75.1299L60.6206 61.8643C60.7021 61.7015 60.7428 61.563 60.7428 61.4491C60.7428 61.3513 60.7102 61.2698 60.6451 61.2048C60.5799 61.1396 60.4904 61.107 60.3763 61.107H52.5831V58.0288H60.816C61.4512 58.0288 62.0213 58.1754 62.5262 58.4686C63.0473 58.7617 63.4627 59.1526 63.7721 59.6412C64.0816 60.1135 64.2363 60.651 64.2363 61.2535C64.2363 61.5793 64.1956 61.9051 64.1141 62.2308C64.0327 62.5403 63.9268 62.8334 63.7966 63.1103L57.4203 75.1299H53.4626Z"/>
                </g>
                <defs>
                </defs>
                </SvgLogo>
              </RedLink>
            </Link>
            
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={4}
            >

              <Link href="http://localhost:8080/#services" passHref>
                <a>
                  <MenuItem>
                    Services
                  </MenuItem>
                </a>
              </Link>

              <Link href="http://localhost:8080/#profile" passHref>
                <a>
                  <MenuItem>
                    Profile
                  </MenuItem>
                </a>
              </Link>

              <Link href="contact" passHref>
                <a>
                  <MenuItem>
                    Contact
                  </MenuItem>
                </a>
              </Link>

              <Link href='blog' passHref>
                <a>
                  <MenuItem>
                    Blog
                  </MenuItem>
                </a>
              </Link>
             
            </Stack>


            <IconWrapper>
              <Item>
                <Link href='https://twitter.com/siino_webdev' passHref>
                  <a target="_blank" rel="noopener noreferrer">
                    <Image 
                    src="/icons/twitter-logo.svg" 
                    width={35} 
                    height={35}
                    alt="twitter-logo"
                    layout='intrinsic'
                  />
                  </a>
                </Link>
              </Item>
             
            </IconWrapper>
          </AppBar>
        </Box>   
  )
}


export default Header



