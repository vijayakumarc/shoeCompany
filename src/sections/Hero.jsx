import { useState } from "react"
import { arrowRight } from "../assets/icons"
import { bigShoe1 } from "../assets/images"
import Button from "../components/Button"
import ShoeCard from "../components/ShoeCard"
import { shoes, statistics } from "../constant"

const Hero = () => {
    const [bigShoeImg,setBigShoeImg] = useState(bigShoe1)
  return (
    <section id="home" className="w-full p-2 flex xl:flex-row flex-col justify-center min-h-screen gap-10  max-container">
        <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-36">
            <p className="text-xl font-montserrat text-teal-blue">Always Think That</p>
            <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold"> 
                <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">FOREVER. FASTER</span>
                <br/>
                <span className="text-teal-blue inline-block mt-3">PUMA</span>
            </h1>
            <p className="font-montserrat text-slate-gray text-lg leading-8  mt-6 mb-14 sm:max-w-sm">This classic terrace shoe builds on PUMA’s heritage within football, while appealing to today’s sneakerheads and fashion mavens. </p>
            <Button label="Shop now" iconUrl={arrowRight}/>
            <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
                {statistics.map((stat)=>(
                    <div key={stat.label}>
                        <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
                        <p className="leading-7 font-montserrat text-slate-gray">{stat.label}</p>
                    </div>
                ))}
            </div>
        </div> 
        <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-gradient-to-b from-white to-slate-200">
            <img src={bigShoeImg} alt="big shoe" width={610} height={500} className="object-contain relative z-10"/>
            <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[16%] max-sm:px-6">
                {
                    shoes.map((shoe)=>(
                        <div key={shoe.bigShoe}>
                            <ShoeCard imgUrl={shoe} changeBigShoeImage={(shoe)=>{setBigShoeImg(shoe)}} bigShoeImg={bigShoeImg}/>
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Hero