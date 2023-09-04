import Feed from "@components/Feed"

const FeedPage = () => {
  return (
    <section className="w-full flex-center flex-col">
    <h1 className="head_text text-center">
      Your thoughts about <br className="max-md:hidden" />
      <span className=" text-center">the new AirPods Pro</span>
    </h1>
    <p className="gray_text m-8">
      Search for what others are saying or scroll down to see what others think about the AirPods Pro.
    </p>
    <Feed />
  </section>
  )
}

export default FeedPage