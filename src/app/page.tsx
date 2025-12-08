import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SkillBox360',
  description: 'A subscription box service combined with an educational technology platform, SkillBox360 provides monthly curated learning materials and interactive workshops tailored to the niche needs of small business owners and professionals.',
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">SkillBox360</h1>
      <p className="mt-4 text-lg">A subscription box service combined with an educational technology platform, SkillBox360 provides monthly curated learning materials and interactive workshops tailored to the niche needs of small business owners and professionals.</p>
    </main>
  )
}
