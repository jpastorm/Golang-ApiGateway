import Head from '@components/Head'
import Navigation from '@components/Navigation'

import Hero from '@segments/index/Hero'
import Features from '@segments/index/Features'
import Pricing from '@segments/index/Pricing'
import Contact from '@segments/index/Contact'
import Footer from '@segments/index/Footer'

export default function index() {
    return (
        <>
            <Head title="Api Plagio -- index" />

            <Navigation />

            <Hero />

            <Features />

            <Pricing />

            <Contact />

            <Footer />
        </>
    )
}
