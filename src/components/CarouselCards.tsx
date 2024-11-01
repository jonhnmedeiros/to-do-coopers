import {Carousel} from 'flowbite-react'
import { CardGoodThings } from './CardGoodThings'


export const CarouselCards = () => {
  const tags = [
    {title: 'function', link: '#'},
  ]

  const posts = [
    {
      id: 1,
      title: 'Organize your daily job enhance your life performance',
      image: '/img-card-1.jpg',
      link: '#',
      tags: tags,
    },
    {
      id: 2,
      title: 'Mark one activity as done makes your brain understands the power of doing.',
      image: '/img-card-2.jpg',
      link: '#',
      tags: tags,
    },
    {
      id: 3,
      title: 'Careful with missunderstanding the difference between a list of things and a list of desires.',
      image: '/img-card-3.jpg',
      link: '#',
      tags: tags,
    },
    {
      id: 4,
      title: 'Organize your daily job enhance your life performance',
      image: '/img-card-1.jpg',
      link: '#',
      tags: tags,
    },
    {
      id: 5,
      title: 'Mark one activity as done makes your brain understands the power of doing.',
      image: '/img-card-2.jpg',
      link: '#',
      tags: tags,
    },
    {
      id: 6,
      title: 'Careful with missunderstanding the difference between a list of things and a list of desires.',
      image: '/img-card-3.jpg',
      link: '#',
      tags: tags,
    }
  ]
  return(
    <div className="grid w-[360px] md:w-full pb-4">
      <Carousel indicators={true} leftControl=" " rightControl=" " className="w-[360px] md:w-[720px] lg:w-[1124px] pb-10">
        {
          posts.map(post => (
            <CardGoodThings
              key={post.id}
              image={post.image}
              title={post.title}
              link={post.link}
              tags={post.tags}
            />
          ))
        }
      </Carousel>
    </div>
  )
}