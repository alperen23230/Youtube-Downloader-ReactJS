import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Button, Input, message } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import './App.css';

const App = () => {

  const [videoLink, setVideoLink] = useState("");

  const handleChangeText = (event) => {
    setVideoLink(event.target.value);
  }

  const download = (url) => {
    // fake server request, getting the file url as response
    setTimeout(() => {
      const response = {
        file: url,
      };
      // server sent the url to the file!
      // now, let's download:
      window.open(response.file);
      // you could also do:
      // window.location.href = response.file;
    }, 100);
  }

  const handleButtonClick = () => {
    if(/^ *$/.test(videoLink)){
      message.error('Please enter a video link!');
    } else {
      var url = `https://youtube-downloader-nodejs-expr.herokuapp.com/download?url=${videoLink}`
      download(url)
    }
  }
  const handleButtonMP3Click = () => {
    if(/^ *$/.test(videoLink)){
      message.error('Please enter a video link!');
    } else {
      var url = `https://youtube-downloader-nodejs-expr.herokuapp.com/downloadmp3?url=${videoLink}`
      download(url)
    }
  }

  return (
    <div className="App">
      <div className="inputClass">
        <label className="label">Youtube Video Downloader</label>
        <br />
        <br />
        <Input size="large" type="text" onChange={handleChangeText} placeholder="Youtube Video Link" className="input"></Input>
        <br />
        <Button className="downloadButton" type="primary" shape="round" icon={<DownloadOutlined />} size={'large'} onClick={handleButtonClick} >
          Download Video
        </Button>
        <br />
        <Button className="downloadButton" type="primary" shape="round" icon={<DownloadOutlined />} size={'large'} onClick={handleButtonMP3Click} >
          Download Audio
        </Button>
      </div>

    </div>
  );
}

export default App;
