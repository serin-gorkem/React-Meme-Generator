export default function Header() {
  return (
    <>
      <nav className="max-container flex items-center justify-between gap-3 p-5 font-Karla text-base font-semibold text-white ">
        <div className="flex items-center justify-center gap-3">
          <img
            src="./images/troll-face.png"
            className=" h-8 w-8"
            alt="Troll Face"
          ></img>
          <h1 className="text-xs sm:text-lg">Meme Generator</h1>
        </div>
        <p className="text-xs font-light sm:text-lg">
          React Course - Project 3
        </p>
      </nav>
    </>
  );
}
