import { CarouselCards } from "../CarouselCards"


export const GoodThingsSection = () => {
  return(
    <section id="good-things" className="flex flex-col w-full lg:w-[1440px] mx-auto mt-[68px] h-[600px] lg:h-[720px] text-left">
      <div className="bg-green-500 rounded-xl lg:w-[1080px] h-[450px] lg:h-[550px] lg:mx-auto pb-5 lg:pl-[68px]">
        <div className="flex w-[330px] lg:w-[1000px] flex-col absolute mt-10 lg:mt-20" >
          <header className="text-white pl-4 lg:pl-3 font-bold text-[30px] lg:text-[48px]">good things</header>
          <div className="w-full mt-5 lg:mt-10 pl-1 lg:pl-0 pb-5 flex items-center lg:items-start">
            <CarouselCards />
          </div>
        </div>
      </div>
    </section>
  )
}