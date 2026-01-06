/**
 * OneSaaS 설정 유틸리티
 *
 * onesaas.json에서 프로젝트 설정을 읽어옵니다.
 */

import { readFileSync, existsSync } from 'fs'
import { join } from 'path'

export interface OneSaaSConfig {
  project: {
    id: string
    name: string
    slug: string
    company?: string
    companyEn?: string
    email?: string
    address?: string
    ceo?: string
    businessNumber?: string
    createdAt?: string
    generatedBy?: string
  }
  template: {
    id: string
    version: string
    source?: string
  }
  theme: {
    id: string
    appliedAt?: string
  }
  features: {
    auth: {
      enabled: boolean
      providers: string[]
    }
    payment: {
      enabled: boolean
      provider: string
    }
    admin: {
      enabled: boolean
    }
    legalPages: {
      enabled: boolean
      pages: string[]
    }
  }
}

const defaultConfig: OneSaaSConfig = {
  project: {
    id: 'my-saas',
    name: 'My SaaS',
    slug: 'my-saas',
    company: '회사명',
    companyEn: 'Company Name',
    email: 'support@example.com',
  },
  template: {
    id: 'basic',
    version: '1.0.0',
  },
  theme: {
    id: 'neon',
  },
  features: {
    auth: {
      enabled: true,
      providers: ['email'],
    },
    payment: {
      enabled: false,
      provider: 'none',
    },
    admin: {
      enabled: true,
    },
    legalPages: {
      enabled: true,
      pages: ['terms', 'privacy'],
    },
  },
}

export function getConfig(): OneSaaSConfig {
  try {
    const configPath = join(process.cwd(), 'onesaas.json')
    if (existsSync(configPath)) {
      const config = JSON.parse(readFileSync(configPath, 'utf-8'))
      return {
        ...defaultConfig,
        ...config,
        project: { ...defaultConfig.project, ...config.project },
        features: { ...defaultConfig.features, ...config.features },
      }
    }
  } catch {
    // 설정 없으면 기본값
  }
  return defaultConfig
}

export function getProjectName(): string {
  return getConfig().project.name
}

export function getCompanyName(): string {
  const config = getConfig()
  return config.project.company || config.project.name || '회사명'
}

export function getCompanyInfo() {
  const config = getConfig()
  return {
    name: config.project.company || config.project.name || '회사명',
    nameEn: config.project.companyEn || config.project.name || 'Company',
    email: config.project.email || 'support@example.com',
    address: config.project.address || '',
    ceo: config.project.ceo || '',
    businessNumber: config.project.businessNumber || '',
  }
}

export function isAdminEnabled(): boolean {
  return getConfig().features.admin.enabled
}
