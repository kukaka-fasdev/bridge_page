import React, { useEffect } from "react";
import { Helmet } from 'react-helmet';

function BridgePage() {

    useEffect(() => {
        document.title = "패션&스타일";
    }, []);

    useEffect(() => {
        const userAgent = navigator.userAgent || navigator.vendor || window.opera;

        if (/android/i.test(userAgent)) {
            // Android 사용자일 경우 딥링크를 시도하고, 앱 스토어로 리다이렉트
            const iframe = document.createElement("iframe");
            iframe.style.display = "none";
            //   iframe.src = "fashionandstyle://";
            iframe.src = "https://www.fashionandstyle.com";
            document.body.appendChild(iframe);
            setTimeout(() => {
                window.location = "https://play.google.com/store/apps/details?id=com.fas.android";
            }, 2000);
        } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
            // iOS 사용자일 경우 딥링크를 시도하고, 앱 스토어로 리다이렉트
            const iframe = document.createElement("iframe");
            iframe.style.display = "none";
            //iframe.src = "fashionandstyle://";
            iframe.src = "https://www.fashionandstyle.com";
            document.body.appendChild(iframe);
            window.setTimeout(() => {
                document.body.removeChild(iframe);
            }, 1000);

            alert(1);
            window.open("https://www.fashionandstyle.com", "_blank");

            alert(2);
            window.open('fashionandstyle://', "_blank");

            alert(3);
            window.location.replace('fashionandstyle://');

            alert(4);
            window.location.replace('https://www.fashionandstyle.com');

            alert(5);
            window.location.href = "fashionandstyle://";

            alert(6);
            window.location.href = "https://www.fashionandstyle.com";

            alert(7);
            // const link = document.getElementById("moveToAPP");
            // alert(link.href);
            // link.click();

            const link = document.createElement('a');
            link.href = 'https://www.fashionandstyle.com';
            link.target = '_blank';
            link.rel = 'noreferrer noopener';

            link.text = '새로운 탭에서 열기';

            document.body.appendChild(link);

            // 클릭 이벤트 추가 (선택 사항)
            link.addEventListener('click', () => {
                // 클릭 시 실행될 추가적인 로직
            });

            setTimeout(() => {
                alert(10);
                window.location = "https://apps.apple.com/app/id1620312420";
                //window.location = "https://www.fashionandstyle.com";
            }, 2000);
        }

        // 클린업 함수 (선택 사항)
        // return () => {
        //     document.body.removeChild(link);
        // };
    }, []);

    return(
        <>
            <Helmet>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Helmet>
            <div>
                <h1>
                    브릿지 페이지 입니다.
                </h1>
                <p>잠시 후 앱으로 이동합니다. 이동되지 않으면 앱 스토어에서 설치해주세요.</p>
                <div>
                    <a id="moveToAPP" href="https://www.fashionandstyle.com" target="_blank" rel="noreferrer noopener">앱에서 열기</a>
                    <p>또는</p>
                    <a href="https://apps.apple.com/app/id1620312420">앱스토어에서 설치</a>
                </div>
            </div>
        </>
    );
}

export default BridgePage;