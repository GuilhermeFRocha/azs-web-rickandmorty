import React from "react";
import Style from "./formSearch.module.css";

function FormSearch({ setSearchParams, searchParams }) {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className={Style.contentInput}>
        <input
          type="text"
          value={searchParams}
          onChange={(e) => setSearchParams(e.target.value)}
          placeholder="Search"
        />
        {searchParams.length ? (
          <button type="button" onClick={() => setSearchParams("")}>
            X
          </button>
        ) : (
         <div><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAdlJREFUSEvVlUFy2kAQRX8PuJJd8A3sE1hAqMrO8g3wEnkR5wTADZITRJzAeGF5a5/AeOcqS/LcwDkC2sUVmE6NhNAEIw0uwsKzA8F/f/p3twg7PrRjfZQCvlw7BzMWfYBcgJ3MCEmAJ3VSo4ee/LWJubWAdtDyCehbBPzQi4c2yCtAO2hJAo5Sv+BLMPuPZ1Lqz50rxwHRgEFf8xuFXtSsgvwDMJwnxMrNhVcFNIhJTAB8YmAUefGgDLIELGr+nDpn1dTizoXTqH0UP8Fwswgwmf9WQ/lNTheQJ/11ndRhWSZLQO7edNS5ap0z4WLF3bROqqkFO0FzrMtVdQsTkNY+d5+LtoN2d4/maQYzFmMAxyC6DXtRt7gFybIsloDPQYu1SOjFttbVZZyGXryvf2/735sA64JcAJLQixvrnltLVNWCRtD3oRdnjbByKkO2DdGbQl7Xphu6T+qkHGubajFj0KbE6sQyaHcAGmD8CM/i79ZBK9qyWBVMGAulRuaqUEL0iXFeCJKcvcxP9PBVZmA+3GDZJWD4TOhme6scUtnzf1joHeMull8CQDIg90j5uubpKvkgJlWQrV84NsjWAF1aE8Kg08iLbvKS/xdAAam5pni2gHd83j/gL2HPDyjpxvGfAAAAAElFTkSuQmCC"/></div>
        )}
      </div>
      
    </form>
    
  );
}

export default FormSearch;
