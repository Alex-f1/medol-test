// import Image from 'next/image'
// import styles from './page.module.css'
import Hero from "@/components/Hero/Hero";
import ProductList from "@/components/ProductList/ProductList";
import ServicesList from "@/components/ServicesList/ServicesList";
import AboutCompany from "@/components/AboutCompany/AboutCompany";
import NewsList from "@/components/NewsList/NewsList";
import Partners from "@/components/Partners/Partners";

export default function Home() {
  return (
    <main className="app__main">
      <Hero/>
      <ProductList/>
      <ServicesList/>
      <AboutCompany/>
      <NewsList/>
      <Partners/>
    </main>
  )
}
