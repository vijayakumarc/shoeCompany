import { shoe8 } from "../assets/images"
import Button from "../components/Button"

const SuperQuality = () => {
  return (
    <section id="about-us" className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container" >
      <div className="flex flex-1 flex-col">
            <h2 className="mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg"> 
                We provide You
                <br/>
                <span className="text-teal-blue">Super Quality</span> shoes
            </h2>
            <p className="mt-4 lg:max-w-lg info-text">Share the excitement in Teamsports, innovate with Golf, bring style into Running & Training and performance into Motorsports.</p>
            <p className="mt-6 lg:max-w-lg info-text">In light of our FOREVER. FASTER. mantra, we bring a high level of brand heat to sports and elevate PUMA to the next level.</p>
            <div className="mt-11">
              <Button label="View details"/>
            </div>
      </div>
      <div className="flex flex-1 justify-center items-center">
        <img src={shoe8} alt="shoe8" width={570} height={522} className="object-contain rounded-3xl shado" />
      </div>
    </section>
  )
}

export default SuperQuality