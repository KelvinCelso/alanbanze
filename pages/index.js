import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
const image_url="https://images.unsplash.com/photo-1605792657660-596af9009e82?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1102&q=80"

export default function Home() {
  return (
    <div className="h-full w-full bg-black justify-center flex items-center flex-col relative md:h-screen md:w-screen">

      <img className='absolute object-cover h-full w-full' src={image_url} alt='whatever'/>
      <img src="https://firebasestorage.googleapis.com/v0/b/goodtimes-a8418.appspot.com/o/WhatsApp%20Image%202022-08-27%20at%2019.35.37.jpeg?alt=media&token=64f22ec9-219d-4a96-98b2-3aaebcee0238"  className='w-40 h-40 z-10 mt-10'/>
      <div className ="text-white justify-center text-center w-9/12  py-10 md:py-10 z-10  ">
        
        <p className='text-base md:font-medium md:text-lg'> 
        Olá é bem vindo a GOLD MINDS um grupo de jovens moçambicanos que já alcançou a liberdade financeira e fatura milhares de dólares com o mercado financeiro forex e quer ajudar outros jovens a fazer o mesmo.
Se chegaste até aqui significa que você está interessado em aprender a como ganhar dinheiro através do mercado financeiro forex e obter a tua liberdade ainda cedo, e nós estamos aqui para ajudar, caso queiras aprender nós estamos a disponibiza aulas grátis,  do zero ao avançado para te ajudar nessa caminhada.
Para obter acesso as aulas, clique no botão abaixo e terá acesso ao nosso WhatsApp
        </p>
      </div>
      <Link href={"https://wa.me/message/QO3RNYO2JULRJ1"}>
      <div className="text-white bg-green-500 h-10 py-8 px-20 flex justify-center items-center rounded-full cursor-pointer hover:scale-105 z-10 font-semibold mb-10">
        <WhatsAppIcon />
        <p className='ml-1'>Whatsapp</p>
      </div>
      </Link>

    </div>
  )
}
