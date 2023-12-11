import Image from "next/image";

const Footer = () => {
  return (
    <footer className="flex justify-between items-center flex-col gap-5 md:flex-row">
      <nav className="flex gap-4">
        <a
          href="https://github.com/bmf10"
          target="_blank"
          className="cursor-pointer hover:scale-105 transition-transform"
        >
          <Image src="/new/github.svg" alt="arrow" width={32} height={32} />
        </a>
        <a
          href="https://www.linkedin.com/in/bima-febriansyah/"
          target="_blank"
          className="cursor-pointer hover:scale-105 transition-transform"
        >
          <Image src="/new/linkedin.svg" alt="arrow" width={32} height={32} />
        </a>
      </nav>
      <p className="text-center">Made with ❤️, BmF10</p>
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="cursor-pointer py-2 pr-2 pl-5 border-2 rounded-full border-[#333437] leading-tight flex items-center gap-4 hover:scale-105 transition-transform"
      >
        <span>Back to top</span>
        <div className="bg-white rounded-full p-2">
          <Image
            className="rotate-180"
            src="/new/arrow-down.svg"
            alt="arrow"
            width={24}
            height={24}
          />
        </div>
      </button>
    </footer>
  );
};

export default Footer;
