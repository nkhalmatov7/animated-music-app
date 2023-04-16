import React from 'react'

function DownloadAds() {
  const downloadImgStyle =
    'border-[2px] border-[#232A4E] rounded-[13px] h-[3rem] w-[10rem]'
  return (
    <div className="download">
      <div className="download_images flex">
        <a
          target="_blank"
          href="https://apps.apple.com/us/app/apple-store/id375380948"
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGqs4sYnhanrCbHy4UgKDy7iXYAV_gBScEm92YQOX-zsQkGWH8W_jL5mKA2gIhH1Splxk&usqp=CAU"
            alt="AppStore"
            className={downloadImgStyle + ` mr-1`}
          />
        </a>
        <a
          target="_blank"
          href="https://play.google.com/store/games?utm_source=na_Med&utm_medium=hasem&utm_content=Jul0722&utm_campaign=Evergreen&pcampaignid=MKT-EDR-na-us-1000189-Med-hasem-py-Evergreen-Jul0722-Text_Search_BKWS-id_101963_%7CEXA%7CONSEM_kwid_43700074148358894&gclid=CjwKCAjwue6hBhBVEiwA9YTx8O_IJpm7ykKxEo2HOKnqLY3IeN7GrhFW1AN0_-pRTMWhUX1OVp8mSRoCH4QQAvD_BwE&gclsrc=aw.ds&pli=1"
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMfGkTalluSDP26-RVaQO9HKxUonQEXudWww&usqp=CAU"
            alt="Google Play"
            className={downloadImgStyle}
          />
        </a>
      </div>
    </div>
  )
}

export default DownloadAds
