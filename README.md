# OneSaaS Starter Kit

Next.js + Supabase + Tailwind SaaS 스타터 킷

## 설치

```bash
# 1. 클론
git clone https://github.com/johunsang/onesass-starter.git my-app
cd my-app

# 2. 의존성 설치
pnpm install

# 3. 환경변수 설정 (대화형)
pnpm setup

# 4. DB 스키마 적용
pnpm db:push

# 5. 개발 서버 실행
pnpm dev
```

http://localhost:3000 에서 확인

## 필요한 것

- **Node.js** v20+
- **pnpm** (`npm i -g pnpm`)
- **Supabase** 프로젝트 (무료) - https://supabase.com

## 기술 스택

- Next.js 14 (App Router)
- Tailwind CSS
- Prisma + Supabase
- Vercel AI SDK

## 스크립트

```bash
pnpm dev        # 개발 서버
pnpm build      # 빌드
pnpm setup      # 환경변수 설정
pnpm db:push    # DB 스키마 적용
pnpm db:studio  # Prisma Studio
```

## 배포

Vercel에 배포:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/johunsang/onesass-starter)

## 라이선스

MIT
