function Spinner() {
  return (
    <div className="spinnerContainer flex items-center justify-center">
      <div className="w-[48px] h-[48px] rounded-[50%] inline-block [border-top:3px_solid_#33a5e4] [border-right:3px_solid_transparent] box-border animate-[rotation_1s_linear_infinite]"></div>
    </div>
  );
}

export default Spinner;
