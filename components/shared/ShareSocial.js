import { useRouter } from 'next/router'
import {VKShareButton,OKShareButton,
  InstapaperShareButton,FacebookShareButton, FacebookIcon, WhatsappShareButton, WhatsappIcon, TelegramShareButton, TelegramIcon, ViberShareButton, ViberIcon} from "react-share";

const Share = () => {
    const router  = useRouter()
    const url = process.env.PROD_URL + router.pathname
  return (
    <div className=''>
      <div className=''>
    <div className='sharebutton'>
      {/* {url} */}
      <FacebookShareButton
        url={url}
        quote={"CampersTribe - World is yours to explore"}
        hashtag="#camperstribe">
        <img src="/img/social-icons/Instagram Copy.svg" alt="instagram"/>
      </FacebookShareButton>
      <InstapaperShareButton
        url={url}
        quote={"CampersTribe - World is yours to explore"}
        hashtag="#camperstribe">
        <img src='/img/footer/Instagram.png' />
      </InstapaperShareButton>
      <VKShareButton
        url={url}
        quote={"CampersTribe - World is yours to explore"}
        hashtag="#camperstribe">
        <img src='/img/footer/VK.png' />
      </VKShareButton>
      <OKShareButton
        url={url}
        quote={"CampersTribe - World is yours to explore"}
        hashtag="#camperstribe">
        <img src='/img/social-icons/Combined Shape.svg' />
      </OKShareButton>
    </div>
    </div>
    </div>
  )
}

export default Share;