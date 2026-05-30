# SONGDO &amp; PEOPLE

신뢰받는 지역·국제 뉴스 사이트의 1면(프론트 페이지)입니다.
NYT·WSJ·BBC의 편집 구조를 참고하고, **디터 람스의 디자인 문법**과
**3색 팔레트(Navy / Paper / Red)** 원칙을 따라 제작했습니다.

## 파일 구조
```
songdo/
├── index.html        # 시맨틱 HTML5 마크업
├── css/style.css     # 디자인 시스템 (3색, 괘선·여백 기반 위계)
├── js/main.js        # 최소 동작 (날짜 자동 표기, 모바일 메뉴)
└── README.md
```

## 즉시 배포 방법
빌드 단계가 없는 순수 정적 사이트입니다. 폴더 전체를 그대로 올리면 됩니다.

- **Nginx / Apache**: 폴더를 웹 루트(`/var/www/html` 등)에 복사
- **Netlify / Vercel**: 폴더를 드래그 앤 드롭하거나 Git 연동
- **GitHub Pages**: 저장소에 올리고 Pages 활성화
- **로컬 확인**: `python3 -m http.server` 실행 후 `localhost:8000`

## 디자인 원칙
- **3색만 사용**: Navy `#0D1B2A` · Paper `#FAFAF8` · Red `#C8102E` (그레이 없음)
- 위계는 색이 아니라 **타이포 스케일·여백·1px 괘선**으로 표현
- 그림자·그라데이션·둥근 모서리 없음 (정직하고 절제된 형태)
- 폰트: Playfair Display(헤드라인·로고) + Helvetica 그로테스크(본문·UI)

## 실제 사진 교체
플레이스홀더는 인라인 SVG로 되어 있습니다. `index.html`에서
`<svg class="ph">...</svg>` 부분을 `<img src="images/파일명.jpg" alt="설명">` 로
바꾸면 됩니다(주석으로 위치 표시됨).
