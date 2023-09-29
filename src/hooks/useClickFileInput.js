import { useRef, useState } from 'react';

export default function useClickFileInput() {
  const [file, setFile] = useState(null);
  const ref = useRef();

  const openFileInput = () => ref.current.click();
  const onChangeFileInput = e => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const onCancel = () => {
    setFile(null);
    ref.current.value = null;
  };

  return { file, ref, openFileInput, onChangeFileInput, onCancel };
}
