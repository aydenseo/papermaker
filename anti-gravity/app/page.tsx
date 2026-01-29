import { SectionEditor } from "./components/SectionEditor";

export default function Home() {
  return (
    <div className="mx-auto max-w-4xl space-y-8">
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          예비창업패키지 사업계획서
        </h2>
        <p className="mt-2 text-gray-500">
          아래 항목들을 작성해주세요. AI가 평가 기준에 맞춰 내용을 다듬어 드립니다.
        </p>
      </div>

      <div className="space-y-6">
        <SectionEditor
          title="1. 문제인식 (Problem)"
          description="창업아이템의 개발동기 및 개발 필요성을 기술해 주세요."
          placeholder="예: 현재 시장의 솔루션은..."
        />

        <SectionEditor
          title="2. 실현가능성 (Solution)"
          description="창업아이템의 솔루션과 차별화 전략, 문제 해결 방안을 기술해 주세요."
          placeholder="예: 우리 서비스는 독창적인 알고리즘을 통해..."
        />

        <SectionEditor
          title="3. 성장전략 (Scale-up)"
          description="비즈니스 모델, 목표 시장 규모, 마케팅 전략을 기술해 주세요."
          placeholder="예: 초기 진입 시장은..."
        />

        <SectionEditor
          title="4. 팀 구성 (Team)"
          description="대표자와 팀원의 보유 역량 및 경험을 기술해 주세요."
          placeholder="예: 대표자는 10년 간의..."
        />
      </div>
    </div>
  );
}
