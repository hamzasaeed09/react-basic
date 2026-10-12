import './SectionOne.css'

import HeroSectionImage from './../assets/hero-section-image.jpeg'

function SectionOneComponent() {
    return (
        <section>
            <img src={HeroSectionImage}
                alt="This is Hero Section Picture"
                height={400}
                width={1280} />
        </section>
    )
}

export default SectionOneComponent;