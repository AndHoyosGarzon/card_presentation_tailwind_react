import Button from "./ui/Button";

function App() {
  return (
    <section className="w-full h-[100vh] flex justify-center items-center  ">
      <div className="w-[300px] h-[500px] border-1 border-gray-800 bg-Grey-800 rounded-lg px-6 py-4 flex flex-col justify-evenly hover:cursor-pointer hover:brightness-110 transition-all">
        <img
          className="w-[70px] h-[70px] rounded-full  mx-auto"
          src="/images/avatarjessica.jpeg"
          alt="image"
        />
        <div>
          <p className="text-center text-White font-Inter font-bold">
            Jessica Radall
          </p>
          <p className="text-xs text-center mt-1 text-Green font-bold">
            London, united Kingdom
          </p>
        </div>
        <p className="text-center text-[10px] text-White font-Inter">
          "Front-end developer and avid reader."
        </p>
        <div className="flex flex-col gap-3">
          <Button network="GitHub" />
          <Button network="Frontend Mentor" />
          <Button network="Linkedin " />
          <Button network="Twitter" />
          <Button network="Instagram" />
        </div>
      </div>
    </section>
  );
}

export default App;
