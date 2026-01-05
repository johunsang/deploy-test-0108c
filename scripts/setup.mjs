#!/usr/bin/env node

/**
 * OneSaaS 로컬 설정 스크립트
 *
 * 사용법: pnpm setup
 */

import { createInterface } from 'readline'
import { writeFileSync, existsSync, copyFileSync } from 'fs'

const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
  gray: '\x1b[90m',
}

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
})

function question(prompt) {
  return new Promise((resolve) => {
    rl.question(`${colors.yellow}?${colors.reset} ${prompt}`, (answer) => {
      resolve(answer.trim())
    })
  })
}

function log(msg) {
  console.log(`${colors.green}✓${colors.reset} ${msg}`)
}

function info(msg) {
  console.log(`${colors.blue}ℹ${colors.reset} ${msg}`)
}

async function main() {
  console.log(`
${colors.cyan}╔═══════════════════════════════════════╗
║   OneSaaS Starter Kit Setup           ║
╚═══════════════════════════════════════╝${colors.reset}
`)

  // .env 파일 체크
  if (existsSync('.env')) {
    info('.env 파일이 이미 존재합니다.')
    const overwrite = await question('.env 파일을 다시 설정하시겠습니까? (y/n): ')
    if (overwrite.toLowerCase() !== 'y') {
      console.log('\n설정을 건너뜁니다.')
      console.log(`\n${colors.green}다음 명령어로 시작하세요:${colors.reset}`)
      console.log(`  ${colors.cyan}pnpm dev${colors.reset}`)
      rl.close()
      return
    }
  }

  console.log(`\n${colors.gray}Supabase 프로젝트가 필요합니다.${colors.reset}`)
  console.log(`${colors.gray}https://supabase.com 에서 무료로 생성할 수 있습니다.${colors.reset}\n`)

  // Supabase 설정
  const dbUrl = await question('DATABASE_URL (Supabase Connection String): ')
  const directUrl = await question('DIRECT_URL (Direct Connection): ')

  console.log(`\n${colors.gray}AI 기능을 사용하려면 OpenAI API 키가 필요합니다. (선택사항)${colors.reset}\n`)

  const openaiKey = await question('OPENAI_API_KEY (선택, Enter로 건너뛰기): ')

  // .env 파일 생성
  let envContent = `# Database (Supabase)
DATABASE_URL="${dbUrl}"
DIRECT_URL="${directUrl}"

# Site URL
NEXT_PUBLIC_SITE_URL="http://localhost:3000"
`

  if (openaiKey) {
    envContent += `
# AI
OPENAI_API_KEY="${openaiKey}"
`
  }

  writeFileSync('.env', envContent)
  log('.env 파일 생성 완료')

  console.log(`
${colors.green}╔═══════════════════════════════════════╗
║   설정 완료!                           ║
╚═══════════════════════════════════════╝${colors.reset}

다음 단계:

  ${colors.cyan}1.${colors.reset} DB 스키마 적용
     ${colors.yellow}pnpm db:push${colors.reset}

  ${colors.cyan}2.${colors.reset} 개발 서버 실행
     ${colors.yellow}pnpm dev${colors.reset}

  ${colors.cyan}3.${colors.reset} 브라우저에서 확인
     ${colors.blue}http://localhost:3000${colors.reset}
`)

  rl.close()
}

main().catch(console.error)
