import Feed from "@components/Feed"

const FeedPage = () => {
  return (
    <section className="w-full flex-center flex-col">
    <h1 className="head_text text-center">
      Discover & Share <br className="max-md:hidden" />
      <span className="orange_gradient text-center">This new product</span>
    </h1>
    <p className="desc text-center">
      Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum
      dolor sit amet.
    </p>
    <Feed />
  </section>
  )
}

export default FeedPage