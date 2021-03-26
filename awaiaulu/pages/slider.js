import siteMetadata from '@/data/siteMetadata'
import { PageSeo } from '@/components/SEO'
import LayoutWrapper from '@/components/LayoutWrapper'
import 'keen-slider/keen-slider.min.css'
import KeenSlider from 'keen-slider'
import { useKeenSlider } from 'keen-slider/react'

export default function Slider() {
  const [sliderRef] = useKeenSlider({
    slidesPerView: 3,
    mode: 'free-snap',
    spacing: 15,
    loop: true,
  })
  return (
    <>
      <PageSeo
        title={`Slider`}
        description={siteMetadata.description}
        url={`${siteMetadata.siteUrl}/slider`}
      />
      <LayoutWrapper>
        <div ref={sliderRef} className="keen-slider">
          <div className="keen-slider__slide number-slide1">1</div>
          <div className="keen-slider__slide number-slide2">2</div>
          <div className="keen-slider__slide number-slide3">3</div>
          <div className="keen-slider__slide number-slide4">4</div>
          <div className="keen-slider__slide number-slide5">5</div>
          <div className="keen-slider__slide number-slide6">6</div>
        </div>
      </LayoutWrapper>
    </>
  )
}
