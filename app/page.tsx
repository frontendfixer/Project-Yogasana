import Image from 'next/image';

import { placeholderBlurHash } from '~/lib/utils';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="relative mb-5 h-24 w-24 rounded-full bg-slate-100 p-4 md:h-40 md:w-40">
        <Image
          src="/yoga.svg"
          alt=""
          placeholder="blur"
          blurDataURL={placeholderBlurHash}
          fill
          style={{ objectFit: 'contain' }}
        />
      </div>
      <h1 className="text-center text-4xl font-extrabold md:text-6xl lg:text-7xl">
        Project Yogasana
      </h1>
    </main>
  );
}
