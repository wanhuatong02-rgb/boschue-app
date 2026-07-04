import { useNavigate } from 'react-router-dom';
import { useRef, useState } from 'react';
import { Calendar, Clock, Award, TrendingUp, Settings, LogOut, X, Check, ChevronRight, Network } from 'lucide-react';
import * as Icons from 'lucide-react';
import AppLayout from '@/components/layout/AppLayout';
import Card from '@/components/ui/Card';
import SubjectProgressRing from '@/components/subject/SubjectProgressRing';
import { useProgressStore } from '@/store/progressStore';
import { useActivationStore } from '@/store/activationStore';
import { useUserProfileStore } from '@/store/userProfileStore';
import { SUBJECTS, getSubjectConfig } from '@/config/subjects';
import { ROUTES, to } from '@/config/routes';
import { KNOWLEDGE_GRAPH_DATA } from '@/data/knowledgeGraph';
import { formatMinutes } from '@/lib/format';

export default function MePage() {
  const navigate = useNavigate();
  const streak = useProgressStore((s) => s.streak);
  const achievements = useProgressStore((s) => s.achievements);
  const getSubjectMastery = useProgressStore((s) => s.getSubjectMastery);
  const getCompletedLessonCount = useProgressStore((s) => s.getCompletedLessonCount);
  const getTotalLessonCount = useProgressStore((s) => s.getTotalLessonCount);
  const progress = useProgressStore((s) => s.progress);

  const activated = useActivationStore((s) => s.activated);
  const cardKey = useActivationStore((s) => s.cardKey);
  const activatedAt = useActivationStore((s) => s.activatedAt);
  const deactivate = useActivationStore((s) => s.deactivate);

  const nickname = useUserProfileStore((s) => s.nickname);
  const avatarUrl = useUserProfileStore((s) => s.avatarUrl);
  const setNickname = useUserProfileStore((s) => s.setNickname);
  const setAvatarUrl = useUserProfileStore((s) => s.setAvatarUrl);

  const [isEditingName, setIsEditingName] = useState(false);
  const [editingName, setEditingName] = useState(nickname);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const maskedCardKey = cardKey ? cardKey.slice(0, 8) + '****' : '';

  const formatActivationDate = (ts: number): string => {
    const d = new Date(ts);
    const yyyy = d.getFullYear();
    const mm = String(d.getMonth() + 1).padStart(2, '0');
    const dd = String(d.getDate()).padStart(2, '0');
    const hh = String(d.getHours()).padStart(2, '0');
    const mi = String(d.getMinutes()).padStart(2, '0');
    return yyyy + '-' + mm + '-' + dd + ' ' + hh + ':' + mi;
  };

  const handleDeactivate = () => {
    if (window.confirm('确定要退出激活吗？退出后需要重新输卡密才能使用。')) {
      deactivate();
      navigate(ROUTES.ACTIVATE, { replace: true });
    }
  };

  const handleAvatarClick = () => { fileInputRef.current?.click(); };

  const handleAvatarFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 2 * 1024 * 1024) {
      window.alert('图片大小不能超过 2MB');
      return;
    }
    const reader = new FileReader();
    reader.onload = () => { setAvatarUrl(reader.result as string); };
    reader.readAsDataURL(file);
    e.target.value = '';
  };

  const startEditName = () => { setEditingName(nickname); setIsEditingName(true); };

  const confirmEditName = () => {
    const trimmed = editingName.trim();
    if (trimmed.length > 0) setNickname(trimmed);
    setIsEditingName(false);
  };

  const cancelEditName = () => { setIsEditingName(false); };

  const totalReadSec = Object.values(progress.lessons).reduce(
    (acc, lp) => acc + (lp.readingDurationSec ?? 0), 0,
  );
  const totalReadMin = formatMinutes(totalReadSec);
  const unlockedCount = achievements.filter((a) => a.unlocked).length;

  return (
    <AppLayout>
      <header className="px-5 pt-6 pb-4">
        <div className="flex items-center gap-3">
          <div className="relative">
            <button onClick={handleAvatarClick} className="w-16 h-16 rounded-full overflow-hidden focus:outline-none focus:ring-2 focus:ring-accent/50" aria-label="更换头像">
              {avatarUrl ? (
                <img src={avatarUrl} alt="头像" className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full bg-accent flex items-center justify-center text-white text-[24px] font-serif font-semibold">{nickname.charAt(0)}</div>
              )}
            </button>
            <input ref={fileInputRef} type="file" accept="image/*" onChange={handleAvatarFileChange} className="hidden" aria-label="选择头像图片" />
          </div>
          <div className="flex-1">
            {isEditingName ? (
              <div className="flex items-center gap-2">
                <input type="text" value={editingName} onChange={(e) => setEditingName(e.target.value)} className="text-[18px] font-serif font-semibold text-ink bg-canvas border border-accent/30 rounded px-2 py-1 focus:outline-none focus:border-accent" maxLength={20} autoFocus onKeyDown={(e) => { if (e.key === 'Enter') confirmEditName(); if (e.key === 'Escape') cancelEditName(); }} />
                <button onClick={confirmEditName} className="p-1 text-accent hover:text-accent/80" aria-label="确认修改名字"><Check size={18} /></button>
                <button onClick={cancelEditName} className="p-1 text-ink-light hover:text-ink-secondary" aria-label="取消修改名字"><X size={18} /></button>
              </div>
            ) : (
              <button onClick={startEditName} className="text-[20px] font-serif font-semibold text-ink hover:text-accent transition-colors focus:outline-none" aria-label="编辑名字">{nickname}</button>
            )}
            <p className="text-[12px] text-ink-light mt-0.5">累计学习 {streak.totalStudyDays} 天 · 阅读 {totalReadMin} 分钟</p>
          </div>
        </div>
      </header>

      <section className="px-5 mb-5">
        <div className="grid grid-cols-3 gap-2.5">
          <Card padding="md" className="text-center">
            <Calendar size={18} color="#7AAEC0" className="mx-auto mb-1.5" />
            <div className="text-[18px] font-serif font-semibold text-ink">{streak.totalStudyDays}</div>
            <div className="text-[10px] text-ink-light">累计天数</div>
          </Card>
          <Card padding="md" className="text-center">
            <Clock size={18} color="#D08068" className="mx-auto mb-1.5" />
            <div className="text-[18px] font-serif font-semibold text-ink">{totalReadMin}</div>
            <div className="text-[10px] text-ink-light">阅读分钟</div>
          </Card>
          <Card padding="md" className="text-center">
            <TrendingUp size={18} color="#7BB661" className="mx-auto mb-1.5" />
            <div className="text-[18px] font-serif font-semibold text-ink">{streak.longestStreak}</div>
            <div className="text-[10px] text-ink-light">最长连击</div>
          </Card>
        </div>
      </section>

      <section className="px-5 mb-5">
        <Card padding="lg" className="bg-gradient-to-br from-psychology-light/50 to-card">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-[11px] text-ink-light mb-1">当前连击</div>
              <div className="flex items-baseline gap-1">
                <span className="text-[36px] font-serif font-bold text-psychology leading-none">{streak.currentStreak}</span>
                <span className="text-[14px] text-ink-secondary">天</span>
              </div>
              <div className="text-[11px] text-ink-light mt-1">里程碑：3 / 7 / 21 / 50 / 100 天</div>
            </div>
            <div className="flex gap-1.5">
              {[3, 7, 21, 50, 100].map((m) => {
                const achieved = streak.achievedMilestones.includes(m);
                return (
                  <div key={m} className="w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-semibold" style={{ backgroundColor: achieved ? '#D08068' : '#F0F0F0', color: achieved ? '#FFFFFF' : '#999' }}>{m}</div>
                );
              })}
            </div>
          </div>
        </Card>
      </section>

      <section className="px-5 mb-5">
        <h3 className="text-[14px] font-semibold text-ink mb-2.5">五学科掌握度</h3>
        <Card padding="md">
          <div className="space-y-3">
            {SUBJECTS.map((s) => {
              const mastery = s.status === 'active' ? getSubjectMastery(s.id) : 0;
              const completed = getCompletedLessonCount(s.id);
              const total = getTotalLessonCount(s.id);
              return (
                <button key={s.id} onClick={() => s.status === 'active' && navigate(to.subject(s.id))} className="w-full flex items-center gap-3 py-1.5 disabled:cursor-default" disabled={s.status !== 'active'}>
                  <SubjectProgressRing value={mastery} size={48} stroke={4} color={s.color} label="" />
                  <div className="flex-1 text-left">
                    <div className="flex items-center gap-1.5">
                      <span className="text-[14px] font-medium text-ink">{s.name}</span>
                      {s.status === 'coming-soon' && (<span className="text-[9px] px-1 py-0.5 rounded bg-canvas text-ink-light">V1.0</span>)}
                    </div>
                    <div className="text-[10px] text-ink-light mt-0.5">{s.status === 'active' ? completed + '/' + total + ' 节 · 掌握度 ' + mastery + '%' : '即将上线'}</div>
                  </div>
                  <div className="text-[14px] font-serif font-semibold" style={{ color: s.color }}>{mastery}%</div>
                </button>
              );
            })}
          </div>
        </Card>
      </section>

      <section className="px-5 mb-5">
        <div className="flex items-center justify-between mb-2.5">
          <h3 className="text-[14px] font-semibold text-ink flex items-center gap-1.5">
            <Network size={15} /> 知识图谱
          </h3>
          <button onClick={() => navigate(to.knowledgeGraph())} className="text-[11px] text-ink-light hover:text-accent">查看全部 <ChevronRight size={12} className="inline" /></button>
        </div>
        <Card padding="md">
          <div className="grid grid-cols-2 gap-2">
            {SUBJECTS.map((s) => {
              const count = (KNOWLEDGE_GRAPH_DATA[s.id] || []).length;
              return (
                <button key={s.id} onClick={() => navigate(to.knowledgeGraphSubject(s.id))} className="text-left p-2.5 rounded-card hover:shadow-card-hover transition-shadow" style={{ background: s.colorLight }}>
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: s.color }} />
                    <span className="text-[12px] font-medium text-ink">{s.name}</span>
                  </div>
                  <div className="text-[10px] text-ink-light pl-4">
                    <span className="font-semibold text-ink" style={{ color: s.color }}>{count}</span> 个概念 · 原理
                  </div>
                </button>
              );
            })}
          </div>
        </Card>
      </section>

      {activated && (
        <section className="px-5 mb-5">
          <Card padding="md">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium" style={{ backgroundColor: '#E8F5E8', color: '#5A8E3E' }}>✓ 已激活</span>
                </div>
                <div className="text-[12px] text-ink-secondary font-mono tracking-wide">{maskedCardKey}</div>
                {activatedAt && (
                  <div className="text-[10px] text-ink-light mt-0.5">激活时间：{formatActivationDate(activatedAt)}</div>
                )}
              </div>
            </div>
          </Card>
        </section>
      )}

      <section className="px-5 pb-4">
        <div className="flex items-center justify-between mb-2.5">
          <h3 className="text-[14px] font-semibold text-ink flex items-center gap-1.5">
            <Award size={15} /> 精选成就
          </h3>
          <button onClick={() => navigate(to.achievements())} className="text-[11px] text-ink-light hover:text-accent">查看全部 <ChevronRight size={12} className="inline" /></button>
        </div>
        <Card padding="md">
          {/* 最近解锁的成就 */}
          {(() => {
            const unlockedAchievements = achievements.filter((a) => a.unlocked && a.unlockedAt)
              .sort((a, b) => (b.unlockedAt ?? 0) - (a.unlockedAt ?? 0));
            const recentFour = unlockedAchievements.slice(0, 4);

            if (recentFour.length === 0) {
              // 无已解锁成就，显示提示
              return (
                <div className="text-center py-4">
                  <Award size={32} color="#CCC" className="mx-auto mb-2" />
                  <div className="text-[13px] text-ink-light">完成学习任务，解锁成就徽章</div>
                </div>
              );
            }

            return (
              <div className="flex gap-3 overflow-x-auto pb-1">
                {recentFour.map((a) => {
                  const IconComp = (Icons as unknown as Record<string, Icons.LucideIcon>)[a.icon] ?? Icons.Award;
                  return (
                    <div key={a.id} className="flex-shrink-0 text-center">
                      <div
                        className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-1.5"
                        style={{
                          backgroundColor: `${a.color}1A`,
                          color: a.color,
                        }}
                      >
                        <IconComp size={24} strokeWidth={2} />
                      </div>
                      <div className="text-[11px] font-medium text-ink leading-tight">{a.title}</div>
                    </div>
                  );
                })}
              </div>
            );
          })()}
        </Card>
      </section>

      {activated && (
        <section className="px-5 pb-8 pt-2">
          <h3 className="text-[14px] font-semibold text-ink mb-2.5"><Settings size={14} className="inline mr-1" /> 设置</h3>
          <Card padding="md">
            <div className="space-y-3">
              <button onClick={handleDeactivate} className="w-full flex items-center gap-2 py-2 text-[13px] text-psychology hover:text-psychology/80 transition-colors">
                <LogOut size={16} /> 退出卡密
              </button>
              <div className="text-[11px] text-ink-light text-center pt-2">更多设置功能即将上线</div>
            </div>
          </Card>
        </section>
      )}
    </AppLayout>
  );
}
