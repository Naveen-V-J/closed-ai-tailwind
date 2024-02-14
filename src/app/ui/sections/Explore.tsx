import ExploreItem from "../components/ExploreItem";

const Explore = () => {

    return (
        <section className="flex flex-wrap my-8 mx-4 xl:mx-6 2xl:mx-4 sm:gap-4 gap-9 md:gap-24 md:gap-y-11 md:mt-12 xl:gap-16">
            <ExploreItem label="Pioneering research on the path to AGI" linkLabel="Learn about our research" />
            <ExploreItem label="Transforming work and creativity with AI" linkLabel="Explore our products" />
            <ExploreItem label="Join us in shaping the future of technology" linkLabel="View careers" />
        </section>
    )
}

export default Explore;