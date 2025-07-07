// 1. 스크롤 시 네비게이션 배경 변경
window.addEventListener('scroll', function () {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.backgroundColor = '#0f172a'; // 어두운 남색 고정
        nav.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
    } else {
        nav.style.backgroundColor = '#1e293b'; // 원래 색상
        nav.style.boxShadow = 'none';
    }
});

// 2. 이메일 자동 작성 기능 (한 번만 추가되도록)
document.addEventListener('DOMContentLoaded', () => {
    const emailLink = document.querySelector('.contact a[href^="mailto:"]');
    if (emailLink && !emailLink.dataset.subjectAdded) {
        const subject = encodeURIComponent("웹페이지 제작 문의드립니다");
        const body = encodeURIComponent("안녕하세요, 웹포스에 웹사이트 제작 관련 문의드립니다.\n\n[문의 내용 작성]\n\n감사합니다.");
        emailLink.href = emailLink.href.split('?')[0] + `?subject=${subject}&body=${body}`;
        emailLink.dataset.subjectAdded = "true";
    }
});

// 3. 콘솔 인사 메시지 (개발자용)
console.log('%c🛠️ 웹포스(WebForce)에 오신 걸 환영합니다!', 'color: #0284c7; font-size: 16px; font-weight: bold');
console.log('%c문의: kshaza01@naver.com', 'color: #94a3b8;');
