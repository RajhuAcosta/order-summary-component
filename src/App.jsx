// import './App.css'

function App() {
  return (
    <main className="min-h-screen bg-[url(/pattern-background-mobile.svg)] bg-top bg-no-repeat md:bg-[url(/pattern-background-desktop.svg)] 2xl:bg-contain bg-[hsl(225,100%,94%)] relative">
      {/* <picture className="bg-cover w-auto h-auto"></picture> */}
      <article className="font-['Red_Hat_Display'] absolute top-16 1.5xl:top-24 2xl:top-32 mx-6 md:mx-[159px] lg:mx-[287px] 1.5xl:mx-[495px] 2xl:mx-[735px] bg-[hsl(225,100%,98%)] rounded-2xl overflow-auto lg:max-w-[450px]">
        <picture>
          <img
            className="rounded-t-2xl overflow-auto"
            src="/illustration-hero.svg"
            alt=""
          />
        </picture>
        <div className="px-6 lg:px-12">
          <h1 className="text-[hsl(223,47%,23%)] font-black text-2xl lg:text-3xl text-center mt-9 mb-4 lg:mt-11 lg:mb-5">
            Order Summary
          </h1>
          <p className="text-[hsl(224,23%,55%)] lg:text-[hsla(224,23%,55%,0.87)] text-center lg:text-[17px] max-w-[263px] lg:max-w-[296px] mx-auto">
            You can now listen to millions of songs, audiobooks, and podcasts on
            any device anywhere you like!
          </p>
          <section className="flex items-center justify-between px-4 mt-10 mb-10 lg:mt-11 lg:mb-14">
            <picture>
              <img src="/icon-music.svg" alt="" />
            </picture>
            <div className="grid">
              <h3 className="text-[hsl(223,47%,23%)] text-[15px] lg:text-[17px] font-black">
                Annual Plan
              </h3>
              <h3 className="text-[hsl(224,23%,55%)] text-[14px] lg:text-base">
                $59.99/year
              </h3>
            </div>
            <button className="text-[hsl(245,75%,52%)] hover:text-[hsla(245,75%,52%,0.7)] transition-colors underline text-[13px] lg:text-[14px] font-black pl-7 lg:pl-20">
              Change
            </button>
          </section>
          <button
            className="bg-[hsl(245,75%,52%)] hover:bg-[hsla(245,75%,52%,0.7)] transition-colors text-[hsl(225,100%,98%)] text-[15px] font-bold block w-full mx-auto px-10 py-4 rounded-xl"
            style={{ boxShadow: "0px 22px 25px -10px hsla(245,75%,52%,0.3)" }}
          >
            Proceed to Payment
          </button>
          <button className="text-[hsl(224,23%,55%)] hover:text-[hsl(223,47%,23%)] transition-colors font-bold lg:font-black block mx-auto mt-6 mb-8">
            Cancel Order
          </button>
        </div>
      </article>
    </main>
  );
}

export default App;
