import { Button } from '@mui/material';
import { useEffect, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import axios from 'axios';

const FileUploadS3 = (props) => {
  // props should have a onUpload(response) handler

  // loading spinner for submit button
  const [isLoading, setLoading] = useState(false);
  // set true to disable submit button
  const [buttonDisabled, setbuttonDisabled] = useState(false);

  useEffect(() => {
    if (isLoading) {
      setbuttonDisabled(true);
    } else {
      setbuttonDisabled(false);
    }
  }, [isLoading]);

  const onFileChange = async (event) => {
    setLoading(true);

    try {
      const uploadFile = event.target.files[0];
      const defaultOptions = {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem(
            'jwt_token_login_422'
          )}`,
          'Content-Type': uploadFile.type,
        },
      };
      const formData = new FormData();
      formData.append('fileobject', uploadFile, uploadFile.name);
      const res = await axios.post(
        `${process.env.API_URL}/projects/upload_image`,
        formData,
        defaultOptions
      );
      props.onUpload(res.data);
    } catch (e) {
      props.onUpload({
        status: 'failed',
      });
    }
    setLoading(false);
  };

  return (
    <>
      <Button variant="contained" component="label" disabled={buttonDisabled}>
        Upload File
        <input type="file" hidden onChange={onFileChange} />
      </Button>
      {isLoading && (
        <CircularProgress
          size={24}
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            marginTop: '-9px',
            marginLeft: '-12px',
          }}
        />
      )}
    </>
  );
};

export default FileUploadS3;
