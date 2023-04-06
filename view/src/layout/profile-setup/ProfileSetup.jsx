import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { useRef, useState } from 'react';
import defaultBG from '../../assets/defaultBG.jpg';
import './profileSetup.css';

function ProfileSetup() {
  const [profileImage, setProfileImage] = useState(null);
  const bgImageFileInputRef = useRef(null);
  const dpFileInputRef = useRef(null);

  const handleFileInputClick = () => {
    bgImageFileInputRef.current.click();
  };

  const handleDPFileInput = () => {
    dpFileInputRef.current.click();
  };

  const handleFileInputChange = (event) => {
    setProfileImage(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('profileImage', profileImage);
    try {
      const response = await fetch('/upload', {
        method: 'POST',
        body: formData,
      });
      if (response.ok) {
        console.log('File uploaded');
      } else {
        console.error('File upload failed');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="profileSetup">
      <form className="profileSetup__card" onSubmit={handleSubmit}>
        <div className="profileSetup__cardWrapper b">
          <div className="profileSetup__card__bgImg">
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
                <input
                  ref={bgImageFileInputRef}
                  type="file"
                  style={{ display: 'none' }}
                  onChange={handleFileInputChange}
                />
              </div>
            </div>
          </div>
          <div
            className="profileSetup__card__dpWrapper"
            onClick={handleDPFileInput}
          >
            <div className="profileSetup__card__dp b">
              {profileImage ? (
                <img
                  src={URL.createObjectURL(profileImage)}
                  alt="Profile"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              ) : (
                <CameraAltIcon sx={{ width: '80vh !important' }} />
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
    </div>
  );
}

export default ProfileSetup;
