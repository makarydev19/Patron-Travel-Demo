import { Program } from '@/models/programs';

import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

type Props = {
  program: Program;
};

const ProgramCard: FC<Props> = (props) => {
  const {
    program: { programName, destinations, slug, numberOfDays, coverImage },
  } = props;

  return (
    <>
      <div className="relative hover:-translate-y-3 transition-all duration-200">
        <div className="absolute top-7 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center rounded-3xl py-3 min-w-[70%] border-[0.5rem] border-LightModeBG dark:border-DarkModeBG -mt-6 text-white dark:text-black bg-DarkModeBG dark:bg-LightModeBG z-50">
          <p>{destinations}</p>
        </div>
        <div className="overflow-hidden rounded-xl h-64 shadow-lg shadow-black">
          <Image
            src={coverImage.url}
            alt={programName}
            width={1000}
            height={1000}
            className="img"
            loading="eager"
          />
          {/* Overlay */}
          <Link href={`projects/${slug.current}`}>
            <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center z-10 rounded-lg">
              <div className=" text-center text-white w-[90%] flex flex-col gap-y-3">
                <h1 className="text-xl">{programName}</h1>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProgramCard;
