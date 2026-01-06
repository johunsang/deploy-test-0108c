import Link from 'next/link'
import { getCompanyInfo, getProjectName } from '@/lib/config'

export default function TermsPage() {
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
          <h1 className="text-3xl font-bold mt-4 mb-2">이용약관</h1>
          <p style={{ color: 'var(--color-text-secondary)' }}>최종 수정일: {today}</p>
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-semibold mb-4">제1조 (목적)</h2>
            <p className="leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
              이 약관은 {company.name}(이하 &quot;회사&quot;)가 제공하는 {projectName} 서비스(이하 &quot;서비스&quot;)의
              이용조건 및 절차, 회사와 회원 간의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">제2조 (정의)</h2>
            <ul className="list-disc list-inside space-y-2" style={{ color: 'var(--color-text-secondary)' }}>
              <li>&quot;서비스&quot;란 회사가 제공하는 {projectName}의 모든 온라인 서비스를 말합니다.</li>
              <li>&quot;회원&quot;이란 서비스에 접속하여 이 약관에 따라 회사와 이용계약을 체결한 고객을 말합니다.</li>
              <li>&quot;아이디(ID)&quot;란 회원의 식별과 서비스 이용을 위하여 회원이 정하고 회사가 승인하는 이메일 주소를 말합니다.</li>
              <li>&quot;콘텐츠&quot;란 회원이 서비스를 통해 생성, 저장, 공유하는 모든 데이터를 말합니다.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">제3조 (약관의 효력 및 변경)</h2>
            <p className="leading-relaxed mb-2" style={{ color: 'var(--color-text-secondary)' }}>
              ① 이 약관은 서비스를 통하여 이를 공지하거나 전자우편, 기타의 방법으로 회원에게 통지함으로써 효력을 발생합니다.
            </p>
            <p className="leading-relaxed mb-2" style={{ color: 'var(--color-text-secondary)' }}>
              ② 회사는 필요하다고 인정되는 경우 이 약관을 변경할 수 있으며, 변경된 약관은 제1항과 같은 방법으로 공지 또는 통지함으로써 효력을 발생합니다.
            </p>
            <p className="leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
              ③ 회원은 변경된 약관에 동의하지 않을 경우 서비스 이용을 중단하고 탈퇴할 수 있습니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">제4조 (서비스의 제공)</h2>
            <p className="leading-relaxed mb-2" style={{ color: 'var(--color-text-secondary)' }}>
              회사는 회원에게 아래와 같은 서비스를 제공합니다:
            </p>
            <ul className="list-disc list-inside space-y-2" style={{ color: 'var(--color-text-secondary)' }}>
              <li>회원 가입 및 인증 서비스</li>
              <li>콘텐츠 생성, 저장, 관리 서비스</li>
              <li>데이터 분석 및 통계 서비스</li>
              <li>기타 회사가 정하는 서비스</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">제5조 (회원가입)</h2>
            <p className="leading-relaxed mb-2" style={{ color: 'var(--color-text-secondary)' }}>
              ① 서비스를 이용하고자 하는 자는 회사가 정한 가입 양식에 따라 회원정보를 기입한 후 이 약관에 동의한다는 의사표시를 함으로써 회원가입을 신청합니다.
            </p>
            <p className="leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
              ② 회사는 제1항과 같이 회원으로 가입할 것을 신청한 자 중 다음 각 호에 해당하지 않는 한 회원으로 등록합니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">제6조 (회원 탈퇴 및 자격 상실)</h2>
            <p className="leading-relaxed mb-2" style={{ color: 'var(--color-text-secondary)' }}>
              ① 회원은 언제든지 서비스 내 설정 메뉴를 통해 탈퇴를 요청할 수 있으며, 회사는 즉시 회원탈퇴를 처리합니다.
            </p>
            <p className="leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
              ② 탈퇴 시 회원의 개인정보 및 콘텐츠는 관련 법령에 따라 일정 기간 보관 후 삭제됩니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">제7조 (개인정보보호)</h2>
            <p className="leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
              회사는 회원의 개인정보를 보호하기 위해 개인정보처리방침을 수립하고 이를 준수합니다.
              자세한 내용은 <Link href="/privacy" style={{ color: 'var(--color-accent)' }}>개인정보처리방침</Link>을 참조하세요.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">제8조 (면책조항)</h2>
            <p className="leading-relaxed mb-2" style={{ color: 'var(--color-text-secondary)' }}>
              ① 회사는 천재지변, 전쟁, 기간통신사업자의 서비스 중지 등 불가항력으로 인하여 서비스를 제공할 수 없는 경우에는 서비스 제공에 대한 책임이 면제됩니다.
            </p>
            <p className="leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
              ② 회사는 회원의 귀책사유로 인한 서비스 이용의 장애에 대하여 책임을 지지 않습니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">제9조 (분쟁해결)</h2>
            <p className="leading-relaxed mb-2" style={{ color: 'var(--color-text-secondary)' }}>
              ① 회사와 회원 간에 발생한 분쟁에 관한 소송은 대한민국 법률에 따릅니다.
            </p>
            <p className="leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
              ② 회사와 회원 간에 발생한 분쟁에 관한 소송은 서울중앙지방법원을 관할 법원으로 합니다.
            </p>
          </section>

          <section className="pt-8 border-t" style={{ borderColor: 'var(--color-border)' }}>
            <h2 className="text-xl font-semibold mb-4">부칙</h2>
            <p className="leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
              이 약관은 {today}부터 시행합니다.
            </p>
            {company.email && (
              <p className="mt-4" style={{ color: 'var(--color-text-secondary)' }}>
                문의: <a href={`mailto:${company.email}`} style={{ color: 'var(--color-accent)' }}>{company.email}</a>
              </p>
            )}
          </section>
        </div>
      </div>
    </div>
  )
}
