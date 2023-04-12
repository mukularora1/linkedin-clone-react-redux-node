import CameraAltIcon from '@mui/icons-material/CameraAlt';

import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import defaultBG from '../../assets/defaultBG.jpg';
import { selectUser, uploadProfileImg } from '../../features/user/userSlice';
import { uploadFile } from '../../helpers/fileRequest.helper';
import ProfileSetupForm from './ProfileSetupForm';
import './profileSetup.css';

function ProfileSetup() {
  const [profileImage, setProfileImage] = useState(null);
  const [bgImg, setBgImg] = useState(null);
  const bgImageFileInputRef = useRef(null);
  const dpFileInputRef = useRef(null);
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const handleFileInputClick = () => {
    bgImageFileInputRef.current.click();
  };

  const handleDPFileInput = () => {
    dpFileInputRef.current.click();
  };
  const handleBgImgChange = (e) => {
    setBgImg(e.target.files[0]);
  };
  const handleFileInputChange = (event) => {
    setProfileImage(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('file', profileImage);
    const res = await uploadFile(formData, {
      dir: 'uploads/profile_img',
      supportedType: JSON.stringify([
        'image/png',
        'image/jpg',
        'image/jpeg',
        'image/svg+xml',
      ]),
    });
    console.log(res);
    if (res.status === 'success') {
      const response = await dispatch(
        uploadProfileImg({ img_url: res.path, userId: user.userId })
      );
      console.log(response);
    } else {
      console.log('tehrerererr');
    }
  };
  return (
    <div className="profileSetup">
      {user.isNextClicked ? (
        <form className="profileSetup__card" onSubmit={handleSubmit}>
          <div className="profileSetup__cardWrapper">
            <div className="profileSetup__card__bgImg">
              {!bgImg ? (
                <>
                  <img src={defaultBG} alt="" />
                  <div
                    style={{
                      width: '100%',
                      display: 'flex',
                      justifyContent: 'end',
                      position: 'relative',
                      bottom: '40px',
                      right: '16px',
                    }}
                  >
                    <div
                      style={{
                        width: '30px',
                        height: '30px',
                        borderRadius: '50%',
                        backgroundColor: '#fff',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        cursor: 'pointer',
                      }}
                      onClick={handleFileInputClick}
                    >
                      <CameraAltIcon />
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <img
                    src={URL.createObjectURL(bgImg)}
                    alt=""
                    style={{ cursor: 'pointer' }}
                    onClick={handleFileInputClick}
                  />
                </>
              )}
              <input
                ref={bgImageFileInputRef}
                type="file"
                style={{ display: 'none' }}
                onChange={handleBgImgChange}
              />
            </div>
            <div className="profileSetup__card__dpWrapper">
              <div
                className="profileSetup__card__dp b"
                onClick={handleDPFileInput}
              >
                {profileImage ? (
                  <img
                    src={URL.createObjectURL(profileImage)}
                    alt="Profile"
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: '50%',
                      backgroundColor: '#fff',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      cursor: 'pointer',
                    }}
                  />
                ) : (
                  <CameraAltIcon />
                )}
                <input
                  ref={dpFileInputRef}
                  type="file"
                  style={{ display: 'none' }}
                  onChange={handleFileInputChange}
                />
              </div>
            </div>
            <div className="profileSetup__card__name">
              <p contentEditable suppressContentEditableWarning>
                Your name
              </p>
            </div>
            <button type="submit">Save</button>
          </div>
        </form>
      ) : (
        <div className="profileSetup__card">
          <ProfileSetupForm />
        </div>
      )}
    </div>
  );
}

export default ProfileSetup;
