import Link from 'next/link'
import { getCompanyInfo, getProjectName } from '@/lib/config'

export default function PrivacyPage() {
  const company = getCompanyInfo()
  const projectName = getProjectName()
  const today = new Date().toISOString().split('T')[0]

  return (
    <div className="min-h-screen" style={{ background: 'var(--color-bg)', color: 'var(--color-text)' }}>
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="mb-12">
          <Link href="/" className="text-sm hover:opacity-80" style={{ color: 'var(--color-accent)' }}>
            ← 홈으로 돌아가기
          </Link>
          <h1 className="text-3xl font-bold mt-4 mb-2">개인정보처리방침</h1>
          <p style={{ color: 'var(--color-text-secondary)' }}>최종 수정일: {today}</p>
        </div>

        <div className="space-y-8">
          <section>
            <p className="leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
              {company.name}(이하 &quot;회사&quot;)는 {projectName} 서비스(이하 &quot;서비스&quot;)를 제공함에 있어
              개인정보 보호법 등 관련 법령에 따라 이용자의 개인정보를 보호하고,
              이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보처리방침을 수립·공개합니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">제1조 (개인정보의 수집 항목)</h2>
            <p className="leading-relaxed mb-3" style={{ color: 'var(--color-text-secondary)' }}>
              회사는 서비스 제공을 위해 다음과 같은 개인정보를 수집합니다:
            </p>
            <ul className="list-disc list-inside space-y-2" style={{ color: 'var(--color-text-secondary)' }}>
              <li><strong>필수항목:</strong> 이메일 주소, 비밀번호, 서비스 이용 기록</li>
              <li><strong>선택항목:</strong> 이름, 프로필 이미지, 연락처</li>
              <li><strong>자동수집:</strong> 접속 IP, 쿠키, 접속 일시, 브라우저 정보</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">제2조 (개인정보의 수집 방법)</h2>
            <ul className="list-disc list-inside space-y-2" style={{ color: 'var(--color-text-secondary)' }}>
              <li>회원가입 및 서비스 이용 과정에서 이용자가 직접 입력</li>
              <li>소셜 로그인(Google, 카카오, GitHub 등)을 통한 정보 제공</li>
              <li>서비스 이용 과정에서 자동으로 생성·수집</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">제3조 (개인정보의 수집·이용 목적)</h2>
            <ul className="list-disc list-inside space-y-2" style={{ color: 'var(--color-text-secondary)' }}>
              <li>회원 관리: 회원 가입, 본인 확인, 회원자격 유지·관리</li>
              <li>서비스 제공: 콘텐츠 제공, 맞춤 서비스 제공</li>
              <li>서비스 개선: 신규 서비스 개발, 통계·분석</li>
              <li>고객 지원: 문의 처리, 공지사항 전달</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">제4조 (개인정보의 보유 및 이용 기간)</h2>
            <p className="leading-relaxed mb-3" style={{ color: 'var(--color-text-secondary)' }}>
              회사는 원칙적으로 개인정보 수집 및 이용 목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다.
              단, 관계 법령에 따라 보존해야 하는 경우 해당 기간 동안 보관합니다:
            </p>
            <ul className="list-disc list-inside space-y-2" style={{ color: 'var(--color-text-secondary)' }}>
              <li>계약 또는 청약철회 등에 관한 기록: 5년 (전자상거래법)</li>
              <li>대금결제 및 재화 등의 공급에 관한 기록: 5년 (전자상거래법)</li>
              <li>소비자 불만 또는 분쟁처리에 관한 기록: 3년 (전자상거래법)</li>
              <li>웹사이트 방문기록: 3개월 (통신비밀보호법)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">제5조 (개인정보의 제3자 제공)</h2>
            <p className="leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
              회사는 원칙적으로 이용자의 개인정보를 외부에 제공하지 않습니다.
              다만, 다음의 경우에는 예외로 합니다:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-3" style={{ color: 'var(--color-text-secondary)' }}>
              <li>이용자가 사전에 동의한 경우</li>
              <li>법령의 규정에 의한 경우</li>
              <li>서비스 제공에 따른 요금정산을 위해 필요한 경우</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">제6조 (개인정보의 파기 절차 및 방법)</h2>
            <p className="leading-relaxed mb-3" style={{ color: 'var(--color-text-secondary)' }}>
              ① 파기 절차: 이용 목적이 달성된 개인정보는 별도의 DB로 옮겨져 내부 방침 및 관련 법령에 따라 일정 기간 저장된 후 파기됩니다.
            </p>
            <p className="leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
              ② 파기 방법: 전자적 파일 형태의 정보는 복구 불가능한 방법으로 영구 삭제하고,
              종이에 출력된 개인정보는 분쇄기로 분쇄하거나 소각합니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">제7조 (이용자의 권리와 행사 방법)</h2>
            <p className="leading-relaxed mb-3" style={{ color: 'var(--color-text-secondary)' }}>
              이용자는 언제든지 다음과 같은 권리를 행사할 수 있습니다:
            </p>
            <ul className="list-disc list-inside space-y-2" style={{ color: 'var(--color-text-secondary)' }}>
              <li>개인정보 열람 요구</li>
              <li>오류 등이 있을 경우 정정 요구</li>
              <li>삭제 요구</li>
              <li>처리정지 요구</li>
            </ul>
            <p className="leading-relaxed mt-3" style={{ color: 'var(--color-text-secondary)' }}>
              위 권리 행사는 서비스 내 설정 메뉴 또는 이메일({company.email})을 통해 요청할 수 있습니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">제8조 (쿠키의 사용)</h2>
            <p className="leading-relaxed mb-3" style={{ color: 'var(--color-text-secondary)' }}>
              회사는 이용자에게 개별적인 맞춤 서비스를 제공하기 위해 &apos;쿠키(cookie)&apos;를 사용합니다.
            </p>
            <p className="leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
              이용자는 웹브라우저의 설정을 통해 쿠키 저장을 거부할 수 있으나,
              이 경우 서비스 이용에 어려움이 발생할 수 있습니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">제9조 (개인정보의 안전성 확보 조치)</h2>
            <p className="leading-relaxed mb-3" style={{ color: 'var(--color-text-secondary)' }}>
              회사는 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다:
            </p>
            <ul className="list-disc list-inside space-y-2" style={{ color: 'var(--color-text-secondary)' }}>
              <li>개인정보 암호화</li>
              <li>해킹 등에 대비한 기술적 대책</li>
              <li>개인정보 접근 권한 최소화</li>
              <li>개인정보 취급 직원 교육</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">제10조 (개인정보 보호책임자)</h2>
            <div className="p-4 rounded-lg" style={{ background: 'var(--color-bg-secondary)', border: '1px solid var(--color-border)' }}>
              <p style={{ color: 'var(--color-text-secondary)' }}>
                <strong>개인정보 보호책임자</strong><br />
                {company.ceo && <>담당자: {company.ceo}<br /></>}
                이메일: <a href={`mailto:${company.email}`} style={{ color: 'var(--color-accent)' }}>{company.email}</a>
              </p>
            </div>
            <p className="mt-3" style={{ color: 'var(--color-text-secondary)' }}>
              기타 개인정보 침해에 대한 신고나 상담이 필요하신 경우, 아래 기관에 문의하시기 바랍니다:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-2" style={{ color: 'var(--color-text-secondary)' }}>
              <li>개인정보침해신고센터 (privacy.kisa.or.kr / 118)</li>
              <li>대검찰청 사이버수사과 (spo.go.kr / 1301)</li>
              <li>경찰청 사이버안전국 (cyberbureau.police.go.kr / 182)</li>
            </ul>
          </section>

          <section className="pt-8 border-t" style={{ borderColor: 'var(--color-border)' }}>
            <h2 className="text-xl font-semibold mb-4">부칙</h2>
            <p className="leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
              이 개인정보처리방침은 {today}부터 적용됩니다.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
