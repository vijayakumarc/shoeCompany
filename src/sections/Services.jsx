import ServiceCard from "../components/ServiceCard"
import { services } from "../constant"

const Services = () => {
  return (
    <section className="max-container justify-center flex flex-wrap gap-9">
      {services.map((service)=>(
        <ServiceCard key={service.label} {...service}/>
      ))}
    </section>
  )
}

export default Services