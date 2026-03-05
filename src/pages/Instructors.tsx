import { Instagram } from "lucide-react";
import { instructors } from "@/data/instructors";

const Instructors = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">教师信息</h1>
        <p className="text-muted-foreground">共 {instructors.length} 位科任老师</p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {instructors.map((t) => (
          <div
            key={t.subject}
            className="rounded-xl border bg-card p-7 transition-colors hover:border-primary/50 space-y-4"
          >
            <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              {t.subject}
            </span>
            <h2 className="text-xl font-semibold text-card-foreground">{t.name}</h2>
            <div className="flex items-center gap-2 text-sm">
              <Instagram size={16} className="text-muted-foreground" />
              <span className="text-muted-foreground">
                {t.ig ?? "未知"}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Instructors;
