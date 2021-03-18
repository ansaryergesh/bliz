import { useRouter } from 'next/router'
import {FacebookShareButton, FacebookIcon, WhatsappShareButton, WhatsappIcon, TelegramShareButton, TelegramIcon, ViberShareButton, ViberIcon} from "react-share";

const Share = () => {
    const router  = useRouter()
    const url = process.env.PROD_URL + window.location.pathname
  return (
    <div className='modal_share'>
      <div className='modal_bg'>
    <div className='sharebutton'>
      <FacebookShareButton
        url={process.env.PROD_URL}
        quote={"CampersTribe - World is yours to explore"}
        hashtag="#camperstribe">
        <FacebookIcon size={36}/>
      </FacebookShareButton>
      <WhatsappShareButton
        url={process.env.PROD_URL}
        quote={"CampersTribe - World is yours to explore"}
        hashtag="#camperstribe">
        <WhatsappIcon size={36}/>
      </WhatsappShareButton>
      <TelegramShareButton
        url={process.env.PROD_URL}
        quote={"CampersTribe - World is yours to explore"}
        hashtag="#camperstribe">
        <TelegramIcon size={36}/>
      </TelegramShareButton>
      <ViberShareButton
        url={process.env.PROD_URL}
        quote={"CampersTribe - World is yours to explore"}
        hashtag="#camperstribe">
        <ViberIcon size={36}/>
      </ViberShareButton>
    </div>
    </div>
    </div>
  )
}

export default Share;