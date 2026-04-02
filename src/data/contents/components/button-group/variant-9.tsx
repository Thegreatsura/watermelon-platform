import type { LucideIcon } from 'lucide-react';
import { ArchiveIcon, CopyPlusIcon, PencilRulerIcon } from 'lucide-react';

import { Button } from '@/components/base-ui/button';

type ActionButton = {
  icon: LucideIcon;
  label: string;
};

const actions: readonly ActionButton[] = [
  { icon: PencilRulerIcon, label: 'Customize' },
  { icon: CopyPlusIcon, label: 'Clone' },
  { icon: ArchiveIcon, label: 'Archive' },
] as const;

const ButtonGroup9 = () => {
  return (
    <div className="inline-flex w-fit -space-x-px rounded-full shadow-xs rtl:space-x-reverse">
      {actions.map((action, index) => {
        const Icon = action.icon;
        const isFirst = index === 0;
        const isLast = index === actions.length - 1;

        return (
          <Button
            key={action.label}
            variant="outline"
            className={[
              'border-border/70 bg-background text-foreground hover:[&_svg]:text-muted-foreground gap-2 rounded-none px-3 shadow-none focus-visible:z-10',
              isFirst ? 'rounded-l-full' : '',
              isLast ? 'rounded-r-full' : '',
            ].join(' ')}
          >
            <Icon className="text-muted-foreground size-4 transition-colors" />
            {action.label}
          </Button>
        );
      })}
    </div>
  );
};

export default ButtonGroup9;
