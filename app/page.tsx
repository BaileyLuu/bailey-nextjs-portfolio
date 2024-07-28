import { Suspense } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import cshublhd from 'public/images/cshub_lhd.jpg'
import kubehuddle2024 from 'public/images/kubehuddle2024.jpeg'
import avatar from 'public/images/bailey_luu_headshot.jpg'
function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  );
}
export default function Page() {
  return (

    <>
    <section className="flex items-center mb-8">
      <div className="mr-4">
        <Image
          src={avatar} 
          alt="Profile picture of Bailey"
          width={130} 
          height={130} 
          className="rounded-full"
        />
      </div>
      <div>
        <h1 className="font-medium text-2xl tracking-tighter">Hello there, I'm Bailey Luu! 👋</h1>
      </div>
    </section>
    <section >
      <p className="prose prose-neutral dark:prose-invert">
        I'm a developer and currently a Research Assistant at York University.
      </p>

      <div className="prose prose-neutral dark:prose-invert">
      <p className="prose prose-neutral dark:prose-invert">
        I am passionate in community building and organizing community events as I've seen how they foster innovation, inclusivity, diversity and empowerment.
        I've been fortunate to be actively involved in various communities, both academic and professional, such as <Link href="https://ellehacks.com" target="_blank">ElleHacks</Link>, Computing Student Hub (CSHub), and <Link href="https://ca.kubehuddle.com" target="_blank">KubeHuddle</Link>.     
      </p>
      </div>

      <div className="grid grid-cols-2 grid-rows-2 sm:grid-rows-2 sm:grid-cols-2 gap-4 my-4">
        <div className="relative h-40">
          <Image
            alt="I spoke at CSHub Local Hack Day the Opening Ceremony"
            src={cshublhd}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative h-50">
          <Image
            alt="KubeHuddle 2024 Organizers"
            src={kubehuddle2024}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover object-top sm:object-center"
          />
        </div>
      </div>
      <ul className="font-sm mt-8 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/baileyluu/"
          >
            
            <p className="ml-2 h-7">linkedin</p>
            <ArrowIcon />
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="http://github.com/BaileyLuu"
          >
            <p className="ml-2 h-7">github</p>
            <ArrowIcon />
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://drive.google.com/file/d/1hvR8ge77xHl9kVPiLucy2LXgh5bq6snp/view?usp=sharing"
          >
            <p className="ml-2 h-7">resume</p>
            <ArrowIcon />
          </a>
        </li>
      </ul>
    </section>
    </>
  );
}
