import Image from 'next/image'

interface Tag {
  title: string;
  link: string;
}
interface PostCardProps {
  image: string;
  link: string;
  tags: Tag[];
  title: string;
}
export const CardGoodThings = ({image, link, tags, title}: PostCardProps) => {
  return (
    <div className="p-7 pt-0 pl-3 w-[375px] pb-10">
      <div
        className="max-w-full md:max-w-sm bg-white w-[340px] md:w-[360px] h-[430px] rounded-lg shadow-xl"
        >
        <div className="text-right">
          <Image className="rounded-t-lg" src={image} width={360} height={200} alt="Card Header image" />
          <Image className="-mt-7 inline mr-5" src="/icone-coopers.png" width={49} height={56} alt="green coopers icon" />
        </div>
        <section className="px-8 pb-[23px] h-[230px]">
          <div className="w-full text-gray-500">
            {tags.map((tag, key) => (
                <a
                  key={key}
                  href={tag.link}
                  className="leading-[19px] font-normal text-[16px] inline-block px-[12px] py-[6px] ml-1 border rounded-3xl border-gray-500"
                  >
                    {tag.title} 
                </a>
              )
            )}
          </div>
          <p className="mt-[22px] h-[80px] leading-[21.6px] mb-3 font-medium text-gray-700 dark:text-gray-400">{title}</p>
          <div>
            <a href={link} className="inline-flex items-center py-2 text-[16px] font-bold text-center text-green-500 rounded-lg  hover:underline focus:outline-none focus:ring-green-300">
                read more
            </a>
          </div>
        </section>
    </div>
  </div>
  )
}