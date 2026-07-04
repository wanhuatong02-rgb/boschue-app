import { useEffect, useState } from 'react';
import { X, Sparkles } from 'lucide-react';
import { useProgressStore } from '@/store/progressStore';
import { KNOWLEDGE_GRAPH_DATA } from '@/data/knowledgeGraph';
import { SUBJECTS } from '@/config/subjects';

interface KnowledgeNodeUnlockToastProps {
  onViewKnowledgeGraph?: () => void;
}

export default function KnowledgeNodeUnlockToast({ onViewKnowledgeGraph }: KnowledgeNodeUnlockToastProps) {
  const lastUnlocked = useProgressStore((s) => s.lastUnlockedKnowledgeNodes);
  const clearLastUnlocked = useProgressStore((s) => s.clearLastUnlockedKnowledgeNodes);
  const [visible, setVisible] = useState(false);
  const [nodes, setNodes] = useState<string[]>([]);

  useEffect(() => {
    if (lastUnlocked.length > 0) {
      setNodes(lastUnlocked);
      setVisible(true);
    }
  }, [lastUnlocked]);

  const handleClose = () => {
    setVisible(false);
    setTimeout(() => {
      setNodes([]);
      clearLastUnlocked();
    }, 300);
  };

  const handleViewGraph = () => {
    handleClose();
    onViewKnowledgeGraph?.();
  };

  if (!visible || nodes.length === 0) return null;

  // 获取节点详情
  const nodeDetails = nodes.map((nodeId) => {
    for (const subject of SUBJECTS) {
      const subjectNodes = KNOWLEDGE_GRAPH_DATA[subject.id] || [];
      const node = subjectNodes.find((n) => n.id === nodeId);
      if (node) return { ...node, subjectName: subject.name, subjectColor: subject.color };
    }
    return null;
  }).filter(Boolean);

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center pb-safe">
      {/* 遮罩 */}
      <div
        className="absolute inset-0 bg-black/40 transition-opacity duration-300"
        onClick={handleClose}
        style={{ opacity: visible ? 1 : 0 }}
      />
      {/* 弹窗 */}
      <div
        className="relative w-full max-w-sm mx-4 mb-4 bg-white rounded-2xl shadow-xl overflow-hidden"
        style={{ transition: 'transform 0.3s ease, opacity 0.3s ease', transform: visible ? 'translateY(0)' : 'translateY(100%)', opacity: visible ? 1 : 0 }}
      >
        {/* 头部 */}
        <div className="bg-gradient-to-r from-accent/90 to-accent px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2 text-white">
            <Sparkles size={18} />
            <span className="font-semibold text-[15px]">解锁了新概念</span>
          </div>
          <button onClick={handleClose} className="p-1 text-white/80 hover:text-white transition-colors">
            <X size={18} />
          </button>
        </div>
        {/* 内容 */}
        <div className="p-4">
          <div className="text-[12px] text-ink-light mb-3">
            完成课程后，你解锁了以下知识概念：
          </div>
          <div className="space-y-2 max-h-60 overflow-y-auto">
            {nodeDetails.map((node) => (
              <div key={node!.id} className="flex items-start gap-2.5 p-2.5 rounded-lg" style={{ backgroundColor: `${node!.subjectColor}12` }}>
                <div className="w-2 h-2 rounded-full mt-1.5 shrink-0" style={{ backgroundColor: node!.subjectColor }} />
                <div className="flex-1 min-w-0">
                  <div className="text-[13px] font-medium text-ink">{node!.name}</div>
                  <div className="text-[10px] text-ink-light mt-0.5 line-clamp-2">{node!.definition}</div>
                  <div className="text-[9px] mt-0.5 px-1.5 py-0.5 rounded-full inline-block" style={{ backgroundColor: `${node!.subjectColor}20`, color: node!.subjectColor }}>
                    {node!.subjectName}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={handleViewGraph}
            className="w-full mt-4 py-2.5 bg-accent text-white text-[13px] font-medium rounded-xl hover:bg-accent/90 transition-colors"
          >
            去知识图谱看看
          </button>
        </div>
      </div>
    </div>
  );
}
