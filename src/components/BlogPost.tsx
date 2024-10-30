import React from 'react';

interface BlogPostProps {
  imageSrc: string;
  tag: string;
  title: string;
}

const BlogPost: React.FC<BlogPostProps> = ({ imageSrc, tag, title }) => {
  return (
    <article className="flex flex-col pb-6 w-full text-base bg-white rounded-2xl">
      <img src={imageSrc} alt="" className="object-contain w-full rounded-none aspect-[1.8]" />
      <div className="flex flex-col items-start px-8 mt-6 w-full max-md:px-5">
        <span className="gap-2.5 self-stretch px-3 py-1.5 leading-tight whitespace-nowrap rounded-2xl border border-solid border-slate-400 text-slate-400">
          {tag}
        </span>
        <h3 className="self-stretch mt-4 text-xl leading-6 text-slate-700">{title}</h3>
        <a href="#" className="mt-16 font-bold text-green-400 max-md:mt-10">read more</a>
      </div>
    </article>
  );
};

export default BlogPost;