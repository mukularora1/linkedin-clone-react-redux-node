import CameraAltIcon from '@mui/icons-material/CameraAlt';

import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();
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

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   if (profileImage && bgImg) {
  //     console.log(profileImage, bgImg);

  //     const formData = new FormData();
  //     formData.append('file', profileImage);
  //     const res = await uploadFile(formData, {
  //       dir: 'uploads/profile_img',
  //       supportedType: JSON.stringify([
  //         'image/png',
  //         'image/jpg',
  //         'image/jpeg',
  //         'image/svg+xml',
  //       ]),
  //     });
  //     console.log(res);
  //     if (res.status === 'success') {
  //       const response = await dispatch(
  //         uploadProfileImg({ img_url: res.path, userId: user.userId })
  //       );
  //       if (response.meta.requestStatus === 'fulfilled') {
  //         formData.delete('file');
  //         formData.append('file', bgImg);
  //         const bgImgUploadRes = await uploadFile(formData, {
  //           dir: 'uploads/background_img',
  //           supportedType: JSON.stringify([
  //             'image/png',
  //             'image/jpg',
  //             'image/jpeg',
  //             'image/svg+xml',
  //           ]),
  //         });
  //         if (bgImgUploadRes.status === 'success') {
  //           navigate('/');
  //         }
  //       }
  //     } else {
  //       console.log('Image is not uploaded');
  //     }
  //   } else {
  //     if (profileImage === null) {
  //       console.log('profile image dalo yar');
  //     } else {
  //       console.log('background image dalo yar');
  //     }
  //   }
  // };
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!profileImage || !bgImg) {
      console.log(
        profileImage ? 'background image dalo yar' : 'profile image dalo yar'
      );
      return;
    }
    const formData = new FormData();
    formData.append('file', profileImage);
    const supportedType = JSON.stringify([
      'image/png',
      'image/jpg',
      'image/jpeg',
      'image/svg+xml',
    ]);
    const profilePath = 'uploads/profile_img';
    const bgPath = 'uploads/background_img';

    const profileUrl = await uploadFile(formData, {
      dir: profilePath,
      supportedType,
    });
    if (!profileUrl) {
      return;
    }
    formData.delete('file');
    formData.append('file', bgImg);
    const bgUrl = await uploadFile(formData, { dir: bgPath, supportedType });
    if (!bgUrl) {
      return;
    }

    const response = await dispatch(
      uploadProfileImg({
        img_url: profileUrl,
        bgImgUrl: bgUrl,
        userId: user.userId,
      })
    );
    if (response.meta.requestStatus === 'fulfilled') {
      navigate('/');
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
