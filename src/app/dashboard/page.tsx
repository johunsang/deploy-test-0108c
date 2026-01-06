'use client'

import Link from 'next/link'
import { DashboardLayout } from '@/components/layouts/DashboardLayout'

export default function DashboardPage() {
  const stats = [
    { label: '총 사용자', value: '1,234', change: '+12%', icon: '👥' },
    { label: '월 매출', value: '₩2,450,000', change: '+8%', icon: '💰' },
    { label: '활성 구독', value: '89', change: '+5%', icon: '📈' },
    { label: '이번 주 가입', value: '23', change: '+18%', icon: '✨' },
  ]

  const recentUsers = [
    { name: '김철수', email: 'chulsoo@example.com', plan: '프로', date: '2024-01-15' },
    { name: '이영희', email: 'younghee@example.com', plan: '무료', date: '2024-01-14' },
    { name: '박지민', email: 'jimin@example.com', plan: '프로', date: '2024-01-13' },
    { name: '최수진', email: 'sujin@example.com', plan: '엔터프라이즈', date: '2024-01-12' },
  ]

  return (
    <DashboardLayout title="대시보드">
      <div className="max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold mb-2">대시보드</h1>
          <p style={{ color: 'var(--color-text-secondary)' }}>서비스 현황을 한눈에 확인하세요</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="rounded-xl p-6"
              style={{
                background: 'var(--color-bg-secondary)',
                border: '1px solid var(--color-border)'
              }}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl">{stat.icon}</span>
                <span className="text-sm font-medium" style={{ color: 'var(--color-accent)' }}>
                  {stat.change}
                </span>
              </div>
              <p className="text-2xl font-bold mb-1">{stat.value}</p>
              <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Users */}
          <div
            className="rounded-xl"
            style={{
              background: 'var(--color-bg-secondary)',
              border: '1px solid var(--color-border)'
            }}
          >
            <div
              className="p-6"
              style={{ borderBottom: '1px solid var(--color-border)' }}
            >
              <h2 className="text-lg font-semibold">최근 가입자</h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {recentUsers.map((user, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center"
                        style={{ background: 'var(--color-accent)', color: 'var(--color-bg)' }}
                      >
                        <span className="font-medium">{user.name[0]}</span>
                      </div>
                      <div>
                        <p className="font-medium">{user.name}</p>
                        <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                          {user.email}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span
                        className="inline-block px-2 py-1 rounded text-xs font-medium"
                        style={{
                          background: user.plan === '프로' || user.plan === '엔터프라이즈'
                            ? 'var(--color-accent)'
                            : 'var(--color-border)',
                          color: user.plan === '프로' || user.plan === '엔터프라이즈'
                            ? 'var(--color-bg)'
                            : 'var(--color-text-secondary)'
                        }}
                      >
                        {user.plan}
                      </span>
                      <p className="text-xs mt-1" style={{ color: 'var(--color-text-secondary)' }}>
                        {user.date}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div
            className="rounded-xl"
            style={{
              background: 'var(--color-bg-secondary)',
              border: '1px solid var(--color-border)'
            }}
          >
            <div
              className="p-6"
              style={{ borderBottom: '1px solid var(--color-border)' }}
            >
              <h2 className="text-lg font-semibold">빠른 작업</h2>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: '📧', title: '이메일 발송', desc: '전체 사용자에게', href: '/dashboard/email' },
                  { icon: '📊', title: '리포트 다운로드', desc: '월간 보고서', href: '/dashboard/analytics' },
                  { icon: '💳', title: '결제 설정', desc: '결제 수단 관리', href: '/dashboard/billing' },
                  { icon: '🔧', title: '서비스 설정', desc: '기본 설정 변경', href: '/dashboard/settings' },
                ].map((action, index) => (
                  <Link
                    key={index}
                    href={action.href}
                    className="p-4 rounded-lg transition-all hover:opacity-80 text-left"
                    style={{ background: 'var(--color-bg)', border: '1px solid var(--color-border)' }}
                  >
                    <span className="text-2xl mb-2 block">{action.icon}</span>
                    <p className="font-medium">{action.title}</p>
                    <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                      {action.desc}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
