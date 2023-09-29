import { useRef, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import Avatar from '../../components/Avatar';
import useLoading from '../../hooks/useLoading';
import * as userApi from '../../apis/user-api';

export default function ProfileImageForm({ onSuccess, updateProfileUser }) {
  const { authenticatedUser, updateProfile } = useAuth();
  const { profileImage } = authenticatedUser;
  const { startLoading, stopLoading } = useLoading();

  const [file, setFile] = useState(null);

  const inputEl = useRef(); // { current: <input type="file" className="d-none" /> }

  const handleClickSave = async () => {
    startLoading();
    const formData = new FormData();
    formData.append('profileImage', file);
    const res = await userApi.updateProfile(formData);
    updateProfile(res.data);
    updateProfileUser(res.data);
    stopLoading();
    setFile(null);
    onSuccess();
  };

  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <h5 className="mb-0">Profile Picture</h5>
        <input
          type="file"
          className="d-none"
          ref={inputEl}
          onChange={e => {
            if (e.target.files[0]) {
              setFile(e.target.files[0]);
            }
          }}
        />
        <div>
          {file && (
            <>
              <button
                className="btn btn-link text-decoration-none hover-bg-gray-100"
                onClick={handleClickSave}
              >
                Save
              </button>
              <button
                className="btn btn-link text-decoration-none hover-bg-gray-100"
                onClick={() => {
                  setFile(null);
                  inputEl.current.value = null;
                }}
              >
                Cancel
              </button>
            </>
          )}
          <button
            className="btn btn-link text-decoration-none hover-bg-gray-100"
            onClick={() => inputEl.current.click()}
          >
            Edit
          </button>
        </div>
      </div>
      <div className="text-center mt-3">
        <span onClick={() => inputEl.current.click()}>
          <Avatar
            src={file ? URL.createObjectURL(file) : profileImage}
            size="168"
          />
        </span>
      </div>
    </>
  );
}
