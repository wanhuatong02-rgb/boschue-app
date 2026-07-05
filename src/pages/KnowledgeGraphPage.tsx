import { useEffect, useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Award, ChevronDown, ChevronRight, Search, X } from 'lucide-react';
import * as Icons from 'lucide-react';
import AppLayout from '@/components/layout/AppLayout';
import PageHeader from '@/components/layout/PageHeader';
import Card from '@/components/ui/Card';
import { SUBJECTS, getSubjectConfig } from '@/config/subjects';
import { to } from '@/config/routes';
import { KNOWLEDGE_GRAPH_DATA, type KnowledgeNode } from '@/data/knowledgeGraph';
import { useProgressStore } from '@/store/progressStore';
import type { SubjectId } from '@/types';

type TabKey = KnowledgeNode['category'] | 'all';

const CATEGORY_META: { key: TabKey; label: string }[] = [
  { key: 'all', label: '全部' },
  { key: 'concept', label: '概念' },
  { key: 'principle', label: '原理' },
  { key: 'law', label: '定律' },
  { key: 'theory', label: '理论' },
  { key: 'effect', label: '效应' },
];

const VALID_SUBJECT_IDS: SubjectId[] = ['economics', 'sociology', 'logic', 'psychology', 'management'];

export default function KnowledgeGraphPage() {
  const { subjectId } = useParams<{ subjectId: SubjectId }>();
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [tab, setTab] = useState<TabKey>('all');

  const activeId: SubjectId | null = useMemo(() => {
    if (subjectId && VALID_SUBJECT_IDS.includes(subjectId as SubjectId)) return subjectId as SubjectId;
    return null;
  }, [subjectId]);

  const activeSubject = activeId ? getSubjectConfig(activeId) : undefined;
  const nodes = (activeId && KNOWLEDGE_GRAPH_DATA[activeId]) || [];
  const getUnlockedKnowledgeNodeIds = useProgressStore((s) => s.getUnlockedKnowledgeNodeIds);
  const unlockedIds = activeId ? getUnlockedKnowledgeNodeIds() : [];

  useEffect(() => {
    setSearch('');
    setExpandedId(null);
    setTab('all');
  }, [activeId]);

  const filtered = useMemo(() => {
    const kw = search.trim().toLowerCase();
    const matched = nodes.filter((n) => {
      if (tab !== 'all' && n.category !== tab) return false;
      if (!kw) return true;
      return n.name.toLowerCase().includes(kw) || n.definition.toLowerCase().includes(kw) || n.id.toLowerCase().includes(kw);
    });
    // 已解锁的节点优先显示在最前面
    return [...matched].sort((a, b) => {
      const aUnlocked = unlockedIds.includes(a.id);
      const bUnlocked = unlockedIds.includes(b.id);
      if (aUnlocked === bUnlocked) return 0;
      return aUnlocked ? -1 : 1;
    });
  }, [nodes, search, tab, unlockedIds]);

  const color = activeSubject?.color ?? '#7AAEC0';

  return (
    <AppLayout>
      <PageHeader
        title={activeId ? (activeSubject?.name ?? '') + ' 知识图谱' : '知识图谱'}
        defaultBackTo={activeId ? to.knowledgeGraph() : '/me'}
      />

      {!activeId && <OverviewTab navigate={navigate} />}
      {activeId && (
        <SubjectTab
          subjectColor={color}
          activeSubject={activeSubject}
          activeId={activeId}
          navigate={navigate}
          search={search}
          setSearch={setSearch}
          nodes={nodes}
          filtered={filtered}
          tab={tab}
          setTab={setTab}
          expandedId={expandedId}
          setExpandedId={setExpandedId}
        />
      )}
    </AppLayout>
  );
}

function OverviewTab({ navigate }: { navigate: (p: string) => void }) {
  const achievements = useProgressStore((s) => s.achievements);
  const unlockedAchievements = achievements.filter((a) => a.unlocked && a.unlockedAt)
    .sort((a, b) => (b.unlockedAt ?? 0) - (a.unlockedAt ?? 0))
    .slice(0, 6);
  const totalAchievements = achievements.length;
  const unlockedCount = achievements.filter((a) => a.unlocked).length;

  return (
    <div className="px-5 pt-2 pb-6">
      {/* 成就区块 - 移至顶部 */}
      <Card padding="md" className="mb-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Award size={16} className="text-accent" />
            <span className="text-[14px] font-medium text-ink">学习成就</span>
          </div>
          <span className="text-[12px] text-ink-light">{unlockedCount}/{totalAchievements}</span>
        </div>
        {/* 进度条 */}
        <div className="h-2 bg-canvas rounded-full overflow-hidden mb-3">
          <div
            className="h-full bg-gradient-to-r from-amber-400 to-orange-500 rounded-full transition-all"
            style={{ width: `${totalAchievements > 0 ? (unlockedCount / totalAchievements) * 100 : 0}%` }}
          />
        </div>
        {/* 成就徽章列表 */}
        <div className="flex gap-3 overflow-x-auto pb-1">
          {unlockedAchievements.length === 0 ? (
            <div className="text-center py-3 w-full">
              <div className="text-[12px] text-ink-light">完成学习任务，解锁成就徽章</div>
            </div>
          ) : (
            unlockedAchievements.map((a) => {
              const IconComp = (Icons as unknown as Record<string, Icons.LucideIcon>)[a.icon] ?? Icons.Award;
              return (
                <div key={a.id} className="flex-shrink-0 text-center">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-1"
                    style={{ backgroundColor: `${a.color}1A`, color: a.color }}
                  >
                    <IconComp size={20} strokeWidth={2} />
                  </div>
                  <div className="text-[10px] font-medium text-ink leading-tight">{a.title}</div>
                </div>
              );
            })
          )}
        </div>
        <button
          onClick={() => navigate(to.achievements())}
          className="w-full mt-3 text-[12px] text-ink-light hover:text-accent"
        >
          查看全部成就
        </button>
      </Card>

      {/* 学科列表 */}
      <p className="text-[12px] text-ink-light mb-4">选择一个学科，查看其中的概念、原理、定律与理论。</p>
      <div className="space-y-2.5">
        {SUBJECTS.map((s) => {
          const total = (KNOWLEDGE_GRAPH_DATA[s.id] || []).length;
          return (
            <Card key={s.id} hover padding="md" className="cursor-pointer">
              <button onClick={() => navigate(to.knowledgeGraphSubject(s.id))} className="w-full flex items-center gap-3 text-left">
                <div className="w-10 h-10 rounded-full grid place-items-center text-white text-[14px] font-semibold shrink-0" style={{ backgroundColor: s.color }}>{s.code}</div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-[14px] font-medium text-ink">{s.name}</span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-canvas text-ink-light">{total} 词条</span>
                  </div>
                  <p className="text-[11px] text-ink-light mt-0.5">{s.textbook}</p>
                </div>
                <ChevronRight size={16} className="text-ink-light shrink-0" />
              </button>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

function SubjectTab(props: {
  subjectColor: string;
  activeSubject: ReturnType<typeof getSubjectConfig>;
  activeId: SubjectId;
  navigate: (p: string) => void;
  search: string;
  setSearch: (s: string) => void;
  nodes: KnowledgeNode[];
  filtered: KnowledgeNode[];
  tab: TabKey;
  setTab: (t: TabKey) => void;
  expandedId: string | null;
  setExpandedId: (id: string | null) => void;
}) {
  const { subjectColor, activeSubject, activeId, navigate, search, setSearch, nodes, filtered, tab, setTab, expandedId, setExpandedId } = props;

  const countBy = (cat: KnowledgeNode['category']) => nodes.filter((n) => n.category === cat).length;
  const getUnlockedKnowledgeNodeIds = useProgressStore((s) => s.getUnlockedKnowledgeNodeIds);
  const unlockedIds = getUnlockedKnowledgeNodeIds();
  const unlockedCount = nodes.filter((n) => unlockedIds.includes(n.id)).length;

  return (
    <>
      <div className="px-5 pt-3 pb-2">
        <div className="relative">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-ink-light" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={'搜索 ' + (activeSubject?.name ?? '') + ' 中的概念与原理'}
            className="w-full rounded-full bg-white border border-transparent focus:border-accent/40 focus:outline-none pl-9 pr-9 py-2.5 text-[13px] text-ink placeholder:text-ink-light"
          />
          {search && (
            <button onClick={() => setSearch('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-ink-light hover:text-ink">
              <X size={14} />
            </button>
          )}
        </div>
      </div>

      <div className="px-5 pt-1 pb-3">
        <div className="flex overflow-x-auto gap-1.5 pb-0.5 no-scrollbar">
          {SUBJECTS.map((s) => {
            const count = (KNOWLEDGE_GRAPH_DATA[s.id] || []).length;
            const selected = s.id === activeId;
            const cls = selected ? 'text-white' : 'text-ink';
            return (
              <button
                key={s.id}
                onClick={() => navigate(to.knowledgeGraphSubject(s.id))}
                className={'shrink-0 px-3 py-1.5 rounded-full text-[12px] flex items-center gap-1.5 whitespace-nowrap border ' + cls}
                style={{ backgroundColor: selected ? s.color : 'white', borderColor: selected ? s.color : 'rgba(0,0,0,0.08)' }}
              >
                <span className="w-3.5 h-3.5 rounded-full shrink-0" style={{ backgroundColor: selected ? 'rgba(255,255,255,0.7)' : s.color }} />
                <span className="font-medium">{s.name}</span>
                <span className="opacity-80">{count}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="px-5 pb-3">
        <Card padding="md" className="text-[12px]">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-ink font-medium">{activeSubject?.name} 知识图谱</div>
              <div className="text-ink-light mt-0.5">{activeSubject?.textbook}</div>
            </div>
            <div className="flex gap-2">
              <div className="w-9 h-9 rounded-full grid place-items-center text-white text-[10px] font-semibold" style={{ backgroundColor: '#E5E5E5' }} title="已解锁">
                <span style={{ color: subjectColor }}>{unlockedCount}</span>
              </div>
              <div className="w-9 h-9 rounded-full grid place-items-center text-white text-[12px] font-semibold" style={{ backgroundColor: activeSubject?.color }}>{nodes.length}</div>
            </div>
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-1 mt-3 text-[11px]">
            <CountPill label="概念" n={countBy('concept')} />
            <CountPill label="原理" n={countBy('principle')} />
            <CountPill label="定律" n={countBy('law')} />
            <CountPill label="理论" n={countBy('theory')} />
            <CountPill label="效应" n={countBy('effect')} />
          </div>
        </Card>
      </div>

      <div className="px-5 pb-3">
        <div className="flex overflow-x-auto gap-1.5 pb-0.5 no-scrollbar">
          {CATEGORY_META.map((c) => {
            const count = c.key === 'all' ? nodes.length : nodes.filter((n) => n.category === c.key).length;
            const selected = tab === c.key;
            const cls = selected ? 'text-white' : 'text-ink';
            return (
              <button
                key={c.key}
                onClick={() => setTab(c.key)}
                className={'shrink-0 px-3 py-1.5 rounded-full text-[12px] flex items-center gap-1 border whitespace-nowrap ' + cls}
                style={{ backgroundColor: selected ? subjectColor : 'white', borderColor: selected ? subjectColor : 'rgba(0,0,0,0.08)' }}
              >
                <span>{c.label}</span>
                <span className="opacity-80">{count}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="px-5 pb-8">
        {filtered.length === 0 ? (
          <Card padding="lg" className="text-center">
            <div className="text-[28px] leading-none">{'∅'}</div>
            <div className="text-[12px] text-ink-light mt-2">暂未录入相关知识词条</div>
            <div className="text-[11px] text-ink-light mt-0.5">关键词：{search || CATEGORY_META.find((c) => c.key === tab)?.label}</div>
          </Card>
        ) : (
          <div className="space-y-2">
            {filtered.map((n) => (
              <NodeRow
                key={n.id}
                node={n}
                subjectColor={subjectColor}
                expanded={expandedId === n.id}
                onToggle={() => { if (expandedId === n.id) { setExpandedId(null); } else { setExpandedId(n.id); } }}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

function CountPill({ label, n }: { label: string; n: number }) {
  return (
    <span className="text-ink-secondary">
      <span className="font-medium text-ink">{n}</span> {label}
    </span>
  );
}

function NodeRow({ node, subjectColor, expanded, onToggle }: { node: KnowledgeNode; subjectColor: string; expanded: boolean; onToggle: () => void }) {
  const isUnlocked = useProgressStore((s) => s.isKnowledgeNodeUnlocked(node.id));
  const meta = CATEGORY_META.find((c) => c.key === node.category);
  const defCls = expanded ? '' : 'line-clamp-2';
  return (
    <Card padding="md" hover className={!isUnlocked ? 'opacity-60' : ''}>
      <button onClick={onToggle} className="w-full text-left">
        <div className="flex items-start gap-2.5">
          <div
            className={`w-7 h-7 shrink-0 rounded-full grid place-items-center mt-0.5 text-[10px] font-bold ${
              isUnlocked ? 'text-white' : 'text-gray-400'
            }`}
            style={isUnlocked ? { backgroundColor: subjectColor } : { backgroundColor: '#E5E5E5' }}
            title={isUnlocked ? meta?.label : '未解锁'}
          >
            {isUnlocked ? (meta?.label ?? '全').charAt(0) : '?'}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1.5">
              <span className={`text-[14px] font-medium ${isUnlocked ? 'text-ink' : 'text-ink-light'}`}>{node.name}</span>
              {isUnlocked && (
                <span className="text-[10px] shrink-0 rounded px-1.5 py-0.5" style={{ backgroundColor: subjectColor + '22', color: subjectColor }}>{meta?.label ?? node.category}</span>
              )}
            </div>
            {isUnlocked ? (
              <div className={'text-[12px] text-ink-secondary leading-relaxed mt-1 ' + defCls}>{node.definition}</div>
            ) : (
              <div className="text-[12px] text-ink-light/60 leading-relaxed mt-1 line-clamp-2">学习相关课程后可解锁</div>
            )}
          </div>
          <div className="shrink-0 text-ink-light">{expanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}</div>
        </div>
      </button>
    </Card>
  );
}