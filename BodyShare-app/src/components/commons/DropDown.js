import { useEffect, useRef, useState } from "react";

const DropDown = (initialState) => {
  const [isOpen, setIsOpen] = useState(initialState);
  const ref = useRef(null);

  const removeHandler = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    const onClick = (e) => {
      if (ref.current !== null && !ref.current.contains(e.target)) {
        // 드롭다운 메뉴 이외의 공간 클릭
        setIsOpen(!isOpen)
      }
    };

    if (isOpen) {
      window.addEventListener('click', onClick);
    }

    return () => {
      window.removeEventListener('click', onclick);
    }
  }, [isOpen])
  return [isOpen, ref, removeHandler];
}

export default DropDown;