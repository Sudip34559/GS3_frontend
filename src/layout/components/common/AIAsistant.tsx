export default function AI({
  open = false,
  setOpen,
}: {
  open: boolean;
  setOpen: () => void;
}) {
  if (!open)
    return (
      <div className=" fixed bottom-[20px] right-[-30px] z-50">
        {/* <img src="/greeting-robot3.gif" alt="" /> */}
        <div className="cursor-pointer" onClick={setOpen}>
          <video autoPlay loop muted playsInline width="250">
            <source src="/greeting-robot2.webm" type="video/webm" />
            Your browser does not support WebM.
          </video>
        </div>
      </div>
    );
}
